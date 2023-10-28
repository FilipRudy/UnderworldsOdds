package com.whu.springbootlibrary.model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "warband")
public class Warband {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String factionName;

    private Integer numberOfFighters;
}
