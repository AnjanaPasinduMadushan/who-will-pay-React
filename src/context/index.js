import React,{Component} from "react";


const Mybill = React.createContext();

class MyProvider extends Component{


    state = {
        stage: 2
    }

    render(){
        return(
            <>
            <Mybill.Provider value ={{
                state: this.state
            }}>
                {this.props.children}
            </Mybill.Provider>
            </>
        )
    }
}

export {Mybill, MyProvider}