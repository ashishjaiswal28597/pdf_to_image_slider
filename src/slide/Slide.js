// import React, { useState } from 'react';
// import './style.css'

// const Slide = ({ src }) => (
//   <img src={src} className="slide" alt="" />
// );

// const Image = ({ src, isActive, index, onClick }) => (
//   <div className={`image-container ${isActive ? 'active' : ''}`} onClick={onClick} >
//     <img src={src} className="image" alt="" />
//   </div>
// );

// const App = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const slides = [
//     {
//       title: 'Introduction',
//       content: 'Welcome to my pitch deck!',
//       image: 'https://picsum.photos/400/300?image=0',
//     },
//     {
//       title: 'Problem Statement',
//       content: 'There is a problem in the industry that needs to be solved.',
//       image: 'https://picsum.photos/400/300?image=1',
//     },
//     {
//       title: 'Solution',
//       content: 'Our product offers a solution to this problem.',
//       image: 'https://picsum.photos/400/300?image=2',
//     },
//     {
//       title: 'Business Model',
//       content: 'Our business model is sustainable and profitable.',
//       image: 'https://picsum.photos/400/300?image=3',
//     },
//   ];

//   const handleImageClick = (index) => {
//     setCurrentSlide(index);
//     setScrollPosition(index * 120);
//   };

//   const handleNextClick = () => {
//     const nextSlide = currentSlide + 1;
//     if (nextSlide === slides.length) return;
//     setCurrentSlide(nextSlide);
//     setScrollPosition(nextSlide * 120);
//   };

//   const handlePrevClick = () => {
//     const prevSlide = currentSlide - 1;
//     if (prevSlide < 0) return;
//     setCurrentSlide(prevSlide);
//     setScrollPosition(prevSlide * 120);
//   };

//   return (
//     <div className="App">
//       <Slide src={slides[currentSlide].image} />
//       <div className='flex_slid'>
//       <div className="arrow prev" onClick={handlePrevClick}>
//         <i className="fas fa-arrow-left"> Left</i>
//       </div>
//       <div className="arrow next" onClick={handleNextClick}>
//         <i className="fas fa-arrow-right"> Right</i>
//       </div>
//       </div>

//       <div className="images" >
//         {slides.map((slide, index) => (

//           <Image
//             key={slide.title}
//             src={slide.image}
//             isActive={index === currentSlide}
//             index={index}
//             onClick={() => handleImageClick(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;





import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Slide = () => {
  const settings = {
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
        <Slider {...settings}>
        {
            <div >
              {images.map((image, index) => (
                <div
                  key={index}
                  // style={{ 
                    
                  //   width: "20%",
                  //   height: "100%",
                  //   padding: "5px 10px"
                  //  }}
                >
                  <img
                    id="image-generated"
                    src={image}
                    alt="pdfImage"
                     style={{ 
                      width: "100%",
                      height: "100%",
                      margin: "0",
                      border: "1px solid black",
                    }}
                  />
                </div>
              ))}
            </div>
          }
        </Slider>
    </div>
  )
}

export default Slide