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
`

const WalletButton: FC<WalletAddress> = ({ address }) => {
    return (
        <Button title="Wallet button">
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