package com.whu.springbootlibrary.controller;

import com.whu.springbootlibrary.dto.review.AddReviewDto;
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
    @GetMapping("/all/{username}")
    public List<Review> getAllByUsername(@PathVariable String username) {
        List<Review> dupal = null;
        try{
            List<Review> dupa = reviewService.getAllByUsername(username);
            return dupa;
        } catch (Error e)
        {
            System.out.println("print"+e);
            return dupal;
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
