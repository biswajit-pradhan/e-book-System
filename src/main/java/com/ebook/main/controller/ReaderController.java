package com.ebook.main.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.main.model.Book;
import com.ebook.main.model.Reader;
import com.ebook.main.service.ReaderService;

@RestController
@RequestMapping("/api/reader")
public class ReaderController {
	
	@Autowired
	private ReaderService readerService;
	
	@Autowired
	private BookController bookController;
	
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
}
