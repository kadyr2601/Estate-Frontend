import React from "react";
import apple from '../../img/apple.png'
import google from '../../img/google.webp'


const SignIn = () => {
    return (
        <div className='auth-container'>
            <div className='auth-cont'>
                <div className='auth'>
                    <input type="text" placeholder='Email' className='auth-input'/>
                    <input type="text" placeholder='Пароль' className='auth-input'/>
                    <a href="change_password" className='auth-forget-btn'>Забыл пароль ?</a>
                    <div className='auth-btn'>Авторизоваться</div>
                    <div className='social-auth-cont'>
                        <div className='social-btn'>
                            <div className='social-logo'>
                                <img src={apple} alt="" className='logo-img'/>
                            </div>
                            <div className='social-text'>
                                Apple ID
                            </div>

                        </div>
                        <div className='social-btn'>
                            <div className='social-logo'>
                                <img src={google} alt="" className='logo-img'/>
                            </div>
                            <div className='social-text'>
                                Google
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn
