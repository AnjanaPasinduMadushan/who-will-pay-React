import React,{Component} from "react";
import {ToastContainer, toast} from 'react-toastify'

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
                    console.log("looser")
                }, 2000)
            })
        }
    }

    render(){
        return(
            <>
            <Mybill.Provider value ={{
                state: this.state,
                addPlayer:this.addPlayerHandler,
                removePlayer:this.removePlayerHandler,
                next:this.nextHandler
            }}>
                {this.props.children}
            </Mybill.Provider>

            <ToastContainer/>
            </>
        )
    }
}

export {Mybill, MyProvider}