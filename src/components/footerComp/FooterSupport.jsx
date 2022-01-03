import React, { useEffect } from 'react';
import { getFooterData } from '../../data/data';

const footer = getFooterData();

const FooterSupport = ({ idValue, changeIdValue }) => {

  useEffect(() => {
    if (idValue === '') return;
    openFooterLink(`sup` + `${idValue}`);
  }, [idValue]);

  const openFooterLink = id => {
    let elem = document.getElementById(id);
    elem.scrollIntoView({block: 'center', behavior: 'smooth'});
    elem.classList.add('highlight-section');
    setTimeout(() => {
      elem.classList.remove('highlight-section');
    }, 2000);
    changeIdValue();
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
                  key={item.name + i}
                  className="support-section"
                  id={`sup` + `${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {
                    footerElem.header === 'Networks' ? null :
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.detail}</p>
                    </div>
                  }
                  {
                    item.icon !== undefined ?
                    <a href={item.link}>
                      <span>
                        <img src={item.icon} alt={item.name}/>
                      </span>
                      {item.name}
                    </a> : null
                  }
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
