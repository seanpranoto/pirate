import React, { useEffect, useState } from 'react'
import { ContentWrapper, HeaderWrapper, PirateBoxWrapper, StyledButton } from '../components/Styled'
import axios from "axios"

export const ShowOne = ({ id }) => {
    const [pirate, setPirate] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Pirate/${id}`)
            .then(res => {
                setPirate(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [id]);

    return (
        <>
            {
                loaded &&
                <>
                    <HeaderWrapper>
                        <h1>Deep Sea Davy</h1>
                    </HeaderWrapper>
                    <ContentWrapper>
                        <PirateBoxWrapper>
                            <h3>About</h3>
                            <p>Position: {pirate.position}</p>
                            <p>Treasures:{pirate.treasures}</p>
                            {
                                pirate.pegLeg === true ? <p>Peg Leg: Yes</p> : <p>Peg Leg: No</p>
                            }

                            {
                                pirate.pegLeg === true ? <StyledButton bgColor="red"> No</StyledButton> : <StyledButton>Yes</StyledButton>
                            }

                            {
                                pirate.eyePatch === true ? <p>Eye Patch: Yes</p> : <p>Eye Patch: No</p>
                            }

                            {
                                pirate.eyePatch === true ? <StyledButton bgColor="red"> No </StyledButton> : <StyledButton>Yes</StyledButton>
                            }

                            {
                                pirate.hookHand === true ? <p>Hook Hand: Yes</p> : <p>Hook Hand: No</p>
                            }

                            {
                                pirate.hookHand === true ? <StyledButton>No</StyledButton> : <StyledButton>Yes</StyledButton>
                            }
                        </PirateBoxWrapper>
                    </ContentWrapper>
                </>
            }
        </>
    )
}
