import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

function MyComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBird, setSelectedBird] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://freetestapi.com/api/v1/birds';
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
    setSelectedBird(pet);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedBird(null);
  };


  return (
    <div className="gallery">
      <h1>Birds Gallery</h1>
      <input
        type="text"
        placeholder={`Search by bird name...`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="gallery-items">
        {data.map(bird => (
          <div key={bird.id} className="gallery-item" onClick={() => showDetails(bird)}>
            <img src={bird.image} alt={bird.name} />
            <div className="bird-name">
              <h2 className="pettype">{bird.name}</h2>
            </div>
          </div>
        ))}
      </div>

  
    {isPopupVisible && selectedBird && (
        <div className="popup">
          <div className="popup-content" style={{ width: "80%", maxWidth: "800px" }}>
            <span className="close" onClick={closePopup}>&times;</span>
            <h2 class="birdName">{selectedBird.name}</h2>
            <img class="birdImage" src={selectedBird.image} alt={selectedBird.name} width="300px" />
            <table className="popup-table">
              <tbody>
              <tr>
                  <th>Id</th>
                  <td>{selectedBird.id}</td>
                </tr>
                <tr>
                  <th>Species</th>
                  <td>{selectedBird.species}</td>
                </tr>
            
                <tr>
                  <th>Family</th>
                  <td>{selectedBird.family}</td>
                </tr>
                <tr>
                  <th>Habitat</th>
                  <td>{selectedBird.habitat}</td>
                </tr>
                <tr>
                  <th>Place of Found</th>
                  <td>{selectedBird.place_of_found}</td>
                </tr>
                <tr>
                  <th>Diet</th>
                  <td>{selectedBird.diet}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{selectedBird.description}</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{selectedBird.weight_kg} kg</td>
                </tr>
                <tr>
                  <th>Height</th>
                  <td>{selectedBird.height_cm} cm</td>
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

