import React from 'react';
import { getFooterData } from '../../data/data';

const footer = getFooterData();

const FooterSupport = () => {
    return (
      <div className="support-main">
        {
          footer.map((item, i) => (
            <div key={i} id={item.id} className="support-container">
              <h2>{item.sections.header}</h2>
              <div className="support-section">
                <h4
                  id={item.sections.sectionOne.replace(/\s+/g, '-').toLowerCase()}
                >
                  {item.sections.sectionOne}</h4>
                <p>{item.description}</p>
              </div>
              <div className="support-section">
                <h4
                  id={item.sections.sectionTwo.replace(/\s+/g, '-').toLowerCase()}
                >
                  {item.sections.sectionTwo}</h4>
                <p>{item.description}</p>
              </div>
              <div className="support-section">
                <h4
                  id={item.sections.sectionThree.replace(/\s+/g, '-').toLowerCase()}
                >
                  {item.sections.sectionThree}</h4>
                <p>{item.description}</p>
              </div>
              <div className="support-section">
                <h4
                  id={item.sections.sectionFour.replace(/\s+/g, '-').toLowerCase()}
                >
                  {item.sections.sectionFour}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    )
}

export default FooterSupport;
