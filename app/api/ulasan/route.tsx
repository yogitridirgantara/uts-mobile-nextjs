import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { nama, rating, komentar } = body;

		const newUlasan = await prisma.penilaianUser.create({
			data: {
				nama,
				rating,
				komentar,
			},
		});

		return NextResponse.json(newUlasan, { status: 201 });
	} catch (error) {
		console.error("Error saat menyimpan ulasan:", error); // Menampilkan error di log server
		return NextResponse.json(
			{ error: "Gagal menyimpan data" },
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		const ulasan = await prisma.penilaianUser.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});

		return NextResponse.json(ulasan);
	} catch (error) {
		console.error("Error saat mengambil ulasan:", error);
		return NextResponse.json(
			{ error: "Gagal mengambil data" },
			{ status: 500 }
		);
	}
}
