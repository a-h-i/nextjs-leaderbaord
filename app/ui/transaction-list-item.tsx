'use client';

import {TransactionType} from "@/app/interfaces/Transaction";
import {useFormatter} from 'next-intl';

export function TransactionListItem(props: {
    transaction: TransactionType,
    isLast: boolean
}) {
    const transactionDate = new Date(parseInt(props.transaction.timeStamp, 10) * 1000);
    const format = useFormatter();
    return <li>
        <div className="relative pb-8">
            {!props.isLast && <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>}
            <div className="relative flex space-x-3">
                <div>
            <span className="flex size-8 items-center justify-center rounded-full bg-green-400  ring-8 ring-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    className="size-6 stroke-green-800">
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"/>
</svg>

            </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                        <p className="text-sm ont-medium text-gray-900"><a
                            href={`https://etherscan.io/tx/${props.transaction.hash}`}
                            className="underline">{props.transaction.hash}</a></p>
                    </div>
                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time dateTime={transactionDate.toISOString()}>{format.relativeTime(transactionDate)}</time>
                    </div>
                </div>
            </div>
        </div>
    </li>
}