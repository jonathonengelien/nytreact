import React from 'react';
import { Component } from 'react';
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import './home.css';


class  Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return (
            <div>
                <Nav/>
                    <div className="ui container home-container">
                        <Header/>
                    </div>
                <Footer/>
            </div>
         );
    }
}
 
export default Home;