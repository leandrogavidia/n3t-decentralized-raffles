import { FC, useState } from "react";
import { WalletButton } from "@components/WalletButton/WalletButton";
import headerLogo from "@assets/images/header-n3t-logo.svg";
import closedMenu from "@assets/images/closed-menu.svg";
import openMenu from "@assets/images/open-menu.svg";
import styled from "styled-components";

const HeaderComponent = styled.header`
    width: 100%;
    min-height: 4rem;
    background-color: ${({ theme }) => theme.colors.secondary};

    & > nav {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(2, auto);
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
        align-items: center;
        justify-items: start;
        margin: 0 auto;
        padding: 12px 24px;

        & > .Header_logo {
            cursor: pointer;
        }

        & > .Header_walletButton {
            justify-self: end;
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 0.8rem;
        }

        & > .Header_dropdown {
            img {
                cursor: pointer;
            }
        }


        & > .Header_menu {
            grid-column: 1 / 3;
            grid-row: 2 / 3;
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
            width: 100%;
            list-style: none;
            color: ${({ theme }) => theme.colors.white};

            li {
                display: flex;
                flex-direction: column;
                overflow: hidden;
                width: max-content;
                
                &::before, &::after {
                    content: "";
                    height: 0.1rem;
                    width: 100%;
                    background-color: ${({ theme }) => theme.colors.primary};
                    transition: 0.6s transform;
                    /* padding: 0.8rem 0; */
                }
                
                &::before {
                    transform: translateX(100%);
                    margin-bottom: 0.4rem;
                }

                &::after {
                    transform: translateX(-100%);
                    margin-top: 0.4rem;
                }

                &:hover {
                    &::after, &::before {
                        transform: translateX(0);
                    }
                }
            }

            & > .Header_isSubMenu {
                &::before {
                    content: ">";
                    margin-right: 0.4rem;
                    color: ${({ theme }) => theme.colors.primary};
                }

                .Header_submenu {
                    display: none;
                    flex-direction: column;
                    row-gap: 1rem;
                    list-style: none;
                    margin: 1rem 0 0 2rem;
    
                    li {
                        a {
                            color: ${({ theme }) => theme.colors.white};
                            text-decoration: none;
                        }
                    }
                }

                &:hover {
                    &::before {
                        content: "<";
                    }

                    .Header_submenu {
                        display: flex;
                    }
                }

            }

        }
    }
`

const Header: FC = () => {
    const [dropdownIsOpen, setDropdownIsoOpen] = useState<Boolean>(false);

    const handleDropdown = (): void => {
        setDropdownIsoOpen(!dropdownIsOpen)
    }

    const reloadPage = (): void => {
        window.location.reload();
    }

    return (
        <HeaderComponent>
            <nav>
                <img 
                    src={headerLogo} 
                    alt="N3T Logo" 
                    title="N3T Logo" 
                    width="66" 
                    height="27"
                    onClick={reloadPage}
                    className="Header_logo"
                />
                <div className="Header_walletButton Header_dropdown">
                    <WalletButton address="" />
                    {
                        dropdownIsOpen

                        ?

                        <img 
                            src={openMenu} 
                            alt="The menu is open" 
                            title="The menu is open" 
                            width="19" 
                            height="19"
                            onClick={handleDropdown}
                        />

                        : 

                        <img 
                            src={closedMenu} 
                            alt="The menu is closed" 
                            title="The menu is closed" 
                            width="24" 
                            height="24"
                            onClick={handleDropdown}
                        />
                    }
                </div>

                {
                    dropdownIsOpen

                    &&

                    <ul className="Header_menu">
                        <li>Home</li>
                        <li>Participate</li>
                        <li>Our dream</li>
                        <li className={"Header_isSubMenu"}>
                            Interesting links
                            <ul className="Header_submenu">
                                <li>
                                    <a href="" target="_blank">Repository on GitHub</a>
                                </li>
                                <li>
                                    <a href="" target="_blank">Logo project on Figma</a>
                                </li>
                                <li>
                                    <a href="" target="_blank">Web design project on Behance</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                }
            </nav>
        </HeaderComponent>
    )
}

export { Header };