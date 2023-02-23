package com.cg.bookstoreapplication.controller;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.bookstoreapplication.dto.ReviewResponseDTO;
import com.cg.bookstoreapplication.dto.ReviewResponseDetailedDTO;
import com.cg.bookstoreapplication.entities.Review;
import com.cg.bookstoreapplication.service.IReviewService;
import com.cg.bookstoreapplication.util.ReviewDTOConvertor;

@RestController
@RequestMapping("/review")
public class ReviewRestController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	IReviewService reviewService;

	@Autowired
	ReviewDTOConvertor dtoConvertor;

	public ReviewRestController() {
		logger.info("---Review Controller Called --");
		logger.warn("---Review Controller Called --");

		System.err.println("Review Controller Called");
	}

	@PostMapping("/addreview")
	public ResponseEntity<ReviewResponseDTO> addReview(@RequestBody Review review) throws Exception {
		System.err.println("1 inside addReviewRest controller   "+review);
		Review savedReview = reviewService.addReview(review);
		if (savedReview != null) {
			ReviewResponseDTO dto = dtoConvertor.getReviewDTO(savedReview);
			return new ResponseEntity<ReviewResponseDTO>(dto, HttpStatus.OK);
		}

		return null;

	}

	@GetMapping("/list")
	public ResponseEntity<List<ReviewResponseDetailedDTO>> getAllReviews() {
		List<Review> allReviews = reviewService.listAllReviews();
		List<ReviewResponseDetailedDTO> revDtoList = new ArrayList<>();

		if (allReviews != null && allReviews.isEmpty() == false) {

			for (Review review : allReviews) {
				ReviewResponseDetailedDTO dto = dtoConvertor.getDetailedReviewDTO(review);
				revDtoList.add(dto);
			}
		}
		return new ResponseEntity<List<ReviewResponseDetailedDTO>>(revDtoList, HttpStatus.OK);

	}
	
	
	@GetMapping("/review/{reviewId}")
	public ResponseEntity<ReviewResponseDetailedDTO> getReviewById(@PathVariable int reviewId) throws Exception
	{
		logger.info("review by id");
		Review savedReview = reviewService.findById(reviewId);
		ReviewResponseDetailedDTO dto =dtoConvertor.getDetailedReviewDTO(savedReview);
		return new ResponseEntity<ReviewResponseDetailedDTO>(dto,HttpStatus.OK);
		
	}
	
	@GetMapping("avgreview/bookId/{bookId}")
	public int getAverageReviewByBookId(@PathVariable int bookId) throws EntityNotFoundException
	{
		List<Review> allReviewsInDB = reviewService.listAllReviewsByBookId(bookId);
		if(allReviewsInDB.isEmpty()) {
			throw new EntityNotFoundException("No Book exists with this Key"+bookId);
		
		
		}else {
			int count=0;
			int avg=0;
			int totalreview=0;
			for(Review review : allReviewsInDB) {
				count++;
				totalreview+=review.getRating();
			}
			avg=totalreview/count;
			return avg;
		}
	
	}
	

	
	@GetMapping("/{bookId}")
	public List<Review> ListAllReviewsByBookId(@PathVariable("bookId") int BookId){
		return reviewService.listAllReviewsByBookId(BookId);
	}
		
	@PutMapping("/BookId/{bid}/reviewid/{reviewid}")
	public ResponseEntity<ReviewResponseDetailedDTO> updateReviewByBookId(@PathVariable int bid,@PathVariable int reviewid)throws Exception
	{
		
		
		
        Review updatedReview = reviewService.updateReviewByBookId(bid, reviewid);
		if(updatedReview != null)
		{
			ReviewResponseDetailedDTO dto = dtoConvertor.getDetailedReviewDTO(updatedReview);
			return new ResponseEntity<ReviewResponseDetailedDTO>(dto,HttpStatus.OK);
			
		}
		
		return null;
				
	}

}
