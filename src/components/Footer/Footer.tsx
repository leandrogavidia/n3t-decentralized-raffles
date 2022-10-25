import { FC } from "react";
import footerLogo from "@assets/images/isotype-n3t.svg";
import facebookIcon from "@assets/images/social-media-icons/facebook-icon.svg";
import instagramIcon from "@assets/images/social-media-icons/instagram-icon.svg";
import linkedinIcon from "@assets/images/social-media-icons/linkedin-icon.svg";
import twitterIcon from "@assets/images/social-media-icons/twitter-icon.svg";
import githubIcon from "@assets/images/social-media-icons/github-icon.svg";
import styled from "styled-components";

const FooterComponent = styled.footer`
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;

    & > div {
        max-width: 1920px;
        margin: 0 auto;
        display: grid;
        grid-template-rows: repeat(2, auto);
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center;
        padding: 6rem 2.4rem 4rem 2.4rem;
        grid-row-gap: 4.8rem;

        & > img {
            cursor: pointer;
        }

        & > div {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, auto);
            justify-items: center;
            align-items: center;
            grid-row-gap: 4rem;

            & > .Footer_socialNetworks {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                row-gap: 2rem;
                
                & > p {
                    font-size: ${({ theme }) => theme.font.size.phone.large}rem;
                    font-weight: ${({ theme }) => theme.font.weight.semiBold};
                    color: ${({ theme }) => theme.colors.primary};
                }
                
                & > ul {
                    list-style: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    column-gap: 2rem;
                    transition: 0.2s color;

                    li a img:hover {
                        filter: drop-shadow(0 0 0.2rem ${({ theme }) => theme.colors.primary});
                    }
                }
            }

            & > .Footer_interestingLinks {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                row-gap: 2rem;

                & > p {
                    font-size: ${({ theme }) => theme.font.size.phone.large}rem;
                    font-weight: ${({ theme }) => theme.font.weight.semiBold};
                    color: ${({ theme }) => theme.colors.primary};
                }

                & > ul {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    row-gap: 1.2rem;

                    & > li {
                        font-size: ${({ theme }) => theme.font.size.phone.medium}rem;
                        font-weight: ${({ theme }) => theme.font.weight.light};

                        & > a {
                            color: white;
                            text-decoration: none;
                            transition: 0.2s color;

                            &:hover, &:active {
                                color: ${({ theme }) => theme.colors.primary};
                            }
                        }
                    }
                }
            }

            & > .Footer_owner {
                color: ${({ theme }) => theme.colors.white};
                font-size: ${({ theme }) => theme.font.size.phone.medium}rem;
                font-weight: ${({ theme }) => theme.font.weight.light};

                & > span {
                    color: ${({ theme }) => theme.colors.primary};
                }
            }
        }
    }
`

const Footer: FC = () => {
    const socialMedia = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/androgavidia",
            icon: facebookIcon
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/androgavidia/",
            icon: instagramIcon
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/leandrogavidia/",
            icon: linkedinIcon
        },
        {
            name: "Twitter",
            url: "https://twitter.com/androgavidia",
            icon: twitterIcon
        },
        {
            name: "GitHub",
            url: "https://github.com/leandrogavidia",
            icon: githubIcon
        },
    ]

    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <FooterComponent>
            <div>
                <img 
                    src={footerLogo} 
                    alt="Isotype N3T" 
                    title="Isotype N3T" 
                    width="180" 
                    height="200"
                    onClick={reloadPage}
                />
                <div>
                    <div className="Footer_socialNetworks">
                        <p>Social networks</p>
                        <ul>
                            {
                                socialMedia.map(social => {
                                    return(
                                        <li key={social.url}>
                                            <a href={social.url} target="_blank">
                                                <img 
                                                    src={social.icon} 
                                                    alt={`${social.name} icon`}
                                                    title={`${social.name} icon`}
                                                    width="40"
                                                    height="40"
                                                />
                                            </a>
                                        </li>       
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="Footer_interestingLinks">
                        <p>Interesting links</p>
                        <ul>
                            <li>
                                <a href="https://github.com/leandrogavidia/n3t-decentralized-raffles" target="_blank">Repository on GitHub</a>
                            </li>
                            <li>
                                <a href="https://www.figma.com/file/ng6mRL71eBo8rbSHQ1MKcF/N3T-decentralized-raffles?node-id=0%3A1" target="_blank">Web design project on Figma</a>
                            </li>
                            <li>
                                <a href="https://www.behance.net/gallery/132158333/N3T-Decentralized-raffles" target="_blank">Logo design project on Behance</a>
                            </li>
                        </ul>
                    </div>

                    <p className="Footer_owner"><span>Created by:</span> Leandro Gavidia Santamaria</p>
                </div>
            </div>
        </FooterComponent>
    )
}

export { Footer };