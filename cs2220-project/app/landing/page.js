import Link from 'next/link';
import styles from '../globals.css'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-blue-400">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6">Protein Query</h1>
        <form className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter protein query"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full mb-4 text-black"
          />
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

