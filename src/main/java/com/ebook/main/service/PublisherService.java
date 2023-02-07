package com.ebook.main.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.main.model.Book;
import com.ebook.main.model.Publisher;
import com.ebook.main.repository.PublisherRepository;

@Service
public class PublisherService {

	@Autowired
	private PublisherRepository publisherRepository;

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

}
