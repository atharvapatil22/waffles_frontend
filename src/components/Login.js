import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import image from '../images/waffle-icon.png';

<img src={image} height={100} width={100} />

function Login() {
    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => 
            {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            // console.log(result))
            .catch((error) => alert(error.message));
    };

    
    
    return (
      <div className="login">
        <div className="login_container">
          <img
            src={image}
            alt="img0"
          />
          <div className="login_text">
            <h1>Sign in to Waffles</h1>
          </div>
          <Button type="submit" onClick={signIn}>
            Sign in With Google
          </Button>
        </div>
      </div>
    );
}

export default Login