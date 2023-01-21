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

    removePlayerHandler = (idx) =>{

        let newArray = this.state.players;
        newArray.splice(idx,1);

        this.setState({players:newArray});
    }

    render(){
        return(
            <>
            <Mybill.Provider value ={{
                state: this.state,
                addPlayer:this.addPlayerHandler,
                removePlayer:this.removePlayerHandler
            }}>
                {this.props.children}
            </Mybill.Provider>
            </>
        )
    }
}

export {Mybill, MyProvider}