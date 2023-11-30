package com.whu.springbootlibrary.service;


import com.whu.springbootlibrary.dao.ReviewRepository;
import com.whu.springbootlibrary.dto.review.AddReviewDto;
import com.whu.springbootlibrary.dto.review.ReviewDto;
import com.whu.springbootlibrary.mappers.ReviewMapper;
import com.whu.springbootlibrary.model.Review;
import com.whu.springbootlibrary.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserService userService;

    private final ReviewMapper reviewMapper;

    public ReviewDto addReview(AddReviewDto addReviewDto){

        User currentUser = this.userService.getCurrentUser();
        Review review = reviewMapper.addReviewDtoToReview(addReviewDto);

        review.setUserId(currentUser);

        Review savedReview = reviewRepository.save(review);

        return reviewMapper.toReviewDto(savedReview);
    }
}
