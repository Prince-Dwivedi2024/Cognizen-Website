import React from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const location = useLocation();
    const { searchResults } = location.state || {}; // Extract searchResults from location state

    const limitedDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 25) {
          return words.slice(0, 30).join(' ') + '...';
        }
        return description;
      };
    
      // Function to filter non-empty authors
      const formatAuthors = (authors) => {
        return authors.filter(author => author.trim() !== '').join(' & ');
      };
      
    return (
        <div>
            <h1>Search Results</h1>
            {searchResults && searchResults.length > 0 ? (
                <ul>
                    {searchResults.map((result, index) => (
                          <div
                          className={`bg-transparent bg-[#F0F4F8] shadow-xl overflow-hidden transform transition-transform hover:scale-[1.008] hover:shadow-2xl ${large ? 'large-card' : ''}`}
                          style={large ? { width: '800px', height: '500px', margin: '0 auto' } : {}}
                        >
                          <div>
                            <div
                              className="relative bg-cover bg-center"
                              style={{ height: large ? '350px' : '240px' }}
                            >
                              <img src={large ? photo1:photo2} alt={title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 flex flex-col justify-between" style={{ minHeight: '150px' }}>
                              <h2 className="text-lg font-semibold mb-2 font-sans" style={{ color: '#212121' }}>{title}</h2>
                              {large && <p className="text-gray-700 mb-4">{limitedDescription(description)}</p>}
                              <div className="bg-transparent py-1 flex justify-between items-center mt-auto">
                                <div className="text-sm" style={{ color: '#979797' }}>
                                  <span>{formatAuthors(author)}</span> | <span>{publishDate}</span>
                                </div>
                                <button
                                  className="text-sm font-semibold text-blue-400 hover:text-[#c9c6c6]"
                                  onClick={() => onReadMore(type)}
                                >
                                  More...
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}

export default Search;
