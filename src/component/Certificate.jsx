import { FaArrowUpRightFromSquare, FaFilePdf } from "react-icons/fa6"
import awsCertificate from "../assets/aws.pdf"
import documentCertificate from "../assets/Document.pdf"
import geeksForGeeksCertificate from "../assets/GeeksForGeeks Frontend.pdf"
import pythonCertificate from "../assets/python3x.pdf"
import rskCertificate from "../assets/Sphiwe_CR641_certificate.pdf"
import spuCertificate from "../assets/spu.pdf"
import webCertificate from "../assets/webCertificate.pdf"

const certificates = [
    {
        title: "AWS Developer — Introduction to AWS Developer Learning Plan",
        issuer: "Amazon Web Services",
        file: awsCertificate,
    },
    {
        title: "Full Stack Developer Bootcamp",
        issuer: "GeeksforGeeks",
        file: geeksForGeeksCertificate,
    },
    {
        title: "Programming with Python 3.X",
        issuer: "Certificate of completion",
        file: pythonCertificate,
    },
    {
        title: "Basics of Python",
        issuer: "UniAthena · Cambridge International Qualifications",
        file: rskCertificate,
    },
    {
        title: "Web Development",
        issuer: "Certificate",
        file: webCertificate,
    },
    {
        title: "Sol Plaatje University",
        issuer: "Certificate",
        file: spuCertificate,
    },
    {
        title: "Additional Certificate",
        issuer: "Certificate document",
        file: documentCertificate,
    },
]

export default function Certificate() {
    return (
        <section className="certificates-section section-shell" id="certificates">
            <div className="section-heading certificates-heading">
                <div>
                    <p className="eyebrow">LEARNING & GROWTH</p>
                    <h2>Certificates and courses.</h2>
                </div>
                <p>
                    A selection of courses and certificates that reflect my ongoing
                    learning in software development and technology.
                </p>
            </div>
            <div className="certificate-grid">
                {certificates.map(({ title, issuer, file }) => (
                    <article className="certificate-card" key={file}>
                        <span className="certificate-icon">
                            <FaFilePdf aria-hidden="true" />
                        </span>
                        <div className="certificate-content">
                            <p>{issuer}</p>
                            <h3>{title}</h3>
                            <a href={file} target="_blank" rel="noreferrer">
                                View certificate <FaArrowUpRightFromSquare aria-hidden="true" />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
