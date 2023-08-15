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
CREATE TABLE "FavoriteHome" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "homeId" TEXT NOT NULL,

    CONSTRAINT "FavoriteHome_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FavoriteHome" ADD CONSTRAINT "FavoriteHome_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteHome" ADD CONSTRAINT "FavoriteHome_homeId_fkey" FOREIGN KEY ("homeId") REFERENCES "Home"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
