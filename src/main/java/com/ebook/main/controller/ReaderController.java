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
		Reader reader = optional.get();//hear we are using same optional to get and do work on reader
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
