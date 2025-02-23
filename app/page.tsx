import {LeaderboardEntry} from "@/app/interfaces/LeaderboardEntry";
import LeaderboardCard from "@/app/ui/leaderboard-card";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Leaderboard"
}


export default async function Page() {
    const response = await fetch('https://app.layer3.xyz/api/assignment/users');
    const data = (await response.json()) as {
        users: unknown[]
    };
    const leaderboard = data.users.map((data) => LeaderboardEntry.parse(data));
    return <div className="p-16">
        <h1 className="text-4xl font-bold p-4">Leaderboard</h1>
        <div className="mx-auto my-0 ">
            {leaderboard.map((entry) => <LeaderboardCard entry={entry} key={entry.username}/>)}
        </div>
    </div>
}
