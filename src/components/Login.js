import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <StyledLogin>
            <LoginCard>
                <h2>Wellcome to Firechat</h2>
                <LoginItem className="google">
                    <FaGoogle size="24px"/> 
                    <p>Sign in With Google</p>
                </LoginItem>

                <LoginItem className="facebook">
                    <FaFacebook size="24px"/> 
                    <p>Sign in With Facebook</p>
                </LoginItem>
            </LoginCard>
        </StyledLogin>
    )
}

const StyledLogin = styled.div`
    background-image: linear-gradient(#40a9ff, #096dd9);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

const LoginCard = styled.div`
    padding: 36px 36px 66px;
    width: 420px;
    text-align: center;
    background-color: white;
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    h2 {
        margin-bottom: 15px;
    }
`

const LoginItem = styled.div`
    cursor: pointer;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    display: inline-block;
    margin: 10px auto;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.google {
        background-color: #4285f4;
        color: white;
    }

    &.facebook {
        background-color: #3b5998;
    }

    p {
        margin-left: 8px;
    }
`

export default Login
