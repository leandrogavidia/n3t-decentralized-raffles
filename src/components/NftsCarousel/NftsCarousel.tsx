import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import chevron from "@assets/images/icons/chevron.svg";

const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        & > strong {
            display: grid;
            place-content: center;
            border-radius: 0.4rem;
            color: ${({ theme }) => theme.colors.primary};
            font-size: ${({ theme }) => theme.font.size.phone.small}rem;
            font-weight: ${({ theme }) => theme.font.weight.semiBold};
            background-color: ${({ theme }) => theme.colors.secondary};
            min-width: 13rem;
            min-height: 2.8rem;
            text-shadow: 0 0 0.3rem ${({  theme  }) => theme.colors.primary};
            margin-bottom: -1.6rem;
            position: relative;
            z-index: 10000;
        }

        & > .image-container {
            position: relative;

            span {
                position: absolute;
                color: ${({ theme }) => theme.colors.white};
                top: 40%;
                background-color: rgba(26, 26, 26, 0.8);
                cursor: pointer;
                width: 3.6rem;
                height: 6rem;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.1s background;

                &:first-child {
                    left: 0;
                    padding: 0 0.8rem;

                    & > img {
                        transform: rotate(180deg);
                    }
                }

                &:last-child {
                    right: 0;
                }

                img {
                    width: 1.2rem;
                    height: auto;
                }

                &:hover {
                    background-color: rgba(255, 219, 95, 1);
                }
            }

            & > ul {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                max-height: 42.1rem;
                overflow: hidden;

                li {
                    transition: 0.2s margin;
                    margin: 0;

                    figure {
                        img {
                            width: 100%;
                            height: auto;
                            max-width: 27rem;
                        }

                        figcaption {
                            margin-top: -0.5rem;
                            background-color: ${({ theme }) => theme.colors.black};
                            color: ${({ theme }) => theme.colors.white};
                            text-align: center;
                            font-size: ${({ theme }) => theme.font.size.phone.medium}rem;
                            font-weight: ${({ theme }) => theme.font.weight.semiBold};
                            letter-spacing: 0.1rem;
                            padding: 1.2rem 0;
                        }
                    }
                }

                .Container_previous {
                    margin-left: -100%;
                }

                .Container_current {
                    margin-left: 0;
                    margin-right: 0;
                }
            }
        }

    
    @media(min-width: 600px) {
        & > strong {
            font-size: ${({ theme }) => theme.font.size.tablet.small}rem;
            min-width: 15.6rem;
            min-height: 3.4rem;
        }

        & > .image-container {
            
            & > ul {
                li {
                    figure {
                        img {
                            max-width: 38rem;
                        }
                        figcaption {
                            font-size: ${({ theme }) => theme.font.size.tablet.small}rem;
                        }
                    }
                }
            }
        }
    }

    @media(min-width: 1000px) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
`

interface NftItem {
    img: string,
    title: string,
    alt: string
}

interface NftsCarouselInterface {
    nftsList: NftItem[]
    interval: number
}

const NftsCarousel: FC<NftsCarouselInterface> = ({nftsList, interval }) => {

    const initialState:number = 0;
    const [currentPosition, setCurrentPosition] = useState<number>(initialState);

    const nextNft = ():void => {
        setCurrentPosition(prevState => prevState + 1)
    }

    const previousNft = ():void => {
        setCurrentPosition(prevState => prevState - 1)
    }

    useEffect(() => {
        if(currentPosition === nftsList.length) setCurrentPosition(initialState);
        if (currentPosition < initialState) setCurrentPosition(nftsList.length - 1);

        const carouselInterval = setTimeout(() => {
            setCurrentPosition(currentPosition + 1);
        }, interval) 
        
        return () => clearTimeout(carouselInterval);
    }, [currentPosition])

    return (
        <Container>
            <strong>Today's prize</strong>
            <div className="image-container">
                <span onClick={previousNft}>
                    <img src={chevron} alt="Previous NFT" title="Previous NFT" />
                </span>
                <ul>
                    {
                        nftsList.map((nft, index) => {
                            return (
                                <li key={nft.img} 
                                
                                    className={
                                        index === currentPosition ? "Container_current" :
                                    
                                        currentPosition < 0 ? "Container_current" :

                                        index < currentPosition ? "Container_previous" : ""
                                    }
                                >
                                    <figure>
                                        <img key={nft.img} src={nft.img} alt={nft.alt} title={nft.title} width="312" height="312" />
                                        <figcaption>{nft.title}</figcaption>
                                    </figure>
                                </li>
                            )
                        })
                    }
                </ul>
                <span onClick={nextNft}>
                    <img src={chevron} alt="Next NFT" title="Next NFT" />
                </span>
            </div>
        </Container>
    )
}

export { NftsCarousel };