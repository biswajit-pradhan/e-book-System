package com.ebook.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.main.model.ReaderBook;
import com.ebook.main.repository.ReaderBookRepository;

@Service
public class ReaderBookService {
	
	@Autowired
	private ReaderBookRepository readerBookRepository;

	public void addReaderBook(ReaderBook readerBook) {
		readerBookRepository.save(readerBook);
		
	}
	
}
