"use client";

import React from "react";
import Navbar from "../../components/navbar.js";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Grid } from "@mui/material";

const StatisticsPage = () => {
	const chartRef = useRef(null);
	let myChart = null; // To keep track of the chart instance

	// Actual data for pie chart
	const pieChartData = {
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
					"#FF5733",
					"#335BFF",
					"#FFD433",
					"#32a852",
					"#ab32a8",
					"#32a8a1",
					"#a83232",
					"#3297a8",
					"#ffa832",
				], // You can define custom colors here
			},
		],
	};

	useEffect(() => {
		if (myChart) {
			// If the chart instance exists, destroy it before creating a new one
			myChart.destroy();
		}

		// Create a pie chart
		const ctx = chartRef.current.getContext("2d");
		myChart = new Chart(ctx, {
			type: "pie",
			data: pieChartData,
		});
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
						></Grid>
					</Grid>
				</Paper>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Paper
							elevation={3}
							style={{ height: 600, width: "100%" }}
						>
							<canvas ref={chartRef} />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default StatisticsPage;
