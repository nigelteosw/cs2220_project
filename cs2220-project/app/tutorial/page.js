import React from "react";
import Navbar from "../../components/navbar.js";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

function TutorialPage() {
	return (
		<main>
			<Navbar />
			<Container maxWidth="lg" style={{ marginTop: "20px" }}>
				<Paper
					elevation={3}
					style={{ padding: "20px", marginBottom: "20px" }}
				>
					<Typography variant="h4" component="h1" gutterBottom>
						Welcome to Our Protein Interaction Database
					</Typography>
					<Typography variant="body1" paragraph>
						In this tutorial, we will guide you through using our
						website to explore protein interaction data and make the
						most out of our features.
					</Typography>
					<Typography variant="h5" component="h2" gutterBottom>
						Getting Started
					</Typography>
					<Typography variant="body1" paragraph>
						<strong>1. Search for Proteins:</strong> To start, use
						the search bar at the top of the page to look for
						specific proteins or interactions.
					</Typography>
					<Typography variant="body1" paragraph>
						<strong>2. Explore the Results:</strong> Once you've
						entered your query, you'll be presented with a list of
						results. Click on a result to view detailed information
						about the protein interaction.
					</Typography>
					<Typography variant="h5" component="h2" gutterBottom>
						Navigating the Website
					</Typography>
					<Typography variant="body1" paragraph>
						<strong>1. Navigation Bar:</strong> Use the navigation
						bar on the top to access different sections of our
						website, including the Search, Statistics, About and
						Tutorial (you're here!).
					</Typography>
					<Typography variant="body1" paragraph>
						<strong>2. Sorting and Filtering:</strong> On the search
						results page, you can sort and filter the results to
						find the data you need more efficiently.
					</Typography>
					<Typography variant="h5" component="h2" gutterBottom>
						Additional Information
					</Typography>
					<Typography variant="body1" paragraph>
						<strong>About the Project:</strong> Our project aims to
						provide a comprehensive database for protein interaction
						energy. We utilize React, Next.js, Material-UI, and
						Planetscale for the technologies that power our website.
					</Typography>
					<Typography variant="body1" paragraph>
						<strong>Questions or Feedback:</strong> If you have any
						questions or feedback about using our website, please
						don't hesitate to{" "}
						<Link
							href="https://github.com/nigelteosw"
							target="_blank"
							rel="noopener noreferrer"
						>
							reach out to me on GitHub
						</Link>
					</Typography>
				</Paper>
			</Container>
		</main>
	);
}

export default TutorialPage;
