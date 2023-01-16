import { useState, useEffect } from "react";
import "./App.css";

import ImageCart from "./components/ImageCart";

const App = () => {
  const [Images, setImages] = useState([]);
  const [search, setSearch] = useState("egg");
  const [isLoading, setIsLoading] = useState(true);

  //get api data
  const getDataFun = async () => {
    try {
      const request = await fetch(
        `https://pixabay.com/api/?key=${process.env.React_App_Image_Api_Key}&q=${search}&image_type=photo&pretty=true`
      );
      const response = await request.json();
      setImages(response.hits);
      setIsLoading(false);
    } catch (err) {
      console.log("Error :", err);
    }
  };

  useEffect(() => {
    getDataFun();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {Images.map((data) => (
            <ImageCart key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
