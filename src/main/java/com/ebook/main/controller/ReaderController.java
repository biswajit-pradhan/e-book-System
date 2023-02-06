package com.ebook.main.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
import com.ebook.main.model.Book;
import com.ebook.main.model.Publisher;
import com.ebook.main.model.Reader;
import com.ebook.main.service.ReaderService;

@RestController
@RequestMapping("/api/reader")
public class ReaderController {
	
	@Autowired
	private ReaderService readerService;
	
	@Autowired
	private BookController bookController;
	
	@Autowired
	private PublisherController publisherController;
	
	@Autowired
	private AuthorController authorController;
	
	@PostMapping("/add")
	public ResponseEntity<String> addReader(@RequestBody Reader reader){
		
		readerService.addReader(reader);
		return ResponseEntity.status(HttpStatus.OK).body("Reader Added Successfully");
	}
	
	@GetMapping("/bookByBookName/{bName}")
	public ResponseEntity<Object> getBookByBookName(@PathVariable("bName") String bName){
		List<Book> book = bookController.getAllBook().stream().filter(b->b.getName()
							.equalsIgnoreCase(bName)).collect(Collectors.toList());
		if(book.isEmpty())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Name Given");
		
		List<Book> bookData=readerService.getBookByBookName(bName);
		return ResponseEntity.status(HttpStatus.OK).body(bookData);
	}
	
	@GetMapping("/booksByPublisherName/{pName}")
	public ResponseEntity<Object> getBooksByPublisherName(@PathVariable("pName") String pName){
		
		List<Publisher> publisherBook=publisherController.getAllPublisher().stream().filter(p->p.getName().equalsIgnoreCase(pName)).collect(Collectors.toList());
		if(publisherBook.isEmpty())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Name Given");
		List<Book> bookData=readerService.getBooksByPublisherName(publisherBook);
		return ResponseEntity.status(HttpStatus.OK).body(bookData);
	}
	
	@GetMapping("/booksByAuthorName/{aName}")
	public ResponseEntity<Object> getBooksByAuthorName(@PathVariable("aName") String aName){
		
		List<Author> authorBook=authorController.getAllAuthor().stream().filter(a->a.getName().equals(aName)).collect(Collectors.toList());
		if(authorBook.isEmpty())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Name Given");
		List<Book> bookData=readerService.getBooksByAuthorName(authorBook);
		return ResponseEntity.status(HttpStatus.OK).body(bookData);
	}
	
	@GetMapping("/allreaders")
	public List<Reader> getAllReaders() {
		List<Reader> list = readerService.getAllReaders();
		return list;
	}
	@GetMapping("/one/reader/{rid}")
	public ResponseEntity<Object> getReaderById(@PathVariable("rid") int rid) {
		Optional<Reader> optional = readerService.getReaderById(rid);
		if(!optional.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid reader Id given");
		Reader reader = optional.get();//here we are using same optional to get and do work on reader
		return ResponseEntity.status(HttpStatus.OK).body(reader);
	}
	@PutMapping("/update/{rid}")
	public ResponseEntity<String> udateReaderById(@RequestBody Reader readerToUpdate, @PathVariable("rid")int rid) {
		Optional<Reader> optional = readerService.getReaderById(rid);
		if(!optional.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid reader Id given.");
		Reader reader = readerService.getReaderById(rid).get();
		reader.setName(readerToUpdate.getName());
		readerService.udateReaderById(reader);
		return ResponseEntity.status(HttpStatus.OK).body("Reader Updated In DB.");
	}
	@DeleteMapping("/delete/{rid}")
	public ResponseEntity<String> deleteReaderById(@PathVariable("rid")int rid) {
		Optional<Reader> optional = readerService.getReaderById(rid);
		if(!optional.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid reader Id given.");
		readerService.deleteReaderById(rid);
		return ResponseEntity.status(HttpStatus.OK).body("Reader Deleted from DB.");
	}
}
