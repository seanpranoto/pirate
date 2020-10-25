import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { ContentWrapper } from '../components/Styled'
import axios from "axios";
import { PirateBox } from '../components/PirateBox';

export const Home = () => {
    const [pirates, setPirates]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/Pirate")
        .then(pirates=>setPirates(pirates.data))
        .catch(err=>console.log(err))
    }, [pirates]);

    return (
        <>
            <Header h1Props="Pirate Crew" buttonProps="Add Pirate" linkProps="/pirate/new" />
            <ContentWrapper>
                {
                    pirates.map((pirate, i)=><PirateBox key={i} name={pirate.name} _id={pirate._id} />)
                }
            </ContentWrapper>
        </>
    )
}
