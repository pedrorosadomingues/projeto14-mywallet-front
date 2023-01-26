import styled from "styled-components";
import Extract from "../components/Extract";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


export default function Home() {

    const { userState } = useContext(UserContext);

    console.log(userState)

    return (

        
        <HomeStyle>
        
            <header>
        
                <h1>Olá, {userState.user.name}!</h1>
        
                <Link to="/" ><ion-icon name="exit-outline"></ion-icon></Link>
        
            </header>
        
            <Extract />
        
            <footer>
        
                <Link to="/nova-entrada">
        
                    <ion-icon name="add-circle-outline"></ion-icon>
        
                    <p>Nova entrada</p>
        
                </Link>
        
                <Link to="/nova-saida">
        
                    <ion-icon name="remove-circle-outline"></ion-icon>
        
                    <p>Nova saída</p>
        
                </Link>
        
            </footer>
        
        </HomeStyle>
    );
}

const HomeStyle = styled.div`

    display: flex;

    flex-direction: column;

    align-items: center;

    width: 100%;

    height: 100%;

    background-color: #8C11BE;

    header {

        display: flex;

        justify-content: space-between;

        align-items: center;

        width: 90%;

        height: 10vh;

        padding: 0 18px;
        
        h1 {

            font-size: 26px;

            color: #fff;

            font-family : 'Raleway', sans-serif; 

            font-weight : 700;
        }
        ion-icon {

            font-size: 26px;

            color: #fff; 
        }
    }
    footer {

        display: flex;

        justify-content: space-between;

        width: 90%;

        height: 13vh;

        padding: 0 18px;

        margin-top: 18px;

        a {
            display: flex;

            flex-direction: column;

            align-items: flex-start;

            justify-content: space-between;

            text-decoration: none;

            background-color: #A328D6;

            border-radius: 5px;

            width: 41%;

            height: 100%;

            padding: 10px;
            

            ion-icon {
                font-size: 26px;

                color: #fff;
            }

            p {
                font-size: 16px;

                color: #fff;

                font-family : 'Raleway', sans-serif;

                width: 50%;
            }
        }
    }
`