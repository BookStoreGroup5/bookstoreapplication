package com.sprint.bookstoreapplication.entity;

import java.time.LocalDate;

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
	private String description;
    private String isbn;
	private String price;
	private LocalDate publishDate;
	private LocalDate lastUpdatedOn;
	
}
