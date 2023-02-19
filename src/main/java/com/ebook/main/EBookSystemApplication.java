package com.ebook.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class EBookSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(EBookSystemApplication.class, args);
	}

}