import React, {useState} from 'react';
import Items from "../components/Items";

function TaskList() {

    const [lists, setLists] = useState([]);
    const [listName, setListName] = useState("");

    const addList = () => {
        if (listName.trim()) {
            setLists([...lists, {id: lists.length + 1,  name: listName, items: []}]);
            setListName(""); // reset listName
        }
    }

    const deleteList = (listId) => {
        setLists(lists.filter((list) => list.id !== listId))
    }

    const addItem = (listId, itemName) => {
        setLists((prev) =>
          prev.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  items: [
                    ...list.items,
                    { id: list.items.length, name: itemName, completed: false, date: null },
                  ],
                }
              : list
          )
        );
      };
    
      const deleteItem = (listId, itemId) => {
        setLists((prev) =>
          prev.map((list) =>
            list.id === listId
              ? { ...list, items: list.items.filter((item) => item.id !== itemId) }
              : list
          )
        );
      };
    
      const toggleComplete = (listId, itemId) => {
        setLists((prev) =>
          prev.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  items: list.items.map((item) =>
                    item.id === itemId
                      ? {
                          ...item,
                          completed: !item.completed,
                          date: !item.completed ? new Date().toLocaleString() : null,
                        }
                      : item
                  ),
                }
              : list
          )
        );
      };
    
      const modifyItem = (listId, itemId, newName) => {
        setLists((prev) =>
          prev.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  items: list.items.map((item) =>
                    item.id === itemId ? { ...item, name: newName } : item
                  ),
                }
              : list
          )
        );
      };
    
    return (
        <div>
        <h1>Task Lists</h1>
        <div>
            <input
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            placeholder="New List Name"
            />
            <button onClick={addList}>Add List</button>
        </div>
        {lists.map((list) => (
            <div key={list.id}>
            <h2>
                {list.name}
            </h2>
            <Items
            listId={list.id}
            items={list.items}
            addItem={addItem}
            deleteItem={deleteItem}
            toggleComplete={toggleComplete}
            modifyItem={modifyItem}
            />
            <button onClick={() => deleteList(list.id)}>Delete List</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;