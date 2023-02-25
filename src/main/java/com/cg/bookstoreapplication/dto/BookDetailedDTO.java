package com.cg.bookstoreapplication.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookDetailedDTO {

	private int bookId;
	private String title;
	private String author;
	private String category;
	private String description;
	private int discount;
	private double price;
	private String publishDate;
	private String language;
	private String imageName;
	
}
