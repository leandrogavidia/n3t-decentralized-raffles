import { FC } from "react";
import footerLogo from "@assets/images/isotype-n3t.svg";
import facebookIcon from "@assets/images/social-media-icons/facebook-icon.svg";
import instagramIcon from "@assets/images/social-media-icons/instagram-icon.svg";
import linkedinIcon from "@assets/images/social-media-icons/linkedin-icon.svg";
import twitterIcon from "@assets/images/social-media-icons/twitter-icon.svg";
import githubIcon from "@assets/images/social-media-icons/github-icon.svg";

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

    return (
        <footer>
            <div>
                <img 
                    src={footerLogo} 
                    alt="Isotype N3T" 
                    title="Isotype N3T" 
                    width="180" 
                    height="200"
                />
                <div>
                    <ul>Social networks
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

                    <ul>Interesting links
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

                    <p><span>Created by:</span> Leandro Gavidia Santamaria</p>
                </div>
            </div>
        </footer>
    )
}

export { Footer };