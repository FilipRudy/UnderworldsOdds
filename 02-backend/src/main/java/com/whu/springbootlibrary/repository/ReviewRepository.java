package com.whu.springbootlibrary.repository;

import com.whu.springbootlibrary.model.Review;
import com.whu.springbootlibrary.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("SELECT r FROM Review r WHERE r.user.id = :userId AND r.warband.id = :warbandId")
    Optional<Review> findByUserIdAndWarbandId(Long userId, Long warbandId);

    @Query("SELECT r FROM Review r WHERE r.user = :user")
    Review[] findAllByUserId(@Param("user") User user);

    Optional<List<Review>> findAllByWarbandId(Long warbandId);
}
