package com.ebook.main.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Publisher {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	private String name;
	
	@OneToOne
	private Book book;
	
	public Publisher() {}

	public Publisher(int id, String name, Book book) {
		super();
		this.id = id;
		this.name = name;
		this.book = book;
	}

	@Override
	public String toString() {
		return "Publisher [id=" + id + ", name=" + name + ", book=" + book + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}
	
	
}
