import React, {useState} from 'react';
import './Store.css'; 
import ribbon from '../images/ribbon.png'

// Box Component
const ItemBox = ({ name, image, price }) => {
    const [isPurchased, setIsPurchased] = useState(false);
  
    const handlePurchase = () => {
      setIsPurchased(true); // Update state to indicate purchase
    };
  
    return (
      <div className="item-box">
        <h3 className="item-name">{name}</h3>
        <img src={image} alt={name} className="item-image" />
        <div className="price-tag">${price}</div>
        <button
          className={`buy-button ${isPurchased ? 'purchased' : ''}`}
          onClick={handlePurchase}
          disabled={isPurchased} // Disable the button after purchase
        >
          {isPurchased ? 'Purchased' : 'Buy'}
        </button>
      </div>
    );
  };

const Store = () => {
  const items = [
    { id: 1, name: 'Ribbon', image: 'https://static.vecteezy.com/system/resources/previews/049/340/591/non_2x/cute-ribbon-coquette-pixel-art-vector.jpg', price: 23 },
    { id: 2, name: 'Necklace', image: 'https://static.vecteezy.com/system/resources/previews/046/361/779/non_2x/necklace-pixel-art-for-dynamic-digital-projects-and-designs-vector.jpg', price: 35 },
    { id: 3, name: 'Collar', image: 'https://i.pinimg.com/originals/b9/01/93/b90193c1289b0dee158ba4436c834ab6.jpg', price: 10 },
  ];

  return (
    <div className="item-container">
      {items.map((item) => (
        <ItemBox key={item.id} name={item.name} image={item.image} price={item.price} />
      ))}
    </div>
  );
};

export default Store;
