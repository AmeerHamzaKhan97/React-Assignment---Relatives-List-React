import React from 'react';
import '../styles/App.css';

class App extends React.Component{
    render(){
        const list = ["john","cena","triple","jeff","hardy"];
        const listItem= list.map((item,i)=>
        <li key ={"relativeListItem"+(i+1)}>{item}</li>
        );

        return(
            <div id="main">
                <ol key="relativeList">
                    {listItem}

                </ol>
            </div>
        )
    }
}
export default App;
//done