-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "exeternalId" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);
