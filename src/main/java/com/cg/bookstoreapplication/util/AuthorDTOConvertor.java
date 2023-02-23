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
		if(author.getEmail()!=null &&author.getPhoneNumber()!=0)
		{
		String email = author.getEmail();
		String phone = author.getPhoneNumber()+"";
		
		String contact = "";
		
		contact += (!email.isBlank() && !email.equals(" ") )?"[ "+email : "Email Not Updated";
		contact += (!phone.isBlank() && !phone.equals(" ") )?" "+phone+" ]":"Phone Not Updated";
		
		dto.setRegisteredContactDetails(contact);
	}
	else 
		{
			dto.setRegisteredContactDetails("Not Yet Updated");
		}
	
	dto.setNoOfBooksPublished(author.getNoOfBooksPublished());
	dto.setCategory(author.getCategory());
	
	return dto;
	}
}
