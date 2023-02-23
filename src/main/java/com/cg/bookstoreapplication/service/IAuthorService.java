package com.cg.bookstoreapplication.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.bookstoreapplication.entities.Author;
@Service
public interface IAuthorService {

	public Author registerAuthor(Author author) throws Exception;
	public List<Author> getAllAuthors();
	public Author getAuthorByAuthorName(String authorName) throws Exception;
	public Author getAuthorById(int authorId) throws Exception;
	
	//public List<Author> findAuthorByCategory(String category);
	
}
