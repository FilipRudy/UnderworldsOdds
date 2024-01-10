package com.whu.springbootlibrary.repository;

import com.whu.springbootlibrary.model.Warband;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface WarbandRepository extends JpaRepository<Warband, Integer> {

    Optional<Warband> findById(Long id);


    @Query("UPDATE Warband w SET w.rating = :rating WHERE w.id = :warbandId")
    void updateWarband(@Param("warbandId") Long warbandId, @Param("rating") Integer rating);


    @Query("SELECT w FROM Warband w WHERE " +
            "(:chaos = true AND w.factionName = 'Chaos') OR " +
            "(:order = true AND w.factionName = 'Order') OR " +
            "(:death = true AND w.factionName = 'Death') OR " +
            "(:destruction = true AND w.factionName = 'Destruction') OR " +
            "(:threeFighters = true AND w.numberOfFighters = 3) OR " +
            "(:fourFighters = true AND w.numberOfFighters = 4) OR " +
            "(:fiveFighters = true AND w.numberOfFighters = 5) OR " +
            "(:sixFighters = true AND w.numberOfFighters = 6) OR " +
            "(:sevenFighters = true AND w.numberOfFighters = 7) OR " +
            "(:shadespire = true AND w.season = 'Shadespire') OR " +
            "(:nightvault = true AND w.season = 'Nightvault') OR " +
            "(:beastgrave = true AND w.season = 'Beastgrave') OR " +
            "(:direchasm = true AND w.season = 'Direchasm') OR " +
            "(:harrowdeep = true AND w.season = 'Harrowdeep') OR " +
            "(:nethermaze = true AND w.season = 'Nethermaze') OR " +
            "(:gnarlwood = true AND w.season = 'Gnarlwood') OR " +
            "(:wyrdhollow = true AND w.season = 'Wyrdhollow') OR " +
            "(:deathgorge = true AND w.season = 'Deathgorge')")
    List<Warband> findAllBy(
            @Param("chaos") boolean chaos,
            @Param("order") boolean order,
            @Param("death") boolean death,
            @Param("destruction") boolean destruction,
            @Param("threeFighters") boolean threeFighters,
            @Param("fourFighters") boolean fourFighters,
            @Param("fiveFighters") boolean fiveFighters,
            @Param("sixFighters") boolean sixFighters,
            @Param("sevenFighters") boolean sevenFighters,
            @Param("shadespire") boolean shadespire,
            @Param("nightvault") boolean nightvault,
            @Param("beastgrave") boolean beastgrave,
            @Param("direchasm") boolean direchasm,
            @Param("harrowdeep") boolean harrowdeep,
            @Param("nethermaze") boolean nethermaze,
            @Param("gnarlwood") boolean gnarlwood,
            @Param("wyrdhollow") boolean wyrdhollow,
            @Param("deathgorge") boolean deathgorge
    );


}
