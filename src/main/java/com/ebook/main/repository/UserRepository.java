package com.ebook.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ebook.main.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where u.emailId=?1")
	User getUserByEmailId(String emailId);   


}
