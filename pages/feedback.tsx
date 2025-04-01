"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StarRating from "../components/starRating";

export default function Feedback(props: any) {
	const [nama, setNama] = useState("");
	const [rating, setRating] = useState(5);
	const [komentar, setKomentar] = useState("");
	const [ulasan, setUlasan] = useState([]);
	const [averageRating, setAverageRating] = useState(0);
	const [totalVotes, setTotalVotes] = useState(0);

	useEffect(() => {
		AOS.init({ duration: 1000, once: false, mirror: true });
		getUlasan();
	}, []);

	const getUlasan = async () => {
		const res = await fetch("/api/ulasan");
		const data = await res.json();
		setUlasan(data);

		if (data.length > 0) {
			const total = data.reduce(
				(acc: number, item: any) => acc + item.rating,
				0
			);
			setAverageRating(parseFloat((total / data.length).toFixed(1)));
			setTotalVotes(data.length);
		} else {
			setAverageRating(0);
			setTotalVotes(0);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		await fetch("/api/ulasan", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				nama,
				rating: parseInt(rating.toString()),
				komentar,
			}),
		});

		setNama("");
		setRating(5);
		setKomentar("");
		getUlasan();
	};

	return (
		<section
			className="px-6 py-20 rounded-lg mx-auto mb-12 w-full"
			data-aos="fade-up"
			id="feedback"
		>
			<h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-950 to-pink-500 bg-clip-text text-transparent text-center mb-6">
				Beri Rating & Komentar
			</h2>

			{/* Average Rating */}
			<div className="text-center bg-gradient-to-r from-purple-950 to-pink-500 bg-clip-text text-transparent mb-6 grid place-items-center ">
				<p className="text-lg font-medium">
					Rating {averageRating}{" "}
					<span className="text-sm text-gray-400">
						(from {totalVotes}{" "}
						{totalVotes === 1 ? "voter" : "voters"})
					</span>
				</p>
				<StarRating value={averageRating} readOnly={true} />
			</div>

			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl mx-auto space-y-5"
				data-aos="fade-up"
			>
				<h2 className="text-2xl font-semibold text-white text-center mb-4">
					Tinggalkan Ulasan
				</h2>

				<div className="space-y-2">
					<label className="block text-gray-300 font-medium">
						Nama
					</label>
					<input
						type="text"
						value={nama}
						onChange={(e) => setNama(e.target.value)}
						placeholder="Masukkan Nama Anda"
						className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
					/>
				</div>

				<div className="space-y-2">
					<label className="block text-gray-300 font-medium">
						Rating
					</label>
					<div className="p-2 rounded-xl">
						<StarRating value={rating} onChange={setRating} />
					</div>
				</div>

				<div className="space-y-2">
					<label className="block text-gray-300 font-medium">
						Komentar
					</label>
					<textarea
						value={komentar}
						onChange={(e) => setKomentar(e.target.value)}
						rows={4}
						placeholder="Tulis komentar kamu..."
						className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
					></textarea>
				</div>

				<button
					type="submit"
					className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl hover:opacity-90 transition duration-300"
				>
					Kirim Ulasan
				</button>
			</form>

			{/* List Ulasan */}
			<div className="max-w-2xl mx-auto mt-10 text-white space-y-4">
				<h3 className="text-xl font-semibold mb-4">
					Ulasan Terbaru:
				</h3>
				{ulasan.length > 0 ? (
					ulasan.map((item: any) => (
						<div
							key={item.id}
							className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-4 rounded-lg shadow"
						>
							<p className="font-bold">{item.nama}</p>
							<StarRating
								value={item.rating}
								readOnly={true}
							/>
							<p className="text-sm mt-1">
								{item.komentar}
							</p>
							<p className="text-xs mt-1 text-gray-400">
								{new Date(
									item.createdAt
								).toLocaleString()}
							</p>
						</div>
					))
				) : (
					<p>Belum ada ulasan.</p>
				)}
			</div>
		</section>
	);
}
