package com.cg.bookstoreapplication.repository;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.bookstoreapplication.entities.Book;
@Repository
public interface IBookRepository extends JpaRepository<Book,Integer> {
	
	public Book findByTitleAndAuthor(String title,String author);
	public Book findByTitle(String title);
	public Book findByAuthor(String authorName);
	
	public List<Book> findByCategory(String category);
	
	
	//public List<Book> listBestSellingBook();
}
