"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const NavBar = () => {
    const {data: session} = useSession();
    
    return (
        <header className={"w-full fixed z-50 bg-black-200"}>
            <nav className={"max-w[1440px] mx-auto flex justify-center sm:justify-between items-center sm:px-16 px-6 py-4"}>
                <Link href={"/"} className={"flex justify-center items-center"}>
                    <Image src={"/logo_clubes_udla_blanco.png"} alt={"Udla Logo"} width={115} height={51}
                           className={"object-contain"}/>
                </Link>
                <div className={"sm:flex flex-row gap-5 font-bold hidden"}>
                    <Link href={"/"} className={"navbar__link"}>
                        Inicio
                    </Link>
                    {/* Show admin dashboard button if user has admin role */}
                    {session?.roles?.includes("admin") && (
                        <Link href="/admin/dashboard" className={"navbar__link"}>
                            Admin Dashboard
                        </Link>
                    )}
                    {session ? (
                        <Link href="/api/auth/signout" className={"navbar__link"}>
                            Log Out
                        </Link>
                    ) : (
                        <Link href="/api/auth/signin" className={"navbar__link"}>
                            Log In
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
