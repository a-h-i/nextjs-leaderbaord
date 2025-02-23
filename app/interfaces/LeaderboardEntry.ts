import {z} from 'zod';

export const LeaderboardEntry = z.object({
    rank: z.number(),
    address: z.string(),
    avatarCid: z.string(),
    username: z.string(),
    xp: z.number(),
    level: z.number(),
});

export type LeaderboardEntryType = z.infer<typeof LeaderboardEntry>;