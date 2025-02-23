import {Transaction} from "@/app/interfaces/Transaction";
import {TransactionListItem} from "@/app/ui/transaction-list-item";


export default async function Transactions(props: {
    address: string
}) {

    const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${props.address}&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=${process.env.ETHERSCAN_API_KEY}`)

    const data = await response.json() as {
        result: unknown[]
    };

    const transactions = data.result.map((data) => Transaction.parse(data));

    return <div
        className="flow-root"
    >
        <ul role="list" className="-mb-8 p-14  w-1/4">
            {transactions.map((transaction, index) => <TransactionListItem transaction={transaction} isLast={index == transactions.length - 1}  key={transaction.hash}/>)}
        </ul>
    </div>
}