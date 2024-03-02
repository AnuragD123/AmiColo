import { writeFile } from 'fs/promises';
import { pool } from "@/dbConfig/dbConfig";
import { NextResponse } from 'next/server';
import { getDataFromToken } from '@/helper/getDataFromToken';

export async function POST(request) {
    try {

        const currentUserId = getDataFromToken(request);

        const maxSize = 1024 * 1024 * 5; // 5 MB limit
        const file = await request.formData();
        const uploadedFile = file.get('file');
        console.log("File Name", uploadedFile)
        if (!uploadedFile) {
            return NextResponse.json({ success: false, message: 'No file uploaded' });
        }
        if (uploadedFile.size > maxSize) {
            return NextResponse.json({ success: false, message: 'File size exceeds limit' });
        }
        // Secure path construction:
        const uniqueFilename = generateUniqueFilename(uploadedFile.name); // Function defined below
        const path = `./public/uploads/${uniqueFilename}`;
        // Write the file to the server:
        const bytes = await uploadedFile.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(path, buffer);
        const user = await pool.query("UPDATE users SET avatar = ? WHERE id = ?", [uniqueFilename, currentUserId]);// fix this My Sql query for uploading profile and get user id from Sidebar

        return NextResponse.json({ success: true, message: 'File uploaded successfully', user });
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ success: false, message: 'File upload failed' });
    }
}

// Function to generate a unique filename:
function generateUniqueFilename(originalFilename) {
    const extension = originalFilename.split('.').pop();
    const baseName = originalFilename.substring(0, originalFilename.lastIndexOf('.'));
    return `${baseName}-${Date.now()}.${extension}`;
}