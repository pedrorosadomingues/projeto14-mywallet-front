import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function NewExit() {

    const { userState } = useContext(UserContext);

    const [form, setForm] = useState({ description: "", value: "", type: "exit" });

    const navigate = useNavigate();

    function handleForm(e) {

        const { name, value } = e.target;

        setForm({ ...form, [name]: value });

    }

    function saveNewExit(e) {

        e.preventDefault();

        axios.post(`${process.env.REACT_APP_API_URL}/new-exit`, form, { headers: { Authorization: `Bearer ${userState.userToken}` } })

            .then(() => alert("Saida salva com sucesso!"))

            .catch((err) => alert(err.response.data));

        navigate("/home");

    }


    return (

        <NewExitStyled>

            <form onSubmit={saveNewExit}>

                <h1>Nova saida</h1>

                <input type="text" name="value" placeholder="Valor" onChange={e => handleForm(e)} />

                <input type="text" name="description" placeholder="Descrição" onChange={e => handleForm(e)} />

                <button type="submit">Salvar saida</button>

            </form>

        </NewExitStyled>

    );
}

const NewExitStyled = styled.div`

    display: flex;

    flex-direction: column;

    align-items: left;

    width: 100%;

    height: 100vh;
    
    h1{

        font-family: "Raleway", sans-serif;

        font-weight: 700;

        margin: 25px 0 40px 25px;

        font-size: 26px;

        color: #fff;

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

        button{

            width: 80%;

            height: 46px;

            margin: 0 auto;

            border: none;

            border-radius: 5px;

            font-size: 20px;

            background-color: #A328D6;

            color: #fff;

            font-family : 'Raleway', sans-serif;

            font-weight: 700;
        }
    }
`