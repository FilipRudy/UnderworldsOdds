package com.whu.springbootlibrary.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "warband")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
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

    @OneToMany(mappedBy = "warband", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Review> reviews;

    @Override
    public String toString() {
        return "Warband{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", factionName=" + factionName +
                ", numberOfFighters=" + numberOfFighters +
                ", rating=" + rating +
                ", season='" + season + '\'' +
                '}';
    }
}
