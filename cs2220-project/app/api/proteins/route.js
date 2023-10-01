// require("dotenv").config();

// const mysql = require("mysql2");

// const createConnection = mysql.createConnection(
// 	'mysql://2a6p13l1i007zpkatbiy:pscale_pw_bAS6OJcI32tJENbIE2CXWFxWFMpA7GJRnkES030pyZU@aws.connect.psdb.cloud/cs2220_project1?ssl={"rejectUnauthorized":true}'
// );

// import { NextResponse } from "next/server";

// export async function GET(request) {
//     let results = [];
// 	connection.query(
// 		"select * from project_dataset1_protein_protein",
// 		[1, 1],
// 		function (err, results) {
// 			console.log(results);
//             results = results;
// 		}
// 	);
// 	return NextResponse.json(results, { status: 200 });
// }

import { NextResponse } from "next/server";
import mysql from "mysql2/promise"; // Use the promise-based version

const DATABASE_URL = 'mysql://2a6p13l1i007zpkatbiy:pscale_pw_bAS6OJcI32tJENbIE2CXWFxWFMpA7GJRnkES030pyZU@aws.connect.psdb.cloud/cs2220_project1?ssl={"rejectUnauthorized":true}'

export async function GET(request) {
  try {
    // Create a database connection
    const connection = await mysql.createConnection({
        host: "aws.connect.psdb.cloud",
        user: "2a6p13l1i007zpkatbiy",
        password: "pscale_pw_bAS6OJcI32tJENbIE2CXWFxWFMpA7GJRnkES030pyZU",
        database: "cs2220_project1",
    });

    // Execute the database query
    const [rows] = await connection.query(
      "SELECT * FROM project_dataset1_protein_protein"
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
