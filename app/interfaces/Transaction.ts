import {z} from "zod";

export const Transaction = z.object({
    blockNumber: z.string(),
    timeStamp: z.string(),
    hash: z.string(),
});

export type TransactionType = z.infer<typeof Transaction>;