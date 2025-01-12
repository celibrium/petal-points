import React, {useState} from 'react';
import "./Items.css";

function Items({ listId, items, addItem, deleteItem, toggleComplete, modifyItem }) {
    const [itemName, setItemName] = useState("");
  
    const handleAddItem = () => {
        if (itemName.trim()) {
            addItem(listId, itemName);
            setItemName("");
        }
    };
  
    return (
        <div className="items">
            <ul className="items-list">
            {items.map((item) => (
                <li key={item.id} className="item">
                    <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => toggleComplete(listId, item.id)}
                    />
                    <span className="item-name">
                        {item.name} {item.completed && `(Completed on: ${item.date})`}
                    </span>
                    <div className="item-actions">
                        <button
                            onClick={() => {
                                const newName = prompt("Modify item name:", item.name);
                                if (newName !== null) modifyItem(listId, item.id, newName);
                            }}
                        >
                        Modify
                        </button>
                        <button onClick={() => deleteItem(listId, item.id)}>Delete</button>
                    </div>
                </li>
            ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="New Item"
                />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
        </div>
    );
  }

  export default Items;