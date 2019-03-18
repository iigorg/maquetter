import React, { Component } from 'react';
import './Sign.scss';
import { ReactComponent as SignOut } from '../icons/sign-out.svg';

//user info for the site header and Drawer
export default class Sign extends Component {
  render() {
    const { user, signOut } = this.props.user;
    return (
      <div className="nav-sign">
        {user.photo && (
          <div className="nav-user">
            <span>
              <span className="nav-user__name">{user.name}</span>
              <span className="nav-user__mail">{user.email}</span>
            </span>
            <span>
              <img src={user.photo} alt="user" className="logoUser" />
            </span>
            <SignOut onClick={()=>signOut()} />
          </div>
        )}
      </div>
    );
  }
}
