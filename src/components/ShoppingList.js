import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchList, setSearchList] = useState("");
  const [allItems, setAllItems] = useState(items);

  function handleItemFormSubmit(newItem) {
    setAllItems([...allItems, newItem]);
  }

  function handleSearchChange(event) {
    setSearchList(event.target.value.toLowerCase());
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter items based on selectedCategory and searchList
  const filteredItems = allItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  // Implement search functionality here if needed
  const itemsToDisplay = filteredItems.filter((item) => {
    return item.name.toLowerCase().includes(searchList.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
        onSearchChange={handleSearchChange}
        search={searchList}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
