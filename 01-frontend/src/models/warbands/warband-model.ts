import {Factions} from "./factions-enum";


class WarbandModel {
    id: number;
    name: string;
    factionName: Factions;
    numberOfFighters: number;
    season: string;
    rating: number;


    constructor(id: number, name: string, factionName: Factions, numberOfFighters: number, season: string, rating: number) {
        this.id = id;
        this.name = name;
        this.factionName = factionName;
        this.numberOfFighters = numberOfFighters;
        this.season = season;
        this.rating = rating;
    }
}

export default WarbandModel;

