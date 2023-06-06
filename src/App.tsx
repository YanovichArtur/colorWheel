import React, { useCallback, useState } from 'react';
import { ColorWheel } from './components/ColorWheel';
import { ColorDots } from './components/ColorDots';
import { useWindowWidth } from './hooks/windowWidthHook';
import './App.scss';

export const App = () => {
  const [color, setColor] = useState<string>('#FFFFFF');
  const windowWidth = useWindowWidth();

  const colors = [
    'rgb(68, 23, 32)', 'rgb(126, 81, 9)', '#a6947c', '#ece7de', '#f7f5d2', '#fbfbef', '#eecaca',
    '#fee1de', '#ffffff', '#f2f2f2', '#747273', '#4b4e53', '#1c1c1c', '#28382e', '#6c7465',
    '#72958d', '#cbf5f1', '#8fb2b8', '#232732', 'rgb(38, 59, 96)', 'rgb(13, 55, 122)',
    'rgb(99, 125, 165)', 'rgb(128, 165, 200)', 'rgb(155, 168, 184)', 'rgb(212, 225, 233)'
  ];

  const colorChangeHandler = useCallback((currentColor: string) => {
    setColor(currentColor || '#FFFFFF');
  }, [setColor]);

  return (
    <main>
      <div className={`colorPickerContainer ${windowWidth > 730 ? '' : 'vertical'}`}>
        <div className="colorSection" style={{backgroundColor: color}}></div>
        {windowWidth > 730 ? 
          <ColorWheel caption='Color Wheel Caption' colors={colors} colorChangeHandler={colorChangeHandler}/> : 
          <ColorDots caption='Color Wheel Caption' colors={colors} colorChangeHandler={colorChangeHandler} />}       
      </div>
    </main>
  );
};
