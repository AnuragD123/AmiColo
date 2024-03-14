import { getDataFromToken } from "@/helper/getDataFromToken";
import { writeFile } from 'fs/promises';
import { pool } from "@/dbConfig/dbConfig";
import { NextResponse } from 'next/server';



export async function POST(request) {
    try {

        const currentUserId = getDataFromToken(request);

        console.log("SDFSADF", currentUserId)

        const maxSize = 1024 * 1024 * 5; // 5 MB limit
        const file = await request.formData();
        const uploadedFile = file.get('file');
        const fName = file.get('fName');
        const lName = file.get('lName');
        const day = file.get('day');
        const month = file.get('month');
        const year = file.get('year');
        const gender = file.get('gender');
        const smoker = file.get('smoker');
        const occupation = file.get('occupation');
        const nationality = file.get('nationality');
        const bio = file.get('bio');
        const bedtime = file.get('bedtime');
        const diet = file.get('diet');
        const languages = file.get('languages');
        const education = file.get('education');
        const type = file.get('type');
        const rooms = file.get('rooms');
        const price = file.get('price');
        const washrooms = file.get('washrooms');
        const parking = file.get('parking');
        const area = file.get('area');
        const gym = file.get('gym');
        const login = file.get('login');


        const place = file.get('place');
        const city = file.get('city');
        const food = file.get('food');


        if (fName || lName || day || month || year || gender || smoker || occupation || nationality || bio || bedtime || diet || languages || education || city || food || login || uploadedFile || type || rooms || price || washrooms || parking || area || gym) {
            const whereClause = {};
            if (uploadedFile) {
                const uniqueFilename = generateUniqueFilename(uploadedFile.name); // Function defined below
                const path = `./public/uploads/${uniqueFilename}`;
                // Write the file to the server:
                const bytes = await uploadedFile.arrayBuffer();
                const buffer = Buffer.from(bytes);
                await writeFile(path, buffer);
                whereClause.avatar = uniqueFilename;
            }
            if (fName) {
                whereClause.first_name = fName;
            }
            if (lName) {
                whereClause.last_name = lName;
            }
            if (day && month && year) {
                whereClause.dob = year + "-" + month + "-" + day;
            }
            if (gender) {
                whereClause.gender = gender;
            }
            if (smoker) {
                whereClause.smoker = smoker;
            }
            if (occupation) {
                whereClause.occupation = occupation;
            }
            if (nationality) {
                whereClause.nationality = nationality;
            }
            // if (login) {
            //     whereClause.login = true;
            // }
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
            if (education) {
                whereClause.education = education;
            }
            if (type) {
                whereClause.type = type;
            } if (rooms) {
                whereClause.rooms = rooms;
            } if (price) {
                whereClause.price = price;
            } if (washrooms) {
                whereClause.washrooms = washrooms;
            } if (parking) {
                whereClause.parking = parking;
            } if (area) {
                whereClause.area = area;
            } if (gym) {
                whereClause.Gym = gym;
            }
            // if (place) {
            //     whereClause.place = place;
            // }
            if (city) {
                whereClause.city = city;
            }
            if (food) {
                whereClause.food = food;
            }
            await pool.query("UPDATE users SET ? WHERE id = ?", [whereClause, currentUserId]);
            const getUser = await pool.query('SELECT * FROM users WHERE id=?', currentUserId);
            return NextResponse.json({ success: true, message: 'Data update successfully', getUser });

        }
        return NextResponse.json({ success: true, message: 'Data not update' });

    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ success: false, message: 'failed', error });
    }
}

// Function to generate a unique filename:
function generateUniqueFilename(originalFilename) {
    const extension = originalFilename.split('.').pop();
    const baseName = originalFilename.substring(0, originalFilename.lastIndexOf('.'));
    return `${baseName}-${Date.now()}.${extension}`;
}