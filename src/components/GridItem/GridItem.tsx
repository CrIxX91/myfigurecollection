import { Figure } from '../../interface/figure.interface';
import { MutableRefObject, RefObject, useEffect, useRef, useState } from 'react';
import useObserver from '../../hooks/useObserver';

interface itemProps{
    fig:Figure;
}



export const GridItem = ({fig}:itemProps) => {
  const ref = useRef(null);
  const onScreen = useObserver(ref,{rootMargin:'100px'});
  console.log(onScreen);

  // const [showImage, setShowImage] = useState(false);
  // const placeHolderRef = useRef(null);

  // const ref = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       console.log(entry);

  //       if (entry.isIntersecting) {
  //         //do your actions here
  //         console.log('It works!')
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0.1
  //     }
  //   );
  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }
  // }, [ref]);
  
  return (
    <>
    <div className="aug-glow grid-element" >
        <div ref={ref} data-augmented-ui="tl-clip-x tr-clip-x r-clip-y bl-clip" className="augborder"  style={{ backgroundImage: `url(${fig.img})` }} >
            {/* <h5 className="core-head">{fig.name}</h5> */}
        </div>
    </div>
    </>
    
  )
}
