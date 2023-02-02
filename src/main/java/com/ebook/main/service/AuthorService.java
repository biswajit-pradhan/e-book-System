package com.ebook.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.main.model.Author;
import com.ebook.main.repository.AuthorRepository;

@Service
public class AuthorService {

	@Autowired
	private AuthorRepository authorRepository;
	
	public void addAuthor(Author author) {
		authorRepository.save(author);
		
	}

}
