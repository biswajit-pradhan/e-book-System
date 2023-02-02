package com.ebook.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.main.model.Publisher;
import com.ebook.main.service.PublisherService;

@RestController
@RequestMapping("api/publisher")
public class PublisherController {
	
	@Autowired
	private PublisherService publisherService;
	
	@Autowired
	private BookController bookController;
	
	@PostMapping("/add")
	public ResponseEntity<String> addPublisher(@RequestBody Publisher publisher) {
		bookController.addBook(publisher.getBook());
		publisherService.addPublisher(publisher);
		return ResponseEntity.status(HttpStatus.OK).body("Publisher Added Successfully");
	}
}
