import Image from "next/image";
import CompanyOverview from "@/Components/CompanyOverview.jsx";
import NewsSection from "@/Components/NewsSection";

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <CompanyOverview></CompanyOverview>
      <NewsSection></NewsSection>
    </>
  );
}
