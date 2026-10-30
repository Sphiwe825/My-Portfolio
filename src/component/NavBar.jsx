import { FaCode } from "react-icons/fa6"

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
]

export default function NavBar() {
    return (
        <header className="site-header">
            <div className="nav-shell">
                <a className="brand" href="#home" aria-label="Sphiwe Khubayi home">
                    <span className="brand-mark"><FaCode aria-hidden="true" /></span>
                    <span>Sphiwe<span className="brand-dot">.</span></span>
                </a>
                <nav className="nav-links" aria-label="Main navigation">
                    {navLinks.map(({ href, label }) => (
                        <a key={href} href={href}>{label}</a>
                    ))}
                </nav>
                <a className="nav-cta" href="#contact">
                    Let&apos;s talk <span aria-hidden="true">↗</span>
                </a>
            </div>
        </header>
    )
}
