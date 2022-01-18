import React from 'react';
import '../../../../css/stylesheet.scss';
import Card from './Card';

const DeviceSection = ({ data, cart, addToCartButton }) => {
  const deviceList = data.goods.devices.slice(0, 6);

  return (
    <div className="device-section">
      <div className="section-header">
        <h2>Devices</h2>
      </div>
      <div className="goods">
        <div className="products">
          {
            deviceList.map(item => (
              <Card
                key={item.key}
                cart={cart}
                item={item}
                path="devices"
                addToCartButton={addToCartButton}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default DeviceSection;
