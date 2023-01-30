package com.cg.bookstoreapplication.service;

import java.util.List;

import com.cg.bookstoreapplication.entities.Book;
import com.cg.bookstoreapplication.entities.Customer;
import com.cg.bookstoreapplication.entities.Review;

public interface IReviewService {
	public List<Review> listAllReviews();
	public Review addReview(Review review);
	public Review deleteReview(Review review);
	public Review updateReview(Review review);
	public Review viewReview(Review review);
	public List<Review> listAllReviewsByBook(Book book);
	public List<Review> listAllReviewsByCustomer(Customer c);
	public List<Book> listMostFavoredBooks();
	public List<Review> listAllReviewByCustomer(Customer customer);

}
