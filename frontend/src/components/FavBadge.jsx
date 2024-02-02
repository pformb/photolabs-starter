import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';
import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist}  selected={true}/>
    </div>
  ) 
};

export default FavBadge;