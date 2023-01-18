import { UserContext } from './contexts/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import NewEntry from './Pages/NewEntry';
import NewExit from './Pages/NewExit';

export default function App() {
  return (
    <UserContext.Provider value={{}}>
      <MyWalltet>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nova-entrada" element={<NewEntry />} />
            <Route path="/nova-saida" element={<NewExit />} />
          </Routes>
        </BrowserRouter>
      </MyWalltet>
    </UserContext.Provider>
  );
}


const MyWalltet = styled.div`
display: flex;
justify-content: center;
width: 375px;
min-height: 100vh;
margin: auto;
background-color: #8C11BE;
` 