package com.whu.springbootlibrary.model;


import java.util.List;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "warband")
public class Warband {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "faction_name")
    @Enumerated(EnumType.STRING)
    private Factions factionName;

    @Column(name = "number_of_fighters")
    private Integer numberOfFighters;

    @OneToMany(mappedBy = "warbandId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews;

}
