/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react';
import CardTrackComp from './index';

test('All elements are renderes', async () => {
    render(<CardTrackComp />)  
    
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(screen.getByTestId('card_track')).toBeInTheDocument();
    expect(screen.getByTestId('title_track')).toBeInTheDocument();
    expect(screen.getByTestId('artist_track')).toBeInTheDocument();
  })