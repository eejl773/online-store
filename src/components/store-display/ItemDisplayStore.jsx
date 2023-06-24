import { useState } from "react";
import ItemDisplayModal from "./ItemDisplayModal";
import useEditCart from "../../utils/useEditCart";
import image from "../../utils/noImage.svg";

const ItemDisplayStore = ({ item }) => {
  const [open, setOpen] = useState(false);

  const realPrice = item.onSale ? item.price - item.discount : item.price;
  const { addToCart } = useEditCart();

  const addOneToCart = () => {
    addToCart(item, 1);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="block w-[20vw] lg:w-[28vw] md:[44vw] sm:w-[70vw] border-[1px] border-blue-500 justify-center align-center p-3 bg-white">
      {item.clearance ? (
        <h3 className="font-bold headerbutton">
          <span>Clearance Item!</span>
        </h3>
      ) : item.onSale ? (
        <h3 className="font-bold salebutton">
          On Special! Save ${item.discount}
        </h3>
      ) : (
        <h3 className="font-bold dealbutton">Great Deal!</h3>
      )}
      <div className="flex justify-center align-center mt-3">
        <img
          src={item.imageUrl == "" ? image : item.imageUrl}
          className="max-w-[90%] border-[1px] border-blue-600"
        />
      </div>
      <div>
        <p>{item.name}</p>
        <br />
        {item.onSale ? (
          <p>
            <span className="font-bold">${realPrice}</span> <s>${item.price}</s>
          </p>
        ) : (
          <p>${item.price}</p>
        )}

        <br />
      </div>
      <button className="mx-2 altbutton" onClick={() => addOneToCart()}>
        Add to Cart
      </button>
      <button className="mx-2 altbutton" onClick={() => setOpen(true)}>
        Show More
      </button>
      <ItemDisplayModal open={open} close={closeModal} item={item} />
    </div>
  );
};

export default ItemDisplayStore;
