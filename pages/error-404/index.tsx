import Link from "next/link";
import { useRouter } from "next/router";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-2xl text-gray-600 mb-8">Page non trouvée</p>
                <p className="text-gray-500 mb-8">
                    La page que vous recherchez n'existe pas.
                </p>
                <div className="space-x-4">
                   
                    <button
                        onClick={() => router.back()}
                        className="inline-block px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                        Retour
                    </button>
                </div>
            </div>
        </div>
    );
}