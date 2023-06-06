import React from 'react';
import { render } from '@testing-library/react';
import { ColorDots } from '../index';

describe('Rendering color dots', () => {
  test('Rendering all color dots', () => {
    const colors = ['#e8e8e8', '#FF0000', '#00FF00', '#0000FF', '#ABCDEF'];
    const { container } = render(<ColorDots caption='Caption' colors={colors} colorChangeHandler={() => {}} />);
    const colorItems = container.getElementsByClassName('colorDotItem');
    expect(colorItems.length).toBe(colors.length);
  });
});
