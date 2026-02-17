import Image from "next/image";
import CompanyOverview from "@/Components/CompanyOverview.jsx";
import NewsSection from "@/Components/NewsSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Home</h2>
      <div className="mb-8">
        <CompanyOverview></CompanyOverview>
      </div>
      <NewsSection></NewsSection>
    </main>
  );
}
