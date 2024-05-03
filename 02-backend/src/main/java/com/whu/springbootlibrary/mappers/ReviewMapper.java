package com.whu.springbootlibrary.mappers;

import com.whu.springbootlibrary.dto.review.AddReviewDto;
import com.whu.springbootlibrary.dto.review.ReviewDto;
import com.whu.springbootlibrary.model.Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ReviewMapper {

    @Mapping(target = "warbandId", source = "review.warband.id")
    @Mapping(target = "userId", source = "review.user.id")
    ReviewDto toReviewDto(Review review);

    @Mapping(target = "warband.id", source = "addReviewDto.warbandId")
    @Mapping(target = "user.id", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "starsAmount", source = "addReviewDto.starsAmount")
    Review addReviewDtoToReview(AddReviewDto addReviewDto);
}
