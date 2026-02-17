import Link from "next/link"

export default function NavBar() {

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex gap-6">
                <Link href = "/" className="text-blue-600 hover:text-blue-800 font-semibold transition">HOME</Link>
                <Link href = "/news" className="text-blue-600 hover:text-blue-800 font-semibold transition">NEWS</Link>
                <Link href = "/membership" className="text-blue-600 hover:text-blue-800 font-semibold transition">MEMBERSHIP</Link>
            </div>
        </nav>
    )
}