package com.whu.springbootlibrary.dao;

import com.whu.springbootlibrary.model.Warband;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

public interface WarbandRepository extends JpaRepository<Warband, Integer> {
    List<Warband> findAll();
    Optional<Warband> findById(Integer id);
    Page<Warband> findByName(@RequestParam("name") String name, Pageable pageable);

    @Query("SELECT w FROM Warband w WHERE w.id = :id")
    Warband findOneById(@Param("id") Integer id);
}
