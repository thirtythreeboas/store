import React, { useEffect } from 'react';
import { getFooterData } from '../../data/data';

const footer = getFooterData();

const FooterSupport = ({ sectionScroll, idValue }) => {

  const openFooterLink = () => {
    sectionScroll.current.scrollIntoView({block: 'center', behavior: 'smooth'});
    let elem = document.getElementById(idValue);
    elem.classList.add('highlight-section');
    setTimeout(() => {
      elem.classList.remove('highlight-section');
    }, 2000);
  }

  useEffect(() => {
    if (idValue === '') return;
    openFooterLink(idValue)
  }, [idValue]);

  return (
    <div className="support-main">
      {
        footer.map((footerElem, i) => (
          <div key={footerElem.id} id={footerElem.id} className="support-container">
            <h4>{footerElem.header}</h4>
            {
              Object.values(footerElem.sections).map((item, i) => (
                <div
                  ref={sectionScroll}
                  key={item + i}
                  className="support-section"
                  id={item.replace(/\s+/g, '-').toLowerCase()}
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
