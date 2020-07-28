import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function Signup() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='leftWrapper'>
          <div className='leftHeader'>
            <div className='leftHeaderBox1'>
              <img
                className='squarImg'
                src={require('../../assets/img/square.png')}
              />
              <div className='logoText'>Square</div>
            </div>
            <div className='leftHeaderBox2'>
              <Link to='login' className='caLink'>
                Login
              </Link>
            </div>
          </div>
          <div className='vectorWrapper'>
            <img
              className='vectorImg'
              src={require('../../assets/img/loginvector.png')}
            />
          </div>
          <div className='leftBottomTextWrapper'>
            <p className='leftBottomText'>
              Monitoring your Sales Anytime. Easier & Effective than Before.
            </p>
          </div>
        </div>
        <div className='rightWrapper'>
          <div className='leftHeader'>
            <div className='rightHeaderBox1'>
              <div className='logoText'>Create Your Free Account</div>
            </div>
          </div>
          <div className='formWrapper'>
            <div className='inputContainer'>
              <TextField
                id='standard-basic'
                label='Fullname'
                className='inputField'
                fullWidth
                inputProps={{
                  style: {
                    fontSize: 14,
                    fontFamily: 'poppins',
                  },
                }}
                inputStyle={{
                  fontSize: 14,
                  borderWidth: '1px',
                  borderColor: 'yellow !important',
                }}
                InputLabelProps={{
                  style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: '100%',
                    fontSize: '12px',
                  },
                }}
              />
            </div>
            <div className='inputContainer'>
              <TextField
                id='standard-basic'
                label='Email or Username'
                className='inputField'
                fullWidth
                inputProps={{
                  style: {
                    fontSize: 14,
                    fontFamily: 'poppins',
                  },
                }}
                inputStyle={{
                  fontSize: 14,
                  borderWidth: '1px',
                  borderColor: 'yellow !important',
                }}
                InputLabelProps={{
                  style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: '100%',
                    fontSize: '12px',
                  },
                }}
              />
            </div>
            <div className='inputContainer'>
              <TextField
                id='standard-basic'
                label='Business url'
                className='inputField'
                fullWidth
                inputProps={{
                  style: {
                    fontSize: 14,
                    fontFamily: 'poppins',
                  },
                }}
                inputStyle={{
                  fontSize: 14,
                  borderWidth: '1px',
                  borderColor: 'yellow !important',
                }}
                InputLabelProps={{
                  style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: '100%',
                    fontSize: '12px',
                  },
                }}
              />
            </div>
            <div className='inputContainer'>
              <TextField
                id='standard-basic'
                label='Password'
                type='password'
                className='inputField'
                fullWidth
                inputProps={{
                  style: { fontSize: 14 },
                }}
                InputLabelProps={{
                  style: {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: '100%',
                    fontSize: '12px',
                  },
                }}
              />
            </div>

            <div className='inputContainer'>
              <button type='button' className='loginButton'>
                Login
              </button>
            </div>
            <p className='instantP'> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
