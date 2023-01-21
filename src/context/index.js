import React,{Component} from "react";
import {ToastContainer, toast} from 'react-toastify'

const Mybill = React.createContext();

const DEFAULT_STATE = {
        stage: 1,
        players:[],
        result:''
}

class MyProvider extends Component{


    state = DEFAULT_STATE
    /*state = {
        stage: 1,
        players:[],
        result:''
    }
    */

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

    nextHandler = () => {
        const {players} = this.state;

        if(players.length<2){
            toast.error('You need to have more than 1 player!',{
                position:toast.POSITION.TOP_LEFT,
                autoClose:2000
            });
        }
        else{
            this.setState({
                stage:2
            }, ()=>{
                setTimeout(()=>{
                    this.genarateLooser();
                }, 2000)
            })
        }
    }

    genarateLooser = () =>{
        const {players} = this.state;

        this.setState({
            result: players[Math.floor(Math.random()*players.length)]
        })
    }

    resetGameAgain = () =>{
        this.setState(DEFAULT_STATE)
    }

    render(){
        return(
            <>
            <Mybill.Provider value ={{
                state: this.state,
                addPlayer:this.addPlayerHandler,
                removePlayer:this.removePlayerHandler,
                next:this.nextHandler,
                getNewLooser:this.genarateLooser,
                resetGeme:this.resetGameAgain
            }}>
                {this.props.children}
            </Mybill.Provider>

            <ToastContainer/>
            </>
        )
    }
}

export {Mybill, MyProvider}