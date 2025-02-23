import {Avatar} from "flowbite-react";
import Balance from "@/app/ui/balance";
import {Suspense} from "react";
import {BalanceSkeleton, TransactionsSkeleton} from "@/app/ui/skeletons/detail-skeletons";
import Transactions from "@/app/ui/transactions";
import Link from "next/link";
import {Metadata} from "next";

type Params = Promise<{username: string}>;


export async function generateMetadata(
    props: {params: Params},
): Promise<Metadata> {
    const {username} = await props.params;
    return {
        title: username
    }
}



export default async function Page(props: {
    params: Params,
    searchParams: Promise<{
        rank: string,
        address: string,
        level: string,
        xp: string,
        avatarCid: string
    }>
}) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    return <div>
        {/*Back button*/}
        <Link className="block p-8" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
        </Link>
        <div className="sm:ms-1 md:ms-9">
            <header className="m-6 grid grid-cols-2 w-fit items-center justify-items-start gap-0.5 md:gap-2.5">
                <Avatar
                    img={`https://ipfs.io/ipfs/${searchParams.avatarCid}`}
                    alt={params.username}
                    rounded
                />
                <h1 className="md:mx-3.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{params.username}</h1>
            </header>

            <div>
                <div className="px-8 grid grid-cols-2 w-fit items-center md:gap-2.5 "><p className="font-bold">Eth Balance:</p>
                    <Suspense fallback={<BalanceSkeleton />}>
                        <Balance address={searchParams.address} />
                    </Suspense>
                </div>

                <Suspense fallback={<TransactionsSkeleton numberElements={10}  />}>
                    <Transactions address={searchParams.address} />
                </Suspense>

            </div>
        </div>

    </div>
}