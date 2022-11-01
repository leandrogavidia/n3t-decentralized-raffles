import { FC } from "react"
import n3tChest from "@assets/images/n3t-chest-illustration.png";
import firstSectionLogo from "@assets/images/first-section-n3t-logo-.png";
import mp4N3tVideo from "@assets/videos/n3t-video.mp4";
// import aviN3tVideo from "@assets/videos/n3t-video.avi";
import videoPoster from "@assets/images/video-poster.png";
import styled from "styled-components";
import { NftsCarousel } from "@components/NftsCarousel/NftsCarousel";
import goldenSpiderMan from "@assets/images/NFTs/golden-spider-man-n3t.png";
import sapphireSpiderMan from "@assets/images/NFTs/sapphire-spider-man-n3t.png";
import emeraldSpiderMan from "@assets/images/NFTs/emerald-spider-man-n3t.png";

const MainElement = styled.main`
    width: 100%;

    & > .MainElement_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 10rem;
        margin: 0 auto;
        max-width: 1920px;
        padding: 2rem 2.4rem;

        section {
            width: 100%;
            max-width: 1100px;
        }
    }

    @media (min-width: 1000px) {
        & > .MainElement_container {
            padding: 10rem 2.4rem;
            row-gap: 16rem;
        }
    }
`

const FirstSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    justify-items: center;
    align-items: center;
    grid-row-gap: 3.2rem;

    & > .FirstSection_title {
        font-size: 2.4rem;
        font-weight: ${({ theme }) => theme.font.weight.semiBold};
        text-align: center;
        letter-spacing: 0.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & > strong {
            font-size: 13rem;
            font-weight: ${({ theme }) => theme.font.weight.bold};
            margin-bottom: -1.6rem;
        
            & > span {
                background-image: ${({ theme }) => theme.colors.gradient};
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;     
            }
        }
    }

    & > img {
        width: 100%;
        height: auto;
        max-width: 20rem;
        user-select: none;
    }

    & > .FirstSection_info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 2rem;
        text-align: center;

        & > h1 {
            font-size: ${({ theme }) => theme.font.size.phone.large}rem;
            font-weight: ${({ theme }) => theme.font.weight.light};
            line-height: 2.8rem;
        }
        
        & > div {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            align-items: center;
            justify-items: center;
            grid-column-gap: 2.4rem;
            width: 100%;

            button {
                min-width: 13.2rem;
                min-height: 2.8rem;
                width: 100%;
                border: none;
                padding: 0.4rem 0.8rem;
                background-color: ${({ theme }) => theme.colors.secondary};
                color: ${({ theme }) => theme.colors.white};
                border-radius: 0.4rem;
                font-size: ${({ theme }) => theme.font.size.phone.small}rem;
                font-weight: ${({ theme }) => theme.font.weight.semiBold};
                cursor: pointer;
                transition: 0.1s color;

                & > span {
                    background-image: ${({ theme }) => theme.colors.gradient};
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;     
                }

                &:hover {
                    background-image: ${({ theme }) => theme.colors.gradient};
                    color: ${({ theme }) => theme.colors.secondary};

                    & > span {
                        background-image: linear-gradient(#fff, #fff);
                    }
                }
            }
        }
    }

    @media (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: auto;
        align-items: center;
        grid-row-gap: 2rem;
        grid-column-gap: 4rem;

        & > img {
            grid-column: 2 / 3;
            grid-row: 1 / 3;

            max-width: 300px;
        }
    }

    @media (min-width: 1000px) {
        grid-column-gap: 6rem;
        
        & > .FirstSection_title {
            font-size: 4rem;

            & > strong {
                font-size: 21.1rem;
            }
        }

        & > img {
            max-width: 45rem;
        }

        & > .FirstSection_info {
            & > h1 {
                font-size: ${({ theme }) => theme.font.size.desktop.medium}rem;
                line-height: 4rem; 
            }

            & > div {
                button {
                    font-size: ${({ theme }) => theme.font.size.desktop.small}rem;
                    padding: 1.2rem 0.8rem;
                }
            }
        }
    }
`

const SecondSection = styled.section`
    & > article {
        display: grid;
        grid-template-rows: auto auto;
        align-items: center;
        justify-items: center;
        grid-row-gap: 4rem;

        & > img {
            width: 100%;
            max-width: 380px;
            height: auto;
            user-select: none;
        }

        & > h3 {
            font-size: ${({ theme }) => theme.font.size.phone.large}rem;
            font-weight: ${({ theme }) => theme.font.weight.light};
            text-align: center;
            line-height: 2.8rem;
        }
    }

    @media (min-width: 600px) {
        & > article {

            & > h3 {
                font-size: ${({ theme }) => theme.font.size.tablet.large}rem;
                line-height: 4rem;
            }
        }
    }

    @media (min-width: 1000px) {
        & > article {
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 6rem;

            & > img {
                max-width: 50rem;
            }

            & > h3 {
                line-height: 4rem;
                text-align: left;
                font-size: ${({ theme }) => theme.font.size.desktop.medium}rem;
            }
        }
    }
