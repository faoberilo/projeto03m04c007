/*
  Warnings:

  - You are about to drop the column `imageurl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageurl` on the `User` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageurl",
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "imageurl",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
