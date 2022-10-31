import { FC } from "react";
import goldenSpiderMan from "@assets/images/NFTs/golden-spider-man-n3t.png";
import sapphireSpiderMan from "@assets/images/NFTs/sapphire-spider-man-n3t.png";
import emeraldSpiderMan from "@assets/images/NFTs/emerald-spider-man-n3t.png";
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
            }

            & > ul {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                max-height: 421px;
                overflow: hidden;

                li {
                    figure {
                        img {
                            width: 100%;
                            height: auto;
                            max-width: 380px;
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

                .current {
                    margin: 0;
                }
    
                .previous {
                    margin-left: -100%;
                }
    
                .next {
                    margin-right: -100%;
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

const NftsCarousel: FC = () => {
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

    const nextNft = ():void => {
        //
    }

    const previousNft = ():void => {
        //
    }

    return (
        <Container>
            <strong>Today's prize</strong>
            <div className="image-container">
                <span onClick={nextNft}>
                    <img src={chevron} alt="chevron" title="chevron" />
                </span>
                <ul>
                    {
                        NftsList.map(nft => {
                            return (
                                <li key={nft.img}>
                                    <figure>
                                        <img key={nft.img} src={nft.img} alt={nft.alt} title={nft.title} width="312" height="312" />
                                        <figcaption>{nft.title}</figcaption>
                                    </figure>
                                </li>
                            )
                        })
                    }
                </ul>
                <span onClick={previousNft}>
                    <img src={chevron} alt="chevron" title="chevron" />
                </span>
            </div>
        </Container>
    )
}

export { NftsCarousel };