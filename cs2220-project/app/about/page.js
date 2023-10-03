import React from "react";
import Navbar from "../../components/navbar.js";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

const AboutPage = () => {
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
						Welcome to our project's "About" page. We are excited to
						share information about our project with you.
					</Typography>
					<Typography variant="body1" paragraph>
						<strong>Purpose:</strong> Our project's purpose is to
						develop a comprehensive database for protein interaction
						energy between two proteins.
					</Typography>
					<Typography variant="body1" paragraph>
						<strong>Technologies Used:</strong> We have employed a
						variety of cutting-edge technologies to power our
						project. Our frontend is built using React, Next.js, and
						Material-UI, providing a seamless user experience. On
						the backend, we utilize Next.js for server-side
						rendering. Our database is hosted and powered by
						Planetscale, ensuring reliable data storage and
						retrieval.
					</Typography>
					<Typography variant="body1" paragraph>
						<strong>GitHub Repository:</strong> You can explore our
						project's source code and contribute to its development
						on our{" "}
						<Link
							href="https://github.com/nigelteosw/cs2220_project"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub repository
						</Link>
						.
					</Typography>
					<Typography variant="body1" paragraph>
						If you have any questions or would like to get involved
						in our project, feel free to reach out to us through the
						GitHub repository or our contact information provided on
						the website.
					</Typography>
				</Paper>
			</Container>
		</main>
	);
}

export default AboutPage;
