"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Button } from "@mui/material";
import Navbar from "../../components/navbar.js";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function ResultsPage() {
	// Use the useRouter hook to access the query object

	const [jsonData, setJsonData] = useState(null);

	// replace "Entry" in jsonData with "id" for DataGrid
	const getJsonData = () => {
		if (jsonData) {
			const newData = jsonData.map((row) => {
				return { ...row, id: row.Entry };
			});
			return newData;
		}
		return [];
	};

	const columns = [
		{ field: "Entry", headerName: "Entry", flex: 1 },
		{ field: "Authors", headerName: "Authors", flex: 1 },
		{
			field: "Binding_free_energy_G",
			headerName: "Binding Free Energy G",
			flex: 1,
		},
		{
			field: "Change_in_binding_free_energy_G",
			headerName: "Change in Binding Free Energy G",
			flex: 1,
		},

		{ field: "Experiment", headerName: "Experiment", flex: 1 },
		{ field: "Journal", headerName: "Journal", flex: 1 },
		{ field: "Mutations2", headerName: "Mutations2", flex: 1 },
		{ field: "PDB", headerName: "PDB", flex: 1 },
		{ field: "Protein_1", headerName: "Protein 1", flex: 1 },
		{ field: "Protein_2", headerName: "Protein 2", flex: 1 },
		{ field: "PubMed_ID", headerName: "PubMed ID", flex: 1 },
		{ field: "Temperature", headerName: "Temperature", flex: 1 },
		{ field: "pH", headerName: "pH", flex: 1 },
	];

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

	// Now you can use jsonData in your component
	return (
		<React.Fragment>
			<Navbar />
			<Container maxWidth="lg">
				<Paper
					elevation={3}
					style={{ padding: "20px", marginBottom: "20px", marginTop: "20px" }}
				>
					<Grid container alignItems="center" spacing={2}>
						<Grid item xs={12} sm={6}>
							<Typography variant="h5" component="h2">
								Protein Database
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							container
							justifyContent="flex-end"
						>
							<Button
								variant="contained"
								color="primary"
								onClick={handleSearch}
							>
								Search
							</Button>
						</Grid>
					</Grid>
				</Paper>

				<Paper elevation={3} style={{ height: 600, width: "100%" }}>
					<DataGrid
						rows={getJsonData()}
						columns={columns}
						pageSize={20}
					/>
				</Paper>
			</Container>
		</React.Fragment>
	);
}
