import React from "react";
import apple from '../../img/apple.png'
import google from '../../img/google.webp'


const SignUp = () => {
    return (
        <div className='auth-container'>
            <div className='auth-cont'>
                <div className='auth'>
                    <input type="text" placeholder='Email' className='auth-input'/>
                    <input type="text" placeholder='Пароль' className='auth-input'/>
                    <input type="text" placeholder='Потверждение пароля' className='auth-input'/>
                    <a href="signin" className='auth-forget-btn'>Есть аккаунт ?</a>
                    <div className='auth-btn'>Зарегистрироваться</div>
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
export default SignUp
