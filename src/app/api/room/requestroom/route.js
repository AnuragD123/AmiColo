import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function GET(req) {
    try {
        const currentUser = await getDataFromToken(req);

        const roomData = await pool.query(
            `SELECT amicolo.rooms.*, amicolo.match_invitation.*, amicolo.users.first_name, amicolo.users.last_name, amicolo.users.email
            FROM amicolo.booking_request
            JOIN amicolo.rooms ON amicolo.rooms.id = amicolo.booking_request.booking_req_id
            JOIN amicolo.match_invitation ON amicolo.match_invitation.booking_req_id = amicolo.booking_request.booking_req_id
            JOIN amicolo.users ON amicolo.users.id = amicolo.match_invitation.user_id
            WHERE amicolo.booking_request.user_id = ?;`,
            [currentUser]
        );

        return NextResponse.json({ data: transformData(roomData) }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

function transformData(data) {
    const transformedData = [];
    const groupedData = new Map();

    // Group data by booking_req_id
    data.forEach(item => {
        const bookingReqId = item.booking_req_id;

        if (!groupedData.has(bookingReqId)) {
            groupedData.set(bookingReqId, []);
        }

        groupedData.get(bookingReqId).push({
            id: item.id,
            user_id: item.user_id,
            status: item.status,
            first_name: item.first_name,
            last_name: item.last_name,
            email: item.email
        });
    });

    // Create the final transformed data array
    groupedData.forEach((requests, bookingReqId) => {
        const roomInfo = data.find(item => item.booking_req_id === bookingReqId);

        transformedData.push({
            ...roomInfo,
            requests
        });
    });

    return transformedData;
}
