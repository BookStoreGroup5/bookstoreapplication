package com.cg.bookstoreapplication.util;

import org.springframework.stereotype.Component;

import com.cg.bookstoreapplication.dto.ReviewResponseDTO;
import com.cg.bookstoreapplication.dto.ReviewResponseDetailedDTO;
import com.cg.bookstoreapplication.entities.Review;

@Component
public class ReviewDTOConvertor {

	public ReviewResponseDTO getReviewDTO(Review r)
	{
		return new ReviewResponseDTO(r.getReviewId(), r.getCustomerName(),r.getRating(),"Thanks for the review");
		
		
	}

	public ReviewResponseDetailedDTO getDetailedReviewDTO(Review savedReview) {
    
		ReviewResponseDetailedDTO dto = new ReviewResponseDetailedDTO();
		
		dto.setReviewId(savedReview.getReviewId());
		dto.setCustomerId(savedReview.getCustomerId());
		dto.setCustomerName(savedReview.getCustomerName());
		dto.setRating(savedReview.getRating());
		return dto;
	}

}
