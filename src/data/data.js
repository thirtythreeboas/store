const data = {
  cardAd: [
    {
      key: 1,
      name: 'food',
      image: 'https://bizbi.ru/upload/iblock/15f/15f5381379d72998c4cd352dd9c9f9bc.jpg',
      description: 'Доставка вкуснейших бургеров. Большой ассортимент. Только качественные продукты. Закажи свои любимые бургеры. Бесплатная доставка от 500₽. Большой выбор. Скидки и Акции. Удобный самовывоз. Оплата картой.',
      link: null
    },
    {
      key: 2,
      name: 'sports',
      image: 'https://pic.sport.ua/images/news/0/11/162/orig_472501.jpg',
      description: 'Выгодные цены на товары каталога Спортивные товары. Большой выбор, фото, отзывы и отличный сервис. Доставка по всей России.',
      link: null
    },
    {
      key: 3,
      name: 'appliances',
      image: 'https://slon.fr/wp-content/uploads/2018/12/bt3.jpg',
      description: 'Бытовая техника, которая украсит ваш дом. Обустройство кухни. На чём из кухонной техники можно экономить, а на чём лучше не стоит.',
      link: null
    },
    {
      key: 4,
      name: 'bicycles',
      image: 'https://bikedivision.ru/upload/iblock/d68/d68eb6f74a27f9ce387df95d1ec1ae5f.jpg',
      description: 'Большой каталог велосипедов от ведущих мировых брендов: Merida, Stels, Trek, Giant, GT и др. Удобная система подбора велосипеда. Низкие цены.',
      link: null
    },
    {
      key: 5,
      name: 'phones',
      image: 'https://i2.wp.com/itc.ua/wp-content/uploads/2019/03/SmartPhones-2017.jpg',
      description: 'От простых кнопочных до мощных смартфонов-флагманов с огромными красочными экранами! Новейшие модели с официальной гарантией.',
      link: null
    },
    {
      key: 6,
      name: 'devices',
      image: 'https://avatars.mds.yandex.net/get-zen_doc/3842094/pub_5f3cdb90673058256b9df883_5f434e55a465d87826576bed/scale_1200',
      description: 'Продажа игровых аксессуаров для ПК с доставкой по Москве и России. Большой выбор девайсов для геймеров.',
      link: null
    }
  ],
  phones: [
    {
      name: 'Honor 7A 2/16GB',
      price: '399.99',
      inStock: 'In Stock',
      key: 1,
      image: 'https://avatars.mds.yandex.net/get-mpic/5246132/img_id5055934228263144482.jpeg/13hq',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/5246132/img_id5055934228263144482.jpeg/13hq',
        second: 'https://avatars.mds.yandex.net/get-mpic/4370207/img_id6218328203311287197.jpeg/13hq',
        third: 'https://avatars.mds.yandex.net/get-mpic/4291905/img_id2671307606923569889.jpeg/13hq',
        forth: 'https://avatars.mds.yandex.net/get-mpic/4606255/img_id7021684290459460151.jpeg/13hq'
      },
      description: {
        display: '5.7 inches, 83.8 cm2, 720 x 1440 pixels',
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
      name: 'Huawei Y7 2019 4/64GB',
      price: '499.99',
      inStock: 'In Stock',
      key: 2,
      image: 'https://avatars.mds.yandex.net/get-mpic/4785755/img_id7840847594304444858.jpeg/13hq',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/4785755/img_id7840847594304444858.jpeg/13hq',
        second: 'https://avatars.mds.yandex.net/get-mpic/4489193/img_id235919582977060552.jpeg/13hq',
        third: 'https://avatars.mds.yandex.net/get-mpic/4700988/img_id6502998691750910167.jpeg/13hq',
        forth: 'https://avatars.mds.yandex.net/get-mpic/4615588/img_id7532790175348256257.jpeg/13hq'
      },
      description: {
        display: '6.26 inches, 720 x 1520 pixels',
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
      name: 'Realme C3 3/64GB',
      price: '399.99',
      inStock: 'In Stock',
      key: 3,
      image: 'https://avatars.mds.yandex.net/get-mpic/4493022/img_id5874325384365794757.png/13hq',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/4493022/img_id5874325384365794757.png/13hq',
        second: 'https://avatars.mds.yandex.net/get-mpic/4076910/img_id1641836721899860894.jpeg/13hq',
        third: 'https://avatars.mds.yandex.net/get-mpic/4397006/img_id576522302334740959.png/13hq',
        forth: 'https://avatars.mds.yandex.net/get-mpic/4409630/img_id2510567404020018007.jpeg/13hq'
      },
      description: {
        display: '6.5 inches, 720 x 1600 pixels',
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
      name: 'Xiaomi Redmi 9A 2/32GB',
      price: '399.99',
      inStock: 'In Stock',
      key: 4,
      image: 'https://avatars.mds.yandex.net/get-mpic/4397559/img_id869388942241193601.jpeg/orig',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/4397559/img_id869388942241193601.jpeg/orig',
        second: 'https://avatars.mds.yandex.net/get-mpic/4120567/img_id7434448904958153352.jpeg/orig',
        third: 'https://avatars.mds.yandex.net/get-mpic/4944925/img_id5802912692559965472.jpeg/orig',
        forth: 'https://avatars.mds.yandex.net/get-mpic/4262452/img_id4805558764380941569.jpeg/orig'
      },
      description: {
        display: '6.53 inches, 720 x 1600 pixels',
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
      name: 'Xiaomi Poco M3 4/64GB',
      price: '499.99',
      inStock: 'In Stock',
      key: 5,
      image: 'https://avatars.mds.yandex.net/get-mpic/4407413/img_id270084422741371706.png/13hq',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/4407413/img_id270084422741371706.png/13hq',
        second: 'https://avatars.mds.yandex.net/get-mpic/4420180/img_id5832128456418388588.jpeg/13hq',
        third: 'https://avatars.mds.yandex.net/get-mpic/4119563/img_id8234333242767334817.jpeg/13hq',
        forth: 'https://avatars.mds.yandex.net/get-mpic/4493022/img_id6430725015181423757.jpeg/13hq'
      },
      description: {
        display: '6.53 inches, 1080 x 2340 pixels',
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
      name: 'Xiaomi Redmi 9C 2/32GB',
      price: '399.99',
      inStock: 'In Stock',
      key: 6,
      image: 'https://avatars.mds.yandex.net/get-mpic/5281967/img_id7870132339916138617.jpeg/orig',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/5281967/img_id7870132339916138617.jpeg/orig',
        second: 'https://avatars.mds.yandex.net/get-mpic/4397502/img_id2500405534715930773.png/orig',
        third: 'https://avatars.mds.yandex.net/get-mpic/1859594/img_id2307299940401585082.png/orig',
        forth: 'https://avatars.mds.yandex.net/get-mpic/4080967/img_id273108397724627722.png/orig'
      },
      description: {
        display: '6.53 inches, 720 x 1600 pixels',
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
      name: 'Vivo Y20 4/64GB',
      price: '499.99',
      inStock: 'In Stock',
      key: 7,
      image: 'https://avatars.mds.yandex.net/get-mpic/4076910/img_id7755812174927744139.jpeg/orig',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/4076910/img_id7755812174927744139.jpeg/orig',
        second: 'https://avatars.mds.yandex.net/get-mpic/3609127/img_id6403454602126498588.jpeg/orig',
        third: 'https://avatars.mds.yandex.net/get-mpic/4397502/img_id3643040488935184559.jpeg/orig',
        forth: 'https://avatars.mds.yandex.net/get-mpic/4415357/img_id5810286551325434740.jpeg/orig'
      },
      description: {
        display: '6.51 inches, 720 x 1600 pixels',
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
      name: 'Huawei P30 Lite 4/128GB',
      price: '599.99',
      inStock: 'In Stock',
      key: 8,
      image: 'https://avatars.mds.yandex.net/get-mpic/5312584/img_id2535131744047928162.jpeg/orig',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/5312584/img_id2535131744047928162.jpeg/orig',
        second: 'https://avatars.mds.yandex.net/get-mpic/5221807/img_id2437883094883809942.jpeg/orig',
        third: 'https://avatars.mds.yandex.net/get-mpic/5387588/img_id656414712097947860.jpeg/orig',
        forth: 'https://avatars.mds.yandex.net/get-mpic/4012096/img_id563900318856702947.jpeg/orig'
      },
      description: {
        display: '6.15 inches, 1080 x 2312 pixels',
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
      name: 'Apple iPhone 12 Pro Max 512GB',
      price: '1,323',
      inStock: 'In Stock',
      key: 9,
      image: 'https://avatars.mds.yandex.net/get-mpic/5256693/img_id6696909390469808896.png/orig',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/5256693/img_id6696909390469808896.png/orig',
        second: 'https://avatars.mds.yandex.net/get-mpic/5213758/img_id7608204717909578881.jpeg/orig',
        third: 'https://avatars.mds.yandex.net/get-mpic/1614201/img_id3641926334335410083.jpeg/orig',
        forth: 'https://avatars.mds.yandex.net/get-mpic/1704691/img_id9110368706403367547.jpeg/orig'
      },
      description: {
        display: '6.7 inches, 1284 x 2778 pixels',
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
      name: 'The Fall of the House of Usher',
      price: 24.76,
      inStock: 'In Stock',
      key: 1,
      image: 'https://m.media-amazon.com/images/I/51Pwv1+69fL.jpg',
      author: 'Edgar Allan Poe',
      coverType: 'Hardcover',
      language: 'English',
      publisher: 'Kessinger Publishing, LLC (September 10, 2010)',
      printLength: '34 pages',
      weight: '8.2 ounces',
      description: 'This scarce antiquarian book is a facsimile reprint of the original. Due to its age, it may contain imperfections such as marks, notations, marginalia and flawed pages. Because we believe this work is culturally important, we have made it available as part of our commitment for protecting, preserving, and promoting the world\'s literature in affordable, high quality, modern editions that are true to the original work.'
    },
    {
      name: 'Politics',
      price: 14.99,
      inStock: 'In Stock',
      key: 2,
      image: 'https://sun9-32.userapi.com/c858024/v858024458/202137/8i1Yx1UzIeA.jpg',
      author: 'Aristotle',
      coverType: 'Hardcover',
      language: 'English',
      publisher: 'University of Chicago Press; Second edition (March 29, 2013)',
      printLength: '318 pages',
      weight: 376,
      description: 'One of the fundamental works of Western political thought, Aristotle’s masterwork is the first systematic treatise on the science of politics. For almost three decades, Carnes Lord’s justly acclaimed translation has served as the standard English edition. Widely regarded as the most faithful to both the original Greek and Aristotle’s distinctive style, it is also written in clear, contemporary English. This new edition of the Politics retains and adds to Lord’s already extensive notes, clarifying the flow of Aristotle’s argument and identifying literary and historical references. A glossary defines key terms in Aristotle’s philosophical-political vocabulary. Lord has made revisions to problematic passages throughout the translation in order to enhance both its accuracy and its readability. He has also substantially revised his introduction for the new edition, presenting an account of Aristotle’s life in relation to political events of his time; the character and history of his writings and of the Politics in particular; his overall conception of political science; and his impact on subsequent political thought from antiquity to the present. Further enhancing this new edition is an up-to-date selected bibliography.'
    },
    {
      name: 'The Lover One',
      price: 29.99,
      inStock: 'In Stock',
      key: 3,
      image: 'https://images-na.ssl-images-amazon.com/images/I/91UOS0mzv9L.jpg',
      coverType: 'Hardcover',
      language: 'English',
      publisher: 'Little, Brown and Company; Reissue edition (December 11, 2012)',
      printLength: '160 pages',
      author: 'Evelyn Waugh',
      weight: '12 ounces',
      description: '"A work of art as rich and subtle and unnerving as anything its author has ever done" (New Yorker), The Loved One is Evelyn Waugh\'s cutting satire of 1940s California and the Anglo-American cultural divide. Following the death of a friend, the poet and pets\' mortician Dennis Barlow finds himself entering the artificial Hollywood paradise of the Whispering Glades Memorial Park. Within its golden gates, death, American-style, is wrapped up and sold like a package holiday--and Dennis gets drawn into a bizarre love triangle with Aimée Thanatogenos, a naïve Californian corpse beautician, and Mr. Joyboy, a master of the embalmer\'s art. Waugh\'s dark and savage satire depicts a world where reputation, love, and death cost a very great deal.'
    },
    {
      name: 'Tractatus Logico-Philosophicus',
      price: 36.99,
      inStock: 'In Stock',
      key: 4,
      image: 'https://images-na.ssl-images-amazon.com/images/I/81-pZAlvFrL.jpg',
      author: 'Ludwig Wittgenstein',
      coverType: 'Hardcover',
      language: 'English',
      publisher: 'Cosimo Classics (July 1, 2010)',
      printLength: '116 pages',
      weight: '10.1 ounces',
      description: 'Austrian philosopher LUDWIG WITTGENSTEIN (1889-1951) was hugely influential on 20th-century philosophy, and here, he constructs a series of carefully and precisely numbered propositions on the relationship between language, logic, and reality, using a numbering system to show nested relationships between the propositions. Considered one of the major recent works of philosophy-a reputation enhanced, undoubtedly, by Bertrand Russell\'s glowing introduction-this edition is a reproduction of the translation by C.K. Ogden, first published in 1922, for which Wittgenstein himself assisted in the preparation of the English-language manuscript. Students of philosophy and those fascinated by the history of ideas will want a copy of this essential volume.'
    },
    {
      name: 'The Pickwick Papers',
      price: '16.00',
      inStock: 'In Stock',
      key: 5,
      image: 'https://images-na.ssl-images-amazon.com/images/I/918aG25s4OL.jpg',
      author: 'Charles Dickens',
      coverType: 'Hardcover',
      language: 'English',
      publisher: 'Everyman\'s Library; Second Printing edition (March 2, 1999)',
      printLength: '976 pages',
      weight: '1.88 pounds',
      description: 'In this classic social commentary from Dickens, Mr. Samuel Pickwick, retired business man and confirmed bachelor, is determined that after a quiet life of enterprise the time has come to go out into the world. Together with the other members of the Pickwick Club: Tracy Tupman, Augustus Snodgrass and Nathaniel Winkle, the portly innocent embarks on a series of hilariously comic adventures. But can Pickwick retain his good will towards his fellow humans once he discovers the evils of the world? Charles Dickens’s satirical masterpiece, The Pickwick Papers, catapulted the young writer into literary fame when it was first serialized in 1836–37. It recounts the rollicking adventures of the members of the Pickwick Club as they travel about England getting into all sorts of mischief. Laugh-out-loud funny and endlessly entertaining, the book also reveals Dickens’s burgeoning interest in the parliamentary system, lawyers, the Poor Laws, and the ills of debtors’ prisons. As G. K. Chesterton noted, “Before [Dickens] wrote a single real story, he had a kind of vision . . . a map full of fantastic towns, thundering coaches, clamorous market-places, uproarious inns, strange and swaggering figures. That vision was Pickwick.”'
    },
    {
      name: 'Justine, or the Misfortunes of Virtue',
      price: 14.41,
      inStock: 'In Stock',
      key: 6,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51ZLZVOtALL.jpg',
      author: 'Marquis de Sade',
      coverType: 'Hardcover',
      language: 'English',
      publisher: 'Oxford University Press; 1st edition (January 20, 2013)',
      printLength: '320 pages',
      weight: '7.5 ounces',
      description: 'This is the first new translation in over forty years of Sade\'s novel Justine. It is also the first ever critical edition, based on the original 1791 version of the story, which is the most accessible and artistically successful of the three versions. The novel tells the story of the beautiful and devout Justine, whose steadfast faith and naive trust destine her from the outset for sexual exploitation and martyrdom. The unending catalog of disasters that befall her, during which she is subject to any number of perverse practices, illustrate Sade\'s belief in the primacy of Nature over civilization. Virtue is no match for vice, and as criminality and violence triumph, Justine is doomed to suffer. Indeed, the novel mounts a ferocious physical and intellectual assault on absolute notions of good and evil.'
    },
    {
      name: 'Doctor Zhivago',
      price: 5.22,
      inStock: 'In Stock',
      key: 7,
      image: 'https://images-na.ssl-images-amazon.com/images/I/91Io6DMt2aL.jpg',
      author: 'Boris Pasternak',
      coverType: 'Hardcover',
      language: 'English',
      publisher: 'Pantheon; First American Edition (October 19, 2010)',
      printLength: '544 pages',
      weight: '1.99 pounds',
      description: 'Boris Pasternak’s widely acclaimed novel comes gloriously to life in a magnificent new translation by Richard Pevear and Larissa Volokhonsky, the award-winning translators of War and Peace and Anna Karenina, and to whom, The New York Review of Books declared, “the English-speaking world is indebted.” First published in Italy in 1957 amid international controversy—the novel was banned in the Soviet Union until 1988, and Pasternak declined the Nobel Prize a year later under intense pressure from Soviet authorities—Doctor Zhivago is the story of the life and loves of a poet-physician during the turmoil of the Russian Revolution. Taking his family from Moscow to what he hopes will be shelter in the Ural Mountains, Zhivago finds himself instead embroiled in the battle between the Whites and the Reds. Set against this backdrop of cruelty and strife is Zhivago’s love for the tender and beautiful Lara: pursued, found, and lost again, Lara is the very embodiment of the pain and chaos of those cataclysmic times.'
    }
  ],
  devices: [
    {
      name: 'SteelSeries Sensei Ten Gaming Mouse',
      key: 1,
      price: '69.99',
      category: 'mouse',
      image: 'https://avatars.mds.yandex.net/get-mpic/4785755/img_id526613460347728971.jpeg/orig',
      connectivity: 'USB',
      brand: 'SteelSeries',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/4785755/img_id526613460347728971.jpeg/orig',
        second: 'https://avatars.mds.yandex.net/get-mpic/4591438/img_id9144763632161816568.jpeg/orig',
        third: 'https://avatars.mds.yandex.net/get-mpic/5344732/img_id9014836154007738978.jpeg/orig',
        forth: 'https://avatars.mds.yandex.net/get-mpic/5216721/img_id877419183552811329.jpeg/orig'
      }
    },
    {
      name: 'Razer DeathAdder Essential Gaming Mouse',
      price: '499.00',
      key: 2,
      category: 'mouse',
      image: 'https://avatars.mds.yandex.net/get-mpic/4937511/img_id9212416177376599465.png/orig',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/4937511/img_id9212416177376599465.png/orig',
        second: 'https://avatars.mds.yandex.net/get-mpic/5235182/img_id4879390711653309652.png/orig',
        third: 'https://avatars.mds.yandex.net/get-mpic/466729/img_id7202292276164415452.jpeg/orig',
        forth: 'https://avatars.mds.yandex.net/get-mpic/397397/img_id6558507476773557858.jpeg/orig'
      }
    },
    {
      name: 'Defender Cyber Gaming Mouse',
      price: '19.99',
      key: 3,
      category: 'mouse',
      image: 'https://avatars.mds.yandex.net/get-mpic/4334746/img_id1158350333054399525.png/orig',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/4334746/img_id1158350333054399525.png/orig',
        second: 'https://avatars.mds.yandex.net/get-mpic/4591438/img_id9111288546134167834.png/orig',
        third: 'https://avatars.mds.yandex.net/get-mpic/4346078/img_id8624635255325977215.png/orig',
        forth: 'https://avatars.mds.yandex.net/get-mpic/4012150/img_id6148298840820930424.png/orig'
      }
    },
    {
      name: 'Монитор Xiaomi Mi Monitor 1C',
      price: '10 990',
      category: 'monitor',
      key: 4,
      image: 'https://cdn1.ozone.ru/s3/multimedia-b/wc1200/6036183107.jpg'
    },
    {
      name: 'Монитор BenQ BL2480',
      price: '9 748',
      category: 'monitor',
      key: 5,
      image: 'https://cdn1.ozone.ru/s3/multimedia-d/wc1200/6023235421.jpg'
    },
    {
      name: 'Монитор Samsung Odyssey G5 C34G55TWWI',
      price: '50 990',
      category: 'monitor',
      key: 6,
      image: 'https://cdn1.ozone.ru/s3/multimedia-6/wc1200/6058213302.jpg'
    },
    {
      name: 'Планшет Samsung Galaxy Tab A7',
      price: '19 980',
      category: 'tablet',
      key: 7,
      image: 'https://cdn1.ozone.ru/s3/multimedia-2/wc1200/6069174398.jpg'
    },
    {
      name: 'Планшет Huawei MatePad T 10s',
      price: '16 980',
      category: 'tablet',
      key: 8,
      image: 'https://cdn1.ozone.ru/s3/multimedia-d/wc1200/6032119681.jpg'
    },
    {
      name: 'Беспроводные наушники Xiaomi Redmi Airdots',
      price: '6 990',
      category: 'headphone',
      key: 9,
      image: 'https://nowatermark.ozone.ru/s3/multimedia-d/wc1200/6016914577.jpg'
    },
    {
      name: 'Игровые наушники с подсветкой - Kotion Each - G2000 Синие',
      price: '3 490',
      category: 'headphone',
      key: 10,
      image: 'https://cdn1.ozone.ru/s3/multimedia-j/wc1200/6069419611.jpg'
    },
    {
      name: 'Игровая клавиатура проводная Redragon Hara RU',
      price: '3 990',
      category: 'keyboard',
      key: 11,
      image: 'https://cdn1.ozone.ru/s3/multimedia-k/wc1200/6000073892.jpg'
    },
    {
      name: 'Ноутбук HP Laptop 14s-fq0018ur',
      price: '23 690',
      category: 'laptop',
      key: 12,
      image: 'https://cdn1.ozone.ru/s3/multimedia-8/wc1200/6064489508.jpg'
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

export function getPhoneData(val) {
  return data.phones.find(
    // replace method removes forward slashes in name prop to match url
    item => item.name.replace(/\//g, '') === val
  );
}

export function getBooksData(val) {
  return data.books.find(
    item => item.name === val
  );
}

export function getMiceData(val) {
  return data.devices.find(
    item => item.name === val
  );
}
