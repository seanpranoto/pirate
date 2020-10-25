import { Link } from '@reach/router'
import React from 'react'
import { PirateBoxWrapper, StyledButton } from './Styled'
import axios from "axios"

export const PirateBox = ({ name, _id }) => {
    const styles = {
        button: { margin: "0 3rem" }
    }

    const onClick = () => {
        axios.delete(`http://localhost:8000/api/Pirate/${_id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <PirateBoxWrapper>
            <h1>{name}</h1>
            <Link style={styles.button} to={`/pirate/${_id}`}><StyledButton>View Pirate</StyledButton></Link>
            <StyledButton onClick={onClick} bgColor="red">Walk the Plank</StyledButton>
        </PirateBoxWrapper>
    )
}
