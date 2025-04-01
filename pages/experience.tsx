"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
export default function Experience() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			mirror: true,
		});
	}, []);
	return (
		<>
			{/* Experience */}
			<section
				className="px-6 py-40 rounded-lg mx-auto mb-12 w-full"
				data-aos="fade-up"
				id="experience"
			>
				<h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-950 to-pink-500 bg-clip-text text-transparent text-center mb-6">
					Experience
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
					<div
						className="bg-gray-700 w-[300px] md:w-[500px] rounded-lg p-6 grid grid-cols-1 gap-3 hover:scale-105 transition-transform "
						data-aos="fade-right"
					>
						<div className="flex flex-col justify-start items-start mt-2">
							<h3 className="bg-gray-950 text-gray-100 text-[12px] md:text-[16px] rounded-md w-56 p-2 place-items-center font-bold">
								CDC Universitas Masoem
							</h3>
							<h3 className="text-gray-100 font-sans font-bold text-[12px] md:text-[16px] mt-4 font">
								Design Content Operator
							</h3>
							<p className="text-gray-950 font-sans font-medium text-[8px] md:text-[12px] font">
								September 2024 - Sekarang
							</p>

							<ul className="text-gray-100 font-sans font-medium text-[12px] md:text-[16px] mt-4">
								<li>
									Mendesain materi promosi dan
									publikasi untuk berbagai program
									dan kegiatan CDC MU.
								</li>
								<li>
									Menghasilkan desain infografis,
									feed Instagram, dan video singkat
									untuk meningkatkan engagement
									audiens.
								</li>
								<li>
									Memastikan desain yang dihasilkan
									sesuai dengan branding CDC MU dan
									mudah dipahami oleh target audiens.
								</li>
							</ul>
						</div>
					</div>
					<div
						className="bg-gray-700 w-[300px] md:w-[500px] rounded-lg p-6 grid grid-cols-1 gap-3 place-items-center hover:scale-105 transition-transform "
						data-aos="fade-left"
					>
						<div className="flex flex-col justify-start items-start mt-2">
							<h3 className="bg-gray-950 text-gray-100 text-[12px] md:text-[16px] rounded-md w-56 p-2 place-items-center font-bold">
								PT RSI - Widyadhana
							</h3>
							<h3 className="text-gray-100 font-sans font-bold text-[12px] md:text-[16px] mt-4 font">
								Design Graphics
							</h3>
							<p className="text-gray-950 font-sans font-medium text-[8px] md:text-[12px] font">
								Desember 2024 - Maret 2025
							</p>

							<ul className="text-gray-100 font-sans font-medium text-[12px] md:text-[16px] mt-4">
								<li>
									Bertanggung jawab dalam pembuatan
									materi visual untuk kebutuhan
									branding dan pemasaran perusahaan.
								</li>
								<li>
									Mendesain berbagai materi promosi
									seperti brosur, banner, dan konten
									media sosial.
								</li>
								<li>
									Berkolaborasi dengan tim pemasaran
									untuk memastikan desain sesuai
									dengan identitas merek dan strategi
									bisnis.
								</li>
							</ul>
						</div>
					</div>
					<div
						className="bg-gray-700 w-[300px] md:w-[500px] rounded-lg p-6 grid grid-cols-1 gap-3 place-items-center hover:scale-105 transition-transform "
						data-aos="fade-right"
					>
						<div className="flex flex-col justify-start items-start mt-2">
							<h3 className="bg-gray-950 text-gray-100 text-[12px] md:text-[16px] rounded-md w-56 p-2 place-items-center font-bold">
								Pemira MU 2024
							</h3>
							<h3 className="text-gray-100 font-sans font-bold text-[12px] md:text-[16px] mt-4 font">
								Design Graphics
							</h3>
							<p className="text-gray-950 font-sans font-medium text-[8px] md:text-[12px] font">
								November 2024 - Januari 2025
							</p>

							<ul className="text-gray-100 font-sans font-medium text-[12px] md:text-[16px] mt-4">
								<li>
									Mengembangkan identitas visual
									untuk acara Pemira MU 2024,
									termasuk logo, poster, dan konten
									digital.
								</li>
								<li>
									Menciptakan desain yang menarik dan
									komunikatif guna meningkatkan
									partisipasi pemilih.
								</li>
								<li>
									Bekerja sama dengan tim kampanye
									untuk menyampaikan pesan acara
									secara efektif melalui desain
									visual.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
