"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function About() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			mirror: true,
		});
	}, []);
	return (
		<>
			{/* About */}
			<section
				className="px-6 py-40 rounded-lg mx-auto mb-12 w-full"
				data-aos="fade-up"
				id="about"
			>
				<h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-950 to-pink-500 bg-clip-text text-transparent text-center mb-6">
					About Me
				</h2>
				<p className="text-sm md:text-lg leading-relaxed tex-gray-950 max-w-3xl mx-auto text-center">
					Saya adalah seorang pengembang web dan desainer grafis
					dengan passion dalam menciptakan pengalaman digital
					yang menarik dan berfungsi dengan baik. Dengan
					pengalaman dalam teknologi modern seperti Next.js,
					React, dan Node.js, saya mengembangkan aplikasi yang
					responsif, cepat, dan user-friendly.
				</p>
				<p className="text-sm md:text-lg leading-relaxed tex-gray-950 max-w-3xl mx-auto text-center mt-4">
					Selain itu, saya juga seorang UI/UX designer yang
					memiliki keahlian dalam menciptakan desain yang estetis
					dan mudah digunakan. Saya percaya bahwa desain yang
					baik bukan hanya tentang keindahan, tetapi juga tentang
					pengalaman pengguna yang optimal.
				</p>
				<p className="text-sm md:text-lg leading-relaxed tex-gray-950 max-w-3xl mx-auto text-center mt-4">
					Saya aktif membagikan wawasan dan inspirasi desain di
					media sosial saya, termasuk Instagram{""}
					<a
						href="https://www.instagram.com/gistudios__"
						className="text-blue-500 font-semibold hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						@gistudios__
					</a>
					. Jangan ragu untuk menghubungi saya jika Anda
					membutuhkan jasa desain atau pengembangan web!
				</p>
			</section>
		</>
	);
}
