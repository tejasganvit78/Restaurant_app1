import React from "react";

const Restaurant_Menu = [
  {
    name: "Pizza",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    cusines: ["Pizza ", "vilage-pizza"],
    address: "Patali faliyu,Chondha",
    rating: "4.3 rating",
  },
  {
    name: "Burger",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1a046d76c79482f2551c1bca6dbd44cd",
    cusines: ["Burger ", " Fast Food"],
    address: "Patali faliyu,Chondha",
    rating: "4.3 rating",
  },
  {
    name: "Chinese",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/z2kiqvp5lylcgmiwhkfa",
    cusines: ["Manchurian ", "Chinese"],
    address: "Patali faliyu,Chondha",
    rating: "4.3 rating",
  },
];

const Restaurant = (props) => {
  return (
    <div
      className="card"
      style={{
        
        margin: "10px",
        borderRadius: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0,2)",
      }}
    >
      <img src={props.Restaurant_Menu.image} alt="food" style={{ borderRadius: "20px" ,height:'15rem' ,width:'15rem'}} />

      
        <h3 className="card-title">{props.Restaurant_Menu.name}</h3>
        <h5 className="card-text">{props.Restaurant_Menu.cusines}</h5>
        <p className="card-text">{props.Restaurant_Menu.address}</p>
        <h4 className="text-success">{props.Restaurant_Menu.rating}</h4>
      
    </div>
  );
};

const Body = () => {
  return (
    <div style={{ marginTop: "150px" }} className="d-flex flex-wrap ">
      {Restaurant_Menu.map((restaurant, index) => (
        <Restaurant key={index} Restaurant_Menu={restaurant} />
      ))}
    </div>
  );
};

export default Body;
