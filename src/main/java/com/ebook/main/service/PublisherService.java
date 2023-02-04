package com.ebook.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
