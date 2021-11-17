import React, { useState } from 'react';
import '../../css/stylesheet.scss'

const Footer = ({footerData, header}) => {

  const [footer, setFooter] = useState([
    {
      header: 'О нас',
      sectionOne: 'Контакты',
      sectionTwo: 'Бренд',
      sectionThree: 'Реквизиты',
      sectionFour: 'Вакансии'
    },
    {
      header: 'Услуги',
      sectionOne: 'Ваши товары',
      sectionTwo: 'Стать поставщиком',
      sectionThree: 'Реферальная программа',
      sectionFour: 'Реклама'
    },
    {
      header: 'Сети',
      sectionOne: 'Вконтакте',
      sectionTwo: 'Телеграм',
      sectionThree: 'Инстаграм',
      sectionFour: 'Твиттер'
    },
    {
      header: 'Помощь',
      sectionOne: 'Как сделать заказ',
      sectionTwo: 'Доставка',
      sectionThree: 'Оплата',
      sectionFour: 'Безопасность'
    }
  ]);


  return (
      <ul className="footer">
        {
          Object.values(footerData).map((section, i) => (
            <li key={i}><a href="">{section}</a></li>
          ))
        }
      </ul>
  )
}

export default Footer;
