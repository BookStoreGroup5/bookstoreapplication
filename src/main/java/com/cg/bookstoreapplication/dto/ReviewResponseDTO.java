package com.cg.bookstoreapplication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReviewResponseDTO {

	private int reviewId;
	private String customerName;
	private double rating;
	private String msg;
}
