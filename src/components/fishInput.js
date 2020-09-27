import React ,{Component} from "react";
import Axios from "axios";

export default class fishinput extends Component{
    state = {
        selectedFile: null
    }
    
    fileSelectedHandler = event => {  //file
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        Axios.post('');
    }
    render(){
        return(
            <div className="App-content">
                <form>
                    {/* </form><div tabIndex="0"></div>; */}
                    <div className="App-content">
                        <label>Beauty Fish Search <span><i class="fas fa-search"></i></span></label>
                        <input type="text" class="form-control" value=""onChange={this.handleChange}/>
                    </div>    
                    <input type="file" onChange={this.fileSelectedHandler}/><h2></h2>
                    <input type="submit" class="btn btn-primary" value="ค้นหา"/> 
                </form>
            </div>
        )
    }
}
