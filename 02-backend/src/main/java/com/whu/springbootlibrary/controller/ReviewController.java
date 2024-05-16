package com.whu.springbootlibrary.controller;

import com.whu.springbootlibrary.dto.review.AddReviewDto;
import com.whu.springbootlibrary.dto.review.GetReviewByIdDto;
import com.whu.springbootlibrary.dto.review.ReviewDto;
import com.whu.springbootlibrary.model.Review;
import com.whu.springbootlibrary.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http:/localhost:3000")
@RequestMapping("review")
public class ReviewController {

    public final ReviewService reviewService;

    @GetMapping("/average/{warbandId}")
    public Integer getAverageRatingForWarband(@PathVariable Long warbandId) {
        return reviewService.calculateAverageRatingForWarband(warbandId);
    }
    @GetMapping("/user/{warbandId}/{username}")
    public Review getReviewByUserIdAndWarbandId( @PathVariable Long warbandId, @PathVariable String username) {
        return reviewService.getOneByUserIdAndWarbandId(username, warbandId);
    }
    @GetMapping("/all/{username}")
    public List<Review> getAllByUsername(@PathVariable String username) {
        List<Review> reviewList = null;
        try{
            return reviewList = reviewService.getAllByUsername(username);
        } catch (Error e)
        {
            System.out.println("print"+e);
            return reviewList;
        }

    }

    @PostMapping("/add")
    public ReviewDto addReview(@RequestBody AddReviewDto addReviewDto, Long warbandId) {
        return reviewService.addReview(addReviewDto, warbandId);
    }

    @DeleteMapping("/remove/{warbandId}")
    public ReviewDto removeReview(@PathVariable Long warbandId) {
        return reviewService.removeReview(warbandId);
    }
}
