import { defineQuery } from "next-sanity";
import {sanityFetch} from "@/sanity/lib/live"
import Link from "next/link"


const NEWS_QUERY = defineQuery(
  "*[_type == 'newsItem']{id, title}"
)


export default async function NewsSection() {

    const {data} = await sanityFetch({ query: NEWS_QUERY })
    console.log(data)

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.map( (newsItem) => {
                return (
                    <Link key={newsItem.id} href={"/news/"+newsItem.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition block">
                        <h3 className="text-lg font-semibold text-gray-800">{newsItem.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}