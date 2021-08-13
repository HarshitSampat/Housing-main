import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
    
    const [data, setData] = useState("")
    const handleLogout = () => {
    localStorage.removeItem("userInfo")
    history.push("/")
  }
   const history = useHistory() 
    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo')
      const userData = JSON.parse(userInfo)
    
      
      if (!userData) { return <h1>Make sure you are an admin</h1> }
      else {setData(userData)}
    }, [])
  return (
    <div className={classes.root}>
          <AppBar transparent position="sticky">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
                   <div><h4>{data.name}</h4><span><h5>Welcome to Housing.com Admin</h5></span></div>
                  </Typography>
                   
                  {!localStorage.getItem("userInfo") &&
                      <Button color="inherit" >Login</Button>
                  }
                  {localStorage.getItem("userInfo") &&
                      <Button color="inherit" onClick={handleLogout}>Logout</Button>
                }
                
        </Toolbar>
      </AppBar>
    </div>
  );
}