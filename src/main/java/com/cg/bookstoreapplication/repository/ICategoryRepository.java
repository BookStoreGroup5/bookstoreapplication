package com.cg.bookstoreapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.bookstoreapplication.entities.Category;

public interface ICategoryRepository extends JpaRepository<Category,Integer>{
	
	public Category addCategory(String categoryName);
	public Category editCategory(Category cat);
	public Category viewAllCategories();
	public Category removeCategory(Category cat);

}
