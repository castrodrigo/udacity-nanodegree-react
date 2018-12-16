import React from "react";
import PropTypes from "prop-types";
import ItemListEntry from "./ItemListEntry";

const ItemList = ({ items }) => {
  if (items.length === 0) {
    return <p className="items">No items added yet</p>;
  }

  return (
    <React.Fragment>
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => (
          <ItemListEntry item={item} index={index} />
        ))}
      </ol>
    </React.Fragment>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;
