package com.cg.bookstoreapplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.bookstoreapplication.entities.Review;

@Repository
public interface IReviewRepository extends JpaRepository<Review,Integer> {
	

	public List<Review> findAllByBookId(int bookId);

}
