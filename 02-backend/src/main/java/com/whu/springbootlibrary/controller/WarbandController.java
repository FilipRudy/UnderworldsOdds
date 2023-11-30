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

    private WarbandService warbandService;

    @Autowired
    public WarbandController(WarbandService warbandService)
    {
        this.warbandService = warbandService;
    }

    @GetMapping("/")
    public List<Warband> getAllWarbands () throws Exception {
        return warbandService.getAllWarbands();
    }

    @GetMapping("/{id}")
    public Warband getWarbandById (@PathVariable Integer id) throws Exception {
        return warbandService.getWarbandById(id);
    }
}
