import Link from 'next/link';
import './globals.css';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-white mb-6">CS2220 Project</h1>
      <p className="text-lg text-white mb-8">Start exploring protein interactions in our database!</p>
      <Link href="/results">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search Proteins
        </button>
      </Link>
    </div>
  );
}
