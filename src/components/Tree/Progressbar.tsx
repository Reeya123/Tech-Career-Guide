import React from 'react';
import {Progress } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectProgress } from '../home/home.selector';

export const Progressbar = () => {
  const progressValue = useSelector(selectProgress)
  return (
    <Progress hasStripe value={progressValue} />
    )
};