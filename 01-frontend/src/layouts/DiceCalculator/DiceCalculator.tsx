import React from "react";
import "../../css/DiceCalculator/DiceCalculator.css";
import { AttackSide } from "./AttackSide/AttackSide";
import { Results } from "./Results/Results";
import { DefenceSide } from "./DefenceSide/DefenceSide";
import {useMediaQuery} from "react-responsive";

export const DiceCalculator = () => {



    return (
    <div className='DiceCalculator'>
      <div className=' container-md	'>
          <div className='alert alert-info'>
            <AttackSide  />
          </div>
      </div>
      <div className='container-md'>
        <div className='alert alert-info'>
          <Results/>
        </div>
      </div>
      <div className='container-md	'>
        <div className='alert alert-info'>
          <DefenceSide/>
        </div>
      </div>
    </div>
    );
};
