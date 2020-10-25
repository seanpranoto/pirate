import React, { useState } from 'react'
import axios from "axios";
import { Header } from '../components/Header'
import { ContentWrapper, Rows, StyledButton } from '../components/Styled'
import { navigate } from '@reach/router';

export const NewForm = () => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [treasures, setTreasures] = useState("");
    const [phrases, setPhrases] = useState("");
    const [position, setPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [errors, setErrors] = useState([]);

    const styles = {
        contentButton: { margin: "0 0 0 47rem", display: "block" }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/Pirate", { name, url, treasures, phrases, position, pegLeg, eyePatch, hookHand })
            .then(() => {
                navigate("/pirates")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <>
            <Header buttonProps="Crew Board" h1Props="Add Pirate" linkProps="/pirates" />
            <ContentWrapper>
                {errors.map(err => <p>{err}</p>)}
                <form onSubmit={onSubmit}>
                    <Rows>
                        <label htmlFor="name">Pirate Name:</label>
                        <input type="text" name="name" onChange={(e) => setName(e.target.value)} />

                        <label htmlFor="url">Image Url:</label>
                        <input type="text" name="url" onChange={(e) => setUrl(e.target.value)} />

                        <label htmlFor="treasures"># of Treasure Chests:</label>
                        <input type="number" name="treausres" onChange={(e) => setTreasures(e.target.value)} />

                        <label htmlFor="phrases">Pirate Catch Phrase:</label>
                        <input type="text" name="phrases" onChange={(e) => setPhrases(e.target.value)} />
                    </Rows>
                    <Rows>
                        <label htmlFor="position">Crew Position:</label>
                        <select name="position" onClick={(e)=>setPosition(e.target.value)}>
                            <option value="Captain">Captain</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Quarter Master">Quarter Master</option>
                            <option value="Boatswain">Boatswain</option>
                            <option value="Poweder Monkey">Poweder Monkey</option>
                        </select>

                        <label htmlFor="pegLeg">Peg Leg</label>
                        <input type="checkbox" checked={pegLeg} name="pegLeg" onClick={(e) => setPegLeg(!pegLeg)} />

                        <label htmlFor="eyePatch">Eye Patch</label>
                        <input type="checkbox" checked={eyePatch} name="eyePatch" onClick={(e) => setEyePatch(!eyePatch)} />

                        <label htmlFor="name">Hook Hand</label>
                        <input type="checkbox" checked={hookHand} name="hookHand" onClick={(e) => setHookHand(!hookHand)} />
                    </Rows>
                    <StyledButton style={styles.contentButton}>Add Pirate</StyledButton>
                </form>
            </ContentWrapper>
        </>
    )
}
