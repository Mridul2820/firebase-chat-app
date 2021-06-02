import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase/firebase';

import { useAuth } from '../contexts/AuthContext'
import axios from 'axios';

const Chats = () => {
    const didMountRef = useRef(false)
    const history = useHistory()

    const { user } = useAuth()
    // console.log(user);

    const [loading, setLoading] = useState(true)

    const handleLogout = async => {
        auth.signOut();
        history.push('/')
    }

    const getFile = async (url) => {
        const response = await fetch(url)
        const data = await response.blob()

        return new File([data], "userPhoto.jpg", {type: 'image/jpeg'})
    }

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true
            
            if(!user) {
                history.push('/')
                return;
            }

            axios.get('https://api.chatengine.io/users/me/',{
                headers: {
                    "project-id": process.env.REACT_APP_CHATENGINE,
                    "user-name": user.email,
                    "user-secret": user.uid
                }
            }).then(() => {
                setLoading(false)
            })
            .catch(() => {
                let formdata = new FormData()

                formdata.append('email' , user.email)
                formdata.append('username' , user.email)
                formdata.append('secret' , user.uid)

                getFile(user.photoURL).then((avatar) => {
                    formdata.append('avatar' , avatar, avatar.name)

                    axios.post(
                        'https://api.chatengine.io/users/',
                        formdata,
                        {headers: { 
                            "private-key": process.env.REACT_APP_CHATENGINEKEY
                        }}
                    )
                    .then(() => setLoading(false))
                    .catch((err) => console.log(err))
                })
            })
        }
    }, [user, history])

    if(!user || loading) return 'Loading...'
    
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
                projectID={`${process.env.REACT_APP_CHATENGINE}`}
                userName={user.email}
                userSecret={user.uid}
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
