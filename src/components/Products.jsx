import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/products.css";
import SinglePage from "./SinglePage";

function Products() {
  const [data, setData] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [filters, setfilters] = useState(false);

  useEffect(() => {
    handleGetData();
  }, [setData]);

  const handleGetData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 3.3,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handleFilter = (name) => {
    setfilters(!!name);

    let newData;
    if (!name) {
      // If "All" is selected, show all products
      newData = data;
    } else {
      // Filter products based on the selected category
      newData = data.filter((e) => e.category === name);
    }
    setfilterData(newData);
  };

  return (
    <div className="productpage">
      <div className="newproducts">New products</div>
      <div className="underline"></div>
      <div className="displaydata">
        <div className="category">
          <p onClick={() => handleFilter()}>All</p>
          <p onClick={() => handleFilter("electronics")} name="electronics">
            Electronics
          </p>
          <p onClick={() => handleFilter("jewelery")} name="jewelery">
            Jewelry
          </p>
          <p
            onClick={() => handleFilter("men's clothing")}
            name="men's clothing"
          >
            Men's clothing
          </p>
          <p
            onClick={() => handleFilter("women's clothing")}
            name="women's clothing"
          >
            Women's clothing
          </p>
        </div>

        <div className="apidata">
          <Slider {...settings}>
            {!filters
              ? data.map((el) => {
                  return <SinglePage {...el} />;
                })
              : filterData && filterData.map((e) => <SinglePage {...e} />)}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Products;
