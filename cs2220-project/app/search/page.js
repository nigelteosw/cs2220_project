import React from "react";
import Navbar from "../../components/navbar.js";
import SearchForm from "@/components/searchform.js";
import { Card } from "@mui/material";

function SearchPage() {
	return (
		<main>
			<Navbar />
			<Card
				sx={{
					minWidth: 275,
					padding: 6, // Add padding to the Card
					marginTop: 4, // Add margin from the top
                    marginLeft: 20, // Add margin from the left
                    marginRight: 20, // Add margin from the right
				}}
				variant="outlined"
			>
				<SearchForm />
			</Card>
		</main>
	);
}

export default SearchPage;
