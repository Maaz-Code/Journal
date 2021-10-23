import { Container, Typography } from '@material-ui/core'
import React from 'react'
import "./Main.scss"

function Main({ title, children }) {
    return (
        <Container>
            <div className="main">
                {title && (
                    <>
                        <Typography variant="h3" className="heading">{title}</Typography>
                        <hr />
                    </>
                )}
                {children}
            </div>
        </Container>
    );
}

export default Main;
