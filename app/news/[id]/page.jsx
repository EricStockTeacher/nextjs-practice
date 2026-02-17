import newsData from "@/Data/newsData.js"
import Image from "next/image"

export default async function NewsItem(props) {    const {id} = await props.params;

    const newsEntry = newsData.find( (newsItem) => newsItem.id == id)

    if( !newsEntry) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-red-600">News Entry with {id} is not available</h2>
            </div>
        )
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{newsEntry.title}</h2>
                <p className="text-gray-700 mb-6">{newsEntry.body}</p>
                <Image alt={newsEntry.title} width={300} height={0} src={newsEntry.image} className="rounded-lg"></Image>
            </div>
        </article>
    )
}