import { Container, Typography, Grid } from '@material-ui/core'
import React from 'react'
import "./Main.css"

function Main({ title, children }) {
    return (
        <div className="main">
            <Container>
                <Grid container>
                    <div className="top">
                        {title && (
                            <>
                                <Typography variant="h3" className="heading">{title}</Typography>
                                <hr />
                            </>
                        )}
                        {children}
                    </div>
                </Grid>
            </Container>
        </div>
    );
}

export default Main;
