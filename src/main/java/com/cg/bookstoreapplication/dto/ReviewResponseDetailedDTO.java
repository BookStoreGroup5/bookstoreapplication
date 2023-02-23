package com.cg.bookstoreapplication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReviewResponseDetailedDTO {

	private int reviewId;
	private String customerName;
	private int customerId;
	private double rating;
}
