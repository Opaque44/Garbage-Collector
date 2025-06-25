import React from "react";
import { CardComponent } from "../../../components/ui/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const GarbagePost = () => {
  const data = [
    {
      img: "https://images.unsplash.com/flagged/photo-1572213426852-0e4ed8f41ff6?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Plastic Waste in Rivers",
      description:
        "A large accumulation of plastic waste polluting a major river.",
    },
    {
      img: "https://images.unsplash.com/photo-1618580298796-8c681e026369?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FyYmFnZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Overflowing Landfill",
      description:
        "A landfill site filled to capacity with household and industrial waste.",
    },
    {
      img: "https://images.unsplash.com/photo-1620250404922-bffa1823fce3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhcmJhZ2V8ZW58MHx8MHx8fDA%3D",
      title: "Ocean Garbage Patch",
      description:
        "Plastic bottles and containers floating in the middle of the ocean.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661964003668-f499e888f1b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FyYmFnZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Urban Street Waste",
      description:
        "Piles of garbage dumped on city streets, blocking walkways.",
    },
    {
      img: "https://source.unsplash.com/400x300/?recycling,bin",
      title: "Recycling Efforts",
      description:
        "Properly sorted recycling bins helping to manage urban waste.",
    },
    {
      img: "https://source.unsplash.com/400x300/?dumpyard",
      title: "Local Dumpyard",
      description: "A view of an unregulated dumpyard near a residential area.",
    },
    {
      img: "https://source.unsplash.com/400x300/?wasteburning",
      title: "Waste Burning Pollution",
      description: "Toxic smoke arising from burning plastic waste.",
    },
    {
      img: "https://source.unsplash.com/400x300/?garbage,animal",
      title: "Animals Feeding on Waste",
      description: "Street animals foraging in open garbage piles.",
    },
    {
      img: "https://source.unsplash.com/400x300/?electronic,waste",
      title: "E-Waste Hazard",
      description: "Discarded electronics creating toxic waste in landfills.",
    },
    {
      img: "https://source.unsplash.com/400x300/?construction,waste",
      title: "Construction Site Waste",
      description: "Building materials and rubble abandoned on roadsides.",
    },
    {
      img: "https://source.unsplash.com/400x300/?garbage,overflow",
      title: "Overflowing Garbage Bin",
      description: "Trash spilling out of a public waste container.",
    },
    {
      img: "https://source.unsplash.com/400x300/?garbage,collection",
      title: "Garbage Collection Truck",
      description:
        "A municipal truck collecting household waste from the street.",
    },
    {
      img: "https://source.unsplash.com/400x300/?garbage,canal",
      title: "Polluted Canal",
      description: "Solid waste clogging a drainage canal in a slum area.",
    },
    {
      img: "https://source.unsplash.com/400x300/?plastic,bags",
      title: "Plastic Bag Pollution",
      description: "Plastic bags littering the roadside after a storm.",
    },
    {
      img: "https://source.unsplash.com/400x300/?garbage,recycling",
      title: "Community Recycling Drive",
      description: "Local residents participating in a neighborhood clean-up.",
    },
    {
      img: "https://source.unsplash.com/400x300/?waste,segregation",
      title: "Waste Segregation Effort",
      description: "Different colored bins placed for waste segregation.",
    },
    {
      img: "https://source.unsplash.com/400x300/?garbage,forest",
      title: "Garbage Dumped in Forest",
      description: "Illegally dumped garbage found in a remote forest area.",
    },
    {
      img: "https://source.unsplash.com/400x300/?compost",
      title: "Compost Facility",
      description: "Organic waste being converted into compost.",
    },
    {
      img: "https://source.unsplash.com/400x300/?toxic,waste",
      title: "Toxic Industrial Waste",
      description: "Chemical waste leaking into the soil near a factory.",
    },
    {
      img: "https://source.unsplash.com/400x300/?garbage,dump",
      title: "Village Garbage Dump",
      description: "Waste piled in an open area near a small village.",
    },
  ];
  //console.log(data[0].img);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-3/4 max-w-7xl m-auto px-4">
      <Slider {...settings}>
        {data.map((item, index) => (
          <CardComponent key={index} data={item} />
        ))}
      </Slider>
    </div>
  );
};

export default GarbagePost;
