package com.cg.bookstoreapplication.controller;

import java.util.ArrayList;

import java.util.List;

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

import com.cg.bookstoreapplication.dto.AuthorResponseDTO;
import com.cg.bookstoreapplication.dto.AuthorResponseDetailedDTO;
import com.cg.bookstoreapplication.entities.Author;

import com.cg.bookstoreapplication.service.IAuthorService;
import com.cg.bookstoreapplication.util.AuthorDTOConvertor;

@RestController
@RequestMapping("/author")
public class AuthorRestController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	IAuthorService authorService;
	
	@Autowired
	AuthorDTOConvertor authorDTOConvertor;
	
public AuthorRestController() {
		
		logger.info("---Author Controller Called --");
		logger.warn("---Author Controller Called --");
		
		System.err.println("Author Controller Called");
	}
	
	@PostMapping("/register")
	public ResponseEntity<AuthorResponseDTO> registrationOfAuthor(@RequestBody Author author) throws Exception
	{
		logger.info("registering Author");
		Author savedAuthor = authorService.registerAuthor(author);
		
		if(savedAuthor != null)
		{
			AuthorResponseDTO dto = authorDTOConvertor.getAuthorDTO(savedAuthor);
			return new ResponseEntity<AuthorResponseDTO>(dto,HttpStatus.OK);
		}
		return null;
	}
	@GetMapping("/authorlist")
	public ResponseEntity<List<AuthorResponseDetailedDTO>> getAllAuthors(){
		List<Author> allAuthors = authorService.getAllAuthors();
		List<AuthorResponseDetailedDTO> authorDTOList = new ArrayList<>();
		if(allAuthors !=null && allAuthors.isEmpty() ==false)
		{
			for (Author author : allAuthors) {
				AuthorResponseDetailedDTO dto = authorDTOConvertor.getDetailedAuthorDTO(author);
				authorDTOList.add(dto);
			}
		}
		return new ResponseEntity<List<AuthorResponseDetailedDTO>>(authorDTOList,HttpStatus.OK);
	}
	@GetMapping("{authorName}")
	public ResponseEntity<AuthorResponseDetailedDTO> getAuthorByName(@PathVariable String authorName)  throws Exception
	{
		Author savedAuthor = authorService.getAuthorByAuthorName(authorName);
		AuthorResponseDetailedDTO dto = authorDTOConvertor.getDetailedAuthorDTO(savedAuthor);
		return new ResponseEntity<AuthorResponseDetailedDTO>(dto,HttpStatus.OK);
		
	}
	
	@GetMapping("/author/{authorid}")
	public ResponseEntity<AuthorResponseDetailedDTO> getAuthorById(@PathVariable int authorId)  throws Exception
	{
		logger.info("\n author with id");
		Author savedAuthor = authorService.getAuthorById(authorId);
		AuthorResponseDetailedDTO dto = authorDTOConvertor.getDetailedAuthorDTO(savedAuthor);
		return new ResponseEntity<AuthorResponseDetailedDTO>(dto,HttpStatus.OK);
		
	}
	@GetMapping("/category/{category}")
	public ResponseEntity<List<AuthorResponseDetailedDTO>> getAuthorByCategory(@PathVariable String category)
	{
		logger.info("\n Listing authors based on category \n");
		List<Author> allAuthors = authorService.findAuthorByCategory(category);
		List<AuthorResponseDetailedDTO> dto = new ArrayList<>();
		for (Author author : allAuthors) {
			dto.add(authorDTOConvertor.getDetailedAuthorDTO(author));
			
		}
		return new ResponseEntity<List<AuthorResponseDetailedDTO>>(dto,HttpStatus.OK);
	}
	
}
