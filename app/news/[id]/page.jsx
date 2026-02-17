import newsData from "@/Data/newsData.js"
import Image from "next/image"

export default async function NewsItem(props) {

    const {id} = await props.params;

    const newsEntry = newsData.find( (newsItem) => newsItem.id == id)

    if( !newsEntry) {
        return (
            <h2>News Entry with {id} is not available</h2>
        )
    }

    return (
        <>
            <h2>{newsEntry.title}</h2>
            <p>{newsEntry.body}</p>
            <Image alt={newsEntry.title} width={300} height={0} src={newsEntry.image}></Image>
        </>
    )
}