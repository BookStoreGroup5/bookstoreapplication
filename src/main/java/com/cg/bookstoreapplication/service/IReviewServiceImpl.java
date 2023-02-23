package com.cg.bookstoreapplication.service;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.bookstoreapplication.entities.Book;
import com.cg.bookstoreapplication.entities.Review;
import com.cg.bookstoreapplication.exception.ReviewNotFoundException;
import com.cg.bookstoreapplication.repository.IBookRepository;
import com.cg.bookstoreapplication.repository.IReviewRepository;

@Service
public class IReviewServiceImpl implements IReviewService {

	@Autowired
	IReviewRepository reviewRepository;
	
	@Autowired
	IBookRepository bookRepository;

	

	@Override
	public List<Review> listAllReviews() {

		List<Review> list = reviewRepository.findAll();
		if (list.isEmpty())
			throw new EntityNotFoundException("There is no review in the DB : ");
		return list;
	}

	@Override
	public Review addReview(Review review) throws Exception {

		Review review1 = reviewRepository.save(review);

		return review1;
	}

	
	
	@Override
	@Transactional
	public Review updateReviewByBookId(int bookId, int reviewId) {

		Book bookFromDB = bookRepository.getReferenceById(bookId);
		Review reviewFromDB = reviewRepository.getReferenceById(reviewId);
		// if Book& review are valid and available in DB then
		if (bookFromDB != null & reviewFromDB != null) {
			List<Review> allReviews = bookFromDB.getAllReviews();
			if (allReviews != null && allReviews.isEmpty() == false) {
				allReviews.add(reviewFromDB);
				bookFromDB.setAllReviews(allReviews);
			} else // if book are null then create arrayList and add Review
			{
				List<Review> newReviewList = new ArrayList<>();
				newReviewList.add(reviewFromDB);
				bookFromDB.setAllReviews(newReviewList);
			} // call repository save method
			bookRepository.saveAndFlush(bookFromDB);
			reviewRepository.save(reviewFromDB);
			return reviewFromDB;
		} else {
			throw new NullPointerException("Either Review " + reviewFromDB + "or book " + bookFromDB + " is Null ");
		}
	}


	

	@Override
	public Review getReviewByCustomerId(int customerId) {
		if (customerId >= 1) {
			Review savedReview = reviewRepository.getReviewByCustomerId(customerId);
			if (savedReview != null)
				return savedReview;
			else {
				throw new EntityNotFoundException("Invalid Customer ID : " + customerId);
			}
		}
		return null;
	}

	
	

	@Override
	public Review findById(int id) throws Exception {
		if (id >= 1) {
			Review savedReview = reviewRepository.getReferenceById(id);
			if (savedReview != null)
				return savedReview;
			else {
				throw new ReviewNotFoundException("There is no review in Db with ID: " + id);
			}
		}
		return null;
	}
}
