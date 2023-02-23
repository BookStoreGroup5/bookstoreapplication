package com.cg.bookstoreapplication.exception;

import java.time.LocalDateTime;

import javax.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.cg.bookstoreapplication.dto.ExceptionDTOResponse;
@ControllerAdvice
public class CommonExceptionHandler {
	@ExceptionHandler
	public ResponseEntity<ExceptionDTOResponse> doSomeThings(EntityNotFoundException e)
	{
		ExceptionDTOResponse dto = new ExceptionDTOResponse();
		dto.setErrorMsg(e.getMessage());
		dto.setDateTime(LocalDateTime.now()+"");
		return new ResponseEntity<ExceptionDTOResponse>(dto,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler
	public ResponseEntity<ExceptionDTOResponse> doSomeThingForFieldsInput(InvalidInputException e)
	{
		ExceptionDTOResponse dto = new ExceptionDTOResponse();
		dto.setErrorMsg(e.toString());
		dto.setDateTime(LocalDateTime.now()+"");
		return new ResponseEntity<ExceptionDTOResponse>(dto,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler
	public ResponseEntity<ExceptionDTOResponse> doSomeThingForNullInput(NullPointerException e)
	{
		ExceptionDTOResponse dto = new ExceptionDTOResponse();
		dto.setErrorMsg(e.toString());
		dto.setDateTime(LocalDateTime.now()+"");
		return new ResponseEntity<ExceptionDTOResponse>(dto,HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler
	public ResponseEntity<ExceptionDTOResponse> doThingsForBookAlreadyExistException(BookAlreadyExistException e)
	{
		ExceptionDTOResponse dto = new ExceptionDTOResponse();
		dto.setErrorMsg(e.toString());
		dto.setDateTime(LocalDateTime.now()+"");
		return new ResponseEntity<ExceptionDTOResponse>(dto,HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler
	public ResponseEntity<ExceptionDTOResponse> doThingsForBookNotFoundException(BookNotFoundException e)
	{
		ExceptionDTOResponse dto = new ExceptionDTOResponse();
		dto.setErrorMsg(e.toString());
		dto.setDateTime(LocalDateTime.now()+"");
		return new ResponseEntity<ExceptionDTOResponse>(dto,HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler
	public ResponseEntity<ExceptionDTOResponse> doThingsForCategoryNotFoundException(CategoryNotFoundException e)
	{
		ExceptionDTOResponse dto = new ExceptionDTOResponse();
		dto.setErrorMsg(e.toString());
		dto.setDateTime(LocalDateTime.now()+"");
		return new ResponseEntity<ExceptionDTOResponse>(dto,HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler
	public ResponseEntity<ExceptionDTOResponse> doThingsForOrderNotFoundException(OrderNotFoundException e)
	{
		ExceptionDTOResponse dto = new ExceptionDTOResponse();
		dto.setErrorMsg(e.toString());
		dto.setDateTime(LocalDateTime.now()+"");
		return new ResponseEntity<ExceptionDTOResponse>(dto,HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler
	public ResponseEntity<ExceptionDTOResponse> doThingsForReviewNotFoundException(ReviewNotFoundException e)
	{
		ExceptionDTOResponse dto = new ExceptionDTOResponse();
		dto.setErrorMsg(e.toString());
		dto.setDateTime(LocalDateTime.now()+"");
		return new ResponseEntity<ExceptionDTOResponse>(dto,HttpStatus.BAD_REQUEST);
	}
    
@ExceptionHandler
public ResponseEntity<ExceptionDTOResponse> invalidName(InvalidUserException e)
{
ExceptionDTOResponse dto = new ExceptionDTOResponse();
dto.setErrorMsg(e.toString());
dto.setDateTime(LocalDateTime.now()+"");
return new ResponseEntity<ExceptionDTOResponse>(dto,HttpStatus.BAD_REQUEST);
}
     


	
}
