package com.whu.springbootlibrary.mappers;

import com.whu.springbootlibrary.dto.review.AddReviewDto;
import com.whu.springbootlibrary.dto.review.ReviewDto;
import com.whu.springbootlibrary.model.Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ReviewMapper {

    @Mapping(target = "warbandId", source = "review.warbandId.id")
    @Mapping(target = "userId", source = "review.userId.id")
    ReviewDto toReviewDto(Review review);

    @Mapping(target = "warbandId.id", source = "addReviewDto.warbandId")
    @Mapping(target = "userId.id", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "starsAmount", source = "addReviewDto.starsAmount")
    Review addReviewDtoToReview(AddReviewDto addReviewDto);
}
