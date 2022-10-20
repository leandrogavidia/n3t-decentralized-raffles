import { FC } from "react"
import n3tChest from "@assets/images/n3t-chest-illustration.png";
import firstSectionLogo from "@assets/images/first-section-n3t-logo-.png";
import mp4N3tVideo from "@assets/videos/n3t-video.mp4";
// import aviN3tVideo from "@assets/videos/n3t-video.avi";
import videoPoster from "@assets/images/video-poster.png";
import goldenSpiderMan from "@assets/images/NFTs/golden-spider-man-n3t.png";

const Main: FC = () => {
    return (
        <main>
            <div>
                <section>
                    <article>
                        <h1>N3T Decentralized raffles</h1>
                        <h2>Decentralized raffles, a new way for chance to be completely safe, transparent and uncontrollable.</h2>
                        <div>
                            <button>How do I participate?</button>
                            <button>The N3T’s dream</button>
                        </div>
                    </article>
                    <img 
                        src={n3tChest} 
                        alt="N3T Chest illustration" 
                        title="N3T Chest illustration" 
                        width="143" 
                        height="148" 
                    />
                </section>
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
        </main>
    )
}

export { Main };