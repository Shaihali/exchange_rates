import { useSelector } from 'react-redux';
import treadmill from './treadmill.module.css';
import { useEffect, useRef } from 'react';

export function Treadmill() {
  const state = useSelector(state => state.symbols);
  const symbolsArray = Object.entries(state);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const spanElements = marqueeElement.querySelectorAll('span');

    let distance = -300;
    let speed = 5;
  
    const totalWidth = Array.from(spanElements).reduce(
      (acc, spanElement) => acc + spanElement.offsetWidth,
      0
    );

    const marqueeAnimation = () => {
      distance -= speed;
      marqueeElement.style.transform = `translateX(${distance}px)`;

      if (distance < -totalWidth) {
        distance = -300;
        marqueeElement.style.transform = `translateX(${distance}px)`;
      }

      requestAnimationFrame(marqueeAnimation);
    };

    marqueeAnimation();

    return () => {
      cancelAnimationFrame(marqueeAnimation);
    };
  }, []);

  return (
    <div className={treadmill.marquee} ref={marqueeRef}>
      {symbolsArray.map((item, index) => (
        <span key={index}>{`${item[0]}: '${item[1]}'`}</span>
      ))}
    </div>
  );
}