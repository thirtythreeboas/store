const data = {
  goods: [
    {
      key: 5,
      name: 'phones',
      image: 'https://i2.wp.com/itc.ua/wp-content/uploads/2019/03/SmartPhones-2017.jpg',
      description: 'Pick out your mobile phone with Rain Store today. Choose from the latest Apple iPhones, Samsung, and LG phones.',
      path: 'phones'
    },
    {
      key: 6,
      name: 'devices',
      image: 'https://avatars.mds.yandex.net/get-zen_doc/3842094/pub_5f3cdb90673058256b9df883_5f434e55a465d87826576bed/scale_1200',
      description: 'Shop a wide selection of laptops, tablets, desktop computers, and accessories on Rain Store from top brands including Apple, HP, Dell, and more.',
      path: 'devices'
    },
    {
      key: 7,
      name: 'books',
      image: 'https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-mobileMasterAt3x.jpg',
      description: 'Over 13 million titles available from the largest seller of used books. Cheap prices on high quality gently used books. Free shipping over $10.',
      path: 'books'
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
      detail: {
        'Display': '5.7 inches, 83.8 cm2, 720 x 1440 pixels',
        'RAM': '2 GB',
        'Internal Storage': '16 GB',
        'Supported Memory Card': 'microSD',
        'Primary Camera': '13 MP Rear Camera',
        'Battery Capacity': '3020 mAh',
        'Processor Type': 'Qualcomm MSM8937 Snapdragon 430 (28 nm)',
        'SIM': '2 (nano Sim)',
        'Operating System': 'Android 8.0 (Oreo), EMUI 8',
        'Remote Connection': 'Wi-Fi, Bluetooth 4.2',
        'Internet': '4G/LTE',
        'Weight': '150 g'
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
      detail: {
        'Display': '6.26 inches, 720 x 1520 pixels',
        'RAM': '4 GB',
        'Internal Storage': '64 GB',
        'Supported Memory Card': 'microSD',
        'Primary Camera': '13 MP',
        'Battery Capacity': '4000 mAh',
        'Processor Type': 'Qualcomm SDM450 Snapdragon 450 (14 nm)',
        'SIM': '2 (nano Sim)',
        'Operating System': 'Android 8.1 (Oreo), EMUI 8.2',
        'Remote Connection': 'Wi-Fi, Bluetooth 4.2',
        'Internet': '4G/LTE',
        'Weight': '168 g'
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
      detail: {
        'Display': '6.5 inches, 720 x 1600 pixels',
        'RAM': '3 GB',
        'Internal Storage': '64 GB',
        'Supported Memory Card': 'microSD',
        'Primary Camera': '12 MP',
        'Battery Capacity': '5000 mAh',
        'Processor Type': 'Mediatek Helio G70 (12 nm)',
        'SIM': '2 (nano Sim)',
        'Operating System': 'Android 10, Realme UI',
        'Remote Connection': 'Wi-Fi, Bluetooth 5.0',
        'Internet': '4G/LTE',
        'Weight': '195 g'
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
      detail: {
        'Display': '6.53 inches, 720 x 1600 pixels',
        'RAM': '2 GB',
        'Internal Storage': '32 GB',
        'Supported Memory Card': 'microSD',
        'Primary Camera': '13 MP',
        'Battery Capacity': '5000 mAh',
        'Processor Type': 'MediaTek MT6762G Helio G25 (12 nm)',
        'SIM': '2 (nano Sim)',
        'Operating System': 'Android 10, MIUI 12',
        'Remote Connection': 'Wi-Fi, Bluetooth 5.0',
        'Internet': '4G/LTE',
        'Weight': '196 g'
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
      detail: {
        'Display': '6.53 inches, 1080 x 2340 pixels',
        'RAM': '4 GB',
        'Internal Storage': '64 GB',
        'Supported Memory Card': 'microSD',
        'Primary Camera': '48 MP',
        'Battery Capacity': '6000 mAh',
        'Processor Type': 'Qualcomm SM6115 Snapdragon 662 (11 nm)',
        'SIM': '2 (nano Sim)',
        'Operating System': 'Android 10, MIUI 12',
        'Remote Connection': 'Wi-Fi, Bluetooth 5.0',
        'Internet': '4G/LTE',
        'Weight': '198 g'
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
      detail: {
        'Display': '6.53 inches, 720 x 1600 pixels',
        'RAM': '2 GB',
        'Internal Storage': '32 GB',
        'Supported Memory Card': 'microSD',
        'Primary Camera': '13 MP',
        'Battery Capacity': '5000 mAh',
        'Processor Type': 'MediaTek MT6765G Helio G35 (12 nm)',
        'SIM': '2 (nano Sim)',
        'Operating System': 'Android 10, MIUI 12',
        'Remote Connection': 'Wi-Fi, Bluetooth 5.0',
        'Internet': '4G/LTE',
        'Weight': '196 g'
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
      detail: {
        'Display': '6.51 inches, 720 x 1600 pixels',
        'RAM': '4 GB',
        'Internal Storage': '64 GB',
        'Supported Memory Card': 'microSD',
        'Primary Camera': '13 MP',
        'Battery Capacity': '5000 mAh',
        'Processor Type': 'Qualcomm SM4250 Snapdragon 460 (11 nm)',
        'SIM': '2 (nano Sim)',
        'Operating System': 'Android 10, Funtouch 10.5',
        'Remote Connection': 'Wi-Fi, Bluetooth 4.2',
        'Internet': '4G/LTE',
        'Weight': '192.3 g'
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
      detail: {
        'Display': '6.15 inches, 1080 x 2312 pixels',
        'RAM': '4 GB',
        'Internal Storage': '128 GB',
        'Supported Memory Card': 'microSD',
        'Primary Camera': '48 MP',
        'Battery Capacity': '3340 mAh',
        'Processor Type': 'Kirin 710 (12 nm)',
        'SIM': '2 (nano Sim)',
        'Operating System': 'Android 9.0 (Pie)',
        'Remote Connection': 'Wi-Fi, Bluetooth 4.2',
        'Internet': '4G/LTE',
        'Weight': '159 g'
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
      detail: {
        'Display': '6.7 inches, 1284 x 2778 pixels',
        'RAM': '6 GB',
        'Internal Storage': '512 GB',
        'Supported Memory Card': 'No',
        'Primary Camera': '12 MP',
        'Battery Capacity': '3687 mAh',
        'Processor Type': 'Apple A14 Bionic (5 nm)',
        'SIM': '1 (nano Sim)',
        'Operating System': 'iOS 14.1, upgradable to iOS 15.1',
        'Remote Connection': 'Wi-Fi, Bluetooth 5.0',
        'Internet': '5G/LTE',
        'Weight': '228 g'
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
      detail: {
        'Author': 'Edgar Allan Poe',
        'Cover Type': 'Hardcover',
        'Language': 'English',
        'Publisher': 'Kessinger Publishing, LLC (September 10, 2010)',
        'Print Length': '34 pages',
        'Weight': '8.2 ounces',
      },
      description: 'This scarce antiquarian book is a facsimile reprint of the original. Due to its age, it may contain imperfections such as marks, notations, marginalia and flawed pages. Because we believe this work is culturally important, we have made it available as part of our commitment for protecting, preserving, and promoting the world\'s literature in affordable, high quality, modern editions that are true to the original work.'
    },
    {
      name: 'Politics',
      price: 14.99,
      inStock: 'In Stock',
      key: 2,
      image: 'https://sun9-32.userapi.com/c858024/v858024458/202137/8i1Yx1UzIeA.jpg',
      detail: {
        'Author': 'Aristotle',
        'Cover Type': 'Hardcover',
        'Language': 'English',
        'Publisher': 'University of Chicago Press; Second edition (March 29, 2P13)' ,
        'WrintLength': '318 pages',
        'weight': 376,
      },
      description: 'One of the fundamental works of Western political thought, Aristotle’s masterwork is the first systematic treatise on the science of politics. For almost three decades, Carnes Lord’s justly acclaimed translation has served as the standard English edition. Widely regarded as the most faithful to both the original Greek and Aristotle’s distinctive style, it is also written in clear, contemporary English. This new edition of the Politics retains and adds to Lord’s already extensive notes, clarifying the flow of Aristotle’s argument and identifying literary and historical references. A glossary defines key terms in Aristotle’s philosophical-political vocabulary. Lord has made revisions to problematic passages throughout the translation in order to enhance both its accuracy and its readability. He has also substantially revised his introduction for the new edition, presenting an account of Aristotle’s life in relation to political events of his time; the character and history of his writings and of the Politics in particular; his overall conception of political science; and his impact on subsequent political thought from antiquity to the present. Further enhancing this new edition is an up-to-date selected bibliography.'
    },
    {
      name: 'The Lover One',
      price: 29.99,
      inStock: 'In Stock',
      key: 3,
      image: 'https://images-na.ssl-images-amazon.com/images/I/91UOS0mzv9L.jpg',
      detail: {
        'Author': 'Evelyn Waugh',
        'Cover Type': 'Hardcover',
        'Language': 'English',
        'Publisher': 'Little, Brown and Company; Reissue edition (December 11, 2P12)' ,
        'WrintLength': '160 pages',
        'weight': '12 ounces',
      },
      description: '"A work of art as rich and subtle and unnerving as anything its author has ever done" (New Yorker), The Loved One is Evelyn Waugh\'s cutting satire of 1940s California and the Anglo-American cultural divide. Following the death of a friend, the poet and pets\' mortician Dennis Barlow finds himself entering the artificial Hollywood paradise of the Whispering Glades Memorial Park. Within its golden gates, death, American-style, is wrapped up and sold like a package holiday--and Dennis gets drawn into a bizarre love triangle with Aimée Thanatogenos, a naïve Californian corpse beautician, and Mr. Joyboy, a master of the embalmer\'s art. Waugh\'s dark and savage satire depicts a world where reputation, love, and death cost a very great deal.'
    },
    {
      name: 'Tractatus Logico-Philosophicus',
      price: 36.99,
      inStock: 'In Stock',
      key: 4,
      image: 'https://images-na.ssl-images-amazon.com/images/I/81-pZAlvFrL.jpg',
      detail: {
        'Author': 'Ludwig Wittgenstein',
        'Cover Type': 'Hardcover',
        'Language': 'English',
        'Publisher': 'Cosimo Classics (July 1, 2010)',
        'Print Length': '116 pages',
        'Weight': '10.1 ounces',
      },
      description: 'Austrian philosopher LUDWIG WITTGENSTEIN (1889-1951) was hugely influential on 20th-century philosophy, and here, he constructs a series of carefully and precisely numbered propositions on the relationship between language, logic, and reality, using a numbering system to show nested relationships between the propositions. Considered one of the major recent works of philosophy-a reputation enhanced, undoubtedly, by Bertrand Russell\'s glowing introduction-this edition is a reproduction of the translation by C.K. Ogden, first published in 1922, for which Wittgenstein himself assisted in the preparation of the English-language manuscript. Students of philosophy and those fascinated by the history of ideas will want a copy of this essential volume.'
    },
    {
      name: 'The Pickwick Papers',
      price: '16.00',
      inStock: 'In Stock',
      key: 5,
      image: 'https://images-na.ssl-images-amazon.com/images/I/918aG25s4OL.jpg',
      detail: {
        'Author': 'Charles Dickens',
        'Cover Type': 'Hardcover',
        'Language': 'English',
        'Publisher': 'Everyman\'s Library; Second Printing edition (March 2, 1P99)' ,
        'WrintLength': '976 pages',
        'weight': '1.88 pounds',
      },
      description: 'In this classic social commentary from Dickens, Mr. Samuel Pickwick, retired business man and confirmed bachelor, is determined that after a quiet life of enterprise the time has come to go out into the world. Together with the other members of the Pickwick Club: Tracy Tupman, Augustus Snodgrass and Nathaniel Winkle, the portly innocent embarks on a series of hilariously comic adventures. But can Pickwick retain his good will towards his fellow humans once he discovers the evils of the world? Charles Dickens’s satirical masterpiece, The Pickwick Papers, catapulted the young writer into literary fame when it was first serialized in 1836–37. It recounts the rollicking adventures of the members of the Pickwick Club as they travel about England getting into all sorts of mischief. Laugh-out-loud funny and endlessly entertaining, the book also reveals Dickens’s burgeoning interest in the parliamentary system, lawyers, the Poor Laws, and the ills of debtors’ prisons. As G. K. Chesterton noted, “Before [Dickens] wrote a single real story, he had a kind of vision . . . a map full of fantastic towns, thundering coaches, clamorous market-places, uproarious inns, strange and swaggering figures. That vision was Pickwick.”'
    },
    {
      name: 'Justine, or the Misfortunes of Virtue',
      price: 14.41,
      inStock: 'In Stock',
      key: 6,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51ZLZVOtALL.jpg',
      detail: {
        'Author': 'Marquis de Sade',
        'Cover Type': 'Hardcover',
        'Language': 'English',
        'Publisher': 'Oxford University Press; 1st edition (January 20, 2013)',
        'Print Length': '320 pages',
        'Weight': '7.5 ounces',
      },
      description: 'This is the first new translation in over forty years of Sade\'s novel Justine. It is also the first ever critical edition, based on the original 1791 version of the story, which is the most accessible and artistically successful of the three versions. The novel tells the story of the beautiful and devout Justine, whose steadfast faith and naive trust destine her from the outset for sexual exploitation and martyrdom. The unending catalog of disasters that befall her, during which she is subject to any number of perverse practices, illustrate Sade\'s belief in the primacy of Nature over civilization. Virtue is no match for vice, and as criminality and violence triumph, Justine is doomed to suffer. Indeed, the novel mounts a ferocious physical and intellectual assault on absolute notions of good and evil.'
    },
    {
      name: 'Doctor Zhivago',
      price: 5.22,
      inStock: 'In Stock',
      key: 7,
      image: 'https://images-na.ssl-images-amazon.com/images/I/91Io6DMt2aL.jpg',
      detail: {
        'Author': 'Boris Pasternak',
        'Cover Type': 'Hardcover',
        'Language': 'English',
        'Publisher': 'Pantheon; First American Edition (October 19, 2010)',
        'Print Length': '544 pages',
        'Weight': '1.99 pounds',
      },
      description: 'Boris Pasternak’s widely acclaimed novel comes gloriously to life in a magnificent new translation by Richard Pevear and Larissa Volokhonsky, the award-winning translators of War and Peace and Anna Karenina, and to whom, The New York Review of Books declared, “the English-speaking world is indebted.” First published in Italy in 1957 amid international controversy—the novel was banned in the Soviet Union until 1988, and Pasternak declined the Nobel Prize a year later under intense pressure from Soviet authorities—Doctor Zhivago is the story of the life and loves of a poet-physician during the turmoil of the Russian Revolution. Taking his family from Moscow to what he hopes will be shelter in the Ural Mountains, Zhivago finds himself instead embroiled in the battle between the Whites and the Reds. Set against this backdrop of cruelty and strife is Zhivago’s love for the tender and beautiful Lara: pursued, found, and lost again, Lara is the very embodiment of the pain and chaos of those cataclysmic times.'
    }
  ],
  devices: [
    {
      name: 'SteelSeries Sensei Ten Gaming Mouse',
      price: '69.99',
      inStock: 'In Stock',
      key: 1,
      category: 'mouse',
      image: 'https://avatars.mds.yandex.net/get-mpic/4785755/img_id526613460347728971.jpeg/orig',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/4785755/img_id526613460347728971.jpeg/orig',
        second: 'https://avatars.mds.yandex.net/get-mpic/4591438/img_id9144763632161816568.jpeg/orig',
        third: 'https://avatars.mds.yandex.net/get-mpic/5344732/img_id9014836154007738978.jpeg/orig',
        forth: 'https://avatars.mds.yandex.net/get-mpic/5216721/img_id877419183552811329.jpeg/orig'
      },
      detail: {
        'Brand': 'SteelSeries',
        'Series': 'Sensei Ten',
        'Detection Technology': 'Optical',
        'Connectivity': 'USB',
        'Number of Buttons': '8 buttons',
        'Color': 'Black',
        'Weight': '3.2 ounces',
      }
    },
    {
      name: 'Razer DeathAdder Essential Gaming Mouse',
      price: '499.00',
      inStock: 'In Stock',
      key: 2,
      category: 'mouse',
      image: 'https://avatars.mds.yandex.net/get-mpic/4937511/img_id9212416177376599465.png/orig',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/4937511/img_id9212416177376599465.png/orig',
        second: 'https://avatars.mds.yandex.net/get-mpic/5235182/img_id4879390711653309652.png/orig',
        third: 'https://avatars.mds.yandex.net/get-mpic/466729/img_id7202292276164415452.jpeg/orig',
        forth: 'https://avatars.mds.yandex.net/get-mpic/397397/img_id6558507476773557858.jpeg/orig'
      },
      detail: {
        'Brand': 'Razer',
        'Series': 'DeathAdder v2',
        'Detection Technology': 'Optical',
        'Connectivity': 'USB',
        'Number of Buttons': '8 buttons',
        'Color': 'Black',
        'Weight': '6.4 ounces',
      }
    },
    {
      name: 'Defender Cyber MB-560L Gaming Mouse',
      price: '19.99',
      inStock: 'In Stock',
      key: 3,
      category: 'mouse',
      image: 'https://avatars.mds.yandex.net/get-mpic/4334746/img_id1158350333054399525.png/orig',
      images: {
        first: 'https://avatars.mds.yandex.net/get-mpic/4334746/img_id1158350333054399525.png/orig',
        second: 'https://avatars.mds.yandex.net/get-mpic/4591438/img_id9111288546134167834.png/orig',
        third: 'https://avatars.mds.yandex.net/get-mpic/4346078/img_id8624635255325977215.png/orig',
        forth: 'https://avatars.mds.yandex.net/get-mpic/4012150/img_id6148298840820930424.png/orig'
      },
      detail: {
        'Brand': 'Defender',
        'Series': 'MB-560L',
        'Detection Technology': 'Optical',
        'Connectivity': 'USB',
        'Number of Buttons': '3 buttons',
        'Color': 'Black',
        'Weight': '0.08 kg',
      }
    },
    {
      name: 'Acer Nitro VG271 Pbmiipx 27 Inches Full HD (1920 x 1080)',
      price: '299.00',
      inStock: 'In Stock',
      category: 'monitor',
      key: 4,
      image: 'https://m.media-amazon.com/images/I/713k1ZQagdL._AC_SL1500_.jpg',
      images: {
        first: 'https://m.media-amazon.com/images/I/713k1ZQagdL._AC_SL1500_.jpg',
        second: 'https://m.media-amazon.com/images/I/71QLxe5DKqL._AC_SL1500_.jpg',
        third: 'https://m.media-amazon.com/images/I/51Ds5Zz50hL._AC_SL1500_.jpg',
        forth: 'https://m.media-amazon.com/images/I/61PTpuyfPiL._AC_SL1500_.jpg'
      },
      detail: {
        'Aspect Ratio': '16:9',
        'Display Resolution Maximum': '1920 x 1080 pixels',
        'Screen Size': '27 inches',
        'Display Type': 'LED',
        'Item Dimensions': '24.2 x 9.4 x 18.7 inches',
        'Item Weight': '12.30 lbs',
        'Refresh Rate': '144 hertz',
        'Size': '27-inch'
      }
    },
    {
      name: 'BenQ MOBIUZ EX2510 24.5 Inch 144Hz IPS Gaming Monitor',
      price: '249.99',
      inStock: 'In Stock',
      category: 'monitor',
      key: 5,
      image: 'https://m.media-amazon.com/images/I/61O5ydbBsDL._AC_SL1001_.jpg',
      images: {
        first: 'https://m.media-amazon.com/images/I/61O5ydbBsDL._AC_SL1001_.jpg',
        second: 'https://m.media-amazon.com/images/I/61ckVv5WK2L._AC_SL1001_.jpg',
        third: 'https://m.media-amazon.com/images/I/51WLT7lYU+L._AC_SL1001_.jpg',
        forth: 'https://m.media-amazon.com/images/I/515fmK5aDbL._AC_SL1001_.jpg'
      },
      detail: {
        'Brand': 'BenQ',
        'Series': 'BENQEX2510RB',
        'Item Weight': '12.32 pounds',
        'Product Dimensions': '21.95 x 8.53 x 20.53 inches',
        'Color': 'Dark Grey',
        'Voltage': '220 Volts',
        'Manufacturer': 'BenQ',
        'ASIN': 'B08FF6DJNP'
      }
    },
    {
      name: 'Sceptre Curved 24" 75Hz Professional LED Monitor 1080p',
      price: '299.99',
      inStock: 'In Stock',
      category: 'monitor',
      key: 6,
      image: 'https://m.media-amazon.com/images/I/81SoE0g+uqL._AC_SL1500_.jpg',
      images: {
        first: 'https://m.media-amazon.com/images/I/81SoE0g+uqL._AC_SL1500_.jpg',
        second: 'https://m.media-amazon.com/images/I/81lnn5lmdqL._AC_SL1500_.jpg',
        third: 'https://m.media-amazon.com/images/I/61HbecFd+bL._AC_SL1000_.jpg',
        forth: 'https://m.media-amazon.com/images/I/61MIofFA1yL._AC_SL1000_.jpg'
      },
      detail: {
        'Brand': 'Sceptre',
        'Total HDMI Ports': '2',
        'Display Resolution Maximum': '1920 x 1080 pixels',
        'Screen Size': '24 inches',
        'Display Type': 'LED',
        'Item Dimensions': '21.61 x 16.04 x 9.06 inches',
        'Item Weight': '6.37 lbs',
        'Refresh Rate': '75 hertz'
      }
    },
    {
      name: 'Samsung Galaxy Tab S6 Lite 10.4"',
      price: '349.99',
      inStock: 'In Stock',
      category: 'tablet',
      key: 7,
      image: 'https://m.media-amazon.com/images/I/61EobGaoeaL._AC_SL1500_.jpg',
      images: {
        first: 'https://m.media-amazon.com/images/I/61EobGaoeaL._AC_SL1500_.jpg',
        second: 'https://m.media-amazon.com/images/I/71qK7KLjITL._AC_SL1500_.jpg',
        third: 'https://m.media-amazon.com/images/I/61+R1-L894L._AC_SL1500_.jpg',
        forth: 'https://m.media-amazon.com/images/I/61cXqT5MtQL._AC_SL1500_.jpg'
      },
      detail: {
        'Brand': 'Samsung Electronics',
        'Series': 'Samsung Galaxy Tab S6 Lite WiFi',
        'Operating System': 'Android',
        'Screen Resolution': '1920 x 1200 pixels',
        'Processor': '2.3 GHz',
        'RAM': '64 GB',
        'Wireless Type': '802.11a/b/g/n/ac, Bluetooth',
        'Flash Memory Size': '4 GB',
        'Color': 'Blue',
        'Item Weight': '1.01 pounds'
      }
    },
    {
      name: 'Huawei MateBook Signature Edition 2 in 1 PC Tablet',
      price: '478.93',
      inStock: 'In Stock',
      category: 'tablet',
      key: 8,
      image: 'https://m.media-amazon.com/images/I/71RUxLw+B6L._AC_SL1500_.jpg',
      images: {
        first: 'https://m.media-amazon.com/images/I/71RUxLw+B6L._AC_SL1500_.jpg',
        second: 'https://m.media-amazon.com/images/I/61SJcACz0AL._AC_SL1500_.jpg',
        third: 'https://m.media-amazon.com/images/I/81F2XW1NKaL._AC_SL1500_.jpg',
        forth: 'https://m.media-amazon.com/images/I/813mL3h-KTL._AC_SL1500_.jpg'
      },
      detail: {
        'Brand': 'HUAWEI',
        'Series': 'FBA_MateBook',
        'CPU': 'Intel Core M5',
        'Capacity': '4 GB',
        'RAM': '128 GB SSD',
        'Color': 'Space Gray',
        'Screen Size': '12 Inches',
        'Operating System': 'Windows 10 Home',
        'Product Dimensions': '10.97 x 0.27 x 7.64 inches',
        'Batteries': '1 Lithium Polymer batteries required. (included)',
        'Item Weight': '1.4 pounds'
      }
    },
    {
      name: 'Xiaomi New 2021 Redmi Buds 3 Pro',
      price: '73.98',
      inStock: 'In Stock',
      category: 'headphone',
      key: 9,
      image: 'https://m.media-amazon.com/images/I/61FnPJxVLTL._AC_SL1500_.jpg',
      images: {
        first: 'https://m.media-amazon.com/images/I/61FnPJxVLTL._AC_SL1500_.jpg',
        second: 'https://m.media-amazon.com/images/I/61ni3Amv8gL._AC_SL1500_.jpg',
        third: 'https://m.media-amazon.com/images/I/61K35ox1DYL._AC_SL1500_.jpg',
        forth: 'https://m.media-amazon.com/images/I/61+YhawtsmL._AC_SL1500_.jpg'
      },
      detail: {
        'Brand': 'Xiaomi',
        'Color': 'Glacier Gray',
        'Connectivity Technology': 'Wireless',
        'Model Name': 'Buds 3 Pro',
        'Form Factor': 'In Ear',
        'ASIN': 'B09H9BKVVN',
        'Product Dimensions': '2.5 x 0.8 x 0.84 inches',
        'Item Weight': '1.9 ounces'
      }
    },
    {
      name: 'KOTION EACH G2000 Gaming Headset',
      price: '29.00',
      inStock: 'In Stock',
      category: 'headphone',
      key: 10,
      image: 'https://m.media-amazon.com/images/I/61wZne4H37L._AC_SL1170_.jpg',
      images: {
        first: 'https://m.media-amazon.com/images/I/61wZne4H37L._AC_SL1170_.jpg',
        second: 'https://m.media-amazon.com/images/I/41XxQm7VVfL._AC_.jpg',
        third: 'https://m.media-amazon.com/images/I/51FryNC+GDL._AC_SL1000_.jpg',
        forth: 'https://m.media-amazon.com/images/I/61uxdlDpcGL._AC_SL1053_.jpg'
      },
      detail: {
        'Brand': 'KOTION EACH',
        'Connectivity Technology': 'Wired',
        'Form Factor': 'Over Ear',
        'Noise Control': 'Sound Isolation',
        'Headphones Jack': '3.5mm Jack',
        'Hardware Platform': 'Gaming Console, PC, Windows, Mac',
        'ASIN': 'B017VD0HYW',
        'Item Weight': '3.17 ounces'
      }
    },
    {
      name: 'ROCCAT Vulcan TKL Linear PC Gaming Keyboard',
      price: '129.99',
      inStock: 'In Stock',
      category: 'keyboard',
      key: 11,
      image: 'https://m.media-amazon.com/images/I/81Fh0I4IzjL._AC_SL1500_.jpg',
      images: {
        first: 'https://m.media-amazon.com/images/I/81Fh0I4IzjL._AC_SL1500_.jpg',
        second: 'https://m.media-amazon.com/images/I/81vcJLIksXL._AC_SL1500_.jpg',
        third: 'https://m.media-amazon.com/images/I/81ztiJy6ZXL._AC_SL1500_.jpg',
        forth: 'https://m.media-amazon.com/images/I/81hR7bSBHJL._AC_SL1500_.jpg'
      },
      detail: {
        'Keyboard Description': 'Gaming',
        'Connectivity Technology': 'USB-C',
        'Special Feature': 'Lighting',
        'Compatible Devices': 'PC',
        'Brand': 'ROCCAT',
        'Color': 'Black',
        'Number of Keys': '109',
        'Item Dimensions': '15.12 x 6.81 x 6.81 inches',
        'Item Weight': '2.12 lbs'
      }
    },
    {
      name: '2021 HP Pavilion 15.6 Touch-Screen Laptop 4 Core Intel i5-1035G1',
      price: '899.99',
      inStock: 'In Stock',
      category: 'laptop',
      key: 12,
      image: 'https://m.media-amazon.com/images/I/71G10j4Q5CL._AC_SL1500_.jpg',
      images: {
        first: 'https://m.media-amazon.com/images/I/71G10j4Q5CL._AC_SL1500_.jpg',
        second: 'https://m.media-amazon.com/images/I/61IV1LALrLL._AC_SL1500_.jpg',
        third: 'https://m.media-amazon.com/images/I/51+tQkphvnL._AC_SL1500_.jpg',
        forth: 'https://m.media-amazon.com/images/I/61IKMScUvVL._AC_SL1500_.jpg'
      },
      detail: {
        'Brand': 'HP',
        'Series': 'HP Pavilion',
        'Screen Size': '15.6 inches',
        'Display Resolution Maximum': '1920 x 1080 pixels',
        'Operating System': 'Windows 10',
        'CPU Manufacturer': 'Intel',
        'Card Description': 'Integrated',
        'Hard Disk Size': '1 TB',
        'Processor Count': '4',
        'Chipset Brand': 'Intel',
        'CPU Speed': '1.00 GHz',
        'Item Weight': '3.75 lbs'
      }
    }
  ],
  footer: [
    {
      path: '/support',
      id: 'aboutUs',
      header: 'About Us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sections: {
        sectionOne: 'Contact Us',
        sectionTwo: 'Brand',
        sectionThree: 'Links',
        sectionFour: 'Job'
      },
    },
    {
      path: '/support',
      id: 'services',
      header: 'Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sections: {
        sectionOne: 'Shop with Points',
        sectionTwo: 'Sell products on RainStore',
        sectionThree: 'Become an Affiliate',
        sectionFour: 'Advertise Your Products'
      },
    },
    {
      path: '/support',
      id: 'help',
      header: 'Help',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sections: {
        sectionOne: 'Your Account',
        sectionTwo: 'Delivery',
        sectionThree: 'Our Business Card',
        sectionFour: 'Security'
      },
    },
    {
      path: '/support',
      id: 'network',
      header: 'Networks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sections: {
        sectionOne: 'VK',
        sectionTwo: 'Telegram',
        sectionThree: 'Instagram',
        sectionFour: 'Twitter'
      },
    }
  ]
};

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

export function getDevicesData(val) {
  return data.devices.find(
    item => item.name === val
  );
}

export function getSpecificCategory(val) {
  return data[`${val}`];
}

export function getFooterData() {
  return data.footer;
}
