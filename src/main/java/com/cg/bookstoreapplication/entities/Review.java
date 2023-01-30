package com.cg.bookstoreapplication.entities;

import java.time.LocalDate;

import javax.persistence.Embedded;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor

public class Review {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

	private int reviewId;
	
	@Embedded
	private Book book;
	
	
	@Embedded
	private Customer customer;
	private String headLine;
	private String comment;
	private double rating;
	private LocalDate reviewOn;
	public Review(String headLine, String comment, double rating, LocalDate reviewOn) {
		super();
		this.headLine = headLine;
		this.comment = comment;
		this.rating = rating;
		this.reviewOn = reviewOn;
	}
	
	

}