`

const ThirdSection = styled.section`
    & > article {
        display: grid;
        grid-template-rows: repeat(3, auto);
        justify-items: center;
        align-items: center;
        grid-row-gap: 4rem;

        & > .ThirdSection_participate {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;

            & > h2 {
                font-size: ${({ theme }) => theme.font.size.phone.large}rem;
                font-weight: ${({ theme }) => theme.font.weight.semiBold};
                margin-bottom: 1.2rem;
            }

            p {
                font-size: ${({ theme }) => theme.font.size.phone.medium}rem;
                font-weight: ${({ theme }) => theme.font.weight.light};
                line-height: 2.8rem;
            
                strong {
                    color: ${({ theme }) => theme.colors.primary};
                    font-weight: ${({ theme }) => theme.font.weight.semiBold};
                }
            }

            p:last-child {
                margin-top: 2rem;

                span {
                    font-size: ${({ theme }) => theme.font.size.phone.large}rem;
                    font-weight: ${({ theme }) => theme.font.weight.semiBold};
                }
            }

            & > button {
                min-width: 13rem;
                min-height: 2.8rem;
                border: none;
                color: ${({ theme }) => theme.colors.white};
                background-color: ${({ theme }) => theme.colors.secondary};
                border-radius: 0.4rem;
                font-size: ${({ theme }) => theme.font.size.phone.medium}rem;
                font-weight: ${({ theme }) => theme.font.weight.semiBold};
                cursor: pointer;
                transition: 0.1s color;
                margin: 2rem auto 4rem auto;

                &:hover {
                    background-image: ${({ theme }) => theme.colors.gradient};
                    color: ${({ theme }) => theme.colors.secondary};
                }
            }
        }

        & > .ThirdSection_participants {
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 1.6rem;
            text-align: center;
            line-height: 2.4rem;
            border-block-start: 0.1rem solid rgba(0, 0, 0, 0.1);
            padding-top: 2rem;
            width: 100%;

            li {
                font-size: ${({ theme }) => theme.font.size.phone.small}rem;
            
                span {
                    font-weight: ${({ theme }) => theme.font.weight.semiBold};
                }
            }
        }
    }

    @media(min-width: 600px) {
        & > article {

            & > .ThirdSection_participate {
                & > h2 {
                    font-size: ${({ theme }) => theme.font.size.tablet.large}rem;
                }

                p {
                    font-size: ${({ theme }) => theme.font.size.tablet.medium}rem;
                }

                p:last-child {
                    margin-top: 3rem;
                    line-height: 3.2rem;

                    span {
                        font-size: ${({ theme }) => theme.font.size.tablet.large}rem;
                    }
                }

                & > button {
                    min-width: 15.6rem;
                    min-height: 4.2rem;
                    font-size: ${({ theme }) => theme.font.size.tablet.medium}rem;
                    margin: 3.2rem auto 5.2rem auto;
                }
            }

            & > .ThirdSection_participants {
                li {
                    font-size: ${({ theme }) => theme.font.size.tablet.small}rem;
                }
            }
        }
    }

    @media(min-width: 1000px) {
        & > article {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, auto);
            grid-row-gap: 6rem;

            & > .ThirdSection_participate {
                grid-column: 1 / 2;
                grid-row: 1 / 2;

                & > h2 {
                    font-size: ${({ theme }) => theme.font.size.desktop.large}rem;
                    margin-bottom: 2rem;
                }

                p {
                    font-size: ${({ theme }) => theme.font.size.desktop.medium}rem;
                }

                p:nth-child(4) {
                    margin-top: 5.2rem;
                }

                p:last-child {
                    font-size: ${({ theme }) => theme.font.size.desktop.small}rem;
                    margin-top: 3.2rem;

                    span {
                        font-size: ${({ theme }) => theme.font.size.desktop.medium}rem;
                    }
                }

                & > button {
                    min-width: 13rem;
                    min-height: 2.8rem;
                    padding: 0.8rem 2.8rem;
                    font-size: ${({ theme }) => theme.font.size.desktop.medium}rem;
                    margin: 0;
                    order: 5;
                    margin-top: 4rem;
                }
            }

            & > .ThirdSection_participants {
                grid-column: 1 / 3;
                grid-row: 2 / 3;
                row-gap: 3.2rem;
                padding-top: 6rem;
                justify-content: flex-start;

                li {
                    font-size: ${({ theme }) => theme.font.size.desktop.medium}rem;
                }
            }
        }
    }   
