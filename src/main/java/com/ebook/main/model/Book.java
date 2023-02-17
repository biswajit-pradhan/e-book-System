package com.ebook.main.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	public enum bookCategories {

		FICTION, NONFICTION, TECHNOLOGY,SCIENCE,HISTORY,BUSINESS,GENERAL,STORY,NOVEL

	}
	
	private String name;
	private double price;
	private String authorName;
	private int publishingYear;
	private String bookLanguage;
	private bookCategories bookCategory;
	private String bookLink;
	private String coverimg;

	public Book() {}

	public Book(int id, String name, double price, String authorName, int publishingYear, String bookLanguage,
			bookCategories bookCategory, String bookLink, String coverimg) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.authorName = authorName;
		this.publishingYear = publishingYear;
		this.bookLanguage = bookLanguage;
		this.bookCategory = bookCategory;
		this.bookLink = bookLink;
		this.coverimg=coverimg;
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

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public int getPublishingYear() {
		return publishingYear;
	}

	public void setPublishingYear(int publishingYear) {
		this.publishingYear = publishingYear;
	}

	public String getBookLanguage() {
		return bookLanguage;
	}

	public void setBookLanguage(String bookLanguage) {
		this.bookLanguage = bookLanguage;
	}

	public bookCategories getBookCategory() {
		return bookCategory;
	}

	public void setBookCategory(bookCategories bookCategory) {
		this.bookCategory = bookCategory;
	}

	public String getBookLink() {
		return bookLink;
	}

	public void setBookLink(String bookLink) {
		this.bookLink = bookLink;
	}
	

	public String getCoverimg() {
		return coverimg;
	}

	public void setCoverimg(String coverimg) {
		this.coverimg = coverimg;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", name=" + name + ", price=" + price + ", authorName=" + authorName
				+ ", publishingYear=" + publishingYear + ", bookLanguage=" + bookLanguage + ", bookCategory="
				+ bookCategory + ", bookLink=" + bookLink + ", coverimg=" + coverimg + "]";
	}
	
	
}
