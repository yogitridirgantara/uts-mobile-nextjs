"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

export default function Skills() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			mirror: true,
		});
	}, []);
	return (
		<>
			{" "}
			{/* Skills */}
			<section
				className="px-6 py-40 rounded-lg mx-auto mb-12 w-full"
				data-aos="fade-up"
				id="skills"
			>
				<h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-950 to-pink-500 bg-clip-text text-transparent text-center mb-6">
					Skills
				</h2>

				<div className="place-items-center" data-aos="zoom-in">
					<ul className="grid grid-cols-2 sm:grid-cols-5 gap-3 place-items-center">
						<li className="text-center rounded-lg p-4 hover:scale-110 place-items-center">
							<Image
								src="/ps.png"
								alt=""
								width={50}
								height={50}
							/>
							Photoshop
						</li>
						<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
							<Image
								src="/figma.png"
								alt=""
								width={50}
								height={50}
							/>
							Figma
						</li>
						<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
							<Image
								src="/ai.png"
								alt=""
								width={50}
								height={50}
							/>
							Illustrator
						</li>
						<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
							<Image
								src="/coreldraw.png"
								alt=""
								width={50}
								height={50}
							/>
							Coreldraw
						</li>
						<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
							<Image
								src="/canva.png"
								alt=""
								width={50}
								height={50}
							/>
							Canva
						</li>
						<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
							<Image
								src="/next-js.png"
								alt=""
								width={50}
								height={50}
							/>
							Next Js
						</li>
						<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
							<Image
								src="/node_js.png"
								alt=""
								width={50}
								height={50}
							/>
							Node Js
						</li>
						<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
							<Image
								src="/tailwind.png"
								alt=""
								width={50}
								height={50}
							/>
							Tailwind CSS
						</li>
						<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
							<Image
								src="/php.png"
								alt=""
								width={50}
								height={50}
							/>
							PHP
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}
