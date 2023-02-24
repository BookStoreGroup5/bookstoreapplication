package com.cg.bookstoreapplication.dto;

import lombok.Data;

@Data
public class BookAdminResponseDTO {

	private int bookId;
	private String title;
	private String author;
	private String msg;
}
