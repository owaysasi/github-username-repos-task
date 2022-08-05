import React,{useState} from 'react'
import axios from 'axios'

// Style
import SearchPageStyle from './first-task-style'

// Components
import RepoRow from '../../components/repo-row'

// Material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import ListHeader from '../../components/list-header';

const useStyles = makeStyles(SearchPageStyle)

function SearchPage() {

    const classes = useStyles()

    const [userName, setUserName] = useState('')
    const [shownUserName, setShownUserName] = useState('')
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [error, setError] = useState({
        status : true,
        message:''
    })

    const changeText = (e) => {
        setUserName(e.target.value)
    }

    const fetchData = () => {
        setLoading(true)
        axios({
            method: "get",
            url: `https://api.github.com/users/${userName}/repos`,
          }).then((response) => {
            setEmpty(!response.length)
            setRepos(response.data)
            setShownUserName(userName)
          })
          .catch((err) => {
            console.log(err,'err')
            setEmpty(true)
            setLoading(false)
            setShownUserName(userName)
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    const validateText = (userName) => {
        if(userName.length > 2){
            setError({
                status:true,
                message : ''
            })
            fetchData()
            return true

        }else if(userName.length === 0){
            setError({
                status:false,
                message : 'Fill the Username field!'
            })
            return error.message
        } else if(userName === ' '){
            setError({
                status:false,
                message : 'Fill with real name!'
            })
            return error.message
        }else{
            setError({
                status:false,
                message : 'Fill with 3 characters or above!'
            })
            return error.message
        }
    }

    const renderRepo = (repo) => {
       return <RepoRow repo={repo} />
    }

  return (
    <div className={classes.container}>
        <Grid container spacing={2} alignItems="flex-start">
            <Grid item>
                <TextField  error={!error.status} helperText={!error.status && error.message} className={classes.search} onChange={changeText} value={userName} placeholder='Username' size="small" />
            </Grid>
            <Grid item>
                <Button disableRipple endIcon={ <SearchIcon/>} variant="contained" onClick={() => validateText(userName)}>{loading ? 'Searching' : 'Search'}</Button>
            </Grid>
        </Grid>
        <Grid className={classes.repoContainer} container direction="column" >
            {repos.length ? (<div style={{width:'100%'}}>
                <ListHeader />
                {repos.map(renderRepo)}
                </div>) : empty ? <p className={classes.noResult}>There are no Repositories for "{shownUserName}"</p> : null}
        </Grid>
    </div>
  );
}

export default SearchPage;

module.exports = validateText;
