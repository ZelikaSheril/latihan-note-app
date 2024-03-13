import { Link, Outlet } from "react-router-dom";

export default function Layout({token, onLogout}){
    return(
        <>
        <div className="flex bg-blue-600 h-[55px] justify-around py-2 gap-2 text-white">
            <h1 className="flex items-center gap-5">VOTE</h1>
            <nav className="flex gap-5 items-center">
            {token !== null ? null : <Link to={"/Registrasi"}><p className="hover:text-amber-300">Registrasi</p></Link>}
            {token !== null ? null : <Link to={"/Login"}><p className="hover:text-amber-300">Login</p></Link>}
            <Link to={"/Note"}><p className="hover:text-amber-300">Note</p></Link>
            {token !== null ? <Link onClick={() => onLogout()}><span className="text-white font-sans hover:text-slate-300">Logout</span></Link> : null}

            </nav>
        </div>
        <Outlet/>
        </>
    )
}