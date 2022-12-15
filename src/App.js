import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import './App.css';

import image1 from '../src/pexels-lisa-fotios-13592310.jpg';
import image2 from '../src/pexels-adam-ernster-7767973.jpg';
import image3 from '../src/pexels-q-hưng-phạm-5912965.jpg';
import image4 from '../src/pexels-tomas-anunziata-695476.jpg';

const images = [image1, image2, image3, image4];

function App() {

  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className="App">
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div className="inner"
         drag="x" 
         dragConstraints={{ right: 0, left: -width }} 
         initial={{x: 100}} 
         animate={{x: 0}}
         transition={{duration: 0.8}}>

          {images.map(image => (
            <motion.div className="item" key={image}>
              <img src={image} alt="Texto alt" />
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
