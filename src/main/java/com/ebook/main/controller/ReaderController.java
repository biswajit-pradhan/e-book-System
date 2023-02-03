package com.ebook.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.main.model.Reader;
import com.ebook.main.service.ReaderService;

@RestController
@RequestMapping("/api/reader")
public class ReaderController {
	
	@Autowired
	private ReaderService readerService;
	
	@PostMapping("/add")
	public ResponseEntity<String> addReader(@RequestBody Reader reader){
		
		readerService.addReader(reader);
		return ResponseEntity.status(HttpStatus.OK).body("Reader Added Successfully");
	}
}
