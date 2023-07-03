import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Components/Images/Logo1.png';
import styles from './SignIn.module.css';
import CustomBtn from '../../Components/CustomeBtn/CustomBtn';
import CustomInput from '../../Components/CustomeInput/CustomInput';
import { SlEnvolope, SlUser, SlLock, SlEye } from "react-icons/sl";
import { FcGoogle } from 'react-icons/fc';
import Image from '../../Components/Images/out.jpg';
import useAuthStore, { setUsername, setEmail } from '../../Store/Store';
import toast, {Toaster} from 'react-hot-toast';

const RightDiv = () => {
    const [Email, setMail] = useState('');
    const [Password, setPassword] = useState('');
    const [Username, SetUsername] = useState('')
    const navigate = useNavigate();
    const [emptyInputs, setEmptyInputs] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const AuthStore = useAuthStore()
    const dispatch = AuthStore.dispatch

    const togglePasswordVisible = () => {
        setPasswordVisible(!passwordVisible);
    };

    const OnLoginClicked = () => {
        navigate('/LoginIn');
    };

    const OnPassWordForgotClicked = () => {
        navigate('/ForgotPassword');
    };

    const OnConnectClicked =() => {
        if(Email.length === 0 || Username.length === 0|| Password.length === 0){
            return setEmptyInputs(true)
        }else {
            dispatch(setUsername(Username))
            dispatch(setEmail(Email))
            toast.success('User successFully created')
        }
    }

    return (
        <div className='h-[60%] w-[40%] flex justify-center p-10 bg-[#dcdcdc] rounded-2xl'>
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
                            onChange={(e) => {
                                setMail(e.target.value);
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
                                SetUsername(e.target.value);
                            }}
                        />
                        <CustomInput
                            ContainerStyles={styles.ContainerStyles}
                            placeholder='Password'
                            InputStyles={styles.InputStyles}
                            IconBefore={SlLock}
                            type={passwordVisible ? 'text' : 'password'}
                            maxLength={20}
                            IconAfter={SlEye}
                            IconStyleAfter={styles.AfterIcon}
                            IconStyleBefore={styles.IconStyle}
                            value={Password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            onIconAfterClicked={togglePasswordVisible}
                        />
                        {emptyInputs && <small className='mb-5 text-[red]'>Please fill in the inputs</small>}
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
    );
};

const SignIn = () => {
    return (
        <div className='flex item-center justify-center p-1'>
            <RightDiv />
        </div>
    );
};

export default SignIn;
