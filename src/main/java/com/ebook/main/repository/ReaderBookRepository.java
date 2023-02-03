package com.ebook.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ebook.main.model.ReaderBook;

public interface ReaderBookRepository extends JpaRepository<ReaderBook, Integer>{

}
