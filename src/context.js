import React, { Component } from 'react';
import { UserAPI, UserAPIRequest } from './api/Api';
const MaquetterContext = React.createContext();

/*Provider - provide all the information from all app.
Consumer - when we want to use the info that provider is gonna provide.
We don't pass props. Return from children some "Value"*/
class MaquetterProvider extends Component {
  state = {
    left: false,
    users: [],
    name: '',
    email: '',
    phone: '',
    selected: 'Select your position',
    upload: '',
    fileName: '',
    formErrors: { name: '', email: '', phone: '' },
    nameValid: false,
    emailValid: false,
    phoneValid: false,
    disabled: true,
    positions: [],
    page: 1,
    user: [],
    openModal: false,
    userId: 1,
    total_pages: 0,
    newUser: false,
  };

  componentDidMount() {
    this.getDataApi();
  }

  // Gets all positions, all users and user info for the site header from Api
  getDataApi = async () => {
    UserAPI(this.state.page, this.state.userId).then(data => {
      this.setState({
        user: data.userHeader,
        positions: data.positions,
        total_pages: data.total_pages,
        users: this.state.newUser
          ? data.users
          : [...this.state.users, ...data.users],
      });
    });
  };
  //Method Sign out for the site header and Drawer menu
  signOut = () => {
    this.setState({ user: [] });
  };

  toggleDrawer = (side, open) => {
    this.setState({
      [side]: open,
    });
  };
  // methods for Our cheerful users section
  showMoreUsers = () => {
    this.setState(
      {
        page: this.state.page + 1,
        newUser: false,
      },
      () => {
        this.getDataApi(this.state.page);
      }
    );
  };
  // methods for Register section
  handleChange = prop => event => {
    this.setState(
      { [prop]: event.target.value },
      this.validate(prop, event.target.value)
    );
  };

  uploadFile = () => {
    const file = document.getElementById('file');
    let pos = file.value.indexOf('fakepath') + 9;
    let partPath = file.value.slice(pos);
    this.setState(
      {
        upload: file.value,
        fileName: partPath,
      },
      this.validate
    );
  };
  //Validate registration form
  validate = (fieldName, value) => {
    const { name, email, phone, selected, upload } = this.state;
    const select = 'Select your position';
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;

    switch (fieldName) {
      case 'name':
        if (value.length >= 2 && value.match(/^[a-zA-Z]+$/)) {
          nameValid = false;
        } else {
          nameValid = true;
          fieldValidationErrors[fieldName] = nameValid
            ? `less than 2 letters, and don't contain number`
            : '';
        }
        break;
      case 'email':
        if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          emailValid = false;
        } else {
          emailValid = true;
          fieldValidationErrors[fieldName] = emailValid ? 'is invalid' : '';
        }
        break;
      case 'phone':
        if (value.match(/^[+]{0,1}380([0-9]{9})$/)) {
          phoneValid = false;
        } else {
          phoneValid = true;
          fieldValidationErrors[fieldName] = phoneValid ? 'is invalid' : '';
        }
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid,
      emailValid,
      phoneValid,
    });
    if (
      name !== '' &&
      email !== '' &&
      phone !== '' &&
      selected !== select &&
      upload !== '' &&
      !nameValid &&
      !emailValid &&
      !phoneValid
    ) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  //User registration request
  request = async () => {    
    const { name, email, phone, selected, userId, page, newUser } = this.state;
    UserAPIRequest(name, email, phone, selected).then(data => {
      this.setState(
        {
          userId: data.user.user_id,
          openModal: data.openModal,
          users: data.users,
          page: 1,
          newUser: true,
          name: '',
          email: '',
          phone: '',
          selected: 'Select your position',
          upload: '',
          fileName: '',
        },
        userId => {
          this.getDataApi(userId);
        }
      );
    });
  };

  //Close modal
  closeModal = () => {
    this.setState({
      openModal: false,
    });
  };
 //Go to section when click button
  goTosection = () => {
    window.location.href="#sign";
  };
 
  render() {
    return (
      <MaquetterContext.Provider
        value={{
          ...this.state,
          signOut: this.signOut,
          toggleDrawer: this.toggleDrawer,
          showMoreUsers: this.showMoreUsers,
          handleChange: this.handleChange,
          errorClass: this.errorClass,
          uploadFile: this.uploadFile,
          request: this.request,
          closeModal: this.closeModal,
          goTosection: this.goTosection
        }}>
        {this.props.children}
      </MaquetterContext.Provider>
    );
  }
}

const MaquetterConsumer = MaquetterContext.Consumer;

export { MaquetterProvider, MaquetterConsumer };
