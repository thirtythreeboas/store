const data = {
  cardAd: [
    {
      key: 1,
      name: 'Еда',
      image: 'https://bizbi.ru/upload/iblock/15f/15f5381379d72998c4cd352dd9c9f9bc.jpg',
      description: 'Доставка вкуснейших бургеров. Большой ассортимент. Только качественные продукты. Закажи свои любимые бургеры. Бесплатная доставка от 500₽. Большой выбор. Скидки и Акции. Удобный самовывоз. Оплата картой.',
      link: null
    },
    {
      key: 2,
      name: 'Спорт',
      image: 'https://pic.sport.ua/images/news/0/11/162/orig_472501.jpg',
      description: 'Выгодные цены на товары каталога Спортивные товары. Большой выбор, фото, отзывы и отличный сервис. Доставка по всей России.',
      link: null
    },
    {
      key: 3,
      name: 'Бытовая техника',
      image: 'https://slon.fr/wp-content/uploads/2018/12/bt3.jpg',
      description: 'Бытовая техника, которая украсит ваш дом. Обустройство кухни. На чём из кухонной техники можно экономить, а на чём лучше не стоит.',
      link: null
    },
    {
      key: 4,
      name: 'Велосипеды',
      image: 'https://bikedivision.ru/upload/iblock/d68/d68eb6f74a27f9ce387df95d1ec1ae5f.jpg',
      description: 'Большой каталог велосипедов от ведущих мировых брендов: Merida, Stels, Trek, Giant, GT и др. Удобная система подбора велосипеда. Низкие цены.',
      link: null
    },
    {
      key: 5,
      name: 'Телефоны',
      image: 'https://i2.wp.com/itc.ua/wp-content/uploads/2019/03/SmartPhones-2017.jpg',
      description: 'От простых кнопочных до мощных смартфонов-флагманов с огромными красочными экранами! Новейшие модели с официальной гарантией.',
      link: null
    },
    {
      key: 6,
      name: 'Девайсы',
      image: 'https://avatars.mds.yandex.net/get-zen_doc/3842094/pub_5f3cdb90673058256b9df883_5f434e55a465d87826576bed/scale_1200',
      description: 'Продажа игровых аксессуаров для ПК с доставкой по Москве и России. Большой выбор девайсов для геймеров.',
      link: null
    }
  ],
  phones: [
    {
      key: 1,
      image: 'https://avatars.mds.yandex.net/get-mpic/1361544/img_id2422915895010770552.jpeg/9hq',
      price: '7 490',
      name: 'Honor 7A 2/16GB',
      display: '5.7 inches, 83.8 cm2, 720 x 1440 pixels',
      description: {
        ram: '2 GB',
        internalStorage: '16 GB',
        supportedMemoryCard: 'microSD',
        primaryCamera: '13 MP Rear Camera',
        batteryCapacity: '3020 mAh',
        processorType: 'Qualcomm MSM8937 Snapdragon 430 (28 nm)',
        simType: '2 (nano Sim)',
        operatingSystem: 'Android 8.0 (Oreo), EMUI 8',
        remoteConnection: 'Wi-Fi, Bluetooth 4.2',
        internet: '4G/LTE',
        weight: '150 g'
      }
    },
    {
      key: 2,
      image: 'https://cdn1.ozone.ru/s3/multimedia-n/wc1200/6019810931.jpg',
      price: '10 490',
      name: 'Huawei Y7 2019 4/64GB',
      display: '6.26 inches, 720 x 1520 pixels',
      description: {
        ram: '4 GB',
        internalStorage: '64 GB',
        supportedMemoryCard: 'microSD',
        primaryCamera: '13 MP',
        batteryCapacity: '4000 mAh',
        processorType: 'Qualcomm SDM450 Snapdragon 450 (14 nm)',
        simType: '2 (nano Sim)',
        operatingSystem: 'Android 8.1 (Oreo), EMUI 8.2',
        remoteConnection: 'Wi-Fi, Bluetooth 4.2',
        internet: '4G/LTE',
        weight: '168 g'
      }
    },
    {
      key: 3,
      image: 'https://cdn1.ozone.ru/s3/multimedia-f/wc1200/6012395823.jpg',
      price: '10 490',
      name: 'Realme C3 3/64GB',
      display: '6.5 inches, 720 x 1600 pixels',
      description: {
        ram: '3 GB',
        internalStorage: '64 GB',
        supportedMemoryCard: 'microSD',
        primaryCamera: '12 MP',
        batteryCapacity: '5000 mAh',
        processorType: 'Mediatek Helio G70 (12 nm)',
        simType: '2 (nano Sim)',
        operatingSystem: 'Android 10, Realme UI',
        remoteConnection: 'Wi-Fi, Bluetooth 5.0',
        internet: '4G/LTE',
        weight: '195 g'
      }
    },
    {
      key: 4,
      image: 'https://cdn1.ozone.ru/s3/multimedia-1/wc1200/6019317889.jpg',
      price: '8 480',
      name: 'Xiaomi Redmi 9A 2/32GB',
      display: '6.53 inches, 720 x 1600 pixels',
      description: {
        ram: '2 GB',
        internalStorage: '32 GB',
        supportedMemoryCard: 'microSD',
        primaryCamera: '13 MP',
        batteryCapacity: '5000 mAh',
        processorType: 'MediaTek MT6762G Helio G25 (12 nm)',
        simType: '2 (nano Sim)',
        operatingSystem: 'Android 10, MIUI 12',
        remoteConnection: 'Wi-Fi, Bluetooth 5.0',
        internet: '4G/LTE',
        weight: '196 g'
      }
    },
    {
      key: 5,
      image: 'https://cdn1.ozone.ru/s3/multimedia-8/wc1200/6033444620.jpg',
      price: '12 480',
      name: 'Xiaomi Poco M3 4/64GB',
      display: '6.53 inches, 1080 x 2340 pixels',
      description: {
        ram: '4 GB',
        internalStorage: '64 GB',
        supportedMemoryCard: 'microSD',
        primaryCamera: '48 MP',
        batteryCapacity: '6000 mAh',
        processorType: 'Qualcomm SM6115 Snapdragon 662 (11 nm)',
        simType: '2 (nano Sim)',
        operatingSystem: 'Android 10, MIUI 12',
        remoteConnection: 'Wi-Fi, Bluetooth 5.0',
        internet: '4G/LTE',
        weight: '198 g'
      }
    },
    {
      key: 6,
      image: 'https://cdn1.ozone.ru/s3/multimedia-y/wc1200/6020628034.jpg',
      price: '8 284',
      name: 'Xiaomi Redmi 9C 2/32GB',
      display: '6.53 inches, 720 x 1600 pixels',
      description: {
        ram: '2 GB',
        internalStorage: '32 GB',
        supportedMemoryCard: 'microSD',
        primaryCamera: '13 MP',
        batteryCapacity: '5000 mAh',
        processorType: 'MediaTek MT6765G Helio G35 (12 nm)',
        simType: '2 (nano Sim)',
        operatingSystem: 'Android 10, MIUI 12',
        remoteConnection: 'Wi-Fi, Bluetooth 5.0',
        internet: '4G/LTE',
        weight: '196 g'
      }
    },
    {
      key: 7,
      image: 'https://cdn1.ozone.ru/s3/multimedia-k/wc1200/6027038432.jpg',
      price: '12 119',
      name: 'Vivo Y20 4/64GB',
      display: '6.51 inches, 720 x 1600 pixels',
      description: {
        ram: '4 GB',
        internalStorage: '64 GB',
        supportedMemoryCard: 'microSD',
        primaryCamera: '13 MP',
        batteryCapacity: '5000 mAh',
        processorType: 'Qualcomm SM4250 Snapdragon 460 (11 nm)',
        simType: '2 (nano Sim)',
        operatingSystem: 'Android 10, Funtouch 10.5',
        remoteConnection: 'Wi-Fi, Bluetooth 4.2',
        internet: '4G/LTE',
        weight: '192.3 g'
      }
    },
    {
      key: 8,
      image: 'https://cdn1.ozone.ru/s3/multimedia-s/wc1200/6016959628.jpg',
      price: '15 842',
      name: 'Huawei P30 Lite 4/128GB',
      display: '6.15 inches, 1080 x 2312 pixels',
      description: {
        ram: '4 GB',
        internalStorage: '128 GB',
        supportedMemoryCard: 'microSD',
        primaryCamera: '48 MP',
        batteryCapacity: '3340 mAh',
        processorType: 'Kirin 710 (12 nm)',
        simType: '2 (nano Sim)',
        operatingSystem: 'Android 9.0 (Pie)',
        remoteConnection: 'Wi-Fi, Bluetooth 4.2',
        internet: '4G/LTE',
        weight: '159 g'
      }
    },
    {
      key: 9,
      image: 'https://images.macrumors.com/article-new/2020/10/iphone12prodesignback.jpg',
      price: '92 990',
      name: 'Apple iPhone 12 Pro Max 512GB',
      display: '6.7 inches, 1284 x 2778 pixels',
      description: {
        ram: '6 GB',
        internalStorage: '512 GB',
        supportedMemoryCard: 'No',
        primaryCamera: '12 MP',
        batteryCapacity: '3687 mAh',
        processorType: 'Apple A14 Bionic (5 nm)',
        simType: '1 (nano Sim)',
        operatingSystem: 'iOS 14.1, upgradable to iOS 15.1',
        remoteConnection: 'Wi-Fi, Bluetooth 5.0',
        internet: '5G/LTE',
        weight: '228 g'
      }
    }
  ],
  books: [
    {
      amount: 0,
      addToFav: false,
      showDesc: false,
      displaySearch: true,
      key: 1,
      image: 'https://sun2.43222.userapi.com/ree3cok8nwqROMoT1-Hj3mdXxC4A_PEubPbTqQ/hv2JHgr9mkY.jpg',
      name: 'Падение дома Ашеров',
      author: 'Эдгар Аллан По',
      weight: 193,
      price: 203,
      description: 'Эдгар Аллан По - человек ослепительного таланта. Его перу принадлежит более семидесяти новелл, обусловивших возникновение многих литературных школ. Основоположник детективного жанра и жанра научной фантастики, замечательный поэт, критик и журналист, Эдгар По вот уже более полутора столетий остается одним из самых читаемых авторов в мире.В настоящий том вошли наиболее известные произведения классика американской литературы.'
    },
    {
      amount: 0,
      addToFav: false,
      showDesc: false,
      displaySearch: true,
      key: 2,
      image: 'https://sun9-32.userapi.com/c858024/v858024458/202137/8i1Yx1UzIeA.jpg',
      name: 'Политика | Аристотель',
      author: 'Аристотель',
      weight: 495,
      price: 532,
      description: 'Настоящее издание включает в себя одну из вершин античной политической мысли - трактат Аристотеля "Политика", в котором обобщены и систематизированы знания, относящиеся к самым разным областям общественной жизни. Перевод текста, предисловие и завершающий книгу очерк, в котором подробно и с привлечением большого количества редких и ценных источников анализируется развитие античной политической мысли, принадлежат перу выдающегося русского историка, академика Сергея Александровича Жебелева, который провел эту работу для издания "Политики" 1911 года. Текст Аристотеля снабжен подробными комментариями, подготовленными известным русским историком и филологом-классиком Аристидом Ивановичем Доватуром.'
    },
    {
      amount: 0,
      addToFav: false,
      showDesc: false,
      displaySearch: true,
      key: 3,
      image: 'https://sun9-65.userapi.com/c858532/v858532072/1aed1f/F0Yo2rv6HIg.jpg',
      name: 'Возвращение в Брайдсхед. Незабвенная',
      author: 'Ивлин Во',
      weight: 342,
      price: 425,
      description: '"Возвращение в Брайдсхед" (1944) - одна из величайших книг прошлого столетия. Она входит в список 100 лучших англоязычных романов ХХ века по версии издательства "Modern Library", дважды экранизирована и переведена на все ведущие языки мира. История непростых отношений художника Чарльза Райдера с представителями эксцентричной аристократической семьи Флайт. История дружбы и ее утраты, любви и предательства, веры и фанатизма. Но прежде всего - это история заката эпохи "золотых двадцатых" с ее беззаботной жизнью, роскошными поместьями и шумными вечеринками. "Незабвенная" (1948). Смерть лучшего друга приводит Денниса Барлоу в похоронную фирму "Шелестящий дол". Здесь скорбящих называют Ждущими Своего Часа, а покойников - Незабвенными. Здесь смерть принимает различные обличья, а преподносят ее как рождественский подарок. И именно здесь Деннис влюбляется в Эме Танатогенос, сотрудницу "Шелестящего дола". Но очень скоро их отношения, поначалу идеальные, начинают развиваться в весьма...'
    },
    {
      amount: 0,
      addToFav: false,
      showDesc: false,
      displaySearch: true,
      key: 4,
      image: 'https://img3.labirint.ru/rc/8c43ac31b135e0f697561e19398144b2/220x340/books64/635073/cover.jpg?1564083827',
      name: 'Логико-философский трактат',
      author: 'Витгенштейн Людвиг',
      weight: 250,
      price: 369,
      description: 'Людвиг Витгенштейн - британский философ австрийского происхождения, один из самых оригинальных мыслителей европейской философии ХХ века, создатель теории построения искусственного "идеального" языка, основанного на языке математической логики.Текст "Логико-философского трактата" едва ли можно назвать объемным, однако трудно переоценить его значимость для всей последующей европейской философии, и краткость в данном случае говорит лишь о том, насколько сжато, четко и точно Витгенштейн формулировал свою мысль. Семь коротких тезисов и чуть больше сотни страниц комментариев к ним… но в этот минимальный объем Витгенштейн сумел вместить перевод на философский язык всех главных идей логического анализа. "В начале было Слово", - гласит Библия, и если это так, то Витгенштейн был одним из самых преданных учеников Логоса.'
    },
    {
      amount: 0,
      addToFav: false,
      showDesc: false,
      displaySearch: true,
      key: 5,
      image: 'https://static.my-shop.ru/product/3/130/1295924.jpg',
      name: 'Посмертные записки Пиквикского клуба',
      author: 'Диккенс Чарльз',
      weight: 410,
      price: 171,
      description: 'Почитаемый во всем мире Чарльз Диккенс всегда пользовался признанием и в России. Своим любимым писателем его называл Ф.М. Достоевский. Л.Н. Толстой ставил романы Диккенса в первый ряд мировой литературы, отмечая присущие им значительность содержания, мастерство формы, искренность и "нравственное отношение автора к предмету". Все эти качества в полной мере относятся и к роману "Посмертные записки Пиквикского клуба", который вышел в свет отдельным изданием в 1837 году и сразу же сделал автора знаменитым. Веселый, остроумный, полный великолепного английского юмора роман о клубе смешных, симпатичных джентльменов, путешествующих по стране, многие годы является одной из любимых книг читателей всего мира.'
    },
    {
      amount: 0,
      addToFav: false,
      showDesc: false,
      displaySearch: true,
      key: 6,
      image: 'https://cdn1.ozone.ru/multimedia/wc1200/1013420559.jpg',
      name: 'Жюстина, или Несчастья добродетели',
      author: 'Маркиз де Сад',
      weight: 235,
      price: 300,
      description: 'Маркиз де Сад (Донасьен Альфонс Франсуа де Сад) - одна из наиболее скандальных персон в истории мировой литературы и культуры в целом. Роман "Жюстина, или Несчастья добродетели" - первое произведение де Сада, опубликованное при его жизни, в 1791 году, без указания имени автора. "Жюстина" - один из самых знаменитых откровенных романов фривольного XVIII века. Эта книга заставляет невольно содрогнуться: добродетель обречена на страдания, а порок торжествует.'
    },
    {
      amount: 0,
      addToFav: false,
      showDesc: false,
      displaySearch: true,
      key: 7,
      image: 'https://kniga.lv/wp-content/uploads/2020/04/itd000000000595799_cover1.jpg',
      name: 'Доктор Живаго',
      author: 'Борис Пастернак',
      weight: 440,
      price: 140,
      description: 'Роман "Доктор Живаго" - одно из выдающихся произведений русской литературы, на протяжении долгих лет остававшееся закрытым для широкого круга читателей в нашей стране, знавших о нем только по скандальной и недобросовестной партийной критике. Незащищенность и бессмертие творческой личности, интеллигента и художника в переломные моменты жизни нашего народа - центральная тема итоговой книги лауреата Нобелевской премии Бориса Леонидовича Пастернака (1890-196О). Судьба романа, судьба его автора и ткань самого произведения неразрывны в восприятии сегодняшнего читателя.'
    }
  ],
  devices: [
    {
      key: 1,
      category: 'mouse',
      image: 'https://images.g2a.com/newlayout/470x470/1x1x0/79dadaacedc7/5f31078e46177c2d481ccdc2',
      price: '5 999',
      name: 'Игровая мышь SteelSeries Sensei Ten'
    },
    {
      key: 2,
      category: 'mouse',
      image: 'https://cdn1.ozone.ru/s3/multimedia-g/wc1200/6068706412.jpg',
      price: '2 490',
      name: 'Игровая мышь Razer DeathAdder Essential'
    },
    {
      key: 3,
      category: 'mouse',
      image: 'https://cdn1.ozone.ru/s3/multimedia-9/wc1200/6049982265.jpg',
      price: '279',
      name: 'Игровая мышь Defender Cyber'
    },
    {
      key: 4,
      category: 'monitor',
      image: 'https://cdn1.ozone.ru/s3/multimedia-b/wc1200/6036183107.jpg',
      price: '10 990',
      name: 'Монитор Xiaomi Mi Monitor 1C'
    },
    {
      key: 5,
      category: 'monitor',
      image: 'https://cdn1.ozone.ru/s3/multimedia-d/wc1200/6023235421.jpg',
      price: '9 748',
      name: 'Монитор BenQ BL2480'
    },
    {
      key: 6,
      category: 'monitor',
      image: 'https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6058213302.jpg',
      price: '50 990',
      name: 'Монитор Samsung Odyssey G5 C34G55TWWI'
    },
    {
      key: 7,
      category: 'keyboard',
      image: 'https://cdn1.ozone.ru/s3/multimedia-k/wc1200/6000073892.jpg',
      price: '3 990',
      name: 'Игровая клавиатура проводная Redragon Hara RU'
    },
    {
      key: 8,
      category: 'laptop',
      image: 'https://cdn1.ozone.ru/s3/multimedia-8/wc1200/6064489508.jpg',
      price: '23 690',
      name: 'Ноутбук HP Laptop 14s-fq0018ur'
    },
    {
      key: 9,
      category: 'tablet',
      image: 'https://cdn1.ozone.ru/s3/multimedia-2/wc1200/6069174398.jpg',
      price: '19 980',
      name: 'Планшет Samsung Galaxy Tab A7'
    },
    {
      key: 10,
      category: 'tablet',
      image: 'https://cdn1.ozone.ru/s3/multimedia-d/wc1200/6032119681.jpg',
      price: '16 980',
      name: 'Планшет Huawei MatePad T 10s'
    },
    {
      key: 11,
      category: 'headphone',
      image: 'https://nowatermark.ozone.ru/s3/multimedia-d/wc1200/6016914577.jpg',
      price: '6 990',
      name: 'Беспроводные наушники Xiaomi Redmi Airdots'
    },
    {
      key: 12,
      category: 'headphone',
      image: 'https://cdn1.ozone.ru/s3/multimedia-j/wc1200/6069419611.jpg',
      price: '3 490',
      name: 'Игровые наушники с подсветкой - Kotion Each - G2000 Синие'
    }
  ],
  footer: [
    {
      header: 'О нас',
      sectionOne: 'Контакты',
      sectionTwo: 'Бред',
      sectionThree: 'Рквизиты',
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
  ],
}

export function getData() {
  return data;
};

export function getPhoneData(name) {
  return data.phones.find(
    item => item.key === name
    // item => item.name.replace(/\s/g, '').toLowerCase() === name
  );
}
