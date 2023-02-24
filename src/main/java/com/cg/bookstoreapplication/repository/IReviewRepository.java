package com.cg.bookstoreapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.bookstoreapplication.entities.Review;

@Repository
public interface IReviewRepository extends JpaRepository<Review,Integer> {
	public Review getReviewByCustomerId(int customerId);

}
