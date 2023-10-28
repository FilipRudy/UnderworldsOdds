import {Factions} from "./FactionsEnum";


class WarbandModel {
    id: number;
    name: string;
    factionName: Factions;
    numberOfFighters: number;

    constructor(id: number, name: string, factionName: Factions, numberOfFighters: number) {
        this.id = id;
        this.name = name;
        this.factionName = factionName;
        this.numberOfFighters = numberOfFighters;
    }
}

export default WarbandModel;

