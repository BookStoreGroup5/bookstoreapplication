package com.cg.bookstoreapplication.util;

import org.springframework.stereotype.Component;

import com.cg.bookstoreapplication.dto.AuthorResponseDTO;
import com.cg.bookstoreapplication.dto.AuthorResponseDetailedDTO;
import com.cg.bookstoreapplication.entities.Author;
@Component
public class AuthorDTOConvertor {

	public AuthorResponseDTO getAuthorDTO(Author author)
	{
		return new AuthorResponseDTO(author.getAuthorId(),author.getAuthorName(),"Author Added");
	}
	public AuthorResponseDetailedDTO getDetailedAuthorDTO(Author author)
	{
		AuthorResponseDetailedDTO dto = new AuthorResponseDetailedDTO();
		dto.setAuthorId(author.getAuthorId());
		dto.setAuthorName(author.getAuthorName());
		dto.setAbout(author.getAbout());
	dto.setNoOfBooksPublished(author.getNoOfBooksPublished());
	dto.setImageName(author.getImageName());
	
	return dto;
	}
}
