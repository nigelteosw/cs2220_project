"use client";

// components/Navbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Navbar = () => {
	const linkStyle = {
		fontFamily: "Roboto, sans-serif", // Apply the custom font
		fontSize: "1rem", // Adjust the font size as needed
		marginRight: "40px",
		textDecoration: "none",
		color: "white",
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6">
					<Link href="/" style={linkStyle}>
						CS2220 Project
					</Link>
				</Typography>
				<div style={{ marginLeft: "auto" }}>
					<Link href="/search" style={linkStyle}>
						Search
					</Link>
					<Link href="/about" style={linkStyle}>
						About
					</Link>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
