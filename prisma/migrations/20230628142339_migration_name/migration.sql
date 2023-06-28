-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT,
ADD COLUMN     "processed" BOOLEAN NOT NULL DEFAULT false;
