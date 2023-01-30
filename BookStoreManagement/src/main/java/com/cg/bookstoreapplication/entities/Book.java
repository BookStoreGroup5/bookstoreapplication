package com.cg.bookstoreapplication.entities;

import java.time.LocalDate;
import java.util.Locale.Category;

import javax.persistence.Entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Book {

	private int bookId;
	private String title;
	private String author;
	private Category category;
	private String description;
	private String isbn;
	private double price;
	private LocalDate publishDate;
	private LocalDate lastUpdatedOn;
	
}
