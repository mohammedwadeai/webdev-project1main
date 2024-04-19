function RestaurantCard({ restaurant, onClick }) {
  const { name, rating, vicinity, photos } = restaurant;
  const photoUrl = photos && photos.length > 0
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    : '/placeholder.png';

  return (
    <div className="border rounded shadow-lg overflow-hidden cursor-pointer" onClick={() => onClick(restaurant)}>
      <img src={photoUrl} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p>{vicinity}</p>
        <p>Rating: {rating || 'No rating'}</p>
      </div>
    </div>
  );
}
