import { getDataFromToken } from "@/helper/getDataFromToken";
import { writeFile } from "fs/promises";
import { pool } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import { getSignatureData } from "@/helper/getSignature";

export async function POST(request) {
  try {
    const currentUserId = getDataFromToken(request);
    const maxSize = 1024 * 1024 * 5; // 5 MB limit
    const file = await request.formData();
    const nationality = file.get("nationality");
    const languages = file.get("languages");
    const occupation = file.get("occupation");
    const diet = file.get("diet");
    const bedtime = file.get("bedtime");
    const smoker = file.get("smoker");
    const uploadedFile = file.get("file");
    const first_name = file.get("first_name");
    const last_name = file.get("last_name");
    const day = file.get("day");
    const month = file.get("month");
    const year = file.get("year");
    const gender = file.get("gender");
    const bio = file.get("bio");
    const education = file.get("education");
    const type = file.get("type");
    const rooms = file.get("rooms");
    const price = file.get("price");
    const washrooms = file.get("washrooms");
    const parking = file.get("parking");
    const area = file.get("area");
    const Gym = file.get("Gym");
    const login = file.get("login");
    const cleanliness = file.get("cleanliness");
    const count_friends = file.get("count_friends");

    console.log("DATA", cleanliness, count_friends, bedtime, diet, languages);

    if (
      first_name ||
      last_name ||
      day ||
      month ||
      year ||
      gender ||
      smoker ||
      cleanliness ||
      count_friends ||
      occupation ||
      nationality ||
      bio ||
      bedtime ||
      diet ||
      languages ||
      education ||
      login ||
      uploadedFile ||
      type ||
      rooms ||
      price ||
      washrooms ||
      parking ||
      area ||
      Gym
    ) {
      const whereClause = {};
      if (uploadedFile) {
        // const uniqueFilename = generateUniqueFilename(uploadedFile.name); // Function defined below
        const { uploadURL, apiKey, signature, timestamp } = getSignatureData();
        const formData = new FormData();
        formData.append("file", uploadedFile);
        formData.append("api_key", apiKey);
        formData.append("timestamp", timestamp);
        formData.append("signature", signature);
        const response = await fetch(uploadURL, {
          method: "POST",
          body: formData,
        }).then((res) => res.json());
        const imageUrl = response.secure_url;

        // const path = `./public/uploads/${uniqueFilename}`;
        // const path = `../../../../../public/uploads/${uniqueFilename}`;//part from rooot directoy

        // Write the file to the server:
        // const bytes = await uploadedFile.arrayBuffer();
        // const buffer = Buffer.from(bytes);
        // await writeFile(path, buffer);
        whereClause.avatar = imageUrl;
      }
      if (first_name) {
        whereClause.first_name = first_name;
      }
      if (last_name) {
        whereClause.last_name = last_name;
      }
      if (day && month && year) {
        whereClause.dob = year + "-" + month + "-" + day;
      }
      if (gender) {
        whereClause.gender = gender;
      }
      if (smoker) {
        if (smoker == "true") {
          whereClause.smoker = true;
        } else {
          whereClause.smoker = false;
        }
      }
      if (occupation) {
        whereClause.occupation = occupation;
      }
      if (nationality) {
        whereClause.nationality = nationality;
      }
      if (login) {
        whereClause.login = true;
      }
      if (bio) {
        whereClause.bio = bio;
      }
      if (bedtime) {
        whereClause.bedtime = bedtime;
      }
      if (diet) {
        whereClause.diet = diet;
      }
      if (languages) {
        whereClause.languages = languages;
      }
      if (cleanliness) {
        whereClause.cleanliness = cleanliness;
      }
      if (count_friends) {
        whereClause.count_friends = count_friends;
      }
      if (education) {
        whereClause.education = education;
      }
      if (type) {
        whereClause.type = type;
      }
      if (rooms) {
        whereClause.rooms = rooms;
      }
      if (price) {
        whereClause.price = price;
      }
      if (washrooms) {
        whereClause.washrooms = washrooms;
      }
      if (parking) {
        if (parking == "true") {
          whereClause.parking = true;
        } else {
          whereClause.parking = false;
        }
      }
      if (area) {
        whereClause.area = area;
      }
      if (Gym) {
        if (Gym == "true") {
          whereClause.Gym = true;
        } else {
          whereClause.Gym = false;
        }
      }

      await pool.query("UPDATE users SET ? WHERE id = ?", [
        whereClause,
        currentUserId,
      ]);
      const getUser = await pool.query(
        "SELECT * FROM users WHERE id=?",
        currentUserId
      );
      return NextResponse.json({
        success: true,
        message: "Data update successfully",
        getUser,
      });
    }
    return NextResponse.json({ success: true, message: "Data not update" });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ success: false, message: "failed", error });
  }
}

// Function to generate a unique filename:
function generateUniqueFilename(originalFilename) {
  const extension = originalFilename.split(".").pop();
  const baseName = originalFilename.substring(
    0,
    originalFilename.lastIndexOf(".")
  );
  return `${baseName}-${Date.now()}.${extension}`;
}
