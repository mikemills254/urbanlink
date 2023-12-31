import React from 'react'
import { LeftDiv } from '../SignIn/SignIn'
import styles from './OTP.module.css'
import CustomInput from '../../Components/CustomeInput/CustomInput'
import {SlLockOpen, SlEye} from 'react-icons/sl'
import CustomBtn from '../../Components/CustomeBtn/CustomBtn'

const RightDiv = () => {
    return(
        <div className='w-[40%] flex justify-center p-10 bg-[#dcdcdc] rounded-2xl'>
            <div className='flex flex-col items-center w-[100%]'>
                <div className='w-[90%] flex flex-col items-center justify-center'>
                    <div className='mx-auto flex-col flex w-[80%]'>
                        <h3 className='text-4xl font-semibold'>OTP</h3>
                        <p className='w-[80%] text-sm'>Please check your email for security code</p>
                    </div>
                </div>
                <div className='relative flex flex-col items-center w-[90%] h-[100%] mt-5'>
                    <CustomInput
                        placeholder='Enter OTP'
                        ContainerStyles={styles.ContainerStyles}
                        IconBefore={SlLockOpen}
                        IconAfter={SlEye}
                        IconStyleAfter={styles.IconStyle}
                        IconStyleBefore={styles.IconStyle}
                        maxLength={6}
                        InputStyles={styles.InputStyles}
                    />
                    <CustomBtn
                        text='Verify OTP'
                        ContainerStyle={styles.ButtonStyles}
                    />
                </div>
            </div>
            
        </div>
    )
}

const Otp = () => {
    return (
        <div className='flex align-middle justify-center p-10'>
            {/* <LeftDiv/> */}
            <RightDiv/>
        </div>
    )
}

export default Otp