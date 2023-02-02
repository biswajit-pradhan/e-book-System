package com.ebook.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ebook.main.model.Book;

public interface BookRepository extends JpaRepository<Book, Integer>{

}
