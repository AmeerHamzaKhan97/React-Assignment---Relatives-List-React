import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const list = ["Aquib","Irfan","Hamza","Sufiyan","Hafiz","Arsalaan"];
        const listItem = list.map((item,i)=>
            <li key={"relativeListItem"+(i+1)} >{item}</li>
        );

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
                   {listItem}
               </ol>

            </div>
        )
    }
}


export default App;
