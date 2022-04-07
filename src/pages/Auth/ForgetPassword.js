import React from "react";


const ForgetPassword = () => {
    return (
        <div className='auth-container'>
            <div className='auth-cont'>
                <div className='auth'>
                    <input type="text" placeholder='Email' className='auth-input'/>
                    <input type="text" placeholder='Код потверждение' className='auth-input'/>
                    <div className='auth-btn'>Потвердить</div>

                </div>
            </div>
        </div>
    )
}
export default ForgetPassword
