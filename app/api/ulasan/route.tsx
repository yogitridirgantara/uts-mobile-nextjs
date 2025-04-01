import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
	const body = await req.json();
	const { nama, rating, komentar } = body;

	try {
		const newUlasan = await prisma.penilaianUser.create({
			data: {
				nama,
				rating,
				komentar,
			},
		});

		return NextResponse.json(newUlasan, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Gagal menyimpan data" },
			{ status: 500 }
		);
	}
}

export async function GET() {
	const ulasan = await prisma.penilaianUser.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});

	return NextResponse.json(ulasan);
}
