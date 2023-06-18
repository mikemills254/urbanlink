import React, { useState } from 'react'
import styles from './ForgotPassword.module.css'
import { LeftDiv } from '../SignIn/SignIn'
import CustomInput from '../../Components/CustomeInput/CustomInput'
import { SlEnvolope, SlEye} from "react-icons/sl";
import CustomBtn from '../../Components/CustomeBtn/CustomBtn';

const RightDiv = () => {
    const [Email, setEmail] = useState('')

    return(
        <div className='flex w-[60%] h-full justify-center p-10'>
            <div className='w-[90%] flex flex-col items-center justify-center'>
                <div className='mx-auto w-full flex flex-col items-center justify-start'>
                    <h3 className='text-4xl font-semibold '>Forgot Password!</h3>
                    <p className='w-[80%] text-sm leading-2'>Enter a valied Email Address and check your email for more assistance</p>
                </div>
                <div className='flex justify-center items-center w-[100%] mt-10'>
                    <form className='flex flex-col items-center justify-center w-[100%]'>
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
                        <CustomBtn
                            text='Reset'
                            ContainerStyle={styles.ButtonStyles}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

const ForgotPassword = () => {
    return (
        <div className='flex align-middle'>
            <LeftDiv/>
            <RightDiv/>
        </div>
    )
}

export default ForgotPassword