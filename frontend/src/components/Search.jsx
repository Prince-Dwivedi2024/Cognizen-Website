import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';

const Search = () => {
    const location = useLocation();
    const navigate = useNavigate();  // Initialize navigate here
    const { searchResults } = location.state || {};

    const limitedDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 25) {
            return words.slice(0, 25).join(' ') + '...';
        }
        return description;
    };

    const formatAuthors = (authors) => {
        return authors.filter(author => author.trim() !== '').join(' & ');
    };

    const handleReadMore = (id) => {
        localStorage.removeItem('articleId');
        localStorage.removeItem('articleType');
        localStorage.setItem('articleId', id);
        localStorage.setItem('articleType', 'Article');
        navigate('/article');  // Navigate to the Article page
    };

    return (
        <div>
            <Nav />
            <div className="min-h-screen bg-[#F0F4F8] dark:bg-[#1E1E1E] p-4 sm:p-6 lg:p-10 py-[10vh]">
                <h1 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-10 text-[#212121] dark:text-[#F5F5F5]">
                    Search Results for {location?.state?.query || 'N/A'}
                </h1>
                <div className="flex flex-col items-center">
                    {searchResults && searchResults.length > 0 ? (
                        <ul className="w-full flex flex-col items-center space-y-6 sm:space-y-8">
                            {searchResults.map((result, index) => {
                                const { title, description, author, publishDate, photo1, photo2, large } = result;
                                return (
                                    <div
                                        key={index}
                                        className="bg-transparent dark:bg-[#2A2A2A] shadow-xl overflow-hidden transform transition-transform hover:scale-[1.008] hover:shadow-2xl w-full sm:w-[90%] max-w-[1200px]"
                                        style={{ marginBottom: '1.5rem' }}
                                    >
                                        <div className="flex flex-col sm:flex-row">
                                            <div
                                                className="relative bg-cover bg-center w-full sm:w-1/3"
                                                style={{ height: large ? '250px' : '180px', sm: { height: large ? '350px' : '240px' } }}
                                            >
                                                <img src={large ? photo1 : photo2} alt={title} className="h-full w-full object-cover" />
                                            </div>
                                            <div className="p-4 flex flex-col w-full sm:w-2/3 justify-between">
                                                <h2 className="text-base sm:text-lg font-semibold mb-2 font-sans text-[#212121] dark:text-[#F5F5F5]">
                                                    {title}
                                                </h2>
                                                {large && (
                                                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                                                        {limitedDescription(description)}
                                                    </p>
                                                )}
                                                <div className="bg-transparent py-1 flex justify-between items-end mt-auto">
                                                    <div className="text-xs sm:text-sm text-[#979797] dark:text-[#B0B0B0]">
                                                        <span>{formatAuthors(author)}</span> | <span>{publishDate}</span>
                                                    </div>
                                                    <button
                                                        className="text-xs sm:text-sm font-semibold text-blue-400 dark:text-blue-300 hover:text-[#c9c6c6]"
                                                        onClick={() => handleReadMore(result.id)}  // Use result.id here
                                                    >
                                                        More...
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </ul>
                    ) : (
                        <p className="text-lg text-[#212121] dark:text-[#F5F5F5]">No results found</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Search;
