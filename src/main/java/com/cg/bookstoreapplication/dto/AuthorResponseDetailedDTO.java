package com.cg.bookstoreapplication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthorResponseDetailedDTO {

   private int authorId;
	
	private String authorName;
	private int noOfBooksPublished;
	private String registeredContactDetails;
	private String category;
}
