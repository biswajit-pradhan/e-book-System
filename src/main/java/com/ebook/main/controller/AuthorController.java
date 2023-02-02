package com.ebook.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
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
}
