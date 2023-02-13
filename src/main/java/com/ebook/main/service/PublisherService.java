package com.ebook.main.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.main.model.Book;
import com.ebook.main.model.Publisher;
import com.ebook.main.model.ReaderBook;
import com.ebook.main.repository.PublisherRepository;
import com.ebook.main.repository.ReaderBookRepository;

@Service
public class PublisherService {

	@Autowired
	private PublisherRepository publisherRepository;
	
	@Autowired
	private ReaderBookRepository readerBookRepository;

	public void addPublisher(Publisher publisher) {
		publisherRepository.save(publisher);
		
	}

	public Optional<Publisher> getPublisherById(int id) {
		Optional<Publisher> optional = publisherRepository.findById(id);
		return optional;
	}

	public List<Publisher> getAllPublisher() {
		return publisherRepository.findAll();
	}

	public void updatePublisher(Publisher publisher) {
		publisherRepository.save(publisher);
		
	}

	public void deletePublisher(int id) {
		publisherRepository.deleteById(id);
		
	}

	public List<Book> getBookByPublisherId(int pid) {
	List<Publisher>list=publisherRepository.findAll();
		
		List<Book>filteredList=list.stream().filter(e->e.getId()==pid)
													.map(e->e.getBook()).collect(Collectors.toList());
		return filteredList;
		
	}
	
	public List<Book> getBooksOnRentByPublisherName(List<Publisher> publisherBooks) {
		
		List<Integer> bookIdsByPublisherName=publisherBooks.stream().map(pb->pb.getBook().getId()).collect(Collectors.toList());		
		
		List<Book> bookData=readerBookRepository.findAll().stream()
				.map(rb->rb.getBook()).filter(b->bookIdsByPublisherName.contains(b.getId()))
				.collect(Collectors.toList());
		
		Set<Book> bookDataSet=new HashSet<>(bookData);
		bookData=new ArrayList<>(bookDataSet);
		
		return bookData;
	}
		
	public double publisherShareOnIndividualBookRent(int bid) {
		
		double totalSum=0;
		
		List<ReaderBook> readerBookData=readerBookRepository.findAll().stream()
										.filter(rb->rb.getBook().getId()==bid)
										.collect(Collectors.toList());
		
		
		for(ReaderBook rb:readerBookData) {
			double sum=0;
			int days=rb.getBorrowingDays();
			double price=rb.getBook().getPrice();
			if(days<=0)
				sum=0;
			else if(days<=7)
				sum+=((price*10)/100);
			else if(days<=14)
				sum+=((price*15)/100);
			else if(days<=21)
				sum+=((price*20)/100);
			else if(days<=30)
				sum+=((price*25)/100);
			else
				sum+=((price*50)/100);
			totalSum+=sum;
		}
		
		return totalSum/2;
	}

}
