import { FC } from "react"
import n3tChest from "@assets/images/n3t-chest-illustration.png";
import firstSectionLogo from "@assets/images/first-section-n3t-logo-.png";
import mp4N3tVideo from "@assets/videos/n3t-video.mp4";
// import aviN3tVideo from "@assets/videos/n3t-video.avi";
import videoPoster from "@assets/images/video-poster.png";
import goldenSpiderMan from "@assets/images/NFTs/golden-spider-man-n3t.png";
import styled from "styled-components";

const MainElement = styled.main`
    width: 100%;

    & > .MainElement_container {
        margin: 0 auto;
        max-width: 1920px;
        padding: 2rem 2.4rem;

        section {
            width: 100%;
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

        &::first-line {
            color: blue;
        }

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
`

const Main: FC = () => {
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

                <section>
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

                            We want to be the main platform for online raffles, but using blockchain technology to achieve it. Mainly, we focus on NFTs raffles.
                        </h3>
                    </article>
                </section>

                <section>
                    <article>
                        <div>
                            <h2>Participate and win an NFT!</h2>
                            <p>The raffles run within the <strong>blockchain Ethereum</strong>.</p>
                            <p>Time to announce the winner: 24:00</p>
                            <p>Participants: · Maximum 100 participants.</p>
                            <button>Participate</button>
                        </div>
                        <div>
                            <strong>Today's award</strong>
                            <figure>
                                <img 
                                    src={goldenSpiderMan} 
                                    alt="Emerald Spider-man NFT" 
                                    title="Emerald Spider-man NFT" 
                                    width="312" 
                                    height="312" 
                                />
                            </figure>
                        </div>
                        <ol>
                            <li>Wallet 1: 0x6FD7FB63efb93395c113a63422a54B41aBc5533D</li>
                            <li>Wallet 2: 0x6FD7FB63efb93395c113a63422a54B41aBc5533D</li>
                            <li>Wallet 3: 0x6FD7FB63efb93395c113a63422a54B41aBc5533D</li>
                            <li>Wallet 4: 0x6FD7FB63efb93395c113a63422a54B41aBc5533D</li>
                            <li>Wallet 5: 0x6FD7FB63efb93395c113a63422a54B41aBc5533D</li>
                        </ol>
                    </article>
                </section>

                <section>
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

                            We want to promote the adoption in the world of blockchain, cryptocurrencies and web3.
                        </h3>
                    </article>
                </section>
            </div>
        </MainElement>
    )
}

export { Main };