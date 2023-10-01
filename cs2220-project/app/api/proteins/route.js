// import { NextResponse } from "next/server";
// import mysql from "mysql2/promise"; // Use the promise-based version

// const DATABASE_URL =
// 	'mysql://2a6p13l1i007zpkatbiy:pscale_pw_bAS6OJcI32tJENbIE2CXWFxWFMpA7GJRnkES030pyZU@aws.connect.psdb.cloud/cs2220_project1?ssl={"rejectUnauthorized":true}';

// export async function GET(request) {
// 	try {
// 		// Create a database connection
// 		const dbConfig = ({
// 			host: "aws.connect.psdb.cloud",
// 			user: "2a6p13l1i007zpkatbiy",
// 			password: "pscale_pw_bAS6OJcI32tJENbIE2CXWFxWFMpA7GJRnkES030pyZU",
// 			database: "cs2220_project1",
// 			ssl: {
// 				rejectUnauthorized: true,
// 			},
// 		});

// 		// Create a database connection
// 		const connection = await mysql.createConnection(dbConfig);

// 		// Execute the database query
// 		const [rows] = await connection.query(
// 			"SELECT * FROM project_dataset1_protein_protein"
// 		);

// 		// Close the database connection
// 		await connection.end();

// 		// Return the query results as JSON
// 		return NextResponse.json(rows, { status: 200 });
// 	} catch (error) {
// 		console.error("Database Error:", error);
// 		return NextResponse.error("Internal Server Error", { status: 500 });
// 	}
// }

import mysql from "mysql2/promise"; // Use the promise-based version
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

export async function GET(request) {
  try {
    const DATABASE_URL =
      'mysql://1iyibs0dl5mjvdey73rl:pscale_pw_cdjPwCxYF6T2Ont8uqWAzn1bkIg57IG8ZjDO2Pk07mQ@aws.connect.psdb.cloud/cs2220_project1?ssl={"rejectUnauthorized":true}';

    // Create a database connection
    const connection = await mysql.createConnection(DATABASE_URL);

    // Define the query object
    const queryObject = {
      sql: "SELECT * FROM project_dataset1_protein_protein",
      values: [], // If your query has parameters, provide values here
    };

    // Execute the query and await the results
    const [rows, fields] = await connection.execute(queryObject.sql, queryObject.values);

    // Close the database connection
    await connection.end();

    // Return the query results as JSON
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}

