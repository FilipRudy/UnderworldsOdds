package com.whu.springbootlibrary.repository;

import com.whu.springbootlibrary.model.Review;
import com.whu.springbootlibrary.model.Warband;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("SELECT r FROM Review r WHERE r.userId.id = :userId AND r.warbandId.id = :warbandId")
    Optional<Review> findByUserIdAndWarbandId(Long userId, Long warbandId);


    Optional<List<Review>> findAllByWarbandId(Warband warband);
}
