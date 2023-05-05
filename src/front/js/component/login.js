import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

export const Ingresar = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center">
                <form className="form">
                    <header className="d-flex justify-content-center mb-3">
                        <h1 className="text-primary">Iniciar sesión</h1>
                    </header>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-primary rounded-pill">Ingresar</button>
                    </div>
                    <hr></hr>
                    <footer className="d-flex justify-content-center mt-3">
                        <h6>¿Aún no tienes cuenta? <Link to="/signup">Regístrate</Link></h6>
                    </footer>
                </form>
            </div>
        </div> 
    )

}