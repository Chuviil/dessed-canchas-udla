import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className={"flex flex-col border-t border-black-100 bg-black-200 text-white"}>
            <div className={"flex flex-col justify-between gap-5 items-center sm:px-16 px-6 py-10"}>
                <Image src={"/logo_clubes_udla_blanco.png"} alt={"Udla Logo"} width={236} height={105}
                       className={"object-contain"}/>
                <div className={"flex flex-row gap-5"}>
                    <Link href={"https://www.facebook.com/clubesudla"} target={"_blank"}
                          aria-label={"Clubes Udla Facebook"}>
                        <div className={"rounded-full p-2 border border-white hover:bg-white hover:text-black-200"}>
                            <FaFacebookF size={16}/>
                        </div>
                    </Link>
                    <Link href={"https://www.instagram.com/clubes_udla"} target={"_blank"}
                          aria-label={"Clubes Udla Instagram"}>
                        <div className={"rounded-full p-2 border border-white hover:bg-white hover:text-black-200"}>
                            <FaInstagram size={16}/>
                        </div>
                    </Link>
                </div>
                <div className={"text-center gap-2 flex flex-col"}>
                    <p>David Flores Larrea</p>
                    <p>Coordinador de Clubes</p>
                    <Link href={"mailto:david.flores@udla.edu.ec"}>
                        david.flores@udla.edu.ec
                    </Link>
                    <Link href={"mailto:clubes@udla.edu.ec"}>
                        clubes@udla.edu.ec
                    </Link>
                </div>
            </div>
            <div
                className={"flex justify-between items-center flex-wrap border-t border-black-100 sm:px-16 px-6 py-10"}>
                <div className={"flex-1 flex sm:justify-start justify-center max-sm:mt-4 gap-10"}>
                    <p>@ 2024 Clubes UDLA</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
