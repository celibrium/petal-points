import React, {useState} from 'react';

function Items({ listId, items, addItem, deleteItem, toggleComplete, modifyItem }) {
    const [itemName, setItemName] = useState("");
  
    const handleAddItem = () => {
      if (itemName.trim()) {
        addItem(listId, itemName);
        setItemName("");
      }
    };
  
    return (
      <div>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "5px 0",
              }}
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(listId, item.id)}
              />
              <span style={{ flex: 1, marginLeft: "10px" }}>
                {item.name} {item.completed && `(Completed on: ${item.date})`}
              </span>
              <div style={{ display: "flex", gap: "5px" }}>
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