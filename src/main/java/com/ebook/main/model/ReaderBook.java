package com.ebook.main.model;


import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class ReaderBook {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	private Date assignedDate;
	private int borrowingDays;
	private Date lastDate;/*Date of finish*/
	
	@ManyToOne
	private Reader reader;
	@ManyToOne
	private Book book;
	
	public ReaderBook() {}
	public ReaderBook(int id, Date assignedDate, int borrowingDays, Date lastDate, Reader reader, Book book) {
		super();
		this.id = id;
		this.assignedDate = assignedDate;
		this.borrowingDays = borrowingDays;
		this.lastDate = lastDate;
		this.reader = reader;
		this.book = book;
	}
	@Override
	public String toString() {
		return "ReaderBook [id=" + id + ", assignedDate=" + assignedDate + ", borrowingDays=" + borrowingDays
				+ ", lastDate=" + lastDate + ", reader=" + reader + ", book=" + book + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getAssignedDate() {
		return assignedDate;
	}
	public void setAssignedDate(Date assignedDate) {
		this.assignedDate = assignedDate;
	}
	public int getBorrowingDays() {
		return borrowingDays;
	}
	public void setBorrowingDays(int borrowingDays) {
		this.borrowingDays = borrowingDays;
	}
	public Date getLastDate() {
		return lastDate;
	}
	public void setLastDate(Date lastDate) {
		this.lastDate = lastDate;
	}
	public Reader getReader() {
		return reader;
	}
	public void setReader(Reader reader) {
		this.reader = reader;
	}
	public Book getBook() {
		return book;
	}
	public void setBook(Book book) {
		this.book = book;
	}
	

	
}
