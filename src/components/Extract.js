import styled from "styled-components";

export default function Extract() {
    return (
        <ExtractStyle>
            <h1>Nao ha registros de entrada ou saida</h1>
        </ExtractStyle>
    );
}

const ExtractStyle = styled.div`
    height: 60vh;
    width: 90%;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
   justify-content: center;
   h1{
        font-size: 20px;
        color: #868686;
        font-family : 'Raleway', sans-serif;
        font-weight: 00;
        text-align: center;
        width: 70%;
   }
`