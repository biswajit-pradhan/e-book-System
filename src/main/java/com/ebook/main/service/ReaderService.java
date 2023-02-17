package com.ebook.main.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.main.model.Author;
import com.ebook.main.model.Book;
import com.ebook.main.model.Publisher;
import com.ebook.main.model.Reader;
import com.ebook.main.model.ReaderBook;
import com.ebook.main.repository.ReaderBookRepository;
import com.ebook.main.repository.ReaderRepository;

@Service
public class ReaderService {
	
	@Autowired
	private ReaderRepository readerRepository;
	
	@Autowired
	private BookService bookService;
	
	@Autowired
	private ReaderBookRepository readerBookRepository;
	
	public void addReader(Reader reader) {
		readerRepository.save(reader);
	}

	public List<Book> getBookByBookName(String bName) {
		List<Book> book = bookService.getAllBook().stream().filter(b->b.getName().toLowerCase().startsWith(bName.toLowerCase())).collect(Collectors.toList());
		return book;
	}

	public List<Reader> getAllReaders() {
		return readerRepository.findAll();
	}

	public Optional<Reader> getReaderById(int rid) {
		return readerRepository.findById(rid);
	}

	public void udateReaderById(Reader reader) {
		readerRepository.save(reader);
	}

	public void deleteReaderById(int rid) {
		readerRepository.deleteById(rid);
	}

	public List<Book> getBooksByPublisherName(List<Publisher> publisherBook) {
		List<Book> bookData=publisherBook.stream().map(p->p.getBook()).collect(Collectors.toList());
		return bookData;
	}

	public List<Book> getBooksByAuthorName(List<Author> authorBook) {
		
		List<Book> bookData=authorBook.stream().map(p->p.getBook()).collect(Collectors.toList());
		return bookData;
	}

	public List<Book> booksPurchasedByReaderId(int rid) {
		List<ReaderBook> readerBookData = readerBookRepository.findAll();
		List<Book> bookData = readerBookData.stream().filter((e->e.getReader().getId()==rid)).map(e->e.getBook()).collect(Collectors.toList());
		return bookData;
	}

	public int totalRentByReaderId(int rid) {
		List<ReaderBook> readerBookData = readerBookRepository.findAll();
		List<Double> priceList = readerBookData.stream().filter((e->e.getReader().getId()==rid)).map(e->e.getBook().getPrice()).collect(Collectors.toList());
		List<Integer> borrowingDaysList = readerBookData.stream().filter(e->e.getReader().getId()==rid).map(e->e.getBorrowingDays()).collect(Collectors.toList());
		double rentSum = 0;
		for(int i=0;i<priceList.size();i++) {
			if(borrowingDaysList.get(i)<=0)
				rentSum += 0;
			else if(borrowingDaysList.get(i)<=7)
				rentSum += (priceList.get(i)*10/100);
			else if(borrowingDaysList.get(i)<=14)
				rentSum += (priceList.get(i)*15/100);
			else if(borrowingDaysList.get(i)<=21)
				rentSum += (priceList.get(i)*20/100);
			else if(borrowingDaysList.get(i)<=30)
				rentSum += (priceList.get(i)*25/100);
			else
				rentSum += (priceList.get(i)*50/100);
		}
		return (int)rentSum;
	}
}
