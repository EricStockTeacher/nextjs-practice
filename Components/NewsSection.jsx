import newsData from "@/Data/newsData.js"
import Link from "next/link"

export default function NewsSection() {
    return (
        newsData.map( (newsItem) => {
            return (
                <Link key={newsItem.id} href={"/news/"+newsItem.id}>{newsItem.title}</Link>
            )
        })
    )
}