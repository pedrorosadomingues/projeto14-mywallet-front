import styled from "styled-components";
import { useState } from "react";

export default function NewExit() {
    return (
        <NewExitStyled>
        
        <form>
             <h1>Nova saida</h1>
            <input type="text" placeholder="Valor" />
            <input type="text" placeholder="Descrição" />
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
        margin: 70px 0 40px 25px;
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