package com.whu.springbootlibrary.dao;

import com.whu.springbootlibrary.model.Warband;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", methods = RequestMethod.GET)
public interface WarbandRepository extends JpaRepository<Warband, Integer> {
    List<Warband> findAll();

}
