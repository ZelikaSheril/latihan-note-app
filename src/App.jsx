import { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Layouts/Layout"
import Note from "./modules/note/Note"
import Login from "./modules/auth/Login"
import Registrasi from "./modules/auth/Registrasi"
import { getToken } from "./modules/config/Api"
import { useAuth } from './modules/auth/Auth'
import { NoteProvider } from "./modules/note/NoteContext"

function App() {
    // panggil nilai isLoggedin dari context

    // const [token,setToken] = useState(null);
    const {isLoggedin} = useAuth()

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {isLoggedin ? (
                        <Route>
                        <Route path={"/Note"} element={<NoteProvider><Note/></NoteProvider>} />,
                        <Route path="/Login" element={<Navigate to={"/Note"}/>} />
                        </Route>
                    ) : (
                        <>
                        <Route path={"/Registrasi"} element={<Registrasi />} /> 
                        <Route path={"/Login"} element={<Login/>} />
                        <Route path="*" element={<Navigate to={"/Login"}/>}/>
                        </>
                    )}
                                       
                </Route>
                {/* {token !== null ? 
                    <Route>
                        <Route path={"/Note"} element={<Note />} /> 
                        <Route path="*" element={<Navigate to={"/Note"}/>}/>
                    </Route>
                : <Route path={"/Note"} element={<h1 className=" text-white grid place-items-center mt-[16rem] font-bold text-[4rem]">Not Found</h1>} />}
                {
                    token !== null ? null : 
                   <Route>
                     <Route path={"/Registrasi"} element={<Registrasi />} />
                     <Route path={"/Login"} element={<Login onLogin={handleLogin}/>} />
                   </Route>
                }
                <Route path="*" element={<Navigate to={"/Login"}/>}/> */}
            </Routes>

        </BrowserRouter>

    )
}

export default App