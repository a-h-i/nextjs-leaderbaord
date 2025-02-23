export default async function Balance(props: {
    address: string
}) {
    const response = await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${props.address}&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`)
    const data = await response.json();
    return <>{data.result}</>
}