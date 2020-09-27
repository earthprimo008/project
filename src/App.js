import{BrowserRouter as Router,Route,Link} from 'react-router-dom';
import React , {Component} from 'react';
import Fishinput from './components/fishInput'
import Fishlist from './components/fishlist'
import Farmer from './components/farmer';
import axios from 'axios';
//import firebase from 'firebase';                                          
import { Layout, Menu, Breadcrumb } from 'antd';
                                            
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component{
  /*constructor(props){super(props);var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    firebase.initializeApp(config);
  }*/
  render(){
    return(
      <div className="App-header">
        <Header style={{height: "1000",width: "100%", background: "#1488C5", color: "white" }} className="header">
            <div>
            <h2 align="center">Fish Web Ja GROM PRA MONG JUB JUB <span><i class="fas fa-fish"></i></span></h2>
            </div>
        </Header>
        <div className="App-content">
          <Fishinput/>
        </div>
        <div>
        <Fishlist/>
        </div>
      </div>
    )
  }
}


export default App;






       