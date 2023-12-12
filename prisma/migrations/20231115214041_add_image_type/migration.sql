/*
  Warnings:

  - You are about to drop the column `images_url` on the `Home` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Home" DROP COLUMN "images_url";

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "asset_id" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "version_id" TEXT NOT NULL,
    "signature" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "format" TEXT NOT NULL,
    "resource_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "tags" TEXT[],
    "bytes" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "etag" TEXT NOT NULL,
    "placeholder" BOOLEAN NOT NULL,
    "url" TEXT NOT NULL,
    "secure_url" TEXT NOT NULL,
    "folder" TEXT NOT NULL,
    "original_filename" TEXT NOT NULL,
    "api_key" TEXT NOT NULL,
    "homeId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_homeId_fkey" FOREIGN KEY ("homeId") REFERENCES "Home"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
