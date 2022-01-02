import React, { useEffect } from 'react';
import { getFooterData } from '../../data/data';

const footer = getFooterData();

const FooterSupport = ({ idValue, setIdValue }) => {

  useEffect(() => {
    if (idValue === '') return;
    openFooterLink(`sup` + `${idValue}`);
    setIdValue('');
  }, [idValue]);

  const openFooterLink = id => {
    let elem = document.getElementById(id);
    elem.scrollIntoView({block: 'center', behavior: 'smooth'});
    elem.classList.add('highlight-section');
    setTimeout(() => {
      elem.classList.remove('highlight-section');
    }, 2000);
  }


  return (
    <div className="support-main">
      {
        footer.map((footerElem, i) => (
          <div
            key={footerElem.id}
            id={footerElem.id}
            className="support-container">
            <h4>{footerElem.header}</h4>
            {
              Object.values(footerElem.sections).map((item, i) => (
                <div
                  key={item + i}
                  className="support-section"
                  id={`sup` + `${item.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  <h4>{item}</h4>
                  <p>{footerElem.description}</p>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default FooterSupport;