`

const FourthSection = styled.section`
    & > article {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 4rem;

        & > video {
            width: 100%;
        }

        & > h3 {
            font-size: ${({ theme }) => theme.font.size.phone.large}rem;
            font-weight: ${({ theme }) => theme.font.weight.light};
            text-align: center;
            line-height: 2.8rem;
        }
    }

    @media (min-width: 600px) {
        & > article {
            & > h3 {
                font-size: ${({ theme }) => theme.font.size.tablet.large}rem;
                line-height: 4rem;
            }
        }
    }

    @media (min-width: 1000px) {
        & > article {
            & > h3 {
                margin-top: 2.4rem;
                line-height: 5.2rem;
                font-size: ${({ theme }) => theme.font.size.desktop.large}rem;
            }
        }
    }
`

const Main: FC = () => {
    interface NftItem {
        img: string,
        title: string,
        alt: string
    }

    const NftsList: NftItem[] = [
        {
            img: goldenSpiderMan,
            title: "Golden Spider-man NFT",
            alt: "Golden Spider-man NFT"
        },
        {
            img: sapphireSpiderMan,
            title: "Sapphire Spider-man NFT",
            alt: "Sapphire Spider-man NFT"
        },
        {
            img: emeraldSpiderMan,
            title: "Emerald Spider-man NFT",
            alt: "Emerald Spider-man NFT"
        },
    ]

    return (
        <MainElement>
            <div className="MainElement_container">
                <FirstSection>
                    <p className="FirstSection_title"><strong>N<span>3</span>T</strong> Decentralized raffles</p>
                    <img 
                        src={n3tChest} 
                        alt="N3T Chest illustration" 
                        title="N3T Chest illustration" 
                        width="143" 
                        height="148" 
                    />
                    <article className="FirstSection_info">
                        <h1>Decentralized raffles, a new way for chance to be completely safe, transparent and uncontrollable.</h1>
                        <div>
                            <button>How do I participate?</button>
                            <button>The N<span>3</span>T’s dream</button>
                        </div>
                    </article>
                </FirstSection>

                <SecondSection>
                    <article>
                        <img 
                            src={firstSectionLogo} 
                            alt="N3T Decentralized raffles logo" 
                            title="N3T Decentralized raffles logo" 
                            width="313" 
                            height="128" 
                        />
                        <h3>
                            Our mission and vision is to create a space in where people and companies participate and create honest  raffles. 
                            <br/><br/>
                            We want to be the main platform for online raffles, but using blockchain technology to achieve it. Mainly, we focus on NFTs raffles.
                        </h3>
                    </article>
                </SecondSection>

                <ThirdSection>
                    <article>
                        <NftsCarousel nftsList={NftsList} interval={3000} />
                        <div className="ThirdSection_participate">
                            <h2>Participate and win an NFT!</h2>
                            <p>The raffles run within the <strong>blockchain Ethereum</strong>.</p>
                            <button>Participate</button>
                            <p>Time to announce the winner: 24:00</p>
                            <p><span>Participants:</span> <br/> · Maximum 100 participants.</p>
                        </div>
                        <ol className="ThirdSection_participants">
                            <li><span>Wallet 1:</span> 0x6FD7FB63efb93395c113a63422a54B41aBc5533D</li>
                            <li><span>Wallet 2:</span> 0x6FD7FB63efb93395c113a63422a54B41aBc5533D</li>
                            <li><span>Wallet 3:</span> 0x6FD7FB63efb93395c113a63422a54B41aBc5533D</li>
                            <li><span>Wallet 4:</span> 0x6FD7FB63efb93395c113a63422a54B41aBc5533D</li>
                            <li><span>Wallet 5:</span> 0x6FD7FB63efb93395c113a63422a54B41aBc5533D</li>
                        </ol>
                    </article>
                </ThirdSection>

                <FourthSection>
                    <article>
                        <video 
                            controls 
                            preload="metadata"
                            poster={videoPoster} 
                            style={{width: "100%"}}
                        >
                            <source src={mp4N3tVideo} type="video/mp4" />
                            {/* <source src={aviN3tVideo} type="video/avi" /> */}
                        </video>
                        <h3>
                            We would like to be more than a platform, we would like to be a link between people and blockchain technology.
                            <br/><br/>
                            We want to promote the adoption in the world of blockchain, cryptocurrencies and web3.
                        </h3>
                    </article>
                </FourthSection>
            </div>
        </MainElement>
    )
}

export { Main };