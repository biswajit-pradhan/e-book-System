package com.ebook.main.controller;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.main.bto.Message;
import com.ebook.main.model.Author;
import com.ebook.main.model.Book;
import com.ebook.main.service.AuthorService;


@RestController
@CrossOrigin(origins= {"*"})
@RequestMapping("api/author")
public class AuthorController {
	
	@Autowired
	private AuthorService authorService;
	
	@Autowired
	private BookController bookController;

	
	@PostMapping("/add")
	public ResponseEntity<Object> addAuthor(@RequestBody Author author) {
		bookController.addBook(author.getBook());
		authorService.addAuthor(author);
		
				Message m = new Message();
				m.setMsg("author book added");
				return ResponseEntity.status(HttpStatus.OK).body(m);
	}
	
	@GetMapping("/allauthor")
	public List<Author> getAllAuthor(){
		List<Author> list = authorService.getAllAuthor();
		return list;
		
	}
	@GetMapping("one/author/{id}")
	public ResponseEntity<Object> getAuthorById(@PathVariable("id") int id)
	{
		Optional<Author> optional =authorService.getAuthorById(id);
		if(!optional.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid ID given");
		Author author= optional.get();
		return ResponseEntity.status(HttpStatus.OK).body(author);
	}
	@PutMapping("/update")
	public ResponseEntity<String> updateAuthor(@RequestBody Author author ){
	  authorService.updateAuthor(author);
		return ResponseEntity.status(HttpStatus.OK).body("Author is updated");
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteAuthor(@PathVariable("id") int id){
		Optional<Author> optional =authorService.getAuthorById(id);
		if(!optional.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Author Id given");
		authorService.deleteAuthor(id);
		return ResponseEntity.status(HttpStatus.OK).body("Author deleted from database");
	}
	
	/* GetBooks By AuthorId */
	@GetMapping("/books/{id}")
	public ResponseEntity<Object> getBookbyAuthorId(@PathVariable("id")int id){
		List<Book> list= authorService.getBookByAuthorId(id);
		if(list.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid AuthorId given");
		}
		return ResponseEntity.status(HttpStatus.OK).body(list);
	}
	
	/*getBooksOnRentByAuthorName*/
	@GetMapping("/getBooksOnRentByAuthorName/{aName}")
	public ResponseEntity<Object> getBooksOnRentByAuthorName(@PathVariable("aName") String aName){
		List<Author> authorBooks=getAllAuthor().stream().filter(a->a.getName().equalsIgnoreCase(aName))
								  .collect(Collectors.toList());
		if(authorBooks.isEmpty())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Name Given");
		List<Book> bookData=authorService.getBooksOnRentByAuthorName(authorBooks);
		if(bookData.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No Books Are On Rent For You!!");
		}
		return ResponseEntity.status(HttpStatus.OK).body(bookData);
	}
	
	@GetMapping("/authorShareOnIndividualBookRent/{aName}/{bid}")
	public ResponseEntity<Object> authorShareOnIndividualBookRent(@PathVariable("aName") String aName,@PathVariable("bid") int bid){
		List<Book> authorBooks=getAllAuthor().stream().filter(a->a.getName().equalsIgnoreCase(aName))
									.map(a->a.getBook())
								  .collect(Collectors.toList());
		if(authorBooks.isEmpty())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Author Name Given");
		List<Book> totalBooks=authorBooks.stream().filter(b->b.getId()==bid).collect(Collectors.toList());
		if(totalBooks.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Author does not have any book with this BookID!!");
		}
		double authorShare=authorService.authorShareOnIndividualBookRent(bid);
		return ResponseEntity.status(HttpStatus.OK).body(authorShare);
	}
	
	
	
	
}
