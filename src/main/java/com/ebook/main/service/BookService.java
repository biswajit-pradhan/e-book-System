package com.ebook.main.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

	public List<Book> getAllBook() {
		return bookRepository.findAll();
	}

	public Optional<Book> getBookById(int bid) {
		return bookRepository.findById(bid);
	}

	public void updateBook(Book ubook, int bid) {
		Book book=bookRepository.findById(bid).get();
		book.setAuthorName(ubook.getAuthorName());
		book.setName(ubook.getName());
		book.setPrice(ubook.getPrice());
		book.setBookCategory(ubook.getBookCategory());
		book.setBookLanguage(ubook.getBookLanguage());
		book.setPublishingYear(ubook.getPublishingYear());
		book.setBookLink(ubook.getBookLink());
		bookRepository.save(book);
	}

	public void deleteBookById(int bid) {
		bookRepository.deleteById(bid);
		
	}

	public List<Book> lastFiveBooksAddedToDB() {
		
		List<Book> book=bookRepository.findAll().stream().sorted((b1,b2)->b2.getId()-b1.getId()).limit(5).collect(Collectors.toList());
		return book;
	}

}
