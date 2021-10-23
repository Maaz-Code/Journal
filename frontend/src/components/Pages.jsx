import React from 'react';
import { styled } from '@mui/material/styles';
import Main from '../screens/Main'
import CustomButton from './CustomButton'
import Add from '@mui/icons-material/Add';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import { IconButton, Card, CardActions, CardContent, CardHeader, Typography, Collapse, Link, Stack } from '@mui/material';
import content from "../data/content";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />; })
    (({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest, }),
    }));

    const deleteHandler = (id) => {
      if(window.confirm(`Are you sure you want to delete this?`)){
        console.log(id)
      };
    }

    const Pages = () => {
      const [expanded, setExpanded] = React.useState(false);
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    return (
        <Main title="Welcome Maaz Ahmed ...">
        <Link href="/addpage" underline="none">
          <CustomButton style={{ marginTop: 20 }} endIcon={<Add />}>New Page</CustomButton>
        </Link>
        { 
          content.map((page) => (
            <Card sx={{ marginTop: 5, backgroundColor: 'ivory', border: '1px solid black', boxShadow: 4 }}>
          <CardHeader action={<Stack direction={{ xs: 'column', sm: 'row' }} spacing={5}>
            <CustomButton variant="contained" size="small" href={`/pages/${page._id}`}>Edit</CustomButton>
            <CustomButton variant="contained" size="small" onClick={() => deleteHandler(page._id)}>Delete</CustomButton>
          </Stack>} title={page.title} subheader={page.date} />
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
          ))
        }
        </Main>
    )
}

export default Pages