import React,{Component} from "react";


const Mybill = React.createContext();

class MyProvider extends Component{


    state = {
        stage: 1,
        players:[]
    }

    addPlayerHandler = (name) =>{
        this.setState((prevState)=>({
            players:[
                ...prevState.players,
                 name
            ]
        }))
    }

    render(){
        return(
            <>
            <Mybill.Provider value ={{
                state: this.state,
                addPlayer:this.addPlayerHandler
            }}>
                {this.props.children}
            </Mybill.Provider>
            </>
        )
    }
}

export {Mybill, MyProvider}