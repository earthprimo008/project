import React ,{Component} from "react";
import FishItem from './fishitem';

export default class fishlist extends Component{
    render(){
        return(
            <div className="App-content">
                <h1>fish โว้ย</h1>       
                <FishItem/>
                <FishItem/>      
            </div>

        )

    }

}
