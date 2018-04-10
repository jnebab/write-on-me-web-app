import React from 'react';
import { auth, googleAuthProvider } from '../firebase/firebase';
import googleLogo from '../images/g+.png'

class NewLogin extends React.Component {
    render() {
        return(
            <div className='newLogin'>
                <button onClick={({history}) => auth.signInWithPopup(googleAuthProvider)} >
                    <img src={googleLogo} alt="googleLogo" height='32px' width='32px'/> Sign-in with Google
                </button>
            </div>
        )
    }
}

export default NewLogin;