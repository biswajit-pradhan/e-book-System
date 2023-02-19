package com.ebook.main.controller;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.main.model.Book;
import com.ebook.main.model.Reader;
import com.ebook.main.model.ReaderBook;
import com.ebook.main.repository.BookRepository;
import com.ebook.main.repository.ReaderRepository;
import com.ebook.main.service.ReaderBookService;

@RestController
@CrossOrigin(origins= {"*"})
@RequestMapping("/api/readerbook")
public class ReaderBookController {
	
	@Autowired
	private ReaderBookService readerBookService;
	
	@Autowired
	private ReaderRepository readerRepository;
	
	@Autowired
	private BookRepository bookRepository;

	
	@PostMapping("/add/{rid}/{bid}")
	public ResponseEntity<Object> addReaderBook(@RequestBody ReaderBook readerBook,@PathVariable("rid") int rid,@PathVariable("bid") int bid) {
		
		Optional<Reader> optionalReader=readerRepository.findById(rid);
		if(!optionalReader.isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Reader Id Given");
		}
		
		Optional<Book> optionalBook=bookRepository.findById(bid);
		if(!optionalBook.isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Book Id Given");
		}
		
		
		List<ReaderBook> allData=readerBookService.getAllReaderBook();
		int borrowingDays=readerBook.getBorrowingDays();
		long millis=System.currentTimeMillis();
		Date assignedDate=new Date(millis);/*Getting local date for assign the reader*/
		Calendar calender = Calendar.getInstance(); 
		calender.add(Calendar.DAY_OF_MONTH, borrowingDays);
		Date lastDate=new Date(calender.getTimeInMillis());/*Getting last day from today*/
		
		for(ReaderBook rb:allData) {
			if(rb.getReader().getId()==rid && rb.getBook().getId()==bid && rb.getLastDate().compareTo(assignedDate)>=0) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This book is already assigned to this reader for "+rb.getBorrowingDays()+" days!! Try again after "+rb.getLastDate());
			}
		}
		
		
		readerBook.setAssignedDate(assignedDate);/*Storing borrow date for reader*/
		readerBook.setLastDate(lastDate);/*Storing last date for reader*/
		
		return readerBookService.addReaderBook(readerBook,rid,bid);
	}
	
	@PostMapping("/addbyname/{bid}/{uname}")
	public ResponseEntity<Object> addReaderBookWithName(@RequestBody ReaderBook readerBook,@PathVariable("bid") int bid,@PathVariable("uname") String uname) {
		
		Reader reader = readerRepository.getReaderBynameQuerry(uname);
		int rid = reader.getId();
		
		Optional<Reader> optionalReader=readerRepository.findById(rid);
		if(!optionalReader.isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Reader Id Given");
		}
		
		Optional<Book> optionalBook=bookRepository.findById(bid);
		if(!optionalBook.isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Book Id Given");
		}
		
		
		List<ReaderBook> allData=readerBookService.getAllReaderBook();
		int borrowingDays=readerBook.getBorrowingDays();
		long millis=System.currentTimeMillis();
		Date assignedDate=new Date(millis);/*Getting local date for assign the reader*/
		Calendar calender = Calendar.getInstance(); 
		calender.add(Calendar.DAY_OF_MONTH, borrowingDays);
		Date lastDate=new Date(calender.getTimeInMillis());/*Getting last day from today*/
		
		for(ReaderBook rb:allData) {
			if(rb.getReader().getId()==rid && rb.getBook().getId()==bid && rb.getLastDate().compareTo(assignedDate)>=0) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This book is already assigned to this reader for "+rb.getBorrowingDays()+" days!! Try again after "+rb.getLastDate());
			}
		}
		
		
		readerBook.setAssignedDate(assignedDate);/*Storing borrow date for reader*/
		readerBook.setLastDate(lastDate);/*Storing last date for reader*/
		
		return readerBookService.addReaderBook(readerBook,rid,bid);
	}
	
	@GetMapping("/topFiveBooksByBorrowingDays")
	public ResponseEntity<Object> topFiveBooksByBorrowingDays(){
		List<Book> book=readerBookService.topFiveBooksByBorrowingDays();
		return ResponseEntity.status(HttpStatus.OK).body(book);
	}
	
	
	@GetMapping("/getBooksDataByReaderId/{rnm}")
	public ResponseEntity<Object> getBooksByReaderId(@PathVariable("rnm") String rnm){
		Reader reader = readerRepository.getReaderBynameQuerry(rnm);
		int rid = reader.getId();
		Optional<Reader> optional=readerRepository.findById(rid);
		if(!optional.isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Reader Id Given");
		}
		
		List<ReaderBook> bookData=readerBookService.getBooksByReaderId(rid);
		
		if(bookData.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This Reader Does Not Have Any Book To Read");
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(bookData);
	}
	
}
