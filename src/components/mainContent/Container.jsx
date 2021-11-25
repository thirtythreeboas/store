import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../../css/stylesheet.scss';
import Slider from './slider/Slider';
import Card from './Card';
import Content from './content/Сontent';
import ProductPage from './goods/ProductPage';


const Container = ({data,  windowWidth}) => {

  return (
    <div className="main-container" style={{marginBottom: '50px'}}>
      <div className="container-comp-css">
        <Slider/>
        <div className="goods">
          <div className="showCards">
            {data.cardAd.map((section, i) => (
                <Card
                  key={section.key}
                  section={section}
                />
            ))}
          </div>
          <Content
            data={data}
            windowWidth={windowWidth}
          >
            <Switch>
              {
                data.phones.map(i => (
                  <Route to=":nameId" component={ProductPage} />
                ))
              }
            </Switch>
          </Content>
        </div>
      </div>
    </div>
  );
}

export default Container;
