package com.whu.springbootlibrary.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "warband_id", nullable = false)
    private Warband warband;

    @ManyToOne()    @JsonIgnore
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "stars_amount")
    @Max(5)
    private Integer starsAmount;

    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", starsAmount=" + starsAmount +
                '}';
    }
}
