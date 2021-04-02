/*
  Warnings:

  - You are about to drop the `Availiabilty` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Availiabilty" DROP CONSTRAINT "Availiabilty_profileId_fkey";

-- DropTable
DROP TABLE "Availiabilty";

-- CreateTable
CREATE TABLE "Availabilty" (
    "id" SERIAL NOT NULL,
    "available" "AvailabilityEnum" NOT NULL DEFAULT E'FULLTIME',
    "profileId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Availabilty" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
