import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function Signin() {
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
              <Link to='signup' className='caLink'>
                Create account
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
              <div className='logoText'>Login to Your Account</div>
            </div>
          </div>
          <div className='formWrapper'>
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
            <div className='leftHeader'>
              <div className='leftHeaderBox3'>
                <input type='checkbox'></input>
                <div className='caLink'>Remember me</div>
              </div>
              <div className='leftHeaderBox3'>
                <Link to='signup' className='caLink'>
                  Create account
                </Link>
              </div>
            </div>
            <div className='inputContainer'>
              <button type='button' className='loginButton'>
                Login
              </button>
            </div>
            <p className='instantP'>
              --------------Instant login--------------
            </p>
            <div className='inputContainer'>
              <button type='button' className='googleButton'>
                Continue with Google
              </button>
            </div>
            <div className='inputContainer'>
              <button type='button' className='fbButton'>
                Continue with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
