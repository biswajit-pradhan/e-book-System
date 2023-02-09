package com.ebook.main.service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ebook.main.model.Author;
import com.ebook.main.model.Book;
import com.ebook.main.repository.AuthorRepository;

@Service
public class AuthorService {

	@Autowired
	private AuthorRepository authorRepository;
	
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

}
