import React from 'react'
import GlobalStyle from './components/GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './components/Login'
import Chats from './components/Chats';

import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route path="/chats" component={Chats} />
                        <Route path="/" component={Login} />
                    </Switch>
                </AuthProvider>
            </Router>
        </div>
    )
}

export default App