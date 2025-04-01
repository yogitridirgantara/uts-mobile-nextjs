-- CreateTable
CREATE TABLE "PenilaianUser" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "komentar" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PenilaianUser_pkey" PRIMARY KEY ("id")
);
