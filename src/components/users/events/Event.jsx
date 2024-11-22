import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Event.css";
const Event = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive:[
      {
        breakpoint: 642, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      }
    ]
  };

  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/27176219/pexels-photo-27176219/free-photo-of-young-woman-decorating-a-christmas-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Fullstack Meetup",
      description: "Date: 15th March, 2024 | Time: 10:00 AM | Venue: ECA24",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/10638069/pexels-photo-10638069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Cloud Engineers Kickstart",
      description: "Date: 20th April, 2024 | Time: 2:00 PM | Venue: ECB12",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "IoT Engineering Gossip Night",
      description: "Date: 10th May, 2024 | Time: 6:00 PM | Venue: AC13",
    },
  ];
  

  return (
    <div className="bg-gray-100 py-8 px-4 events-slide">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Event Highlights
        </h1>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-96">
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 w-full text-white p-4 rounded-b-lg overlay">
                <h2 className="text-lg font-semibold">{slide.caption}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Event;
