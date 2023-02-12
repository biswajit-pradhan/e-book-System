package com.ebook.main.service;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.main.model.Author;
import com.ebook.main.model.Book;
import com.ebook.main.model.ReaderBook;
import com.ebook.main.repository.AuthorRepository;
import com.ebook.main.repository.ReaderBookRepository;

@Service
public class AuthorService {

	@Autowired
	private AuthorRepository authorRepository;
	
	@Autowired
	private ReaderBookRepository readerBookRepository;
	
	public void addAuthor(Author author) {
		authorRepository.save(author);
		
	}
	public Optional<Author> getAuthorById(int id) {
		Optional<Author> optional = authorRepository.findById(id);
		return optional;
	}

	public List<Author> getAllAuthor() {
		
		return authorRepository.findAll();
	}

	

	public void updateAuthor(Author author) {
		authorRepository.save(author);
		
	}

	public void deleteAuthor(int id) {
		authorRepository.deleteById(id);
		
	}
	
	public List<Book> getBookByAuthorId(int id) {
    List<Author>list=authorRepository.findAll();
		
		List<Book> filteredList=list.stream().filter(e->e.getId()==id)
													.map(e->e.getBook()).collect(Collectors.toList());
		return filteredList;
	}
	
	public List<Book> getBooksOnRentByAuthorName(List<Author> authorBooks) {
		
		List<Integer> bookIdsByAuthorName=authorBooks.stream().map(ab->ab.getBook().getId()).collect(Collectors.toList());		
		
		List<Book> bookData=readerBookRepository.findAll().stream()
				.map(rb->rb.getBook()).filter(b->bookIdsByAuthorName.contains(b.getId()))
				.collect(Collectors.toList());
		
		Set<Book> bookDataSet=new HashSet<>(bookData);
		bookData=new ArrayList<>(bookDataSet);
		return bookData;
	}
	
	public double authorShareOnIndividualBookRent(int bid) {
		
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
