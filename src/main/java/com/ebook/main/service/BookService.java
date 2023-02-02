package com.ebook.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.main.model.Book;
import com.ebook.main.repository.BookRepository;

@Service
public class BookService {

	@Autowired
	private BookRepository bookRepository; 
	
	public void addBook(Book book) {
		bookRepository.save(book);		
	}

}
