package com.cg.bookstoreapplication.service;

import java.util.List;



import org.springframework.stereotype.Service;

import com.cg.bookstoreapplication.entities.Book;


@Service
public interface IBookService {

	public Book createBook(Book b) throws Exception;
	public List<Book> listAllBooks()throws Exception;
	public boolean deleteBook(int bookId);
	
	
	public List<Book> listBooksByCategory(String category) throws Exception;
	public Book findByTitleAndAuthor(String title,String author) throws Exception;
	public Book findByTitle(String title) throws Exception;
	public Book findById(int id) throws Exception;
	
	
	public Book updateAuthorByBookId(int authorId, int bookId) throws Exception;
	
	
	
}
