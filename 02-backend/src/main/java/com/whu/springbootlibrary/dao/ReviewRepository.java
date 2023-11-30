package com.whu.springbootlibrary.dao;

import com.whu.springbootlibrary.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
