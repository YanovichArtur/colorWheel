import React, { MouseEvent, useCallback, useMemo, useState } from 'react';
import './index.scss';

type ColorWheelProps = {
  caption: string;
  colors: Array<string>;
  colorChangeHandler: (color: string) => void;
}

export const ColorWheel: React.FC<ColorWheelProps> = ( {caption, colors, colorChangeHandler } ) => {
  const [hoveredColor, setHoveredColor] = useState<string>('');
  const [checkedColor, setCheckedColor] = useState<string>('');

  const onClickColorHandler = useCallback((color: string) => {
    return () => {
      colorChangeHandler(color);
      setCheckedColor(color);
    }
  }, [colorChangeHandler, setCheckedColor]);

  const onMouseEnterColorHandler = useCallback((color: string) => {
    return () => {
      setHoveredColor(color);
    }
  }, [colorChangeHandler]);

  const onMouseLeaveColorHandler = useCallback(() => {
    return () => {
      setHoveredColor('');
    }
  }, [setHoveredColor]);

  const isActive = useCallback((color: string) => {
    if (hoveredColor) {
      return hoveredColor === color;
    } else {
      return checkedColor === color;
    }
  }, [hoveredColor, checkedColor]);

  const renderColors = useMemo(() => {
    if (colors.length === 1) {
      return (
        <div
          onClick={onClickColorHandler(colors[0])}
          onMouseEnter={onMouseEnterColorHandler(colors[0])}
          onMouseLeave={onMouseLeaveColorHandler()}
          className={`colorWheelItemSingle ${isActive(colors[0]) ? 'active' : ''}`}
          id={colors[0]}
          style={{backgroundColor: colors[0]}}>
        </div>
      );
    } else if (colors.length === 2) {
      return colors.map((color, index) => {
        return (
          <div
            onClick={onClickColorHandler(color)}
            onMouseEnter={onMouseEnterColorHandler(color)}
            onMouseLeave={onMouseLeaveColorHandler()}
            className={`colorWheelItemDouble ${isActive(color) ? 'active' : ''}`}
            key={color}
            id={color}
            style={{backgroundColor: color, transform: `rotate(${360/colors.length * index}deg)`}}>
          </div>
        );
      });
    } else if (colors.length === 3) {
      return colors.map((color, index) => {
        return (
          <div
            onClick={onClickColorHandler(color)}
            onMouseEnter={onMouseEnterColorHandler(color)}
            onMouseLeave={onMouseLeaveColorHandler()}
            className={`colorWheelItemTriple ${isActive(color) ? 'active' : ''}`}
            key={color}
            id={color}
            style={{backgroundColor: color, transform: `rotate(${360/colors.length * index}deg) skewY(${360/colors.length + 90}deg)`}}>
          </div>
        );
      });
    } else {
      return colors.map((color, index) => {
        return (
          <div
            onClick={onClickColorHandler(color)}
            onMouseEnter={onMouseEnterColorHandler(color)}
            onMouseLeave={onMouseLeaveColorHandler()} 
            className={`colorWheelItem ${isActive(color) ? 'active' : ''}`}
            key={color}
            id={color}
            style={{backgroundColor: color, transform: `rotate(${360/colors.length * index}deg) skewY(${360/colors.length + 90}deg)`}}>
          </div>
        );
      })
    }

  }, [colors, hoveredColor, checkedColor]);

  return (
    <div className="colorWheelMainContainer">
      <div className="colorWheelCaption">
        {caption}
      </div>
      {colors && colors.length ? (
        <div className="colorWheelExternalDiv">
          {renderColors}
          <div className="borderShapeDiv"></div>
          <div className="centerShapeDiv"></div>
          <div className="centerInfoDiv">
            <div className="centerShapeDivCaption">Color</div>
            <div className="centerShapeDivtext">
              {hoveredColor || checkedColor}
            </div>
          </div>
        </div>
      ) : (
        <div className="colorWheelNoColors">No colors</div>
      )}
    </div>
  );
}
