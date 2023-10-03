"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "../../components/navbar.js";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Chart from "chart.js/auto";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const StatisticsPage = () => {
	const chartRefExperiment = useRef(null);
	const chartRefJournal = useRef(null);
	let myChartExperiment = null; // To keep track of the experiment chart instance
	let myChartJournal = null; // To keep track of the journal chart instance

	// Actual data for pie charts
	const pieChartExperimentData = {
		labels: [
			"Competition ELISA",
			"Competitive Binding",
			"Competitive Displacement",
			"Fluorescence Anisotropy/Polarization",
			"Isothermal Titration Calorimetry",
			"Isothermal Titration Microcalorimetry",
			"Microtiter Plate Antibody Capture Assay",
			"Sedimentation Equilibrium",
			"Surface Plasmon Resonance",
		],
		datasets: [
			{
				data: [20, 21, 130, 4, 3, 4, 9, 14, 335], // Replace these values with your actual counts
				backgroundColor: [
					"#F44336",
					"#E91E63",
					"#9C27B0",
					"#673AB7",
					"#3F51B5",
					"#2196F3",
					"#03A9F4",
					"#00BCD4",
					"#009688",
				],
			},
		],
	};

	const pieChartJournalData = {
		labels: [
			"Biochemistry",
			"EMBO J.",
			"Eur. J. Biochem.",
			"Immunity",
			"J. Biol. Chem.",
			"J. Exp. Med.",
			"J. Mol. Biol.",
			"Mol. Cell",
			"Nat. Struct. Mol. Biol.",
			"Proc. Natl. Acad. Sci. U.S.A.",
			"Science",
		],
		datasets: [
			{
				data: [56, 18, 17, 17, 67, 14, 149, 4, 7, 121, 21], // Replace these values with your actual counts
				backgroundColor: [
					"#F44336",
					"#E91E63",
					"#9C27B0",
					"#673AB7",
					"#3F51B5",
					"#2196F3",
					"#03A9F4",
					"#00BCD4",
					"#009688",
					"#4CAF50",
					"#FFC107",
				],
			},
		],
	};

	const tableData = [
		{ label: "Number of Entries", value: 540 },
		{ label: "Average Binding free energy (ΔG)", value: -11.50259 },
		{ label: "Average PH", value: 7.3867 },
		{ label: "Average of Temperature", value: 298 },
		{ label: "PDB IDs", value: 25 },
	];

	useEffect(() => {
		// Create the experiment pie chart
		const ctxExperiment = chartRefExperiment.current.getContext("2d");
		myChartExperiment = new Chart(ctxExperiment, {
			type: "pie",
			data: pieChartExperimentData,
		});

		// Create the journal pie chart
		const ctxJournal = chartRefJournal.current.getContext("2d");
		myChartJournal = new Chart(ctxJournal, {
			type: "pie",
			data: pieChartJournalData,
		});

		return () => {
			// Cleanup: Destroy the chart instances when the component unmounts
			if (myChartExperiment) {
				myChartExperiment.destroy();
			}
			if (myChartJournal) {
				myChartJournal.destroy();
			}
		};
	}, []);

	return (
		<React.Fragment>
			<Navbar />
			<Container maxWidth="7xl">
				<Paper
					elevation={3}
					style={{
						padding: "20px",
						marginBottom: "20px",
						marginTop: "20px",
					}}
				>
					<Grid container alignItems="center" spacing={2}>
						<Grid item xs={12} sm={6}>
							<Typography variant="h5" component="h2">
								Statistics Page
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							container
							justifyContent="flex-end"
						>
							{/* Add any additional content here */}
						</Grid>
					</Grid>
				</Paper>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={4} padding={3}>
						<Paper
							elevation={3}
							style={{ height: "100%", width: "100%" }}
						>
							<Typography
								variant="h6"
								component="h2"
								paddingTop={2}
								paddingLeft={2}
							>
								Summary Statistics
							</Typography>
							<TableContainer component={Paper}>
								<Table aria-label="Statistics Table">
									<TableBody>
										{tableData.map((row) => (
											<TableRow key={row.label}>
												<TableCell
													component="th"
													scope="row"
												>
													{row.label}
												</TableCell>
												<TableCell align="right">
													{row.value}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={4} padding={3}>
						<Paper
							elevation={3}
							style={{ height: "100%", width: "100%" }}
						>
							<Typography
								variant="h6"
								component="h2"
								paddingTop={2}
								paddingLeft={2}
							>
								Types of Experiments
							</Typography>
							<canvas ref={chartRefExperiment} />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={4} padding={3}>
						<Paper
							elevation={3}
							style={{ height: "100%", width: "100%" }}
						>
							<Typography
								variant="h6"
								component="h2"
								paddingTop={2}
								paddingLeft={2}
							>
								Journals
							</Typography>
							<canvas ref={chartRefJournal} />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default StatisticsPage;
