/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react';
import SearchForm from './index';

test('loads and displays greeting', async () => {
    render(<SearchForm />)  
  
    expect(screen.getByTestId('search_input')).toBeInTheDocument()
  })