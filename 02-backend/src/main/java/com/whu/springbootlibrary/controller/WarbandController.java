package com.whu.springbootlibrary.controller;


import com.whu.springbootlibrary.model.Warband;
import com.whu.springbootlibrary.service.WarbandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http:/localhost:3000")
@RestController
@RequestMapping("/warbands")
public class WarbandController {

    private final WarbandService warbandService;

    @Autowired
    public WarbandController(WarbandService warbandService) {
        this.warbandService = warbandService;
    }

    @GetMapping()
    public List<Warband> getAllWarbands(
            @RequestParam(name = "chaos", required = false) Boolean chaos,
            @RequestParam(name = "order", required = false) Boolean order,
            @RequestParam(name = "death", required = false) Boolean death,
            @RequestParam(name = "destruction", required = false) Boolean destruction,

            @RequestParam(name = "threeFighters", required = false) Boolean threeFighters,
            @RequestParam(name = "fourFighters", required = false) Boolean fourFighters,
            @RequestParam(name = "fiveFighters", required = false) Boolean fiveFighters,
            @RequestParam(name = "sixFighters", required = false) Boolean sixFighters,
            @RequestParam(name = "sevenFighters", required = false) Boolean sevenFighters,

            @RequestParam(name = "shadespire", required = false) Boolean shadespire,
            @RequestParam(name = "nightvault", required = false) Boolean nightvault,
            @RequestParam(name = "beastgrave", required = false) Boolean beastgrave,
            @RequestParam(name = "direchasm", required = false) Boolean direchasm,
            @RequestParam(name = "harrowdeep", required = false) Boolean harrowdeep,
            @RequestParam(name = "nethermaze", required = false) Boolean nethermaze,
            @RequestParam(name = "gnarlwood", required = false) Boolean gnarlwood,
            @RequestParam(name = "wyrdhollow", required = false) Boolean wyrdhollow,
            @RequestParam(name = "deathgorge", required = false) Boolean deathgorge,

            @RequestParam(name = "rating", required = false) Integer rating
    ) throws Exception {
        return warbandService.getAllWarbands(chaos, order, death, destruction, threeFighters, fourFighters, fiveFighters, sixFighters, sevenFighters, shadespire, nightvault, beastgrave, direchasm, harrowdeep, nethermaze, gnarlwood, wyrdhollow, deathgorge, rating);
    }

    @GetMapping("/{id}")
    public Warband getWarbandById(@PathVariable Integer id) throws Exception {
        return warbandService.getWarbandById(id);
    }
}
