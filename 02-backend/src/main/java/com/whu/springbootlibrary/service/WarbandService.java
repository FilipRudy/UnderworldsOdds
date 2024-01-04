package com.whu.springbootlibrary.service;

import com.whu.springbootlibrary.model.Warband;
import com.whu.springbootlibrary.repository.WarbandRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class WarbandService {

    private WarbandRepository warbandRepository;
    private ReviewService reviewService;

    public WarbandService(WarbandRepository warbandRepository, ReviewService reviewService) {
        this.warbandRepository = warbandRepository;
        this.reviewService = reviewService;
    }

    public List<Warband> getAllWarbands(Boolean chaos, Boolean order, Boolean death, Boolean destruction, Boolean threeFighters,
                                        Boolean fourFighters, Boolean fiveFighters,Boolean  sixFighters, Boolean sevenFighters,
                                        Boolean shadespire, Boolean nightvault, Boolean beastgrave,Boolean  direchasm,
                                        Boolean harrowdeep, Boolean nethermaze, Boolean gnarlwood, Boolean wyrdhollow,Boolean  deathgorge, Integer rating) {

        if (!chaos && !order && !death && !destruction && !threeFighters && !fourFighters && !fiveFighters &&
                !sixFighters && !sevenFighters && !shadespire && !nightvault && !beastgrave && !direchasm &&
                !harrowdeep && !nethermaze && !gnarlwood && !wyrdhollow && !deathgorge && (rating==0)) {
            return warbandRepository.findAll();
        }

        if (!chaos && !order && !death && !destruction && !threeFighters && !fourFighters && !fiveFighters && !sixFighters && !sevenFighters && !shadespire && !nightvault && !beastgrave && !direchasm && !harrowdeep && !nethermaze && !gnarlwood && !wyrdhollow && !deathgorge) {
            List<Warband> unfilteredWarbands =  warbandRepository.findAll();

            List<Warband> filteredWarbands = new ArrayList<>();

            for (Warband warband : unfilteredWarbands) {

                if (this.reviewService.calculateAverageRatingForWarband(warband.getId()) >= rating) {
                    filteredWarbands.add(warband);
                }
            }
            return filteredWarbands;
        }

        List<Warband> unfilteredWarbands =  warbandRepository.findAllBy(chaos, order, death, destruction, threeFighters, fourFighters, fiveFighters, sixFighters, sevenFighters,
                shadespire, nightvault, beastgrave, direchasm, harrowdeep, nethermaze, gnarlwood, wyrdhollow, deathgorge);

        List<Warband> filteredWarbands = new ArrayList<>();

        for (Warband warband : unfilteredWarbands) {

            if (this.reviewService.calculateAverageRatingForWarband(warband.getId()) >= rating) {
                filteredWarbands.add(warband);
            }
        }
        return filteredWarbands;

    }

    public Warband getWarbandById(Integer id) {
        Optional<Warband> optionalWarband = warbandRepository.findById(id);

        if (optionalWarband.isPresent()) {
            return optionalWarband.get();
        }

        throw new RuntimeException("There is no warband with id = " + id);
    }
}
