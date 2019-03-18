import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { ReactComponent as Menu } from '../icons/line-menu.svg';
import './MenuDrawer.scss';


const styles = {
  list: {
    width: 250,
  }, 
};

class MenuDrawer extends React.Component {
  render() {
    const { classes } = this.props;
    const {user,signOut,toggleDrawer,left} = this.props.user; 

    const sideList = (
      <div className={classes.list}>
        <List>
         {user.photo && 
          <div className="drawer-sign">
            <span>            
              <img src={user.photo} alt="user" className="drawer-logo" />
            </span>
            <span>
              <span className="drawer__name">{user.name}</span>
              <span className="drawer__mail">{user.email}</span>
            </span>                   
          </div>
        }
        </List>
        <Divider />
        <List>
            <div className="drawer-nav">
              <ul className="drawer-links">
                  <li>
                  <a href="#about" className="drawer-link">About me</a>
                  </li>
                  <li>
                  <a href="#relationships" className="drawer-link">Relationships</a>
                  </li>
                  <li>
                  <a href="#requirements" className="drawer-link">Requirements</a>
                  </li>
                  <li>
                  <a href="#users" className="drawer-link">Users</a>
                  </li>
                  <li>
                  <a href="#sign" className="drawer-link">Sign Up</a>
                  </li>
                  <li>
                  <a href="#" onClick={()=> signOut()} className="drawer-link">Sign Out</a>
                  </li>
              </ul>
            </div>
        </List>
      </div>
    );   
 
    return (
      <div>
        <Menu onClick={()=> toggleDrawer('left', true)}/>              
        <Drawer open={left} onClose={()=> toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={()=> toggleDrawer('left', false)}
            onKeyDown={()=> toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>        
      </div>
    );
  }
}

export default withStyles(styles)(MenuDrawer);