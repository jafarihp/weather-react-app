import React, { useRef, useState, useEffect } from "react";

import useTitle from "../components/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "./Search.css";
import toast, { Toaster } from "react-hot-toast";
import InfoIcon from "../assets/img/icon/Info.svg";
import loadingGif from "../assets/img/loading.gif";

const apiKey = "6ade73b579deac95f6cd38ae077cc7ec";

const Search = () => {
  useTitle("جستجو");

  const inputRef = useRef("");
  const [apiData, setApiData] = useState("");
  const [spinner, setSpinner] = useState(false);

  const searchCity = async (e) => {
    e.preventDefault();
    setSpinner(true);
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${apiKey}`;
    axios
      .get(URL)
      .then((data) => {
        SuccessNotify();
        setApiData(data);
        setSpinner(false);
        {
          inputRef.current.value = "";
        }
      })
      .catch((err) => {
        ErrorNotify();
        setSpinner(false);
        {
          inputRef.current.value = "";
        }
      });
  };

  // Success
  const SuccessNotify = () =>
    toast.success(`اطلاعات آب و هوای شهر ${inputRef.current.value} پیدا شد`);
  // Error
  const ErrorNotify = () =>
    toast.error(`شهر ${inputRef.current.value} پیدا نشد مجدد تلاش کنید`);

  // Date Builder
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="SearchContainer"
      data-aos="fade-down"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="SearchTitle">
        <h2>نام شهر خود را وارد کنید</h2>
        <p class="tooltip">
          <div>
            <img src={InfoIcon} alt="info icon" />
          </div>
          <span class="tooltiptext">
            در صورت عدم دریافت اطلاعات و بروز خطا لطفا از فیلترشکن استفاده کنید.
          </span>
        </p>
      </div>
      <div className="SearchBox">
        <input
          type="text"
          className="search-bar"
          placeholder="نام شهر ..."
          ref={inputRef}
        />
        <button onClick={searchCity} type="submit">
          {spinner ? (
            <>
              <img src={loadingGif} alt="loading gif" /> جستجو
            </>
          ) : (
            "پیدا کن"
          )}
        </button>
      </div>

      {apiData && (
        <div
          className="SearchData"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div className="DataDescription">
            <img
              src={`https://openweathermap.org/img/w/${apiData.data.weather[0]["icon"]}.png`}
              alt="icon"
            />
            <p>{apiData.data.weather[0].description}</p>
          </div>

          <div>
            <p className="temp">{Math.round(apiData.data.main.temp)}°c</p>
            <h3>{`${apiData.data.name}, ${apiData.data.sys.country}`}</h3>
            <p>{dateBuilder(new Date())}</p>
          </div>
        </div>
      )}

      {/* <Toaster
        toastOptions={{
          style: {
            border: "1px solid #f4f4f4",
            fontFamily: "Vazir",
            fontSize: "1.5rem",
          },
        }}
      /> */}
    </div>
  );
};

export default Search;
