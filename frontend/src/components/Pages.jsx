import React from 'react';
import { styled } from '@mui/material/styles';
import Main from '../screens/Main'
import CustomButton from './CustomButton'
import Add from '@mui/icons-material/Add';
import MoreVertRounded from '@mui/icons-material/MoreVertRounded';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import { IconButton, Card, CardActions, CardContent, CardHeader, Typography, Collapse, Link } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />; })
    (({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest, }),
    }));

const Pages = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Main title="Welcome Maaz Ahmed ...">
            <Link href="/addpage" underline="none">
                <CustomButton style={{marginTop: 20}} endIcon={<Add/>}>New Page</CustomButton>
            </Link>
            <Card sx={{ width: 1200, marginTop: 5,  }}>
                <CardHeader action={
                <IconButton aria-label="settings">
                <MoreVertRounded />
                </IconButton>
              }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016" />
              <CardContent>
                <Typography variant="body2">
                  {/* TODO: Add content here */}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
              <ExpandMoreRounded />
              </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>{/* TODO: Add content here */}</CardContent>
              </Collapse>
            </Card>
        </Main>
    )
}

export default Pages
