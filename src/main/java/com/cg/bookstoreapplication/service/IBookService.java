package com.cg.bookstoreapplication.service;

import java.util.List;

import com.cg.bookstoreapplication.entities.Book;

public interface IBookService {
	public Book createBook(Book b);
	public List<Book> listAllBooks();
	public Book deleteBook(Book b);
	public Book editBook(Book b);
	public Book viewBook(Book b);
	public List<Book> listBooksByCategory(String cat);

}
