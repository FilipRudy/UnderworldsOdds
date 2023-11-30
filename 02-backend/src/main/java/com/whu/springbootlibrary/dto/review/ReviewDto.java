package com.whu.springbootlibrary.dto.review;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReviewDto {

    private Long id;
    private Long warbandId;
    private Long userId;
    private Integer starsAmount;

}