import Link from "next/link"
import Image from "next/image"
import { items } from "./nav-items"

export const Header = () => {
  return (
    <header className="w-full bg-n3t-black ">
        <nav className="relative w-full flex justify-between items-center px-6 py-3">
            <Link href="/">
                <Image 
                    src={"/images/logo/n3t-logo.svg"}
                    alt="N3T's logo"
                    title="N3T's logo"
                    about="N3T's logo"
                    width={145}
                    height={59}
                    className="w-24 h-auto"
                />
            </Link>
            <div className="flex justify-end items-center gap-x-5">
                <button className="px-3 h-7 rounded-md bg-n3t-gradient text-white text-sm font-semibold">Connect wallet</button>
                <label htmlFor="menu" className="[&>#menu:checked~#close-menu]:hidden [&>#menu:checked~#open-menu]:block">
                    <input 
                        type="checkbox" 
                        id="menu"
                        className="hidden"
                    />
                    <Image 
                        src={"/images/icons/dropdown-icon.png"}
                        alt="Dropdown icon"
                        title="Dropdown icon"
                        about="Dropdown icon"
                        id="close-menu"
                        width={28}
                        height={28}
                        className="cursor-pointer"
                    />
                    <div id="open-menu" className="hidden">
                        <Image 
                            src={"/images/icons/x-icon.svg"}
                            alt="X icon"
                            title="X icon"
                            about="X icon"
                            width={24}
                            height={24}
                            className="cursor-pointer"
                        />
                        <ul className="shadow-2xl px-6 py-5 top-14 absolute flex flex-col items-start justify-start gap-y-4 left-0 w-full bg-n3t-black [&_a]:text-white [&_a]:inline-block [&_a]:w-full [&_li]:w-full [&_a]:transition [&_a:hover]:text-n3t-gold-2 [&_li]:border-b [&_li]:border-b-n3t-gold-1 [&_li]:pb-2">
                            {
                                items.map(({ name, path }) => (
                                    <li key={path}>
                                        <Link href={path}>
                                            {name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </label>
            </div>
        </nav>
    </header>
  )
}