import React,{useState, useEffect} from 'react'
import axios from 'axios'

// Style
import SecondTaskStyle from './second-task-style'

// logo
import { ReactComponent as Github } from '../../logos/github.svg';

// Components
import RepoRow from '../../components/repo-row'

// Material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useNavigate 
  } from "react-router-dom";
import { Typography } from '@mui/material';

const useStyles = makeStyles(SecondTaskStyle)

function SearchPage(props) {

    useEffect(() => {
            setUserName('')
    },[])
    const {userName, setUserName} = props

    const navigate = useNavigate()

    const classes = useStyles()

    const [error, setError] = useState({
        status : true,
        message:''
    })

    const changeText = (e) => {
        setUserName(e.target.value)
    }

    const routeToOtherPage = () => {
        navigate(`../repos/${userName}`);
    }

    const validateText = () => {
        if(userName.length > 2){
            setError({
                status:true,
                message : ''
            })
            routeToOtherPage()

        }else if(userName.length === 0){
            setError({
                status:false,
                message : 'Fill the Username field!'
            })
        } else if(userName === ' '){
            setError({
                status:false,
                message : 'Fill with real name!'
            })
        }else{
            setError({
                status:false,
                message : 'Fill with 3 characters or above!'
            })
        }
    }

    const renderRepo = (repo) => {
       return <RepoRow repo={repo} />
    }

  return (
    <div className={classes.container}>
        <Grid container spacing={2} alignItems="flex-start" className={classes.searchContainer}>
            <Grid item>
                <TextField  error={!error.status} helperText={!error.status && error.message} className={classes.search} onChange={changeText} value={userName} placeholder='Username' size="small" />
            </Grid>
            <Grid item>
                <Button disableRipple endIcon={ <SearchIcon/>} variant="contained" onClick={validateText}>Search</Button>
            </Grid>
        </Grid>
        <Typography className={classes.declaration} align='center' variant="h5">Once you choosed what you're looking for, you'll be redirected to another page.</Typography>
    </div>
  );
}

export default SearchPage;
