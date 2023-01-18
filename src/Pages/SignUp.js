import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <SignUpStyle>
            <img src={logo} alt="MyWallet-logo" />
            <form>
                <input type="text" name="name" placeholder="Nome" onChange={e => handleForm(e)} />
                <input type="email" name="email" placeholder="E-mail" onChange={e => handleForm(e)} />
                <input type="password" name="password" placeholder="Senha" onChange={e => handleForm(e)} />
                <input type="password" name="confirmPassword" placeholder="Confirme a senha" onChange={e => handleForm(e)} />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>

        </SignUpStyle>
    );
}

const SignUpStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #8C11BE;
    img {
        margin-top: 70px;
        margin-bottom: 40px;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        input {
            width: 80%;
            height: 58px;
            margin: 0 auto 13px;
            padding: 0 10px;
            border: none;
            border-radius: 5px;
            font-size: 20px;
            ::placeholder {
                color: #000;
                opacity: 0.7;
                font-family : 'Raleway', sans-serif;
        }}

    }
    button {
        width: 80%;
        height: 46px;
        margin: 0 auto;
        border: none;
        border-radius: 5px;
        font-size: 20px;
        background-color: #A328D6;
        color: #fff;
        font-family : 'Raleway', sans-serif;
    }
    a {
        margin-top: 25px;
        font-size: 17px;
        color: #fff;
        text-decoration: none;
        font-family : 'Raleway', sans-serif;
    }
`