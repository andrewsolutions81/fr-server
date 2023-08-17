/*
  Warnings:

  - You are about to drop the `_HomeToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_HomeToUser" DROP CONSTRAINT "_HomeToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_HomeToUser" DROP CONSTRAINT "_HomeToUser_B_fkey";

-- DropTable
DROP TABLE "_HomeToUser";

-- CreateTable
CREATE TABLE "_HomeFavorites" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HomeFavorites_AB_unique" ON "_HomeFavorites"("A", "B");

-- CreateIndex
CREATE INDEX "_HomeFavorites_B_index" ON "_HomeFavorites"("B");

-- AddForeignKey
ALTER TABLE "_HomeFavorites" ADD CONSTRAINT "_HomeFavorites_A_fkey" FOREIGN KEY ("A") REFERENCES "Home"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HomeFavorites" ADD CONSTRAINT "_HomeFavorites_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
