package com.ebook.main.service;

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

}
