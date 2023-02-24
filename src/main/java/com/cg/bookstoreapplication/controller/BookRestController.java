package com.cg.bookstoreapplication.controller;

import java.time.LocalDateTime;

import java.util.ArrayList;
import java.util.List;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.cg.bookstoreapplication.dto.BookAdminResponseDTO;
import com.cg.bookstoreapplication.dto.BookDTO;
import com.cg.bookstoreapplication.dto.BookDetailedDTO;
import com.cg.bookstoreapplication.entities.Book;
import com.cg.bookstoreapplication.service.IBookService;
import com.cg.bookstoreapplication.util.BookDTOConvertor;

@RestController
@RequestMapping("/book")
public class BookRestController {
	

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	IBookService bookService;
	
	@Autowired
	BookDTOConvertor bookDTOConvertor;
	
	public BookRestController() {
		
		logger.info("---Book Controller Called --");
		logger.warn("---Book Controller Called --");
		
		System.err.println("Book Controller Called");
	}
	@GetMapping("/welcome")
	public String sayHello()
	{
		LocalDateTime todayDate = LocalDateTime.now();
		return "Welcome "+todayDate;
	}
	
	@PostMapping("/addBook")
	public ResponseEntity<BookAdminResponseDTO> createBook(@RequestBody Book b) throws Exception
	{
		logger.info("\n Creating a book \n");
		Book savedBooks = bookService.createBook(b);
		if(savedBooks!= null) {
		BookAdminResponseDTO responseDTO = bookDTOConvertor.getBookAdminResponseDTO(savedBooks);
		return new ResponseEntity<BookAdminResponseDTO>(responseDTO,HttpStatus.OK);
		}
		return null;
	}
	
	@GetMapping("/list")
	public ResponseEntity<List<BookDTO>> listAllBooks() throws Exception
	{
		logger.info("\n Finding the list of books \n");
		List<Book> allBooks = bookService.listAllBooks(); // give us raw data (complete information , which we cannot share with users directly)
		// Converting into DTO form , which we can share with user
		List<BookDTO> allBookDTO = new ArrayList<>();
		
		if(allBooks !=null &&allBooks.isEmpty()==false)
		{
		for (Book book : allBooks) {
			allBookDTO.add(bookDTOConvertor.getBookDTO(book));
			}
		return new ResponseEntity<List<BookDTO>>(allBookDTO,HttpStatus.OK);
		}
		else
			return new ResponseEntity<List<BookDTO>>(HttpStatus.NOT_FOUND);
	}
	@GetMapping("/category/{category}")
	public ResponseEntity<List<BookDTO>> getBooksByCategory (@PathVariable String category) throws Exception
	{
		logger.info("\n Listing the books by category \n ");
		List<Book> allBooks = bookService.listBooksByCategory(category);
		List<BookDTO> allBookDTO = new ArrayList<>();
		
		for (Book book : allBooks) {
			allBookDTO.add(bookDTOConvertor.getBookDTO(book));
		}
		return new ResponseEntity<List<BookDTO>>(allBookDTO,HttpStatus.OK);
	}
	
	@DeleteMapping("/remove/{bookid}")
	public  ResponseEntity<Boolean> deleteBook(@RequestBody int bookId) 
	{
		logger.info("\n Delete the book \n ");
		  boolean status =bookService.deleteBook(bookId);
		return new ResponseEntity<Boolean>(status,HttpStatus.OK) ;
	}
	
	@GetMapping("/bookId/{id}")
	public ResponseEntity<BookDetailedDTO> getBookById(@PathVariable int bookid) throws Exception
	{
		logger.info("Book by id");
		Book savedBook = bookService.findById(bookid);
		BookDetailedDTO dto = bookDTOConvertor.getBookDetailedDTO(savedBook);
		return new ResponseEntity<BookDetailedDTO>(dto,HttpStatus.OK);
		
	}
	@GetMapping("/title/{title}")
	public ResponseEntity<BookDetailedDTO> getBookByTitle(@PathVariable String title) throws Exception
	{
		logger.info("Book by title");
		Book savedBook = bookService.findByTitle(title);
		BookDetailedDTO dto = bookDTOConvertor.getBookDetailedDTO(savedBook);
		return new ResponseEntity<BookDetailedDTO>(dto,HttpStatus.OK);
		
	}
	@GetMapping("/title/{title}/author/{author}")
	public ResponseEntity<BookDetailedDTO> getBookByTitleAndAuthor(@PathVariable String title,@PathVariable String author) throws Exception
	{
		logger.info("Book by  title and author");
		Book savedBook = bookService.findByTitleAndAuthor(title,author);
		BookDetailedDTO dto = bookDTOConvertor.getBookDetailedDTO(savedBook);
		return new ResponseEntity<BookDetailedDTO>(dto,HttpStatus.OK);
		
	}
	@PutMapping("/bookId/{bookId}/author/{authorId}")
	public ResponseEntity<BookDetailedDTO> updateBookByAuthorId(@PathVariable int bookId,@PathVariable int authorId) throws Exception
	{
		//call service layer & update book with author
		Book updatedBook = bookService.updateAuthorByBookId(authorId, bookId);
		if(updatedBook != null)
		{
			BookDetailedDTO dto = bookDTOConvertor.getBookDetailedDTO(updatedBook);
			return new ResponseEntity<BookDetailedDTO>(dto,HttpStatus.OK);
		}
		
		return null;
	}
	
	
}//end class
