/*
  Warnings:

  - You are about to drop the column `fileName` on the `Photo` table. All the data in the column will be lost.
  - Added the required column `path` to the `Photo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "fileName",
ADD COLUMN     "path" TEXT NOT NULL;
