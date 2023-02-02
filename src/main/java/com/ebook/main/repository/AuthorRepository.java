package com.ebook.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ebook.main.model.Author;

public interface AuthorRepository extends JpaRepository<Author, Integer> {

}
