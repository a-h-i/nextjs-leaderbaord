


export default async function Page(props: {
    params: Promise<{username: string}>
}) {
    const params = await props.params;

    return <div>{params.username}</div>
}