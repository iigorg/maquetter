import React, { PureComponent } from 'react';
import './Register.scss';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from './Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import SimpleModalWrapped  from './Modal';
import { MaquetterConsumer } from '../context';
import { ReactComponent as Upload } from '../icons/upload.svg';

export default class Register extends PureComponent {
  render() {
    return (
      <MaquetterConsumer>
        {value => {
          const {disabled,emailValid,nameValid,phoneValid,name,phone,email,formErrors,selected,
            fileName,positions,errorClass,handleChange,uploadFile,request,openModal,closeModal} = value;         
          return (
            <section id="sign">
              <div className="container">
                <div className="row justify-content-center">
                  <h2 className="text-center">Register to get a work</h2>
                  <p className="p1 text-center p-1 p-md-0">
                    Attention! After successful registration and alert, update
                    the list of users in the block from the top
                  </p>
                </div>
                {openModal && <SimpleModalWrapped openModal={openModal} closeModal={closeModal} />}
                <form autoComplete="off" id="registerForm" data-netlify="true">
                  <div className="row justify-content-sm-center justify-content-space-between">
                    <div className="col-12 text-center col-md-4 text-md-left">
                      <TextField
                        error={nameValid}
                        id="outlined-name"
                        type="text"
                        label="Name"
                        placeholder="Your Name"
                        value={name}
                        onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                        className="register__input"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      {nameValid && (
                        <FormHelperText
                          id="outlined-name"
                          className={`${errorClass(formErrors.name)}`}>
                          {formErrors.name}
                        </FormHelperText>
                      )}
                    </div>
                    <div className="col-12 text-center col-md-4">
                      <TextField
                        error={emailValid}
                        id="outlined-email"
                        label="Email"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={handleChange('email')}
                        autoComplete="email"
                        aria-describedby="outlined-email"
                        margin="normal"
                        variant="outlined"
                        className="register__input"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      {emailValid && (
                        <FormHelperText
                          id="outlined-email"
                          className={`${errorClass(formErrors.email)}`}>
                          {formErrors.email}
                        </FormHelperText>
                      )}
                    </div>
                    <div className="col-12 text-center col-md-4 text-md-right">
                      <TextField
                        error={phoneValid}
                        id="outlined-phone"
                        type="tel"
                        label="Phone"
                        placeholder="+38(___) __ __ __"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        value={phone}
                        onChange={handleChange('phone')}
                        margin="normal"
                        variant="outlined"
                        className="register__input"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      {phoneValid && (
                        <FormHelperText
                          id="outlined-phone"
                          className={`${errorClass(formErrors.phone)}`}>
                          {formErrors.phone}
                        </FormHelperText>
                      )}
                    </div>
                  </div>
                  <div className="row justify-content-sm-center justify-content-space-between selectMenu">
                    <div className="col-12 text-center col-md-6 text-md-left mb-4 mb-md-0">
                      <Select
                        id="selected-menu"
                        className="selected-menu"
                        value={selected}
                        onChange={handleChange('selected')}
                        input={<OutlinedInput labelWidth={0} />}>
                        <MenuItem disabled value="Select your position">
                          <em>Select your position</em>
                        </MenuItem>
                        {positions &&
                          positions.map(item => (
                            <MenuItem key={item.id} value={item.id}>
                              {item.name}
                            </MenuItem>
                          ))}
                      </Select>
                    </div>
                    <div className="col-12 text-center col-md-6 text-md-left text-lg-right">
                      <span style={{ position: 'relative' }}>
                        <TextField
                          disabled
                          type="text"
                          label="Upload your photo"
                          margin="normal"
                          value={fileName}
                          variant="outlined"
                          className="register__file"
                          helperText="File format jpg up to 50mb, the minimum size of 70x70px"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <span className="upload d-none d-md-flex" onChange={uploadFile}>
                                  Upload
                                  <input type="file" id="file" />
                                </span>
                                <span className="upload d-flex d-md-none" onChange={uploadFile}>
                                  <Upload />
                                  <input type="file" id="file" />
                                </span>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row justify-content-center mt-5">
                    <Button
                      title={'Sign up'}
                      btnStyle={disabled ? 'btnDisable' : 'primary'}
                      onClick={request}
                      disabled={disabled}
                    />
                  </div>
                </form>
              </div>
            </section>
          );
        }}
      </MaquetterConsumer>
    );
  }
}
