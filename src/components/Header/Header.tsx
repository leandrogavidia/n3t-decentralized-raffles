import { FC, useState } from "react";
import { WalletButton } from "@components/WalletButton/WalletButton";
import headerLogo from "@assets/images/header-n3t-logo.svg";
import closedMenu from "@assets/images/closed-menu.svg";
import openMenu from "@assets/images/open-menu.svg";
import styled from "styled-components";

const HeaderElement = styled.header`
    width: 100%;
    min-height: 4rem;
    background-color: ${({ theme }) => theme.colors.secondary};

    & > nav {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: auto;
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
        align-items: center;
        justify-items: start;
        margin: 0 auto;
        padding: 2rem 2.4rem;
        max-width: 1600px;

        & > .Header_logo {
            cursor: pointer;
            user-select: none;
            object-fit: contain;
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
                object-fit: contain;
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
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 1.2rem;

            li {
                display: flex;
                flex-direction: column;
                overflow: hidden;
                width: max-content;
                cursor: pointer;
                transition: 0.4s color;
                font-size: ${({ theme }) => theme.font.size.phone.small}rem;
                font-weight: ${({ theme }) => theme.font.weight.light};
                
                &::before, &::after {
                    content: "";
                    height: 0.1rem;
                    width: 100%;
                    background-color: ${({ theme }) => theme.colors.primary};
                    transition: 0.6s transform;
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
                    color: ${({ theme }) => theme.colors.primary};
                    
                    &::after, &::before {
                        transform: translateX(0);
                    }
                }
            }

            & > .Header_isSubMenu {
                display: list-item;

                &::before {
                    content: "";
                }

                &::after {
                    content: "";
                }

                & > .Header_submenu {
                    display: none;
                    flex-direction: column;
                    row-gap: 1rem;
                    list-style: none;
                    margin: 1rem 0 0 2rem;
    
                    & > li {
                        transition: 0.4s color;

                        a {
                            border-inline-start: 0.1rem solid ${({ theme }) => theme.colors.primary};
                            padding-left: 0.4rem;
                            color: ${({ theme }) => theme.colors.white};
                            text-decoration: none;
                        }

                        &:hover {
                            a {
                                color: ${({ theme }) => theme.colors.primary};   
                            }
                        }
                    }
                }

                &:hover, &:active {
                    .Header_submenu {
                        display: flex;
                    }
                }

            }

        }

        .Header_menu--hidden {
            display: none;
        }
    }

    @media (min-width: 600px) {
        & > nav {
            & > .Header_logo {
                width: 8.4rem;
                height: auto;
            }

            & > .Header_dropdown {
                & > img {
                    height: 3rem;
                    width: 3rem;
                }
            }

            & > .Header_menu {
                row-gap: 1.6rem;

                li {
                    font-size: ${({ theme }) => theme.font.size.tablet.small}rem;
                }

                & > .Header_isSubMenu {
                    & > .Header_submenu {
                        row-gap: 1.6rem;
                        margin-top: 2rem;
                    }
                }
            }

        }
    }

    @media (min-width: 1000px) {
        & > nav {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem 4.8rem;
            column-gap: 2.4rem;

            & > .Header_logo {
                width: 14.5rem;
                order: 1;
            }

            & > .Header_walletButton {
                position: relative;
                z-index: 10000;
                order: 3;

                img {
                    display: none;
                }
            }

            & > .Header_menu {
                order: 2;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                column-gap: 20px;
                border-top: none;
                padding: 0;

                li {
                    font-size: ${({ theme }) => theme.font.size.desktop.small}rem;
                }

                & > .Header_isSubMenu {

                    & > .Header_submenu {
                        position: absolute;
                        background-color: ${({ theme }) => theme.colors.secondary};
                        margin: 0;
                        padding: 2rem;
                        margin-left: -8rem;
                    }
                }
            }

            .Header_menu--hidden {
                display: flex;
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
        <HeaderElement>
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

                <ul className={`Header_menu ${!dropdownIsOpen && "Header_menu--hidden"}`}>
                    <li>Home</li>
                    <li>Participate</li>
                    <li>Our dream</li>
                    <li className={"Header_isSubMenu"}>
                        Interesting links
                        <ul className="Header_submenu">
                            <li>
                                <a href="https://github.com/leandrogavidia/n3t-decentralized-raffles" target="_blank">Repository on GitHub</a>
                            </li>
                            <li>
                                <a href="https://www.figma.com/file/ng6mRL71eBo8rbSHQ1MKcF/N3T-decentralized-raffles?node-id=0%3A1" target="_blank">Web project on Figma</a>
                            </li>
                            <li>
                                <a href="https://www.behance.net/gallery/132158333/N3T-Decentralized-raffles" target="_blank">Logo design project on Behance</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </HeaderElement>
    )
}

export { Header };