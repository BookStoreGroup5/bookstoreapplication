package com.cg.bookstoreapplication.service;

import java.util.ArrayList;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.bookstoreapplication.entities.Author;
import com.cg.bookstoreapplication.entities.Book;

import com.cg.bookstoreapplication.exception.BookAlreadyExistException;
import com.cg.bookstoreapplication.exception.BookNotFoundException;
import com.cg.bookstoreapplication.exception.CategoryNotFoundException;
import com.cg.bookstoreapplication.repository.IAuthorRepository;
import com.cg.bookstoreapplication.repository.IBookRepository;


@Service
public class IBookServiceImpl implements IBookService  {

	@Autowired
	IBookRepository bookRepository;
	
	@Autowired
	IAuthorRepository authorRepository;
	

	@Override
	public Book createBook(Book b) throws Exception {
		Book book = bookRepository.findByTitleAndAuthor(b.getTitle(),b.getAuthor());
		if(book == null)
		{
			bookRepository.save(b);
		}
		else
			throw new BookAlreadyExistException("Book with title"+b.getTitle()+" by the author "+b.getAuthor()+" already exist");
		return b;
	}

	@Override
	public List<Book> listAllBooks() throws Exception {
		List<Book> list = bookRepository.findAll();
		if(list.isEmpty())
			throw new BookNotFoundException("There is no book in the DB : ");
		return list;
	}

	@Override
	public boolean deleteBook(int bookId) {
		 bookRepository.getReferenceById(bookId);
		 return true;
		
	}

	@Override
	public List<Book> listBooksByCategory(String category) throws Exception {
		List<Book> book = bookRepository.findByCategory(category);
		if(book == null)
			throw new CategoryNotFoundException("There is no such category with the name" +category);
		if(book.isEmpty())
			throw new BookNotFoundException("There is no book in the category : "+category);
		return book;
	
	}

	@Override
	public Book findByTitleAndAuthor(String title, String author) throws Exception {
		if(title != null & author!=null)
		{
			Book savedBook = bookRepository.findByTitleAndAuthor(title, author);
			if(savedBook!= null) return savedBook;
			else
				 throw new BookNotFoundException("There is Book in DB with title "+title+"and the author"+author);
		}
		return null;
	}

	@Override
	public Book findByTitle(String title) throws Exception{
		
		if(title!=null)
		{
			Book savedBook = bookRepository.findByTitle(title);
			if(savedBook!=null) return savedBook;
			else
				throw new BookNotFoundException("There is no book in DB with title : "+title);
		}
		return null;
	}

	@Override
	public Book findById(int id) throws Exception {
		if(id>=1)
		{
			Book savedBook = bookRepository.getReferenceById(id);
			if(savedBook !=null) return savedBook;
			else
			{
				throw new BookNotFoundException("There is no book in Db with ID: "+id);
			}
		}
		return null;
	}

	@Override
	@Transactional
	public Book updateAuthorByBookId(int authorId, int bookId) throws Exception {
		//1.get Book
		
		Book bookFromDB = findById(bookId);
		
		//2. get Author
		
		Author authorFromDB = authorRepository.getReferenceById(authorId);
		
		// if Book & Author both are valid and available in DB then 
		
		if(bookFromDB != null & authorFromDB != null)
		{
			List<Book> allBooks = authorFromDB.getAllBooks();
			
			if(allBooks != null && allBooks.isEmpty() == false)
			{
				allBooks.add(bookFromDB);
				authorFromDB.setAllBooks(allBooks);
			}
			
			else // if author are null then create ArrayList and add Book
				
			{
				List<Book> newBookList = new ArrayList<>();
				newBookList.add(bookFromDB);
				authorFromDB.setAllBooks(newBookList);
			}
			//call repository save method
			authorRepository.saveAndFlush(authorFromDB);
			bookRepository.save(bookFromDB);
			return bookFromDB;
		}
		else
			{
			// if book or author not in db
				throw new NullPointerException("Either Book "+bookFromDB+"or Author "+authorFromDB+"is Null ");
			}
	}
	
	

	
	
	
}
