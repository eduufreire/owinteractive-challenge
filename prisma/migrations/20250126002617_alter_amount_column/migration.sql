/*
  Warnings:

  - You are about to alter the column `amount` on the `transaction` table. The data in that column could be lost. The data in that column will be cast from `Decimal(8,2)` to `Float`.

*/
-- AlterTable
ALTER TABLE `transaction` MODIFY `amount` FLOAT NOT NULL;
