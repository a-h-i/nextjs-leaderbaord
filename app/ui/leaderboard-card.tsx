'use client';
import {LeaderboardEntryType} from "@/app/interfaces/LeaderboardEntry";
import {Avatar} from "flowbite-react";
import Link from "next/link";
import styles from "./leaderboard.module.css";
/**
 * Single entry in the leaderboard
 * @param props
 * @constructor
 */
export default function LeaderboardCard(props: {
    entry: LeaderboardEntryType
}) {
    return (

        <Link  href={`/user/${props.entry.username}?rank=${props.entry.rank}&address=${props.entry.address}&level=${props.entry.level}&xp=${props.entry.xp}&avatarCid=${props.entry.avatarCid}`}
            className={`block my-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${styles.leaderboardWrapper}`}>
            <header className="flex flex-row items-center ">
                <Avatar
                    img={`https://ipfs.io/ipfs/${props.entry.avatarCid}`}
                    alt={props.entry.username}
                    rounded
                />
                <h5 className="mx-3.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.entry.username}</h5>
            </header>
            <ul className="font-normal text-gray-700 dark:text-gray-400">
                <li><span className="font-bold">level: </span>{props.entry.level}</li>
                <li><span className="font-bold">xp: </span>${props.entry.xp}</li>
                <li><span className="font-bold">address: </span><a href={`https://etherscan.io/address/${props.entry.address}`}>{props.entry.address}</a></li>
            </ul>
        </Link>

    );
}