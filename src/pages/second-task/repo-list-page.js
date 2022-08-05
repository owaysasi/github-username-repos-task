import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Style
import SecondTaskStyle from './second-task-style'

//Route
import {useLocation, useNavigate} from 'react-router-dom';

// Material UI
import Grid from '@mui/material/Grid';
import { Button, CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Components
import RepoRow from '../../components/repo-row';
import ListHeader from '../../components/list-header';

const useStyles = makeStyles(SecondTaskStyle)


function RepoListPage (){

    const location = useLocation();
    const navigate = useNavigate();
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)

    const classes = useStyles()

    const str = location.pathname;
    const n = str.lastIndexOf('/');
    const wantedUserName = str.substring(n + 1);


    useEffect(() => {
        console.log(wantedUserName,'ff')
        localStorage.setItem("userName", wantedUserName);
        fetchData()
    },[])

    const fetchData = () => {
        axios({
            method: "get",
            url: `https://api.github.com/users/${wantedUserName}/repos`,
          }).then((response) => {
            setRepos(response.data)
          })
          .catch((err) => {
            console.log(err,'err')
            setLoading(false)
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    const renderRepo = (repo) => {
       return <RepoRow repo={repo} />;
    }

    return (<Grid container alignItems="center" className={classes.listContainer}>
        <Button onClick={() => navigate(-1)} disableRipple variant="contained" style={{position:'absolute', right:0, top:0}}>Back</Button>
        {repos.length ? 
        <div className={classes.listSubContainer}>
            <ListHeader/>
        {repos.map(renderRepo)}
        </div>
         : loading ? <div className={classes.circularProgress}><CircularProgress /></div> : <p className={classes.noResult}>There are no Repositories for "{wantedUserName}"</p>}
    </Grid>)
      
}

export default RepoListPage;