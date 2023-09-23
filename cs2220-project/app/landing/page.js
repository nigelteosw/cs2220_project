import Link from "next/link";
import styles from "../globals.css";

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-blue-400">
			<div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg w-80 h-80">
				<h1 className="text-3xl text-black font-semibold mb-6">
					Protein Information
				</h1>
				<form className="flex flex-col items-center">
					<div className="flex items-center mb-4">
						<label htmlFor="entry" className="text-black mb-1">
							Entry ID:
						</label>
						<input
							type="text"
							id="entry"
							name="entry"
							placeholder="Enter Entry ID"
							className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full text-black"
						/>
					</div>
          <div className="flex items-center mb-4">
						<label htmlFor="entry" className="text-black mb-1">
							PDB:
						</label>
						<input
							type="text"
							id="entry"
							name="entry"
							placeholder="Enter PDB"
							className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full text-black"
						/>
					</div>
          
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
