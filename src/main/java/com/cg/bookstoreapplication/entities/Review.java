package com.cg.bookstoreapplication.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int reviewId;
	private String CustomerName;
	private int bookid;
	private int customerId;
	private String comment;
	private double rating;
	private String reviewOn;
	
	
	public Review(String customerName, int customerId, String comment, double rating, String reviewOn) {
		super();
		
		this.CustomerName=customerName;
		this.customerId = customerId;
		this.comment = comment;
		this.rating = rating;
		this.reviewOn = reviewOn;
	}
	
}
