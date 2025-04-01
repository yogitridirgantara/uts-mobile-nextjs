"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			mirror: true,
		});
	}, []);
	return (
		<section
			className="px-6 py-40 text-center rounded-lg mx-auto mb-12 w-full"
			data-aos="fade-up"
			id="home"
		>
			<div className="flex justify-center items-center mb-6">
				<Image
					src="/IMG_0073.png"
					alt="Profile Picture"
					width={200}
					height={200}
					className="rounded-full w-[200px] h-[200px] object-cover hover:scale-105 overflow-hidden"
				/>
			</div>
			<h1 className="text-2xl md:text-3xl bg-gradient-to-r from-purple-950 to-pink-500 bg-clip-text text-transparent font-semibold mb-2">
				Yogi Tri Dirgantara
			</h1>
			<p className="text-sm md:text-xl bg-gradient-to-r from-purple-950 to-pink-500 bg-clip-text text-transparent mb-6">
				Web Developer / Graphics Design / UI UX Design
			</p>
			<div className="flex justify-center gap-6">
				<a
					href="wa.me/+6281572529701"
					className="bg-green-700 hover:bg-green-900 p-3 rounded-md text-sm md:text-xl  "
				>
					Contact Saya
				</a>
				<a
					href="/Fortofolio_Yogi Tri Dirgantara.pdf"
					className="bg-gray-700 hover:bg-gray-900 p-3 rounded-md text-sm md:text-xl"
				>
					Download Portofolio
				</a>
			</div>
		</section>
	);
}
