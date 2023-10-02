// "use client";

// import { useRouter } from "next/navigation";
// import React from "react";
// import Navbar from "../../../components/navbar.js";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";

// const DisplayPage = () => {
// 	const router = useRouter();
// 	const { id } = router.query.data;

// 	// Check if 'id' is available
// 	if (!id) {
// 		return (
// 			<main>
// 				<Navbar />
// 				<Container maxWidth="lg" style={{ marginTop: "20px" }}>
// 					<Paper elevation={3} style={{ padding: "20px" }}>
// 						<Typography variant="h4" component="h1">
// 							No ID found
// 						</Typography>
// 					</Paper>
// 				</Container>
// 			</main>
// 		);
// 	}

// 	// 'id' should contain the data from the URL parameter
// 	// e.g. if the URL is /display/123, then id should be '123'
// 	// You can use this id to fetch data from your database
	
// 	const data = JSON.parse(id);

// 	return (
// 		<main>
// 			<Navbar />
// 			<Container maxWidth="lg" style={{ marginTop: "20px" }}>
// 				<Paper elevation={3} style={{ padding: "20px" }}>
// 					<Typography variant="h4" component="h1" gutterBottom>
// 						Data Display Page
// 					</Typography>
// 					<div>
// 						Displaying data for ID: {data.id}
// 						{/* Render the rest of your component */}
// 					</div>
// 				</Paper>
// 			</Container>
// 		</main>
// 	);
// };

// export default DisplayPage;
