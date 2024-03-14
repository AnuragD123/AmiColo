import axios from "axios";
import { NextResponse } from "next/server";
import { getDataFromToken } from "@/helper/getDataFromToken";

export async function POST(request) {
	const userId = getDataFromToken(request)
	console.log({ userId })

	const response = await axios.post('http://89.116.49.229:5000/api2', { id });
	console.log(response.data);

	return NextResponse.json({ success: true, data: response.data })
}
