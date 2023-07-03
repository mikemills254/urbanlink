import React, { useState } from 'react'
import { LeftDiv } from '../SignIn/SignIn'
import CustomInput from '../../Components/CustomeInput/CustomInput'
import styles from './LoginIn.module.css'
import { SlEnvolope, SlUser, SlEye} from "react-icons/sl";
import CustomBtn from '../../Components/CustomeBtn/CustomBtn';
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../Store/Store'

const RightDiv = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [emptyInput, setEmptyInput] = useState(false)
    const navigate = useNavigate()

    const togglePasswordVisible = () => {
        setPasswordVisible(!passwordVisible);
    };
    useAuthStore(state => console.log(state))

    const OnLoginClicked = () => {
        if(Email.length === 0 || Password.length === 0) {
            setEmptyInput(true)
        }else {
            setEmptyInput(false)
            alert('Logging into your Account')
        }
    }
    const OnSignInClicked = () => {
        navigate('/SignIn')
    }
    const OnForgotPasswordClicked = () => {
        navigate('/ForgotPassword')
    }
    return(
        <div className='h-[60%] w-[40%] flex justify-center p-10 bg-[#dcdcdc] rounded-2xl'>
            <div className='w-[90%] flex flex-col items-center justify-center'>
                <div className='mx-auto flex-col flex items-center'>
                    <h3 className='text-4xl font-semibold'>Welcome Back!</h3>
                    <p className='w-[80%] text-sm leading-2'>Unite with the finest team for seamless Urban Roads Connectivity in the North Rift</p>
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
                            onChange={(e)=> {
                                setEmail(e.target.value)
                            }}
                        />
                        <CustomInput
                            ContainerStyles={styles.ContainerStyles}
                            placeholder='Password'
                            InputStyles={styles.InputStyles}
                            IconBefore={SlUser}
                            type={ passwordVisible ? 'text' : 'password' }
                            maxLength={20}
                            IconStyleBefore={styles.IconStyle}
                            IconStyleAfter={styles.AfterIcon}
                            value={Password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            IconAfter={SlEye}
                            onIconAfterClicked={() => {
                                togglePasswordVisible()
                            }}
                        />
                        <CustomBtn
                            text='Forgot Password?'
                            ContainerStyle={styles.ForgotContainer}
                            onClick={OnForgotPasswordClicked}
                        />
                        {emptyInput && <small className='mb-5 text-[red]'>Please fill in the inputs</small>}
                        <CustomBtn
                            text='Connect...'
                            ContainerStyle={styles.ButtonContainer}
                            type='submit'
                            onClick={OnLoginClicked}

                        />
                        <small className='text-sm mt-5 mb-5'>Or continue with these profiles</small>
                    </form>
                </div>
                <div className='flex flex-col w-full items-center justify-evenly'>
                    <CustomBtn
                        ContainerStyle={styles.ProfileContainer}
                        text='Continue with Google'
                        IconBefore={FcGoogle}
                        IconBeforeStyle={styles.IconBefore}
                    />
                    <p className='mb-5' onClick={OnSignInClicked}>
                        Don't have an Account?
                        <span className='font-bold underline hover:cursor-pointer'> SignUp... </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

const LoginIn = () => {
    return (
        <div className='flex item-center justify-center p-4'>
            {/* <LeftDiv/> */}
            <RightDiv/>
        </div>
    )
}

export default LoginIn
