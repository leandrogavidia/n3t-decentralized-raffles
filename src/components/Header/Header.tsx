import { FC } from "react";
import { WalletButton } from "@components/WalletButton/WalletButton";
import headerLogo from "@assets/images/header-n3t-logo.svg";
import closedMenu from "@assets/images/closed-menu.svg";
import openMenu from "@assets/images/open-menu.svg";

const Header: FC = () => {
    const reloadPage = (): void => {
        window.location.reload();
    }

    return (
        <header>
            <nav>
                <img 
                    src={headerLogo} 
                    alt="N3T Logo" 
                    title="N3T Logo" 
                    width="66" 
                    height="27"
                    onClick={reloadPage}
                />
                <div>
                    <WalletButton address="" />
                    {
                        true 

                        ?

                        <img 
                            src={closedMenu} 
                            alt="The menu is closed" 
                            title="The menu is closed" 
                            width="24" 
                            height="24" 
                        />

                        : 

                        <img 
                            src={openMenu} 
                            alt="The menu is open" 
                            title="The menu is open" 
                            width="19" 
                            height="19" 
                        />
                    }
                </div>
                <ul>
                    <li>Home</li>
                    <li>Participate</li>
                    <li>Our dream</li>
                    <li>
                        Interesting links
                        <ul>
                            <li>
                                <a href="" target="">Repository on GitHub</a>
                            </li>
                            <li>
                                <a href="" target="">Logo project on Figma</a>
                            </li>
                            <li>
                                <a href="" target="">Web design project on Behance</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export { Header };