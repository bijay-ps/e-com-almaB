import { useState } from "react";

const Product = () => {
  const [price, setPrice] = useState(0);
  const info = {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  };
  const handleClickAdd = () => {
    setPrice((prevCount) => prevCount + 1);
  };
  const handleClickSub = () => {
    setPrice((prevCount) => {
      if (prevCount === 0) {
        return 0;
      }
      return prevCount - 1;
    });
  };

  return (
    <div>
      <div className="col-md-6">
        <img src={info.image} alt={info.title} height="100px" width="100px" />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{info.category}</h4>
        <h1 className="display-5">{info.title}</h1>
        <p className="lead fw-bolder">
          Rating {info.rating && info.rating.rate}
        </p>
        <h3 className="display-6 fw-bold my-4">$ {info.price}</h3>
        <p className="lead">{info.description}</p>
        <div className="container d-flex justify-content-evenly p-2 ">
          <button onClick={handleClickAdd}>+</button>
          <div>
            {price * info.price} ${" "}
            {price === 0 ? true : <div>for {price} items</div>}
          </div>
          <button onClick={handleClickSub}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
