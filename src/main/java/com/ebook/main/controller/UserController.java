package com.ebook.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.main.model.Message;
import com.ebook.main.model.Reader;
import com.ebook.main.model.User;
import com.ebook.main.repository.ReaderRepository;
import com.ebook.main.repository.UserRepository;


@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/user")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ReaderRepository readerRepository;
	
	
	
	@PostMapping("/signUp")
	public ResponseEntity<Object> signUp(@RequestBody User user) {
		User uDB = userRepository.getUserByEmailId(user.getEmailId());
		if(uDB != null) {
			Message m = new Message();
			m.setMsg("Email already registered");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(m);
		}
		userRepository.save(user);
		Reader reader = new Reader();
		if(user.getUserrole().equalsIgnoreCase("READER")) {
			 
			reader.setName(user.getUserName());
		}
		readerRepository.save(reader);
		return ResponseEntity.status(HttpStatus.OK).body(reader);
		}
}
