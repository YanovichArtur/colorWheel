import React, { MouseEvent, useCallback, useState } from 'react';
import './index.scss';

type ColorDotsProps = {
  colors: Array<string>;
  caption: string;
  colorChangeHandler: (color: string) => void;
}

export const ColorDots: React.FC<ColorDotsProps> = ({ caption, colors, colorChangeHandler }) => {
  const [checkedColor, setCheckedColor] = useState<string>('');

  const onClickColorHandler = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLDivElement;
    colorChangeHandler(target.id);
    setCheckedColor(target.id);
  }, [colorChangeHandler, setCheckedColor]);

  return (
    <div className="colorDotsMainContainer" onClick={onClickColorHandler}>
      <div className="colorWheelCaption">
        {caption}
      </div>
      <div className="colorDotsContainer">
        {colors.map((color) => {
          return (
            <div key={color} className={`colorDotItemContainer ${checkedColor === color ? 'active' : ''}`}>
              <div id={color} className="colorDotItem" style={{backgroundColor: color}}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}