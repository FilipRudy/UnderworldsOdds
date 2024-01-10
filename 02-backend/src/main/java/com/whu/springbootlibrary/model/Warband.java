package com.whu.springbootlibrary.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.util.List;

@Entity
@Data
@Table(name = "warband")
public class Warband {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "faction_name")
    @Enumerated(EnumType.STRING)
    private Factions factionName;

    @Column(name = "number_of_fighters")
    private Integer numberOfFighters;

    private Integer rating;

    private String season;

    @ToString.Exclude
    @JsonIgnore
    @OneToMany(mappedBy = "warbandId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews;

}
