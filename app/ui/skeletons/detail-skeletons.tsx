'use client';

export function BalanceSkeleton() {

    return <div role="status" className='max-w-sm animate-pulse'>
        <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
    </div>
}


export function TransactionsSkeleton(props: {
    numberElements: number
}) {
    return (

        <ul role="status"
            className="animate-pulse p-14 -mb-8 w-1/4">

            {Array.from(Array(props.numberElements).keys()).map((index) => (
                <li key={index}>
                    <div className="relative pb-8">
                        <div className="relative flex space-x-3">
                            <div>
            <span className="flex size-8 items-center justify-center rounded-full bg-gray-300 ring-8 ring-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   className="size-6 stroke-gray-200">
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"/>
</svg>

            </span>
                            </div>
                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                <div>
                                    <p className="text-sm font-medium text-gray-900 h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                    <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}

        </ul>

    );
}