import './App.css'
import React from "react";
import ComponentTest from "./components/ComponentTest.tsx";

export function Bandera(){
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

function App() {
    return(
        <div>
            <ComponentTest></ComponentTest>
        </div>

    )
}


export default App;
