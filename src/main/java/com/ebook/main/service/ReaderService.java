package com.ebook.main.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.main.model.Book;
import com.ebook.main.model.Reader;
import com.ebook.main.repository.ReaderRepository;

@Service
public class ReaderService {
	
	@Autowired
	private ReaderRepository readerRepository;
	
	@Autowired
	private BookService bookService;
	
	public void addReader(Reader reader) {
		readerRepository.save(reader);
	}

	public List<Book> getBookByBookName(String bName) {
		List<Book> book = bookService.getAllBook().stream().filter(b->b.getName()
				.equalsIgnoreCase(bName)).collect(Collectors.toList());
		return book;
	}


	
}
