/* eslint-disable no-undef */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import ButtonCompo from './index';


test('Button are clicked', async () => {
    render(<ButtonCompo />)  
    
    const button = screen.getByTestId('button_test', {name: 'setSelected'});
    fireEvent.click(button);
  })