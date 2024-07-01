/*
  Warnings:

  - The values [CLIMA,BATERY_SERVICE,CHECK_ENGINE_LAMP,MAINTAINING,OIL_ENGINE,ELECTRICITY] on the enum `Services` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Services_new" AS ENUM ('Klima', 'Servis_akumulatora', 'Check_engine_lampica', 'Odrzavanje', 'Zamjena_ulja', 'Elektrika');
ALTER TABLE "User" ALTER COLUMN "service" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "service" TYPE "Services_new" USING ("service"::text::"Services_new");
ALTER TYPE "Services" RENAME TO "Services_old";
ALTER TYPE "Services_new" RENAME TO "Services";
DROP TYPE "Services_old";
ALTER TABLE "User" ALTER COLUMN "service" SET DEFAULT 'Check_engine_lampica';
COMMIT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "service" SET DEFAULT 'Check_engine_lampica';
