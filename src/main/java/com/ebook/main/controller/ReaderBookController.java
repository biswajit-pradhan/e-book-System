package com.ebook.main.controller;

import java.sql.Date;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.main.model.ReaderBook;
import com.ebook.main.service.ReaderBookService;

@RestController
@RequestMapping("/api/readerbook")
public class ReaderBookController {
	
	@Autowired
	private ReaderBookService readerBookService;
	
	@PostMapping("/add/{rid}/{bid}")
	public ResponseEntity<Object> addReaderBook(@RequestBody ReaderBook readerBook,@PathVariable("rid") int rid,@PathVariable("bid") int bid) {
		
		int borrowingDays=readerBook.getBorrowingDays();
		long millis=System.currentTimeMillis();
		Date assignedDate=new Date(millis);/*Getting local date for assign the reader*/
		Calendar calender = Calendar.getInstance(); 
		calender.add(Calendar.DAY_OF_MONTH, borrowingDays);
		Date lastDate=new Date(calender.getTimeInMillis());/*Getting last day from today*/
		
		
		readerBook.setAssignedDate(assignedDate);/*Storing borrow date for reader*/
		readerBook.setLastDate(lastDate);/*Storing last date for reader*/
		
		return readerBookService.addReaderBook(readerBook,rid,bid);
	}
}
