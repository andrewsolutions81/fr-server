/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HomeToImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_HomeToImage" DROP CONSTRAINT "_HomeToImage_A_fkey";

-- DropForeignKey
ALTER TABLE "_HomeToImage" DROP CONSTRAINT "_HomeToImage_B_fkey";

-- AlterTable
ALTER TABLE "Home" ADD COLUMN     "images_url" TEXT[];

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "_HomeToImage";
