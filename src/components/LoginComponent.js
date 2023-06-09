import React, { useState } from 'react'
import { Button, Container, Form, FormGroup, FormLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { doLogin } from '../store/auth/action'
import { Navigate } from 'react-router-dom'

const LoginComponent = () => {
    const {user} = useSelector((state)=> state.AuthReducer)
    const [username, setUsername] = useState('kminchelle')
    const [password, setPassword] = useState('0lelplR')
    const dispatch = useDispatch()
    function tryLogin(){
        dispatch(doLogin({username: username, password: password}))
    }

    if(user && user.id){
        return(
            <Navigate to='/profile' replace/>
        )
    }

  return (
    <Container>
        <Form>
            <FormGroup>
                <FormLabel>Nombre de Usuario</FormLabel>
                <input value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='username' type='username'></input>
            </FormGroup>
            <FormGroup>
                <FormLabel> Password </FormLabel>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password' type='password'></input>
            </FormGroup>
            <Button onClick={tryLogin} >Login</Button>
        </Form>
    </Container>
  )
}

export default LoginComponent