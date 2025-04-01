"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Project(props: any) {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			mirror: true,
		});
	}, []);

	return (
		<section
			className="px-6 py-40 rounded-lg mx-auto mb-12 w-full"
			data-aos="fade-up"
			id="project"
		>
			<h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-950 to-pink-500 bg-clip-text text-transparent text-center mb-6 ">
				Project
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Card */}
				{[
					{
						src: "/images-2.png",
						desc: "Desain ini merupakan desain ucapan selamat terhadap seorang dosen atas dilantiknya sebagai kepala CDC Universitas Masoem",
						tool: "Photoshop",
					},
					{
						src: "/images-3.png",
						desc: "Desain ini merupakan desain ucapan terimakasih terhadap seorang dosen atas dedikasinya menjadi kepala CDC Universitas Masoem",
						tool: "Photoshop",
					},
					{
						src: "/images-1.png",
						desc: "Desain ini merupakan desain ucapan selamat terhadap seorang dosen yang menjadi guru besar di universitas padjadjaran",
						tool: "Photoshop",
					},
					{
						src: "/images-4.png",
						desc: "Desain ini merupakan desain flyer mengenai informasi psikotest mahasiswa Universitas Masoem tingkat 1",
						tool: "Photoshop",
					},
					{
						src: "/images-5.png",
						desc: "Desain ini merupakan desain tentang berharganya sebuah hijab sebagai pelindung seorang wanita",
						tool: "Figma",
					},
					{
						src: "/images-7.png",
						desc: "Desain ini merupakan desain menampilkan style hijab dalam acara atau kondisi apapun",
						tool: "Figma",
					},
					{
						src: "/images-6.png",
						desc: "Desain ini merupakan desain mengenai dalil al-quran akan pentingnya hijab bagi wanita untuk melindungi dirinya",
						tool: "Figma",
					},
					{
						src: "/images-8.png",
						desc: "Desain ini merupakan desain daily dari seorang muslimah dalam setiap langkahnya menjadi bermakna dengan hijab",
						tool: "Figma",
					},
				].map((item, i) => (
					<div
						key={i}
						className="bg-gray-700 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center hover:scale-105 transition-transform"
						data-aos={
							i % 2 === 0 ? "fade-right" : "fade-left"
						}
					>
						<Image
							src={item.src}
							alt={item.desc.slice(0, 50)}
							width={300}
							height={300}
							className="rounded-lg w-full h-auto object-cover"
							loading="lazy"
							placeholder="blur"
							blurDataURL="/blur-placeholder.png" 
						/>
						<div className="flex flex-col justify-center items-center text-center mt-2">
							<p className="text-white font-sans font-medium text-[12px] md:text-[16px]">
								{item.desc}
							</p>
							<h3 className="bg-blue-800 text-gray-100 text-center text-[12px] md:text-[16px] rounded-xl mt-4 w-32">
								{item.tool}
							</h3>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
