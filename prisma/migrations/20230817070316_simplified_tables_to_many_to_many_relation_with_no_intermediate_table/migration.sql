/*
  Warnings:

  - You are about to drop the `FavoriteHome` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FavoriteHome" DROP CONSTRAINT "FavoriteHome_homeId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteHome" DROP CONSTRAINT "FavoriteHome_userId_fkey";

-- DropTable
DROP TABLE "FavoriteHome";

-- CreateTable
CREATE TABLE "_HomeToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HomeToUser_AB_unique" ON "_HomeToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_HomeToUser_B_index" ON "_HomeToUser"("B");

-- AddForeignKey
ALTER TABLE "_HomeToUser" ADD CONSTRAINT "_HomeToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Home"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HomeToUser" ADD CONSTRAINT "_HomeToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
