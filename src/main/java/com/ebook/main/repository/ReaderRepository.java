package com.ebook.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ebook.main.model.Reader;
import com.ebook.main.model.User;

public interface ReaderRepository extends JpaRepository<Reader, Integer>{
	@Query("select t from Reader t where name= :name")
	Reader getReaderBynameQuerry(@Param("name")String name);   
}
