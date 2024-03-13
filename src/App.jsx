import Note from "./Note";
import Registrasi from "./pages/Registrasi";
import Login from "./pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { getToken } from "./Api";

function App() {
    const [token, setToken] = useState(null);

    // const handleLogin = async (token, onLogin) =>{
    //     setToken(token);
    //     onLogin(token);
    //     tampilkan();
    // }

    // Ini diubah

    const handleLogin = (tokens) => {
        setToken(tokens)
    }

    const handleLogout = () => {
        setToken(null)
        localStorage.removeItem('token');
    }

    useEffect(() => {
        const token = getToken()
        setToken(token);
    },[])
    
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout token={token} onLogout={handleLogout}/>}>
                {token !== null ? 
                    <Route>
                        <Route path={"/Note"} element={<Note />} /> 
                        <Route path="*" element={<Navigate to={"/Note"}/>}/>
                    </Route>
                : <Route path={"/Note"} element={<h1 className="text-white grid place-items-center mt-[16rem] font-bold text-[4rem]">Not Found</h1>} />}
                {
                    token !== null ? null : 
                   <Route>
                     <Route path={"/Registrasi"} element={<Registrasi />} />
                     <Route path={"/Login"} element={<Login onLogin={handleLogin}/>} />
                   </Route>
                }
                </Route>
                <Route path="*" element={<Navigate to={"/Login"}/>}/>
            </Routes>

        </BrowserRouter>
    // return (
    //     <BrowserRouter>
    //         <Routes>
    //             <Route element={<Layout token={token} onLogin={handleLogout}/>}> {token !== null ?
    //             }
    //             <Route path={"/registrasi"} element={<Registrasi />} />
    //             <Route path={"/login"} element={<Login onLogin={handleLogin}/>} />
    //             <Route path={"/note"} element={<Note />} />
    //             </Route>
    //         </Routes>
    //     </BrowserRouter>
    )

}

export default App;

