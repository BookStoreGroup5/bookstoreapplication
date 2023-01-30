package com.cg.bookstoreapplication.service;

import com.cg.bookstoreapplication.entities.Category;

public interface ICategoryService {
	public Category addCategory(String categoryName);
	public Category editCategory(Category cat);
	public Category viewAllCategories();
	public Category removeCategory(Category cat);
	
	

}
