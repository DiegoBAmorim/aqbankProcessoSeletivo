import React from 'react';
import {iconsMap} from './iconsMap';

interface CountriesIconProps {
  type: keyof typeof iconsMap;
}

export function CountriesIcon({type}: CountriesIconProps) {
  const Icon = iconsMap[type];

  if (Icon) {
    return <Icon />;
  }
}
