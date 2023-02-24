package com.cg.bookstoreapplication.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.bookstoreapplication.entities.Author;
@Repository
public interface IAuthorRepository extends JpaRepository<Author, Integer> {

	public Author getAuthorByAuthorName(String authorName);

	public List<Author> findAuthorByCategory(String category);
	
	

	
}
