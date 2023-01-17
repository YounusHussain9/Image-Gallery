import React from "react";

const ImageCart = ({ data }) => {
  const tags = data.tags.split(",");
  return (
    <div className="px-11 py-5">
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-auto">
        <h1 className="text-3xl font-bold underline">
          <img className="w-full" src={data.webformatURL} />
        </h1>

        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl">{data.user}</div>

          <ul className="my-2">
            <li>
              <strong className="text-green-500">Views : </strong>
              {data.views}
            </li>

            {/* //////////////// */}

            <li>
              <strong className="text-blue-700">Downloads : </strong>
              {data.downloads}
            </li>

            {/* //////////////// */}
            <li>
              <strong className="text-orange-400">Likes : </strong>
              {data.likes}
            </li>
          </ul>

          <div className="px-1 py-4">
            {tags.map((tag, id) => (
              <span
                key={id}
                className="text-black-290 rounded-full  px-3 py-1 bg-gray-200 inline-block text-sm text-gray-700 mr-1 mt-1 font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCart;
