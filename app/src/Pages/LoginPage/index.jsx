import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth';
import './style.css';




const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", { email, password });

        login (email, password); //integração com o contexto e API
    }

    return (
        <>
        <div id='login'>
        <p>{String(authenticated)}</p>
              <div className="second-column">
                  <h2 className="title title-second">entrar no desenvolvedor</h2>
              
                  <div className="social-media">
                      <ul className="list-social-media">
                          <a className="link-social-media" href="#">
                              <li className="item-social-media">
                                  <i className="fab fa-facebook-f"></i>
                              </li>
                          </a>
                          <a className="link-social-media" href="#">
                              <li className="item-social-media">
                                  <i className="fab fa-google-plus-g"></i>
                              </li>
                          </a>
                          <a className="link-social-media" href="#">
                              <li className="item-social-media">
                                  <i className="fab fa-linkedin-in"></i>
                              </li>
                          </a>
                      </ul>
                  </div>
                  <p className="description description-second">ou use sua conta de e-mail:</p>
          
                  <form className="form"  onSubmit={handleSubmit}>
                  
                      <label className="label-input" htmlFor="">
                          <i className="far fa-envelope icon-modify"></i>
                          <input type="email" placeholder="Email" name="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                      </label>
                  
                      <label className="label-input" htmlFor="">
                          <i className="fas fa-lock icon-modify"></i>
                          <input type="password" placeholder="Password" nome="senha" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </label>
                  
                      <a className="password" href="#">Esqueceu sua senha?</a>
                      <button className="btn btn-second" type='submit'>Entrar</button>
                  </form>
              </div>
         
              </div>
      </> 
       
    )
}


export default LoginPage;