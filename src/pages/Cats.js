import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

function MyComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://freetestapi.com/api/v1/cats';
     
        const response = await axios.get(url);
        const sortedData = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setData(sortedData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  });

  const showDetails = (pet) => {
    setSelectedCat(pet);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedCat(null);
  };


  return (
    <div className="gallery">
      <h1>Cats Gallery</h1>
      <div className="gallery-items">
        {data.map(cat => (
          <div key={cat.id} className="gallery-item" onClick={() => showDetails(cat)}>
            <img src={cat.image} alt={cat.name} />
            <div className="cat-name">
              <h2 className="pettype">{cat.name}</h2>
            </div>
          </div>
        ))}
      </div>

  
    {isPopupVisible && selectedCat && (
        <div className="popup">
          <div className="popup-content" style={{ width: "80%", maxWidth: "800px" }}>
            <span className="close" onClick={closePopup}>&times;</span>
            <h2 class="catName">{selectedCat.name}</h2>
            <img class="catImage" src={selectedCat.image} alt={selectedCat.name} width="300px" />
            <table className="popup-table">
              <tbody>
              <tr>
                  <th>Id</th>
                  <td>{selectedCat.id}</td>
                </tr>
                <tr>
                  <th>Origin</th>
                  <td>{selectedCat.origin}</td>
                </tr>
            
                <tr>
                  <th>Temperament</th>
                  <td>{selectedCat.temperament}</td>
                </tr>
                <tr>
                  <th>Colors</th>
                  <td>{selectedCat.colors.join(', ')}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{selectedCat.description}</td>
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

