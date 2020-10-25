import styled from "styled-components";

export const HeaderWrapper=styled.div`
    background:#783f04;
    color:white;
    text-align:center;
`;

export const StyledButton=styled.button`
    background:${({bgColor})=>bgColor || "blue"};
    padding:0.5rem 2rem;
    color:white;
    border:2px solid black;
`;

export const ContentWrapper=styled.div`
    background:#ff9900;
    padding: 2rem;
`;

export const Rows=styled.div`
    display:inline-block;
    vertical-align:top;
    margin: 1rem;
`;

export const PirateBoxWrapper=styled.div`
    background:white;
    padding: 0.5rem 2rem;
    text-align:center;
`;