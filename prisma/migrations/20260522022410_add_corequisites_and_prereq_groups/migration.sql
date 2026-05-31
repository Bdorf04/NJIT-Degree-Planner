/*
  Warnings:

  - Added the required column `groupId` to the `Prerequisite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prerequisite" ADD COLUMN     "groupId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Corequisite" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "corequisiteId" TEXT NOT NULL,

    CONSTRAINT "Corequisite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Corequisite_courseId_corequisiteId_key" ON "Corequisite"("courseId", "corequisiteId");

-- AddForeignKey
ALTER TABLE "Corequisite" ADD CONSTRAINT "Corequisite_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Corequisite" ADD CONSTRAINT "Corequisite_corequisiteId_fkey" FOREIGN KEY ("corequisiteId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
