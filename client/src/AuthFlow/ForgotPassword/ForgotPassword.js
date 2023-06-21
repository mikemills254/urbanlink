import React, { useState } from 'react'
import styles from './ForgotPassword.module.css'
import { LeftDiv } from '../SignIn/SignIn'
import CustomInput from '../../Components/CustomeInput/CustomInput'
import { SlEnvolope, SlEye} from "react-icons/sl";
import CustomBtn from '../../Components/CustomeBtn/CustomBtn';

const RightDiv = () => {
    const [Email, setEmail] = useState('')
    const [ emtptyEmailError, setEmptyEmailError] = useState(false)

    const OnsubmitClicked = (Email) => {
        console.log(Email)
    }

    return(
        <div className='flex w-[50%] h-full justify-center p-10'>
            <div className='w-[90%] flex flex-col items-center justify-center'>
                <div className='mx-auto w-full flex flex-col items-center justify-start'>
                    <h3 className='text-4xl font-semibold '>Forgot Password!</h3>
                    <p className='w-[80%] text-sm leading-2'>Enter a valied Email Address and check your email for more assistance</p>
                </div>
                <div className='flex justify-center items-center w-[100%] mt-10'>
                    <form onSubmit={OnsubmitClicked} className='flex flex-col items-center justify-center w-[100%]'>
                        <CustomInput 
                            ContainerStyles={styles.ContainerStyles}
                            placeholder='Email Address'
                            InputStyles={styles.InputStyles}
                            IconBefore={SlEnvolope}
                            IconStyleBefore={styles.IconStyle}
                            type='email'
                            maxLength={40}
                            value={Email}
                            onChange={()=> {
                                setEmail()
                            }}
                        />
                        {emtptyEmailError && <small className='text-[red] mb-2 '>please enter a valied email address</small>}
                        <CustomBtn
                            text='Reset'
                            ContainerStyle={styles.ButtonStyles}
                            onClick={OnsubmitClicked}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

const ForgotPassword = () => {
    return (
        <div className='flex items-center flex-col justify-center p-10'>
            {/* <LeftDiv/> */}
            <RightDiv/>
        </div>
    )
}

export default ForgotPassword