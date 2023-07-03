import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './AppFlow/MainScreen/Main';
import LoginIn from './AuthFlow/LoginIn/LoginIn';
import ForgotPassword from './AuthFlow/ForgotPassword/ForgotPassword';
import Otp from './AuthFlow/OTP/Otp';
import SignIn from './AuthFlow/SignIn/SignIn';

const AuthStack = () => {
    return (
        <Routes>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/LoginIn" element={<LoginIn />} />
            <Route path="/OTP" element={<Otp />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="*" element={<Navigate to="/SignIn" />} />
        </Routes>
    );
};

const AppStack = () => {
    return (
        <Routes>
            <Route path="/Home" element={<Main />} />
            <Route path='*' element={<Navigate to="Home"/>}/>
        </Routes>
    );
};

export default function App() {
    const IsAuthenticated = true;

    return (
        <Router>
        {IsAuthenticated ? <AppStack /> : <AuthStack />}
        </Router>
    );
}
