import { FaCode, FaHouse, FaStar } from "react-icons/fa6"
import "../styles/navbar.css"
export default function NavBar(){

    const navLinks = [
        {
            id: 1,
            path: "/",
            icon: <FaHouse />,
            text: "Home"
        },
        {
            id: 2,
            path: "/",
            icon: <FaHouse />,
            text: "About"

        },
        {
            id: 3,
            path: "/",
            icon: <FaHouse />,
            text: "Certificates"
        },
        {
            id: 4,
            path: "/",
            icon: <FaHouse />,
            text: "Skills"
        },
        {
            id: 5,
            path: "/",
            icon: <FaHouse />,
            text: "Projects"
        },
        {
            id: 6,
            path: "",
            icon: <FaStar />,
            text: "Exprience"
        }
    ]
    return(
        <>
        <header className="header">
            <div className="logo-text">
                <p className="text"><FaCode /> Sphiwe.R.Khubayi</p>
            </div>

            <div className="navigation-links">
                <nav className="nav-links">
                    {navLinks.map((e) => (
                        <a key={e.id} href={e.path}> {e.icon} {e.text}</a>
                    ))}
                </nav>
            </div>
        </header>
        </>
    )
}