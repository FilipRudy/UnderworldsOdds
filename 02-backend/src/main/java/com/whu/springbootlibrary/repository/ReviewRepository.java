package com.whu.springbootlibrary.repository;

import com.whu.springbootlibrary.model.Review;
import com.whu.springbootlibrary.model.User;
import com.whu.springbootlibrary.model.Warband;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    Optional<Review> findByUserIdAndWarbandId(User userId, Warband warbandId);

    Optional<List<Review>> findAllByWarbandId(Warband warband);
}
