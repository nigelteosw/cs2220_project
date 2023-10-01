import mysql from "mysql2/promise"; // Use the promise-based version
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

export async function GET(request) {
	try {
		// Create a database connection
		const connection = await mysql.createConnection(
			process.env.DATABASE_URL
		);

		// Define the query object
		const queryObject = {
			sql: "SELECT * FROM project_dataset1_protein_protein",
			values: [], // If your query has parameters, provide values here
		};

		// Execute the query and await the results
		const [rows, fields] = await connection.execute(
			queryObject.sql,
			queryObject.values
		);

		// Close the database connection
		await connection.end();

		// Return the query results as JSON
		return NextResponse.json(rows, { status: 200 });
	} catch (error) {
		console.error("Database Error:", error);
		return NextResponse.error("Internal Server Error", { status: 500 });
	}
}
