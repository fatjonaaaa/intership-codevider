import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

function MyComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDog, setSelectedDog] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://freetestapi.com/api/v1/dogs';
        if (searchTerm) {
          url += `?search=${encodeURIComponent(searchTerm)}`;
        }
        const response = await axios.get(url);
        const sortedData = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setData(sortedData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [searchTerm]);

  const showDetails = (pet) => {
    setSelectedDog(pet);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedDog(null);
  };


  return (
    <div className="gallery">
      <h1>Dogs Gallery</h1>
      <input
        type="text"
        placeholder={`Search by dog name...`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="gallery-items">
        {data.map(dog => (
          <div key={dog.id} className="gallery-item" onClick={() => showDetails(dog)}>
            <img src={dog.image} alt={dog.name} />
            <div className="dog-name">
              <h2 className="pettype">{dog.name}</h2>
            </div>
          </div>
        ))}
      </div>

  
    {isPopupVisible && selectedDog && (
        <div className="popup">
          <div className="popup-content" style={{ width: "80%", maxWidth: "800px" }}>
            <span className="close" onClick={closePopup}>&times;</span>
            <h2 class="dogName">{selectedDog.name}</h2>
            <img class="dogImage" src={selectedDog.image} alt={selectedDog.name} width="300px" />
            <table className="popup-table">
              <tbody>
              <tr>
                  <th>Id</th>
                  <td>{selectedDog.id}</td>
                </tr>
                <tr>
                  <th>Breed Group</th>
                  <td>{selectedDog.breed_group}</td>
                </tr>
                <tr>
                  <th>Size</th>
                  <td>{selectedDog.size}</td>
                </tr>
                <tr>
                  <th>Lifespan</th>
                  <td>{selectedDog.lifespan}</td>
                </tr>
                <tr>
                
                  <th>Origin</th>
                  <td>{selectedDog.origin}</td>
                </tr>
                <tr>
                  <th>Temperament</th>
                  <td>{selectedDog.temperament}</td>
                </tr>
                <tr>
                  <th>Colors</th>
                  <td>{selectedDog.colors.join(', ')}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{selectedDog.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyComponent;

