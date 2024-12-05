import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
// import './Movies.css';


const HorrorMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const listRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://academics.newtonschool.co/api/v1/ott/show?page=5&limit=20',
          {
            headers: {
              accept: 'application/json',
              projectID: 'treoo5dhf86s',
            },
          }
        );
        setMovies(response.data.data);
      } catch (err) {
        setError('Failed to fetch movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = listRef.current.clientWidth;
    listRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-500">
        <p>{error}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl mb-6">Horror Movies</h1>
      <div className="relative max-w-full overflow-hidden">
        {/* Scroll Left Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10"
          onClick={() => handleScroll('left')}
          aria-label="Scroll Left"
        >
          &lt;
        </button>

        {/* Movie List */}
        <div
          className="flex overflow-x-scroll scrollbar-hide space-x-4"
          ref={listRef}
          style={{ scrollBehavior: 'smooth' }}
        >
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="relative flex-none w-60 h-36 rounded overflow-hidden cursor-pointer transition-transform transform hover:scale-110"
              onMouseEnter={() => setHoveredMovieId(movie._id)}
              onMouseLeave={() => setHoveredMovieId(null)}
            >
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {hoveredMovieId === movie._id && (
                <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex flex-col justify-center items-center p-4">
                  <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
                  <p className="text-sm text-center mb-2 overflow-hidden max-h-16">
                    {movie.description}
                  </p>
                  <a
                    href={movie.video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Watch Now
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10"
          onClick={() => handleScroll('right')}
          aria-label="Scroll Right"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HorrorMovies;
