import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/signup.css";


export const Registrarse = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"

            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }

        fetch("https://dlimaf-reimagined-winner-g96rj7vxjwq27jv-3001.preview.app.github.dev/api/signup",requestOptions)
            .then(resp=> {
                if (resp.status === 200) {
                    return resp.json()}
                else {
                    return alert("There has been some error")}
            })
            .then(data => {
                console.log(data)
            })
                        
            .catch(error=>console.log(error))
         }
    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="form">
                    <header className="d-flex justify-content-center mb-3">
                        <h1 className="text-primary">Regístrate</h1>
                    </header>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e )=> setPassword(e.target.value)}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-primary rounded-pill">Registrarme</button>
                    </div>
                    <hr></hr>
                    <footer className="d-flex justify-content-center mt-3">
                        <h6>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></h6>
                    </footer>
                </form>
            </div>
        </div> 
    )
}