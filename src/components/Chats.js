import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase/firebase';

const Chats = () => {
    const history = useHistory()

    const handleLogout = async => {
        auth.signOut();
        history.push('/')
    }
    
    return (
        <ChatPage>
            <NavBar>
                <LogoTab>
                    FireChat
                </LogoTab>
                <LogoutTab onClick={handleLogout}>
                    Logout
                </LogoutTab>
            </NavBar>

            <ChatEngine 
                height="calc(100vh - 66px)"
                projectId={`${process.env.REACT_APP_CHATENGINE}`}
                userName="."
                userSecret="."
            />
        </ChatPage>
    )
}

const ChatPage = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
`

const NavBar = styled.div`
    width: 100%;
    height: 66px;
    background-color: #002766;
`

const LogoTab = styled.div`
    position: absolute;
    left: 22px;
    top: 12px;
    font-size: 32px;
    font-weight: 700;
    color: white;
`
const LogoutTab = styled.div`
    position: absolute;
    top: 22px;
    right: 22px;
    color: white;
    cursor: pointer;
`

export default Chats
