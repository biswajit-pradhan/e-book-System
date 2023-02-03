package com.ebook.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.main.model.Reader;
import com.ebook.main.repository.ReaderRepository;

@Service
public class ReaderService {
	
	@Autowired
	private ReaderRepository readerRepository;
	
	public void addReader(Reader reader) {
		readerRepository.save(reader);
	}
}
