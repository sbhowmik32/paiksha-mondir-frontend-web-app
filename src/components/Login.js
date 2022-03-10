import React from 'react';
import {Avatar, Button, Grid, Paper, TextField,Typography,Link} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Login=()=> {
    const paperStyle = {padding :20, height :'70vh', width :280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return (
        
        <Grid>
            <Paper evaluation = {10} style ={paperStyle}>

                <Grid align = 'center'>
                    <Avatar style ={avatarStyle}><AccountCircleOutlinedIcon/></Avatar>
                <h1> Sign in</h1>
                </Grid>
                <TextField label = 'Username' placeholder='Enter UserName' fullWidth required/>
                <TextField label = 'password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                control={
                    <Checkbox
                    name ="checkdb"
                    color ="primary"/>
                }
                label = 'Remenber me '
                />
                <Button type='submit' color='primary' variant ="contained"style={btnstyle}  fullWidth> Sign in </Button>

                <Typography >
                     <Link to ='/forgetpassword'>
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link className='link' to ='/registration' >
                       Sign Up 
                </Link>
                </Typography>
            </Paper>

        </Grid>
    )
}
export default Login