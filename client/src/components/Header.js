import { Link } from '@reach/router'
import React from 'react'
import { HeaderWrapper, StyledButton } from '../components/Styled'

export const Header = ({ h1Props, buttonProps, linkProps }) => {
    const styles = {
        buttonHeader: { position: "absolute", right: "3rem", top: "3.5rem" },
        h1: { display: "inline-block" }
    }
    return (
        <>
            <HeaderWrapper>
                <h1 style={styles.h1}>{h1Props}</h1>
                <Link style={styles.buttonHeader} to={linkProps}><StyledButton>{buttonProps}</StyledButton></Link>
            </HeaderWrapper>
        </>
    )
}
