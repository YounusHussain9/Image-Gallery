import { useState, useEffect } from "react";

import ImageCart from "./components/ImageCart";
import SearchImage from "./components/SearchImage";

const App = () => {
  const [Images, setImages] = useState([]);
  const [search, setSearch] = useState("");
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
  }, [search]);

  return (
    <>
      <SearchImage searchValue={(text) => setSearch(text)} />
      <div className="container mx-auto">
        {!isLoading && Images.length === 0 && (
          <h1 className="text-2xl font-mono flex justify-center">
            No Image Found
          </h1>
        )}

        {isLoading ? (
          <h1 className="text-2xl font-mono flex justify-center">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {Images.map((data) => (
              <ImageCart key={data.id} data={data} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
