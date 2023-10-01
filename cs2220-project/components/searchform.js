"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Link from "next/link";

const SearchForm = () => {
	const [jsonData, setJsonData] = useState(null);

	const handleSearch = async () => {
		try {
			// Send a GET request to the "api/proteins" endpoint
			const response = await fetch("/api/proteins", {
				method: "GET",
				cache: "force-cache",
			});
			if (response.ok) {
				// Handle the successful response here
				const data = await response.json();
				console.log("API Response: ", data);
				setJsonData(data);
			} else {
				// Handle API errors, e.g., display an error message
				console.error("API Error:", response.statusText);
			}
		} catch (error) {
			console.error("API Request Error:", error);
		}
	};

	return (
		<React.Fragment>
			<Typography variant="h4" gutterBottom>
				Search Proteins
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="proteinName"
						name="proteinName"
						label="Protein name"
						fullWidth
						autoComplete="given-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						id="pubmedID"
						name="pubmedID"
						label="Pubmed ID"
						fullWidth
						autoComplete="given-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12}>
					<Link
						href={{
							pathname: "/results",
							query: { data: JSON.stringify(jsonData) },
						}}
					>
						<Button
							variant="contained"
							color="primary"
							onClick={handleSearch}
						>
							Search
						</Button>
					</Link>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default SearchForm;
