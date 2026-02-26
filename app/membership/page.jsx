import { defineQuery } from "next-sanity";
import {client} from "@/sanity/lib/client"
import { PortableText } from "@portabletext/react";

export default async function Membership() {
    const MEMBER_QUERY = defineQuery("*[_type=='membershipItem']{content}")

    const memberData = await client.fetch(MEMBER_QUERY)

    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800">Membership</h2>
            {memberData.map((item, index) => (
                <PortableText key={index} value={item.content} />
            ))}
        </main>
    )
}