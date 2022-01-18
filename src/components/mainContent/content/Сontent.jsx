import React from 'react';
import '../../../css/stylesheet.scss';
import PhoneSection from './contentComponents/PhoneSection';
import BookSection from './contentComponents/BookSection';
import DeviceSection from './contentComponents/DeviceSection';

const Content = ({ data, addToCartButton, cart }) => {
  return (
    <div className="goods-container">
      <PhoneSection
        data={data}
        cart={cart}
        addToCartButton={addToCartButton}
      />
      <BookSection
        data={data}
        cart={cart}
        addToCartButton={addToCartButton}
      />
      <DeviceSection
        data={data}
        cart={cart}
        addToCartButton={addToCartButton}
      />
    </div>
  );
}

export default Content;
