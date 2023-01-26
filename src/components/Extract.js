import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


export default function Extract() {

    const [extract, setExtract] = useState({ "total": 0, "transacts": [] });

    const { userState } = useContext(UserContext);

    function deleteTransact(id) {

        const config = {

            headers: { Authorization: `Bearer ${userState.token}` }
        }

        const confirmDelete = window.confirm("Tem certeza que deseja excluir essa transação?");

        if (confirmDelete){
        axios.delete(`${process.env.REACT_APP_API_URL}/extract/${id}`, config)

            .then((res) => {

                extract.transacts = extract.transacts.filter((item) => item._id !== id);

                setExtract({ ...extract });

            })

            .catch((err) => alert(err));
        }
    }

    useEffect(() => {

        const config = {

            headers: { Authorization: `Bearer ${userState.token}` }
        }

        axios.get(`${process.env.REACT_APP_API_URL}/extract`, config)

            .then((res) => {

                console.log(res.data);

                setExtract(res.data)

            })

            .catch((err) => alert(err));

    })

    return (

        <ExtractStyle>

            {extract.transacts.map((item) => {

                let newValue = (item.value / 100).toFixed(2);

                newValue = newValue.replace(".", ",");

                return (

                    <Transaction type={item.type} key={item._id}>

                        <span>{item.date}</span>

                        <span>{item.description}</span>

                        <span>{newValue}</span>

                        <ion-icon name="trash-outline" onClick={() => deleteTransact(item._id)}></ion-icon>

                    </Transaction>

                );

            })}

            <Balance total={extract.total}>
                <span>SALDO</span>
                <span>{(extract.total / 100).toFixed(2).replace(".", ",")}</span>
            </Balance>
        </ExtractStyle>

    );
}

const ExtractStyle = styled.div`
    
    height: 60vh;
    
    width: 90%;
    
    background-color: #fff;
    
    border-radius: 5px;
    
    display: flex;
    
    align-items: flex-start;
 
    justify-content: ;

    flex-direction: column;    

    position: relative;
 
    span{
 
        font-size: 20px;

        color: #8C11BE;
 
        font-family : 'Raleway', sans-serif;
 
        text-align: center;
 
        width: 70%;
 
 }
`
const Transaction = styled.div`

    width: 100%;

    display: flex;

    align-items: center;

    span:nth-child(1){

        color: #8C11BE;

    }
    span:nth-child(2){

        color: #8C11BE;

        align-items: flex-start;

        justify-content: flex-start;

        display: flex;

        overflow: hidden;

        width: 100%;
       
    }
    span:nth-child(3){

        color: ${props => props.type === "entry" ? "#03AC00" : "#C70000"};
        
        display: flex;

        align-items: flex-end;

        justify-content: flex-end;

        margin-right: 10px;
        
    }

    ion-icon{
        
        height: 40px;
        
        width: 40px;
        
        margin-right: 2px;
        
        color: #8C11BE;
        
        &:hover{
        
            cursor: pointer;
        
        }
    }
`

const Balance = styled.div`

    position: absolute;

    bottom: 5px;

    left: 5px;

    width: 100%;

    display: flex;

    justify-content: space-between;

    font-weight: 700;

    span:nth-child(2){

        color: ${props => props.total >= 0 ? "#03AC00" : "#C70000"};
        
    }
`