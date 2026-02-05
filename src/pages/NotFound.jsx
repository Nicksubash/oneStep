import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex items-center justify-center py-20 px-4">
                <div className="text-center">
                    <h1 className="text-9xl font-bold text-indigo-600 animate-bounce">404</h1>
                    <h2 className="mt-4 text-3xl font-semibold text-gray-900">Page Not Found</h2>
                    <p className="mt-6 text-lg text-gray-600">
                        お探しのページは見つかりませんでした。<br />
                        The page you are looking for does not exist.
                    </p>
                    <div className="mt-10">
                        <Link
                            to="/"
                            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                        >
                            Go Home / ホームへ戻る
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
