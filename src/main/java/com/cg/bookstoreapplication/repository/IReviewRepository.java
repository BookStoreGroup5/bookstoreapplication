package com.cg.bookstoreapplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.bookstoreapplication.entities.Book;
import com.cg.bookstoreapplication.entities.Customer;
import com.cg.bookstoreapplication.entities.Review;

public interface IReviewRepository extends JpaRepository<Review, Integer> {
	public List<Review> listAllReviews();
	public Review addReview(Review review);
	public Review deleteReview(Review review);
	public Review updateReview(Review review);
	public Review viewReview(Review review);
	public List<Review> listAllReviewsByBook(Book book);
	public List<Review> listAllReviewsByCustomer(Customer c);
	public List<Book> listMostFavoredBooks();

}
