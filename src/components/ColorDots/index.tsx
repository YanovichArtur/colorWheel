import React, { MouseEvent, useCallback, useState } from 'react';
import './index.scss';

type ColorDotsProps = {
  colors: Array<string>;
  caption: string;
  colorChangeHandler: (color: string) => void;
}

export const ColorDots: React.FC<ColorDotsProps> = ({ caption, colors, colorChangeHandler }) => {
  const [checkedColor, setCheckedColor] = useState<string>('');

  const onClickColorHandler = useCallback((color: string) => {
    return () => {
      colorChangeHandler(color);
      setCheckedColor(color);
    }
  }, [colorChangeHandler, setCheckedColor]);

  return (
    <div className="colorDotsMainContainer">
      <div className="colorWheelCaption">
        {caption}
      </div>
      <div className="colorDotsContainer">
        {colors.map((color) => {
          return (
            <div key={color} className={`colorDotItemContainer ${checkedColor === color ? 'active' : ''}`} onClick={onClickColorHandler(color)} >
              <div id={color} className="colorDotItem" style={{backgroundColor: color}}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}