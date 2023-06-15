/*
  Warnings:

  - You are about to drop the column `code` on the `products` table. All the data in the column will be lost.
  - Added the required column `bar_code` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "code",
ADD COLUMN     "bar_code" TEXT NOT NULL;
