
import React, {useContext} from 'react'
import { Mybill } from '../context';

const Stage2 = () =>{

    const context = useContext(Mybill);

    return(
        <>
        <div className='result_wrapper'>
            <h3>The looser is: </h3>
            <div>{context.state.result}</div>
        </div>

        <div className='action_button'
        
        onClick={()=>context.resetGeme()}> 

            Start Over  
        </div>

        <div className='action_button btn_2'
        
        onClick={()=>context.getNewLooser()}> 

           Get New Looser  
        </div>
        </>
    )

}

export default Stage2