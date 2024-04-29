import React from "react";
import "../../css/dice-calculator/dice-calculator.css";
import { AttackSide } from "./attack-side/attack-side";
import { Results } from "./results/results";
import { DefenceSide } from "./defence-side/defence-side";
import {useMediaQuery} from "react-responsive";

export const DiceCalculator = () => {



    return (
    <div className='DiceCalculator'>
      <div className=' container-md	'>
          <div className='alert alert-dark'>
            <AttackSide  />
          </div>
      </div>
      <div className='container-md'>
        <div className='alert alert-success'>
          <Results/>
        </div>
      </div>
      <div className='container-md	'>
        <div className='alert alert-dark'>
          <DefenceSide/>
        </div>
      </div>
    </div>
    );
};
