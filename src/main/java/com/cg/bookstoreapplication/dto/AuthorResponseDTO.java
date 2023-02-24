package com.cg.bookstoreapplication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthorResponseDTO {

	private int authorId;
	private String authorName;
	private String msg;
}
