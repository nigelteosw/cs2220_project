"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const SearchForm = () => {
	const handleSearch = () => {
		// Handle the search logic here
        // You can access the input values from the form fields and perform a search
        // For now, let's just log the values to the console
        console.log("Protein Name:", document.getElementById("proteinName").value);
        console.log("Pubmed ID:", document.getElementById("pubmedID").value);
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
					<Button
						variant="contained"
						color="primary"
						onClick={handleSearch}
					>
						Search
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default SearchForm;
