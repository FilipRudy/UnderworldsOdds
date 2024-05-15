package com.whu.springbootlibrary.service;

import com.whu.springbootlibrary.dto.review.AddReviewDto;
import com.whu.springbootlibrary.dto.review.ReviewDto;
import com.whu.springbootlibrary.mappers.ReviewMapper;
import com.whu.springbootlibrary.model.Review;
import com.whu.springbootlibrary.model.User;
import com.whu.springbootlibrary.model.Warband;
import com.whu.springbootlibrary.repository.ReviewRepository;
import com.whu.springbootlibrary.repository.WarbandRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final WarbandRepository warbandRepository;
    private final UserService userService;

    private final ReviewMapper reviewMapper;

    public ReviewDto addReview(AddReviewDto addReviewDto, Long warbandId) {
        try {
            User currentUser = this.userService.getCurrentUser();
            Review review = reviewMapper.addReviewDtoToReview(addReviewDto);
            Optional<Warband> warband = this.warbandRepository.findById(addReviewDto.getWarbandId());
            if (warband.isEmpty()) {

                throw new RuntimeException("There was an error while adding a review");

            }
            Optional<Review> optionalExistingReview = reviewRepository.findByUserIdAndWarbandId(currentUser.getId(), addReviewDto.getWarbandId());
            optionalExistingReview.ifPresent(reviewRepository::delete);

            if(optionalExistingReview.isPresent() && addReviewDto.getStarsAmount() == 0)
            {
                Review existingReview = optionalExistingReview.get();
                return reviewMapper.toReviewDto(existingReview);
            }

            review.setUser(currentUser);
            Review savedReview = reviewRepository.save(review);


            warband.get().setRating(this.calculateAverageRatingForWarband(addReviewDto.getWarbandId()));
            this.warbandRepository.save(warband.get());

            return reviewMapper.toReviewDto(savedReview);
        } catch (Error e) {
            throw new RuntimeException("There was an error while adding a review");

        }

    }

    public ReviewDto removeReview(Long warbandId) {
        User currentUser = this.userService.getCurrentUser();
        Optional<Warband> warband = this.warbandRepository.findById(warbandId);
        Optional<Review> existingReview = warband.isPresent() ?
                reviewRepository.findByUserIdAndWarbandId(currentUser.getId(), warbandId) :
                Optional.empty();

        if (existingReview.isEmpty()) {
            throw new RuntimeException("There are no reviews for warband of id: " + warbandId + " and user of id: " + currentUser.getId());
        }
        reviewRepository.delete(existingReview.get());
        return reviewMapper.toReviewDto(existingReview.get());
    }

    public Integer calculateAverageRatingForWarband(Long warbandId) {
        try {
            Optional<Warband> currentWarband = this.warbandRepository.findById(warbandId);
            Integer averageWarbandRating = 0;

            if (currentWarband.isEmpty()) {
                return 0;
            }

            Optional<List<Review>> optionalReviews = this.reviewRepository.findAllByWarbandId(warbandId);

            if (optionalReviews.isPresent()) {
                List<Review> warbandsReviews = optionalReviews.get();

                for (Review review :
                        warbandsReviews) {
                    averageWarbandRating += review.getStarsAmount();
                }

                return Math.round((float) averageWarbandRating / warbandsReviews.size());
            }

            return 0;


        } catch (Error e) {
            return 0;
        }


    }
    public List<Review> getAllByUsername(String username) {
        User user = this.userService.findByLogin(username);
        if(user == null)
        {
            throw new RuntimeException("No user with username " + username + " was found");
        }


        return user.getReviews();
    }
    public Review getOneByUserIdAndWarbandId(String username, Long warbandId) {
        User user = this.userService.findByLogin(username);

        Optional<Review> optionalReview = this.reviewRepository.findByUserIdAndWarbandId(user.getId(), warbandId);

        if(optionalReview.isEmpty())
        {
            throw new RuntimeException("No review for user with id: " + user.getId() + " and warband with id: " + warbandId + "  was found");

        }
        return optionalReview.get();
    }

}
