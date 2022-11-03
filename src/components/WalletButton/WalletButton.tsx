import { FC } from "react";
import styled from "styled-components";

interface WalletAddress {
    address: string
}

const Button = styled.button`
    background-image: ${({ theme }) => theme.colors.gradient};
    border: none;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.4rem;
    padding: 0.4rem 0.6rem;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.size.phone.small}rem;
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    transition: 0.2s color;
    white-space: nowrap;

    :hover {
        color: ${({ theme }) => theme.colors.secondary};
    }

    @media (min-width: 600px) {
        padding: 0.4rem 1rem;
        font-size: ${({ theme }) => theme.font.size.tablet.small}rem;
    }

    @media (min-width: 1000px) {
        font-size: ${({ theme }) => theme.font.size.desktop.small}rem;
        padding: 0.6rem 1.2rem;
    }
`

const WalletButton: FC<WalletAddress> = ({ address }) => {

    const connectWallet = ():void => alert("Here you will connect your wallet")

    return (
        <Button onClick={connectWallet} title="Wallet button">
            {
                address

                ?

                address

                :

                "Connect wallet"
            }
        </Button>
    )
}

export { WalletButton };