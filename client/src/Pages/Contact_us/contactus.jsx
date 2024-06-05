// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './contactus.css';
import Homepage_head from '../../Component/Homepage_head/homepage';
import Homepage_footer from '../../Component/Homepage_footer/footer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/send';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    help: '',
    about: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    switch (id) {
      case 'firstName':
      case 'lastName':
        if (/^[A-Za-z\s]*$/.test(value)) {
          setErrors({ ...errors, [id]: '' });
        } else {
          setErrors({ ...errors, [id]: 'Only letters and spaces are allowed.' });
        }
        break;
      case 'email':
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setErrors({ ...errors, [id]: '' });
        } else {
          setErrors({ ...errors, [id]: 'Email is not valid.' });
        }
        break;
      case 'contactNumber':
        if (/^\d{0,10}$/.test(value)) {
          setErrors({ ...errors, [id]: '' });
        } else {
          setErrors({ ...errors, [id]: 'Contact number must be 10 digits.' });
        }
        break;
      default:
        break;
    }
  };

  const handleKeyPress = (e, field) => {
    const char = String.fromCharCode(e.which);
    switch (field) {
      case 'firstName':
      case 'lastName':
        if (!/^[A-Za-z\s]$/.test(char)) {
          e.preventDefault();
          setErrors({ ...errors, [field]: 'Only letters and spaces are allowed.' });
        }
        break;
      case 'contactNumber':
        if (!/^\d$/.test(char) || formData.contactNumber.length >= 10) {
          e.preventDefault();
          setErrors({ ...errors, contactNumber: 'Contact number must be 10 digits.' });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Homepage_head />
      <div className='contactus-main-big-big-rect'>
        <div className='contactus-main-big-rect'>
          <div className='contactus-middle-txt-rect'>
            <div className='cnt-top-main-txt-rect'>
              <h1 className='cnt-top-main-txt1'>We are here to provide</h1>
              <h1 className='cnt-top-main-txt2'>24x7 Support</h1>
            </div>
            <div className='first-top-txt-rect'>
              <div className='first-top-txt1'>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="firstName"
                    label="First Name"
                    variant="standard"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleKeyPress(e, 'firstName')}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName && <span style={{ color: 'red', fontSize: '12px' }}>{errors.firstName}</span>}
                  />
                </Box>
              </div>
              <div className='first-top-txt2'>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="lastName"
                    label="Last Name"
                    variant="standard"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleKeyPress(e, 'lastName')}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName && <span style={{ color: 'red', fontSize: '12px' }}>{errors.lastName}</span>}
                  />
                </Box>
              </div>
            </div>
            <div className='first-top-txt-rect'>
              <div className='first-top-txt1'>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="email"
                    label="E-mail"
                    variant="standard"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
                  />
                </Box>
              </div>
              <div className='first-top-txt2'>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="contactNumber"
                    label="Contact Number"
                    variant="standard"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleKeyPress(e, 'contactNumber')}
                    error={Boolean(errors.contactNumber)}
                    helperText={errors.contactNumber && <span style={{ color: 'red', fontSize: '12px' }}>{errors.contactNumber}</span>}
                  />
                </Box>
              </div>
            </div>
            <div className='second-top-txt-rect'>
              <div className='second-top-txt1'>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '116.5ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="help"
                    label="How We Can Help You?"
                    variant="standard"
                    value={formData.help}
                    onChange={handleInputChange}
                  />
                </Box>
              </div>
            </div>
            <div className='second-top-txt-rect'>
              <div className='second-top-txt1'>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '116.5ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="about"
                    label="Tell Us About You"
                    variant="standard"
                    value={formData.about}
                    onChange={handleInputChange}
                  />
                </Box>
              </div>
            </div>
            <div className='add-send-btn'>
              <Stack direction="row" spacing={4}>
                <Button variant="contained" endIcon={<SaveIcon />} className='edit-btn-min' style={{ width: '70%', backgroundColor: 'rgb(0, 0, 79)', color: 'white' }}>
                  Send
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <Homepage_footer />
    </div>
  )
}

export default ContactUs;
