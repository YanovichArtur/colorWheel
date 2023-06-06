import React from 'react';
import { render } from '@testing-library/react';
import { ColorWheel } from '../index';

describe('Rendering all counts of color', () => {
  test('Rendering one color', () => {
    const colors = ['#e8e8e8'];
    const { container } = render(<ColorWheel caption='Caption' colors={colors} colorChangeHandler={() => {}} />);
    const colorItems = container.getElementsByClassName('colorWheelItemSingle');
    expect(colorItems.length).toBe(colors.length);
  });
  test('Rendering two colors', () => {
    const colors = ['#e8e8e8', '#FF0000'];
    const { container } = render(<ColorWheel caption='Caption' colors={colors} colorChangeHandler={() => {}} />);
    const colorItems = container.getElementsByClassName('colorWheelItemDouble');
    expect(colorItems.length).toBe(colors.length);
  });
  test('Rendering three colors', () => {
    const colors = ['#e8e8e8', '#FF0000', '#00FF00'];
    const { container } = render(<ColorWheel caption='Caption' colors={colors} colorChangeHandler={() => {}} />);
    const colorItems = container.getElementsByClassName('colorWheelItemTriple');
    expect(colorItems.length).toBe(colors.length);
  });
  test('Rendering more than 3 colors', () => {
    const colors = ['#e8e8e8', '#FF0000', '#00FF00', '#0000FF', '#ABCDEF'];
    const { container } = render(<ColorWheel caption='Caption' colors={colors} colorChangeHandler={() => {}} />);
    const colorItems = container.getElementsByClassName('colorWheelItem');
    expect(colorItems.length).toBe(colors.length);
  });
});
