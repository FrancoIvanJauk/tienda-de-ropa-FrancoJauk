import React from "react";
import ItemCount from './ItemCount';
import Item from './Item'

function ItemListContainer(){
    return(
        <div>
        <Item/>
        <ItemCount/>
        </div>
    )
};

export default ItemListContainer;