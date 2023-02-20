package com.ebook.main;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ebook.main.controller.BookController;
import com.ebook.main.model.Book;
import com.ebook.main.model.Book.bookCategories;
import com.ebook.main.repository.BookRepository;
import com.ebook.main.service.BookService;
import com.ebook.main.service.PublisherService;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness=Strictness.LENIENT)
public class BookServiceTest {
	
	@Autowired
	@InjectMocks
	private BookService bookService;
	
	@Autowired
	@Mock
	private BookRepository bookRepository;
	
	@Autowired
	@InjectMocks
	private PublisherService publisherService;
	
	@Autowired
	@InjectMocks
	private BookController bookController;
	
	@Test
	public void updateBookTest() {

		Book book=new Book();
		book.setId(12);
		book.setName("You are the best wife");
		book.setPrice(170);
		book.setAuthorName("Chetan Bhagat");
		book.setPublishingYear(2023);
		book.setBookLanguage("English");
		book.setBookCategory(bookCategories.FICTION);
		book.setBookLink("http://bookurl.com");
		book.setCoverimg("bookImg.jpg");

		when(bookRepository.findById(12)).thenReturn(Optional.of(book));
		Assertions.assertEquals(book.getId(),bookRepository.findById(12).get().getId());
		Assertions.assertEquals(book.getName(),bookRepository.findById(12).get().getName());
		Assertions.assertEquals(book.getPrice(),bookRepository.findById(12).get().getPrice());
		Assertions.assertEquals(book.getAuthorName(), bookRepository.findById(12).get().getAuthorName());
		Assertions.assertEquals(book.getPublishingYear(), bookRepository.findById(12).get().getPublishingYear());
		Assertions.assertEquals(book.getBookLanguage(), bookRepository.findById(12).get().getBookLanguage());
		Assertions.assertEquals(book.getBookCategory(), bookRepository.findById(12).get().getBookCategory());
		Assertions.assertEquals(book.getCoverimg(), bookRepository.findById(12).get().getCoverimg());
	}
	
	@Test
	public void getAllBookTest() {
		
		Book book1=new Book();
		book1.setId(12);
		book1.setName("You are the best wife");
		book1.setPrice(170);
		book1.setAuthorName("Chetan Bhagat");
		book1.setPublishingYear(2023);
		book1.setBookLanguage("English");
		book1.setBookCategory(bookCategories.FICTION);
		book1.setBookLink("http://bookurl.com");
		book1.setCoverimg("bookImg.jpg");
		
		Book book2=new Book();
		book2.setId(12);
		book2.setName("You are the best wife");
		book2.setPrice(170);
		book2.setAuthorName("Chetan Bhagat");
		book2.setPublishingYear(2023);
		book2.setBookLanguage("English");
		book2.setBookCategory(bookCategories.FICTION);
		book2.setBookLink("http://bookurl.com");
		book2.setCoverimg("bookImg.jpg");
		
		List<Book> book=new ArrayList<Book>();
		book.add(book1);
		book.add(book2);
		
		when(bookRepository.findAll()).thenReturn(book);
		
		Assertions.assertEquals(book.get(0).getId(),bookRepository.findAll().get(0).getId());
		Assertions.assertEquals(book.get(0).getName(),bookRepository.findAll().get(0).getName());
		Assertions.assertEquals(book.get(0).getPrice(),bookRepository.findAll().get(0).getPrice());
		Assertions.assertEquals(book.get(0).getAuthorName(), bookRepository.findAll().get(0).getAuthorName());
		Assertions.assertEquals(book.get(0).getPublishingYear(), bookRepository.findAll().get(0).getPublishingYear());
		Assertions.assertEquals(book.get(0).getBookLanguage(), bookRepository.findAll().get(0).getBookLanguage());
		Assertions.assertEquals(book.get(0).getBookCategory(), bookRepository.findAll().get(0).getBookCategory());
		Assertions.assertEquals(book.get(0).getCoverimg(), bookRepository.findAll().get(0).getCoverimg());
		
		Assertions.assertEquals(book.get(1).getId(),bookRepository.findAll().get(1).getId());
		Assertions.assertEquals(book.get(1).getName(),bookRepository.findAll().get(1).getName());
		Assertions.assertEquals(book.get(1).getPrice(),bookRepository.findAll().get(1).getPrice());
		Assertions.assertEquals(book.get(1).getAuthorName(), bookRepository.findAll().get(1).getAuthorName());
		Assertions.assertEquals(book.get(1).getPublishingYear(), bookRepository.findAll().get(1).getPublishingYear());
		Assertions.assertEquals(book.get(1).getBookLanguage(), bookRepository.findAll().get(1).getBookLanguage());
		Assertions.assertEquals(book.get(1).getBookCategory(), bookRepository.findAll().get(1).getBookCategory());
		Assertions.assertEquals(book.get(1).getCoverimg(), bookRepository.findAll().get(1).getCoverimg());
	}
	
	
	@Test
	public void getBookByIdTest() {
		
		Book book=new Book();
		book.setId(12);
		book.setName("You are the best wife");
		book.setPrice(170);
		book.setAuthorName("Chetan Bhagat");
		book.setPublishingYear(2023);
		book.setBookLanguage("English");
		book.setBookCategory(bookCategories.FICTION);
		book.setBookLink("http://bookurl.com");
		book.setCoverimg("bookImg.jpg");
		
		
		when(bookRepository.findById(12)).thenReturn(Optional.of(book));
		Assertions.assertEquals(book.getName(),bookService.getBookById(12).get().getName());
		Assertions.assertEquals(book.getId(),bookService.getBookById(12).get().getId());
		Assertions.assertEquals(book.getPrice(),bookService.getBookById(12).get().getPrice());
		Assertions.assertEquals(book.getAuthorName(), bookService.getBookById(12).get().getAuthorName());
		Assertions.assertEquals(book.getPublishingYear(), bookService.getBookById(12).get().getPublishingYear());
		Assertions.assertEquals(book.getBookLanguage(), bookService.getBookById(12).get().getBookLanguage());
		Assertions.assertEquals(book.getBookCategory(), bookService.getBookById(12).get().getBookCategory());
		Assertions.assertEquals(book.getCoverimg(), bookService.getBookById(12).get().getCoverimg());
	}

}
