package com.whu.springbootlibrary.service;

import com.whu.springbootlibrary.dao.WarbandRepository;
import com.whu.springbootlibrary.model.Warband;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class WarbandService {

    private WarbandRepository warbandRepository;

    public WarbandService(WarbandRepository warbandRepository) {
        this.warbandRepository = warbandRepository;
    }

    public List<Warband> getAllWarbands() {
        List<Warband> warbands = warbandRepository.findAll();
        if (!warbands.isEmpty()) {
            return warbands;
        }
        throw new RuntimeException("There are no warbands present in the database");
    }

    public Warband getWarbandById(Integer id) {
        Optional<Warband> optionalWarband = warbandRepository.findById(id);

        if (optionalWarband.isPresent()) {
            return optionalWarband.get();
        }

        throw new RuntimeException("There is no warband with id = " + id);
    }
}
