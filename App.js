import React, { useState } from 'react';
import './App.css';

const AFFILIATE_BASE = "https://www.travelpayouts.com/?marker=154068";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <header className="border-b bg-white/60 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">Inaet Travel</h1>
          <nav className="flex items-center gap-4">
            <button onClick={() => setPage('home')}>Home</button>
            <button onClick={() => setPage('search')}>Search</button>
            <button onClick={() => setPage('deals')}>Deals</button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {page === "home" && <Home />}
        {page === "search" && <SearchForm />}
        {page === "deals" && <Deals />}
      </main>

      <footer className="mt-12 border-t bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-600 flex justify-between items-center">
          <div>© {new Date().getFullYear()} Inaet Travel</div>
          <div>Powered by Travelpayouts • Marker: 154068</div>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <section>
      <h2 className="text-3xl font-bold">Find cheap flights & hotels</h2>
      <p className="mt-2 text-gray-600">Compare prices and book with Inaet Travel.</p>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded" onClick={() => window.open(AFFILIATE_BASE, '_blank')}>Start Searching</button>
    </section>
  );
}

function SearchForm() {
  const [destination, setDestination] = useState('');
  return (
    <section>
      <h2 className="text-2xl font-bold">Search Flights</h2>
      <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Enter destination" className="border p-2 rounded w-full mt-2"/>
      <button className="mt-3 px-4 py-2 bg-black text-white rounded" onClick={() => window.open(AFFILIATE_BASE, '_blank')}>Search</button>
    </section>
  );
}

function Deals() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Featured Deals</h2>
      <ul className="mt-4">
        <li>Manila → Seoul from $120</li>
        <li>Cebu → Singapore from $80</li>
        <li>Boracay hotels up to 40% off</li>
      </ul>
    </section>
  );
}
