import newsData from "@/Data/newsData.js"
import Link from "next/link"

export default function NewsSection() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {newsData.map( (newsItem) => {
                return (
                    <Link key={newsItem.id} href={"/news/"+newsItem.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition block">
                        <h3 className="text-lg font-semibold text-gray-800">{newsItem.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}