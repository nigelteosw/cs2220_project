import React from "react";
import Navbar from "../../components/navbar.js";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function AboutPage() {
	return (
		<main>
			<Navbar />
			<Container maxWidth="lg" style={{ marginTop: "20px" }}>
				<Paper
					elevation={3}
					style={{ padding: "20px", marginBottom: "20px" }}
				>
					<Typography variant="h4" component="h1" gutterBottom>
						About the Project
					</Typography>
					<Typography variant="body1" paragraph>
						Welcome to our projects About page. We are excited to
						share information about our project with you.
					</Typography>
					<Typography variant="body1" paragraph>
						<strong>Purpose:</strong> Our projects purpose is to
						develop a database for interaction energy between two
						proteins.
					</Typography>
					<Typography variant="body1" paragraph>
						<strong>Technologies Used:</strong> We use a variety of
						technologies to power our project, including React,
						Next.js, and Material-UI for the frontend. On the
						backend, we utilize Next.js. Our database is powered by
						Planetscale.
					</Typography>
					{/* Add more information about your project */}
				</Paper>
			</Container>
		</main>
	);
}

export default AboutPage;
