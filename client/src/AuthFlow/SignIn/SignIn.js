import React, { useState } from 'react'
import Logo from '../../Components/Images/Logo1.png'
import styles from './SignIn.module.css'
import CustomBtn from '../../Components/CustomeBtn/CustomBtn';
import CustomInput from '../../Components/CustomeInput/CustomInput';
import { SlEnvolope, SlUser, SlLock, SlEye} from "react-icons/sl";
import { FcGoogle } from 'react-icons/fc'
import Image from '../../Components/Images/out.jpg'
import { useNavigate} from 'react-router-dom';



export const LeftDiv = () => {
    return (
        <div className='w-[75%] h-screen bg-cover bg-center align-middle p-5'
        style={{
        backgroundImage: `url(${Image})`,}}>
            <div className='p-5 w-1/4 flex gap-2 relative align-middle'>
                <img src={Logo} className='w-10'/>
                <p className='text-2xl relative font-bold text-white'>Urbanlink</p>
            </div>
            <div className={styles.ml}>
                <div className='relative items-center justify-center w-[100%] h-[100%] ml-90px p-10'>
                    <h3 className={[styles.mlh3]} style={{color: '#FF9900'}}>Connect.</h3>
                    <h3 className={styles.mlh3} style={{color: '#FF9900'}}>Collaborate.</h3>
                    <h3 className={styles.mlh3} style={{color: '#FF9900'}}>Work Efficiently.</h3>
                </div>
            </div>
            <div className='absolute bottom-5 left-[45%] text-2xl font-bold text-[#65C21B]'>
                <h4>North Rift</h4>
            </div>

        </div>
    );
};

const RightDiv = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Username, setUsername] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const navigate = useNavigate()
    const [emptyInputs, setEmptyInputs] = useState(false)

    const togglePasswordVisible = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    const OnLoginClicked = () => {
        navigate('/LoginIn')
    }
    const OnPassWordForgotClicked = () => {
        navigate('/ForgotPassword')
    }

    const OnConnectClicked = () => {
        if (Email.length === 0 || Username.length === 0 || Password.length === 0) {
            setEmptyInputs(true);
        } else {
            setEmptyInputs(false);
            alert('creating account');
            navigate('/OTP');
        }
    };
    

    return(
        <div className='h-screen w-[50%] flex justify-center p-10'>
            <div className='w-[90%] flex flex-col items-center'>
                <div className='mx-auto flex-col flex items-center'>
                    <h3 className='text-4xl font-semibold'>Welcome To Urbanlink</h3>
                    <p className='w-[80%] text-sm leading-2'>Join the most exceptional team dedicated to seamlessly connecting urban roads in the North Rift region.</p>
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
                            placeholder='Username'
                            InputStyles={styles.InputStyles}
                            IconBefore={SlUser}
                            type='text'
                            maxLength={20}
                            IconStyleBefore={styles.IconStyle}
                            value={Username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                        <CustomInput
                            ContainerStyles={styles.ContainerStyles}
                            placeholder='Password'
                            InputStyles={styles.InputStyles}
                            IconBefore={SlLock}
                            type={ passwordVisible ? 'text': 'password' }
                            maxLength={20}
                            IconAfter={SlEye}
                            IconStyleAfter={styles.AfterIcon}
                            IconStyleBefore={styles.IconStyle}
                            value={Password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            onIconAfterClicked={() => {
                                togglePasswordVisible()
                            }}
                        />
                        { emptyInputs && <small className='mb-5 text-[red] '>Please fill in the inputs</small>}
                        <CustomBtn
                            text='Start Connecting...'
                            ContainerStyle={styles.ButtonContainer}
                            type='submit'
                            onClick={OnConnectClicked}
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
                        onClick={OnPassWordForgotClicked}
                    />
                    <p className='mb-5'>
                        Already have an Account?
                        <span
                            onClick={OnLoginClicked}
                            className='font-bold underline hover:cursor-pointer'
                        >
                            Login...
                        </span>
                    </p>
                </div>

            </div>
        </div>

    )
}

const SignIn = () => {
    return (
        <div className='flex item-center justify-center'>
            {/* <LeftDiv/> */}
            <RightDiv/>
        </div>
    )
}

export default SignIn