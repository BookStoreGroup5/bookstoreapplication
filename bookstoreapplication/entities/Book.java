package com.cg.bookstoreapplication.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)//code to generate PK automatically
	private int bookId;
	
	private String title;
	private String author;
	private String category;
	private String description;
	private String isbn;
	private double price;
	private String publishDate;
	private String lastUpdatedOn;
	
	
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "BookNumber")//column holds FK value and name of column set through "name attribute"
	private List<Review> allReviews;
	
	public Book(String title, String author, String category, String description, String isbn, double price,
			String publishDate, String lastUpdatedOn) {
		super();
		this.title = title;
		this.author = author;
		this.category = category;
		this.description = description;
		this.isbn = isbn;
		this.price = price;
		this.publishDate = publishDate;
		this.lastUpdatedOn = lastUpdatedOn;
	}
	
}//end class
