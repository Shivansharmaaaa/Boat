import React, { useState, useEffect } from 'react';
import { Image, Button } from '@chakra-ui/react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const Slideanimation = () => {
  const images = ['/eb2.jpeg', '/eb3.jpeg', '/eb1.jpeg', 'eb12.jpeg', 'eb13.jpeg', 'eb3.jpeg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', transition: 'transform 0.5s', transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} w='100%' h='100%' objectFit='cover' />
        ))}
      </div>
      <Button onClick={goToPreviousSlide} position='absolute' top='50%' left='0' transform='translateY(-50%)'>
        <IoIosArrowDropleftCircle />
      </Button>
      <Button onClick={goToNextSlide} position='absolute' top='50%' right='0' transform='translateY(-50%)'>
        <IoIosArrowDroprightCircle />
      </Button>
    </div>
  );
};

export default Slideanimation;