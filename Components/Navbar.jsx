import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import Link from 'next/link'

export default function Navbar() {
    const address = useAddress();

    return (
        <div>
            <div className="bg-gray-900 text-white px-4 py-2 flex flex-wrap justify-between items-center ">
                <Link href="/">
                    <p className="cursor-pointer mb-4 sm:mb-0">NFT Collection</p>
                </Link>
                <div className="flex items-center mb-4 sm:mb-0">
                    {address && (
                        <Link href={`profile/${address}`}>
                            <p className="cursor-pointer mr-4">My NFTs</p>
                        </Link>
                    )}
                </div>
                <ConnectWallet className="bg-gradient-to-r from-purple-500 to-pink rounded-md px-6 py-2 cursor-pointer text-white text-base" />
            </div>
        </div>
    )
}
