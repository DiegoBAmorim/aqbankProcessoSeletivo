import React from 'react';
import {iconsMap} from './iconsMap';

interface IconProps {
  type: keyof typeof iconsMap;
  style?: {color: string};
}

export function Icons({type, style}: IconProps) {
  const Icon = iconsMap[type];

  if (Icon) {
    return <Icon style={style} />;
  }
}
