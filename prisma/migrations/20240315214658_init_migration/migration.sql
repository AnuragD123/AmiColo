-- CreateTable
CREATE TABLE `BookingRequest` (
    `booking_req_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `room_id` BIGINT NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',

    PRIMARY KEY (`booking_req_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chatroom` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user1_id` BIGINT NOT NULL,
    `user2_id` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chat` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `roomId` BIGINT NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `senderId` BIGINT NOT NULL,
    `receiverId` BIGINT NOT NULL,
    `isRead` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MatchInvitation` (
    `invitation_id` BIGINT NOT NULL AUTO_INCREMENT,
    `booking_req_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',

    PRIMARY KEY (`invitation_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MatchRequest` (
    `req_id` BIGINT NOT NULL AUTO_INCREMENT,
    `from_id` BIGINT NOT NULL,
    `to_id` BIGINT NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',

    PRIMARY KEY (`req_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Matches` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user1` BIGINT NOT NULL,
    `user2` BIGINT NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rooms` (
    `id` BIGINT NOT NULL,
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
CREATE TABLE `SavedRooms` (
    `id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `room_id` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
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

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
