/*
  Warnings:

  - The `service` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Services" AS ENUM ('CLIMA', 'BATERY_SERVICE', 'CHECK_ENGINE_LAMP', 'MAINTAINING', 'OIL_ENGINE', 'ELECTRICITY');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
DROP COLUMN "service",
ADD COLUMN     "service" "Services" NOT NULL DEFAULT 'CHECK_ENGINE_LAMP',
ALTER COLUMN "problem" DROP NOT NULL;
