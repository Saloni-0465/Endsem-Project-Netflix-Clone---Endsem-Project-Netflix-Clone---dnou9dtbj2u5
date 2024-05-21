import React from 'react';

const ShowModal = ({ show, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg">
        <img src={show.thumbnail} alt={show.title} className="w-full h-auto mb-4" />
        <h2 className="text-xl font-bold mb-2">{show.title}</h2>
        <p className="text-sm mb-2">{show.description}</p>
        <p className="text-sm mb-2"><strong>Rating:</strong> {show.rating}</p>
        <p className="text-sm mb-2"><strong>Duration:</strong> {show.duration}</p>
        <p className="text-sm mb-2"><strong>Release Year:</strong> {show.release_year}</p>
        <p className="text-sm mb-2"><strong>Genre:</strong> {show.genre.join(', ')}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2" onClick={onClose}>Close</button>
        <a href={show.video_url} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white py-2 px-4 rounded-md">Watch Now</a>
      </div>
    </div>
  );
};

export default ShowModal;