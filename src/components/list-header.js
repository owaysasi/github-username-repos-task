import React from 'react'

import { Grid, Typography } from '@mui/material';

function ListHeader(){
    return(
        <Grid container direction="row" style={{padding:'0 8px', marginBottom:16}}>
            <Grid item xs={8}>
                <Typography type="h6">Name</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography type="h6">Visibility</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography type="h6">Repository link</Typography>
            </Grid>
        </Grid>
    )
}

export default ListHeader;