const RepoRowStyle = theme => ({
    container:{
        border:'1px solid #95A5A5', 
        borderRadius:20, 
        minHeight:40, 
        paddingTop:8, 
        width:'100%', 
        paddingLeft:12, 
        marginBottom:12,
        '&:hover': {
            backgroundColor: '#eaeded',
        }
    },
    name:{
        marginRight:4 
    },
    repoLogo:{
        width:20, 
        height:20  
    },
    github:{
        width:14, 
        height:14, 
        opacity: '.8',
    }
});

export default RepoRowStyle