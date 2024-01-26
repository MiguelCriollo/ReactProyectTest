import React, { useState} from 'react';

function SpookyCounter() {
    const [character, setCharacter] = useState({
        name: 'Juanito Perez',
        strength: 100,
        intelligence: 10,
        charisma: 16
    })
    const characterKeys=Object.keys(character);
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setCharacter({
            ...character,
            [e.target.name]:e.target.value
        })
    }
    return(
        <>
            <label>
                {characterKeys.map((value) => {
                    return (
                        <>
                            <p>{value}</p>
                            <input
                                name={value}
                                value={character[value]}
                                onChange={handleChange}
                            />
                        </>
                    )
                })}
            </label>
            <button onClick={()=>{console.log(character); localStorage.setItem("Character",JSON.stringify(character))}}>Print Character</button>
        </>


    )

}

export default SpookyCounter