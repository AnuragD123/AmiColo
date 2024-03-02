import { writeFile } from 'fs/promises';
import { pool } from "@/dbConfig/dbConfig";
import { NextResponse } from 'next/server';


export const config = {
    api: {
        bodyParser: false,
    }
}

export async function POST(request) {
    try {

        const currentUserId = getDataFromToken(request);

        const maxSize = 1024 * 1024 * 5; // 5 MB limit
        const file = await request.formData();
        const uploadedFile = file.get('file');
        const fName = file.get('fName');
        const lName = file.get('lName');
        const day = file.get('day');
        const month = file.get('month');
        const year = file.get('year');
        const gender = file.get('gender');
        const hSchool = file.get('hSchool');
        const bachelors = file.get('bachelors');
        const master = file.get('master');
        const sector = file.get('sector');

        const place = file.get('place');
        const city = file.get('city');
        const food = file.get('food');


        if (fName || lName || day || month || year || gender || hSchool || bachelors || master || sector || place || city || food || uploadedFile) {
            const whereClause = {};
            if (uploadedFile) {
                console.log("data", uploadedFile)  // it is return true fix here bug 
                const uniqueFilename = generateUniqueFilename(uploadedFile.name); // Function defined below
                const path = `./public/images/${uniqueFilename}`;
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
            if (hSchool) {
                whereClause.high_school = hSchool;
            }
            if (bachelors) {
                whereClause.bachelors = bachelors;
            }
            if (master) {
                whereClause.master = master;
            }
            if (sector) {
                whereClause.sector = sector;
            }
            if (place) {
                whereClause.place = place;
            }
            if (city) {
                whereClause.city = city;
            }
            if (food) {
                whereClause.food = food;
            }
            const user = await pool.query("UPDATE users SET ? WHERE id = ?", [whereClause, 5]);
            return NextResponse.json({ success: true, message: 'File uploaded successfully', user });

        }
        return NextResponse.json({ success: true, message: 'Data not update' });

    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ success: false, message: 'failed' });
    }
}

// Function to generate a unique filename:
function generateUniqueFilename(originalFilename) {
    const extension = originalFilename.split('.').pop();
    const baseName = originalFilename.substring(0, originalFilename.lastIndexOf('.'));
    return `${baseName}-${Date.now()}.${extension}`;
}