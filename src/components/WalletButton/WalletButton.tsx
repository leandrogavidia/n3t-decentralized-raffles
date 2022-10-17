import { FC } from "react";

interface WalletAddress {
    address: string
}

const WalletButton: FC<WalletAddress> = ({ address }) => {
    return (
        <button>
            {
                address

                ?

                address

                :

                "Connect wallet"
            }
        </button>
    )
}

export { WalletButton };