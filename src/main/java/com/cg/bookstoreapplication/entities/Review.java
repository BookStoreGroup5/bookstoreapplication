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
	
	private int bookId;
	private int rating;
	private String comment;
	
	
	
	
	public Review( String comment, int rating) {
		super();
		
		
		this.comment = comment;
		this.rating = rating;
		
	}
	
}
