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
import com.ebook.main.model.Book;
import com.ebook.main.model.Publisher;
import com.ebook.main.service.PublisherService;

@RestController
@CrossOrigin(origins= {"*"})
@RequestMapping("api/publisher")
public class PublisherController {
	
	@Autowired
	private PublisherService publisherService;
	
	@Autowired
	private BookController bookController;
	
	@PostMapping("/add")
	public ResponseEntity<Object> addPublisher(@RequestBody Publisher publisher) {
		bookController.addBook(publisher.getBook());
		publisherService.addPublisher(publisher);
				
		Message m = new Message();
		m.setMsg("Publisher Book Added");
		return ResponseEntity.status(HttpStatus.OK).body(m);
	}
	
	
	@GetMapping("/allpublisher")
	public List<Publisher> getAllPublisher(){
		List<Publisher> list = publisherService.getAllPublisher();
		return list;
		
	}
	@GetMapping("one/publisher/{id}")
	public ResponseEntity<Object> getPublisherById(@PathVariable("id") int id)
	{
		Optional<Publisher> optional = publisherService.getPublisherById(id);
		if(!optional.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Publisher ID given");
		Publisher publisher = optional.get();
		return ResponseEntity.status(HttpStatus.OK).body(publisher);
	}
	@PutMapping("/update")
	public ResponseEntity<String> updatePublisher(@RequestBody Publisher publisher){
		publisherService.updatePublisher(publisher);
		return ResponseEntity.status(HttpStatus.OK).body("Publisher is updated");
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deletePublisher(@PathVariable("id") int id){
		Optional<Publisher> optional = publisherService.getPublisherById(id);
		if(!optional.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Publisher ID given");
		publisherService.deletePublisher(id);
		return ResponseEntity.status(HttpStatus.OK).body("publisher deleted from database");
	}
	

	/*Get book by Publisher Id*/
	@GetMapping("/publisher/{pid}")
	public ResponseEntity<Object> getBookbyPublisherId(@PathVariable("pid")int pid){
		List<Book> list= publisherService.getBookByPublisherId(pid);
		if(list.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ID Not Valid");
		}
		return ResponseEntity.status(HttpStatus.OK).body(list);

	}
	
	@GetMapping("/getBooksOnRentByPublisherName/{pName}")
	public ResponseEntity<Object> getBooksOnRentByPublisherName(@PathVariable("pName") String pName){
		List<Publisher> publisherBooks=getAllPublisher().stream().filter(p->p.getName().equalsIgnoreCase(pName))
								  .collect(Collectors.toList());
		if(publisherBooks.isEmpty())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Publisher Name Given");
		List<Book> bookData=publisherService.getBooksOnRentByPublisherName(publisherBooks);
		
		if(bookData.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No Books Are On Rent For You!!");
		}
		return ResponseEntity.status(HttpStatus.OK).body(bookData);
	}
	
	
	@GetMapping("/publisherShareOnIndividualBookRent/{pName}/{bid}")
	public ResponseEntity<Object> publisherShareOnIndividualBookRent(@PathVariable("pName") String pName,@PathVariable("bid") int bid){
		List<Book> publisherBooks=getAllPublisher().stream().filter(p->p.getName().equalsIgnoreCase(pName))
									.map(p->p.getBook())
								  .collect(Collectors.toList());
		if(publisherBooks.isEmpty())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Publisher Name Given");
		List<Book> totalBooks=publisherBooks.stream().filter(b->b.getId()==bid).collect(Collectors.toList());
		if(totalBooks.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Publisher does not have any book with this BookID!!");
		}
		double publisherShare=publisherService.publisherShareOnIndividualBookRent(bid);
		return ResponseEntity.status(HttpStatus.OK).body(publisherShare);
	}
	

}
