import React from 'react'
import { Grid } from '@material-ui/core'
import Stack from '@mui/material/Stack';
import CustomButton from './CustomButton'

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