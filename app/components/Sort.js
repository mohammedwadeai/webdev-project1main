// components/Sort.js
function Sort({ onSortChange }) {
  return (
    <div className="sort-container flex space-x-2 p-2">
      <button 
        onClick={() => onSortChange('name-asc')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Name (A-Z)
      </button>
      <button 
        onClick={() => onSortChange('name-desc')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Name (Z-A)
      </button>
      <button 
        onClick={() => onSortChange('rating-asc')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Rating (Lowest first)
      </button>
      <button 
        onClick={() => onSortChange('rating-desc')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Rating (Highest first)
      </button>
    </div>
  );
}

export default Sort;
