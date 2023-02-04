package com.ebook.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.main.model.Reader;
import com.ebook.main.repository.ReaderRepository;

@Service
public class ReaderService {
	
	@Autowired
	private ReaderRepository readerRepository;
	
	public void addReader(Reader reader) {
		readerRepository.save(reader);
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


}
