import React from 'react'

// Style
import RepoRowStyle from './repo-row-style'

// logo
import { ReactComponent as Github } from '../logos/github.svg';

// Material UI
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { IconButton, Typography } from '@mui/material';

const useStyles = makeStyles(RepoRowStyle)

function RepoRow (props){

    const classes = useStyles(props)
    const {repo} = props

    console.log(repo,'repo')

    return (
    <Grid key={repo.id} direction="row" item container alignItems="flex-start" className={classes.container}>
        <Grid item xs={8}>
            <span className={classes.name}>{repo.name}</span>
        </Grid>
        <Grid item xs={2}>
            <Typography color={repo.visibility === 'public' ? 'blue' : 'red'}>{repo.visibility}</Typography>
        </Grid>
        <Grid item xs={2}>
            <IconButton disableRipple onClick={()=> window.open(repo.url, "_blank")} className={classes.link}><Github className={classes.github}/></IconButton>
        </Grid>
    </Grid>
)
}

export default RepoRow