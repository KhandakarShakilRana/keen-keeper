import Banner from "@/components/banner/Banner";
import Friends from "@/components/friends/Friends";
import HomeStats from "@/components/stats/HomeStats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-300 w-full mx-auto py-5">
    <Banner/>
    <HomeStats></HomeStats>
    <hr className="my-10 w-full border-gray-300"></hr>
    <Friends></Friends>
    </div>
  );
}
