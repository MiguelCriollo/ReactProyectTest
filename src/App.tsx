import './App.css'
import React from "react";

function App() {
    const handleCLick = (e) => {
        e.stopPropagation();
        alert(e.target.getAttribute('data-name'));
        alert("ECUADOR")
    }

    return (
        <div data-name={"yellow"} style={{backgroundColor: 'yellow', height: 'auto', width: '400px', padding: '20px', justifyContent: 'space-around'}} onClick={handleCLick}>
            <div data-name={"blue+9-"} style={{backgroundColor: 'blue', height: 'auto', padding: '20px'}} onClick={handleCLick}>
                <div data-name={"red"} style={{backgroundColor: 'red', height: '200px'}} onClick={handleCLick}>
                </div>
            </div>
        </div>
    );

}


export default App;
