/*
  Warnings:

  - You are about to drop the `BookingRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chatroom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MatchInvitation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MatchRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Matches` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rooms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SavedRooms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `BookingRequest`;

-- DropTable
DROP TABLE `Chat`;

-- DropTable
DROP TABLE `Chatroom`;

-- DropTable
DROP TABLE `MatchInvitation`;

-- DropTable
DROP TABLE `MatchRequest`;

-- DropTable
DROP TABLE `Matches`;

-- DropTable
DROP TABLE `Rooms`;

-- DropTable
DROP TABLE `SavedRooms`;

-- DropTable
DROP TABLE `Users`;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `dob` VARCHAR(191) NULL,
    `bio` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `occupation` VARCHAR(191) NULL,
    `smoker` BOOLEAN NULL,
    `cleanliness` VARCHAR(191) NULL,
    `bedtime` VARCHAR(191) NULL,
    `diet` VARCHAR(191) NULL,
    `nationality` VARCHAR(191) NULL,
    `education` VARCHAR(191) NULL,
    `count_friends` INTEGER NOT NULL,
    `languages` VARCHAR(191) NOT NULL,
    `login` BOOLEAN NOT NULL DEFAULT false,
    `type` VARCHAR(191) NOT NULL,
    `rooms` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `washrooms` INTEGER NOT NULL,
    `parking` BOOLEAN NOT NULL,
    `area` INTEGER NOT NULL,
    `Gym` BOOLEAN NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `booking_request` (
    `booking_req_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `room_id` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',

    PRIMARY KEY (`booking_req_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chatroom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user1_id` INTEGER NOT NULL,
    `user2_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roomId` INTEGER NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `isRead` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `match_invitation` (
    `invitation_id` INTEGER NOT NULL AUTO_INCREMENT,
    `booking_req_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',

    PRIMARY KEY (`invitation_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `match_request` (
    `req_id` INTEGER NOT NULL AUTO_INCREMENT,
    `from_id` INTEGER NOT NULL,
    `to_id` INTEGER NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',

    PRIMARY KEY (`req_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `matches` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user1` INTEGER NOT NULL,
    `user2` INTEGER NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rooms` (
    `id` INTEGER NOT NULL,
    `type` VARCHAR(191) NULL,
    `gym` VARCHAR(191) NULL,
    `rooms` INTEGER NULL,
    `washrooms` INTEGER NULL,
    `area` INTEGER NULL,
    `parking` VARCHAR(191) NULL,
    `price` INTEGER NULL,
    `cluster_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `saved_rooms` (
    `id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `room_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `chat` ADD CONSTRAINT `chat_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `chatroom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
