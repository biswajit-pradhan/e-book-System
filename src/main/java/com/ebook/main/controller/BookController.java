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
import com.ebook.main.repository.PublisherRepository;
import com.ebook.main.service.BookService;


@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("api/book")
public class BookController {
	
	@Autowired
	private BookService bookService;
	@Autowired
	private PublisherRepository publisherRepository;

	@PostMapping("/addbook")
	public ResponseEntity<Object> addBook(@RequestBody Book book) {
		
		bookService.addBook(book);
		Message m = new Message();
		m.setMsg("book added");
		return ResponseEntity.status(HttpStatus.OK).body(m);
}

	
	
	
	@GetMapping("/getallbooks")
	public List<Book> getAllBook() {
		List<Book> list = bookService.getAllBook();
		return list;
	}
	
	@GetMapping("/getonebook/{bid}")
	public ResponseEntity<Object> getBookById(@PathVariable("bid") int bid) {
		Optional<Book> optional = bookService.getBookById(bid);
		if (!optional.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Id Given");
		Book book = optional.get();
		return ResponseEntity.status(HttpStatus.OK).body(book);
	}
	
	@PutMapping("/updatebook/{bid}")
	public ResponseEntity<String> updateBook(@RequestBody Book ubook,@PathVariable("bid") int bid) {
		Optional<Book> optional = bookService.getBookById(bid);
		if (!optional.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Book Id Given");
		bookService.updateBook(ubook,bid);
		return ResponseEntity.status(HttpStatus.OK).body("Book updated Successfully");
	}
	
	@DeleteMapping("/deletebook/{bid}")
	public ResponseEntity<String> deleteBookById(@PathVariable("bid") int bid) {
		Optional<Book> optional = bookService.getBookById(bid);
		if (!optional.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Id Given");
		List<Publisher> publisher =  publisherRepository.findAll();
		List<Integer> pubid = publisher.stream().filter(e->e.getBook().getId()==bid).map(e->e.getId()).collect(Collectors.toList());
		for(Integer i :pubid) {
			publisherRepository.deleteById(i);
		}
		bookService.deleteBookById(bid);
		
		return ResponseEntity.status(HttpStatus.OK).body("Book deleted");
	}	
	
	@GetMapping("/lastFiveBooksAddedToDB")
	public ResponseEntity<Object> lastFiveBooksAddedToDB(){
		
		List<Book> book=bookService.lastFiveBooksAddedToDB();
		return ResponseEntity.status(HttpStatus.OK).body(book);
	}
	
	
	
	
	
	
	
}
