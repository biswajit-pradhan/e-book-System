package com.ebook.main.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	private String name;
	private double price;
	private double version;
	private String author;
	public Book() {}
	
	public Book(int id, String name, double price, double version, String author) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.version = version;
		this.author = author;
	}
	
	@Override
	public String toString() {
		return "Book [id=" + id + ", name=" + name + ", price=" + price + ", version=" + version + ", author=" + author
				+ "]";
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
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getVersion() {
		return version;
	}
	public void setVersion(double version) {
		this.version = version;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	
}
