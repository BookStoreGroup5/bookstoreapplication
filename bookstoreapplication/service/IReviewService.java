package com.cg.bookstoreapplication.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.bookstoreapplication.entities.Review;

@Service
public interface IReviewService {
	public List<Review> listAllReviews();
	public Review addReview(Review review)throws Exception;
	
	public Review getReviewByCustomerId(int customerId)throws Exception;
	
	
	public Review findById(int id) throws Exception;
	public Review updateReviewByBookId(int bid, int reviewid);
	
}
