package com.cg.bookstoreapplication.util;

import org.springframework.stereotype.Component;

import com.cg.bookstoreapplication.dto.BookAdminResponseDTO;
import com.cg.bookstoreapplication.dto.BookDTO;
import com.cg.bookstoreapplication.dto.BookDetailedDTO;
import com.cg.bookstoreapplication.entities.Book;

@Component
public class BookDTOConvertor {
	
	public BookAdminResponseDTO getBookAdminResponseDTO(Book b)
	{
		BookAdminResponseDTO dto = new BookAdminResponseDTO();
		dto.setBookId(b.getBookId());
		dto.setAuthor(b.getAuthor());
		dto.setTitle(b.getTitle());
		dto.setMsg("Book saved");
		return dto;
	}
	
	public BookDTO getBookDTO(Book b)
	{
		BookDTO obj = new BookDTO(b.getBookId(),b.getTitle(),b.getAuthor(),b.getLanguage());
		return obj;
	}
	
	public BookDetailedDTO getBookDetailedDTO(Book b)
	{
		BookDetailedDTO bookdto = new BookDetailedDTO();
		bookdto.setBookId(b.getBookId());
		bookdto.setAuthor(b.getAuthor());
		bookdto.setTitle(b.getTitle());
		bookdto.setCategory(b.getCategory());
		bookdto.setDescription(b.getDescription());
		bookdto.setPrice(b.getPrice());
		bookdto.setPublishDate(b.getPublishDate());
		bookdto.setDiscount(b.getDiscount());
		bookdto.setLanguage(b.getLanguage());
		bookdto.setImageName(b.getImageName());
		return bookdto;
	}
}//end class
