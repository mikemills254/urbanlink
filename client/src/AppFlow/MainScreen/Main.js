import React, { useState } from 'react';
import CustomBtn from '../../Components/CustomeBtn/CustomBtn';
import { Tabs, Messages } from '../../Components/StyledComponents/Index';
import Logo from '../../Components/Images/Logo1.png'
import { SlEnvolope, SlCalender, SlSettings } from "react-icons/sl";
import Forums from '../../Components/Images/Forums.png'
import Styles from './Main.module.css'


const NavTab = ({ setActiveTab }) => {
    return (
        <Tabs className='w-[10%] items-center bg-[#0cf03d]'>
            <img src={Logo} className='font-medium w-[50%] cursor-pointer'/>
            <div className='bg-blue mt-10 flex items-center justify-center'>
                <ul className='flex items-center justify-center flex-col gap-8 cursor-pointer'>
                    <li className='text-center justify-center' onClick={() => setActiveTab('messages')}>
                        <SlEnvolope className='ml-[40%]'/>
                        <small>Messages</small>
                    </li>
                    <li className='text-center justify-center' onClick={() => setActiveTab('schedule')}>
                        <SlCalender className='ml-[40%]'/>
                        <small>Schedule</small>
                    </li>
                    <li className='text-center justify-center' onClick={() => setActiveTab('forums')}>
                        <img src={Forums} className='ml-[40%] w-[25%]'/>
                        <small>Forums</small>
                    </li>
                </ul>
            </div>
            <div className='mt-[20rem] items-center justify-center flex flex-col w-[100%] p-2 cursor-pointer' onClick={() => setActiveTab('settings')}>
                <SlSettings/>
                <small>Settings</small>
            </div>
        </Tabs>
    );
};

const ChatsProfileTabs = ({ activeTab, setActiveTab }) => {
    if (activeTab !== 'messages' && activeTab !== 'schedule' && activeTab !== 'forums') {
        return null;
    }

    return (
        <Tabs className='bg-[green] w-[25%]'>
            {activeTab === 'messages' && <>
            <div className='userProfile bg-yellow-500 p-2 flex items-center gap-2'>
                <div className='UserIcon w-10 h-10 bg-[#ffffff] rounded-full'></div>
                <h4 className='Name font-medium'>Mike Mills</h4>
            </div>
            <div className='container overflow-y-auto' sty>
                <Messages className='bg-slate-600'>
                    <small>Message one</small>
                </Messages>
                <Messages className='bg-slate-600'>
                    <small>Message one</small>
                </Messages>
                <Messages className='bg-slate-600'>
                    <small>Message one</small>
                </Messages><Messages className='bg-slate-600'>
                    <small>Message one</small>
                </Messages><Messages className='bg-slate-600'>
                    <small>Message one</small>
                </Messages><Messages className='bg-slate-600'>
                    <small>Message one</small>
                </Messages><Messages className='bg-slate-600'>
                    <small>Message one</small>
                </Messages><Messages className='bg-slate-600'>
                    <small>Message one</small>
                </Messages><Messages className='bg-slate-600'>
                    <small>Message one</small>
                </Messages>
            </div>
            
            
            </>}
            {activeTab === 'schedule' && <p>Schedule Content</p>}
            {activeTab === 'forums' && <p>Forums Content</p>}
        </Tabs>
    );
};

const ChatsTabs = ({ activeChat, setActiveChat }) => {
    // Render different chat content based on activeChat
    return (
        <Tabs className='bg-[red] w-[50%]'>
            <p>Chats Content for {activeChat}</p>
        </Tabs>
    );
};

const ProfileTab = () => {
    return (
        <Tabs className='bg-[blue] w-[25%]'>
            <p>Profile</p>
        </Tabs>
    );
};

const Main = () => {
    const [activeTab, setActiveTab] = useState('messages');
    const [activeChat, setActiveChat] = useState(null);

    return (
        <div className='flex flex-col items-center h-screen'>
            <div className='flex items-center w-[75%]'>
                <NavTab setActiveTab={setActiveTab} />
                <ChatsProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <ChatsTabs activeChat={activeChat} setActiveChat={setActiveChat} />
                <ProfileTab />
            </div>
        </div>
    );
};

export default Main;
