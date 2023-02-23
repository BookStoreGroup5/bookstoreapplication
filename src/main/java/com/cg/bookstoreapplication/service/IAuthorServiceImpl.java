package com.cg.bookstoreapplication.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.bookstoreapplication.entities.Author;
import com.cg.bookstoreapplication.entities.Book;

import com.cg.bookstoreapplication.exception.InvalidInputException;
import com.cg.bookstoreapplication.repository.IAuthorRepository;
import com.cg.bookstoreapplication.repository.IBookRepository;
import com.cg.bookstoreapplication.util.VerifyInput;
@Service
public class IAuthorServiceImpl implements  IAuthorService {
	
	@Autowired
	IAuthorRepository authorRepository;
	
	@Autowired
	IBookRepository bookRepository;

	@Override
	@Transactional
	public Author registerAuthor(Author author) throws Exception {
		if(author!=null)
		{
			//-- allow author to be inserted
			if(author.getAuthorName().equals(""))
			{
				throw new InvalidInputException("Author Name", "Author Name is Null");	
			}
			if(!VerifyInput.verifyEmail(author.getEmail()))
			{
				throw new InvalidInputException("Author Email", "Invalid Email id " +author.getEmail());
			}
		 Author savedAuthor =authorRepository.save(author);
		 return savedAuthor;
		}
		else 
			throw new NullPointerException("Author is Null");
	}

	@Override
	public List<Author> getAllAuthors() {
		return authorRepository.findAll();
	}

	@Override
	public Author getAuthorByAuthorName(String authorName) throws Exception {
		if(authorName!=null)
		{
		
			Author savedAuthor = authorRepository.getAuthorByAuthorName(authorName);
			if(savedAuthor!=null) return savedAuthor;
			else
			{
				throw new EntityNotFoundException("Invalid AuthorName :"+authorName);
			}
		}
		return null;
	}
	public Author getAuthorById(int authorId) throws Exception {
		if(authorId>=1)
		{
			Author savedAuthor = authorRepository.getReferenceById(authorId);
			if(savedAuthor!= null) return savedAuthor;
			else
			{
				throw new EntityNotFoundException("Invalid Author ID :"+authorId);
			}
		}
		
		
		return null;
	}

	
	

	@Override
	public List<Author> findAuthorByCategory(String category) {
		
		return authorRepository.findAuthorByCategory(category);
	}

}
