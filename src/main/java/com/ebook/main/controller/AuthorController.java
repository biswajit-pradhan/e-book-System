package com.ebook.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.main.model.Author;
import com.ebook.main.service.AuthorService;

@RestController
@RequestMapping("api/author")
public class AuthorController {
	
	@Autowired
	private AuthorService authorService;
	
	@Autowired
	private BookController bookController;
	
	@PostMapping("/add")
	public ResponseEntity<String> addAuthor(@RequestBody Author author) {
		bookController.addBook(author.getBook());
		authorService.addAuthor(author);
		return ResponseEntity.status(HttpStatus.OK).body("Author Added Successfully");
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
	authorService.deleteAuthor(id);
		return ResponseEntity.status(HttpStatus.OK).body("Author deleted from database");
	}
}
