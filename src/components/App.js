import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(){
        this.list = ["Aquib","Irfan","Hamza","Sufiyan","Hafiz","Arsalaan"];
    }
    render() {
        const listItem = this.list.map((item,i)=>{
            <li key={"relative"+i} >{item}</li>
        })

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol>
                   {listItem}
               </ol>

            </div>
        )
    }
}


export default App;
