package com.whu.springbootlibrary.controller;


import com.whu.springbootlibrary.dto.review.AddReviewDto;
import com.whu.springbootlibrary.dto.review.ReviewDto;
import com.whu.springbootlibrary.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http:/localhost:3000")
@RequestMapping("review")
public class ReviewController {

    public final ReviewService reviewService;

    @PostMapping("/add")
    public ReviewDto addReview (@RequestBody AddReviewDto addReviewDto) {
        return reviewService.addReview(addReviewDto);
    }
}
