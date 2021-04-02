/*
  Warnings:

  - You are about to drop the `Availabilty` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Availabilty" DROP CONSTRAINT "Availabilty_profileId_fkey";

-- DropTable
DROP TABLE "Availabilty";

-- CreateTable
CREATE TABLE "Availability" (
    "id" SERIAL NOT NULL,
    "available" "AvailabilityEnum" NOT NULL DEFAULT E'FULLTIME',
    "profileId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Availability" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
