import { Avatar, Grid, List, ListItem, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Grid
            container
            position="absolute"
            sx={{
                padding: '10px 10px',
                bgcolor: '#DAAD86',
                textAlign: 'center',
                margin: '0 auto',
                bottom: '0'
            }}
        >
            <Grid container>
            </Grid>
            <Typography
                component="footer"
                sx={{
                    textAlign: 'center',
                    width: '100%',
                    opacity: 0.5
                }}
            >
                Notes app©2023
            </Typography>
        </Grid>
    );
}