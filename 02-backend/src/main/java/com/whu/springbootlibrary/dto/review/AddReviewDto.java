package com.whu.springbootlibrary.dto.review;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddReviewDto {

    private Long warbandId;
    private Integer starsAmount;

}