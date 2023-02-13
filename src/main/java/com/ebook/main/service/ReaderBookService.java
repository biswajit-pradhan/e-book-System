package com.ebook.main.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ebook.main.model.Book;
import com.ebook.main.model.Reader;
import com.ebook.main.model.ReaderBook;
import com.ebook.main.repository.ReaderBookRepository;

@Service
public class ReaderBookService {
	
	@Autowired
	private ReaderBookRepository readerBookRepository;
	
	@Autowired
	private ReaderService readerService;
	
	@Autowired
	private BookService bookService;

	public ResponseEntity<Object> addReaderBook(ReaderBook readerBook, int rid, int bid) {
		
		Optional<Reader> optionalReader = readerService.getReaderById(rid);
		if(!optionalReader.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid reader Id given");
		
		Optional<Book> optionalBook = bookService.getBookById(bid);
		if (!optionalBook.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid book Id Given");
		
		Reader reader=optionalReader.get();
		Book book=optionalBook.get();
		
		readerBook.setReader(reader);
		readerBook.setBook(book);
		
		readerBookRepository.save(readerBook);
		
		return ResponseEntity.status(HttpStatus.OK).body("ReaderBook Added Successfully");
		
	}

	public List<Book> topFiveBooksByBorrowingDays() {
		
		
		List<ReaderBook> readerBook=readerBookRepository.findAll().stream()
				.sorted((rb1,rb2)->rb2.getBorrowingDays()-rb1.getBorrowingDays())
				.collect(Collectors.toList());
		
		List<Book> book=readerBook.stream().map(rb->rb.getBook()).limit(5)
				.collect(Collectors.toList());
		
		Set<Book> set=new HashSet<>(book);
		book=new ArrayList<>(set);
		
		return book;
	}
	
}
