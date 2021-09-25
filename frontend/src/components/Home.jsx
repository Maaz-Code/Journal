import React from 'react'
import { Grid, Button, styled } from '@material-ui/core'
import Stack from '@mui/material/Stack';

const CustomButton = styled(Button)(() => ({
    color: '#e9e9e9',
    backgroundColor: '#30343a',
    '&:hover': {
      backgroundColor: '#282b31',
    },
    borderRadius: '7px',
  }));

const Home = () => {
    return (
      <>
        <Grid container direction="column" justifyContent="center" alignItems="center" className="hero">
          <h1>Journal</h1>
          <Stack direction={{xs:'column', sm:'row'}} spacing={{xs:5 , sm:20}}>
              <CustomButton variant="contained" size="large">Login</CustomButton>
              <CustomButton variant="contained" size="large">Signup</CustomButton>
          </Stack>
        </Grid>
      </>
    )
}

export default Home