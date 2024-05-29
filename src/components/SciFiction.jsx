import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const SciFiction = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const listRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://academics.newtonschool.co/api/v1/ott/show?page=6&limit=20', {
          headers: {
            'accept': 'application/json',
            'projectID': 'treoo5dhf86s',
          },
        });
        setMovies(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = listRef.current.clientWidth; 
    if (direction === 'left') {
      listRef.current.scrollLeft -= scrollAmount;
    } else {
      listRef.current.scrollLeft += scrollAmount;
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-white text-3xl mb-4">Sci-Fi Thriller TV Shows</h1>
      <div className="relative max-w-full overflow-hidden">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
          onClick={() => handleScroll('left')}
        >
          &lt;
        </button>
        <div className="flex overflow-x-scroll scrollbar-hide" style={{ scrollBehavior: 'smooth' }} ref={listRef}>
          <ul className="flex">
            {movies.map(movie => (
              <li
                key={movie._id}
                onMouseEnter={() => setHoveredMovieId(movie._id)}
                onMouseLeave={() => setHoveredMovieId(null)}
                className="relative m-2 w-60 h-36 overflow-hidden transition-transform transform hover:scale-125"
              >
                <img src={movie.thumbnail} alt={movie.title} className="w-full h-full object-cover " />
                {hoveredMovieId === movie._id && (
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white p-4 flex flex-col justify-center items-center">
                    <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                    <p className="text-sm mb-2 overflow-y-auto max-h-16">{movie.description}</p>
                    <a href={movie.video_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2">Watch Now</a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
          onClick={() => handleScroll('right')}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SciFiction;