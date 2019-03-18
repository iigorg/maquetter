import React, { Component } from 'react';
import './UsersList.scss';
import User from './User';
import Button from './Button';
import { MaquetterConsumer } from '../context';

export default class UsersList extends Component {
  render() {
    return (
      <MaquetterConsumer>
        {value => {
          const { users,showMoreUsers,page,total_pages } = value;
          return (
            <section id="users">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="user__title">
                      <h2 className="text-center">Our cheerful users</h2>
                      <p className="p1 text-center p-2 p-md-0">
                        Attention! Sorting users by registration date
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {users &&
                    users.map(user => {
                      return (
                        <div className="col-12 col-sm-6 col-md-4" key={user.id}>
                          <User
                            name={user.name}
                            photo={user.photo}
                            email={user.email}
                            phone={user.phone}
                            position={user.position}
                          />
                        </div>
                      );
                    })}
                </div>
                <div className="row justify-content-center">
                  {page !== total_pages &&  <Button
                      title="Show more"
                      btnStyle="secondary"
                      onClick={() => showMoreUsers()}
                    />
                  }                 
                </div>
              </div>
            </section>
          );
        }}
      </MaquetterConsumer>
    );
  }
}
