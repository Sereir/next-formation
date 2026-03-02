import React from 'react';
import Head from 'next/head';

export default function PinsPage() {
    return (
        <>
            <Head>
                <title>Pins</title>
                <meta name="description" content="Pins page" />
            </Head>
            
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Pins</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Add your pins content here */}
                    <div className="bg-gray-100 rounded-lg p-6 shadow">
                        <p className="text-gray-600">No pins yet</p>
                    </div>
                </div>
            </main>
        </>
    );
}