import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { Context } from "../store/appContext";


export const Ingresar = () => {
    const { store, actions} = useContext(Context)
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        actions.login(email, password);
        setEmail('')
        setPassword('')
        setTimeout(() => {
        if (store.token) {
            navigate('/private')
        }
        else 
            swal("¡Error!", "Usuario o contraseña errónea :(", "error"); 

    },2000)
    }
    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="form" >
                    <header className="d-flex justify-content-center mb-3">
                        <h1 className="text-primary">Iniciar sesión</h1>
                    </header>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e )=> setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary rounded-pill mt-3">Ingresar</button>
                    <hr></hr>
                    <footer className="d-flex justify-content-center mt-3">
                        <h6>¿Aún no tienes cuenta? <Link to="/signup">Regístrate</Link></h6>
                    </footer>
                </form>
                
            </div>
        </div> 
    )

}