export const languages = ['es', 'cat', 'en'];

export const siteContent = {
  es: {
    locale: 'es',
    brand: 'A\u00e7ai Berry',
    nav: {
      home: 'Inicio',
      bowls: 'Bowls',
      custom: 'Crea tu bowl',
      loyalty: 'Fidelizaci\u00f3n',
      story: 'La marca',
      visit: 'Vis\u00edtanos',
      menu: 'Men\u00fa',
    },
    hero: {
      eyebrow: 'A\u00e7ai bowls, fruta y toppings',
      title: 'Bowls de a\u00e7ai para parar, recargar y volver.',
      description:
        'Descubre combinaciones con fruta, salsas y toppings para cada momento del d\u00eda, desde algo ligero hasta un bowl bien cargado.',
      primaryCta: 'Ver bowls',
      secondaryCta: 'Crea tu bowl',
      stats: [
        { value: '5', label: 'Bowls favoritos' },
        { value: '4', label: 'Tama\u00f1os' },
        { value: 'BCN', label: 'Sardenya 360' },
      ],
    },
    signature: {
      title: 'Bowls de a\u00e7ai',
      subtitle:
        'Desde mezclas m\u00e1s ligeras hasta combinaciones intensas con pistacho, Lotus o fruta del bosque.',
      sizes: [
        { name: 'Small', size: '500 ml', price: '10,9 \u20ac' },
        { name: 'Jungle', size: '710 ml', price: '13,7 \u20ac' },
        { name: 'Infinity', size: '1000 ml', price: '17,8 \u20ac' },
      ],
      bowls: [
        {
          name: 'Fit',
          ingredients:
            'A\u00e7ai, granola 0%, anacardos, crema de cacahuete, prote\u00edna, pl\u00e1tano y mango.',
        },
        {
          name: 'Tropical',
          ingredients:
            'A\u00e7ai, granola, salsa de mango, kiwi, pi\u00f1a, pl\u00e1tano, pud\u00edn de ch\u00eda y mix de semillas.',
        },
        {
          name: 'Berry',
          ingredients:
            'A\u00e7ai, granola, frutas del bosque, yogur, fresa, coco, pl\u00e1tano y ar\u00e1ndanos.',
        },
        {
          name: 'Dubai Love',
          ingredients:
            'A\u00e7ai, granola, salsa de pistacho, fresa, pl\u00e1tano, Chips Ahoy! y pistacho.',
        },
        {
          name: 'Golden Lotus',
          ingredients:
            'A\u00e7ai, granola, ch\u00eda, fresa, pl\u00e1tano, leche condensada, salsa y galleta Lotus.',
        },
      ],
    },
    custom: {
      title: 'Crea tu bowl',
      subtitle:
        'Elige base, fruta, toppings y salsa para montarte un bowl a tu gusto.',
      badge: 'Toppings ilimitados',
      badgePrefix: 'por',
      sizes: [
        {
          name: 'Mini',
          volume: '300 ml',
          combo: '2 frutas + 1 topping + 1 salsa',
          price: '6,8 \u20ac',
          extra: '+0,5 \u20ac',
        },
        {
          name: 'Small',
          volume: '500 ml',
          combo: '2 frutas + 2 toppings + 1 salsa',
          price: '10,8 \u20ac',
          extra: '+1,0 \u20ac',
        },
        {
          name: 'Jungle',
          volume: '710 ml',
          combo: '2 frutas + 3 toppings + 2 salsas',
          price: '12,9 \u20ac',
          extra: '+1,5 \u20ac',
        },
        {
          name: 'Infinity',
          volume: '1000 ml',
          combo: '3 frutas + 3 toppings + 2 salsas',
          price: '16,7 \u20ac',
          extra: '+2,0 \u20ac',
        },
      ],
      groups: [
        { name: 'Base', items: ['A\u00e7ai', 'Yogurt'] },
        {
          name: 'Frutas',
          items: [
            'Fresa',
            'Mango',
            'Kiwi',
            'Pl\u00e1tano',
            'Pi\u00f1a',
            { label: 'Ar\u00e1ndanos', note: '(+0,8 \u20ac)' },
          ],
        },
        {
          name: 'Toppings',
          items: [
            'Yogur',
            'Coco',
            'Ch\u00eda',
            'Miel',
            'Lotus',
            'Granola',
            'Oreo',
            'Granola de chocolate',
            'Mix de semillas',
            'Leche condensada',
            'Leche en polvo',
            'Filipino blanco',
            'Chips Ahoy!',
          ],
          extrasLabel: 'Extras (+1 \u20ac)',
          extras: [
            'Almendras',
            'Anacardos',
            'Pistacho',
            'Prote\u00edna',
            'Granola sin gluten',
            'Granola de prote\u00edna',
          ],
        },
        {
          name: 'Salsas',
          items: [
            'Kinder',
            'Lotus',
            'Mango',
            'Nutella',
            'Nutella blanca',
            'Frutas del bosque',
            'Pud\u00edn de ch\u00eda',
            'Crema de cacahuete',
            'Dulce de leche',
            'Chocolate negro',
          ],
          extrasLabel: 'Extras (+1 \u20ac)',
          extras: ['Rafaello', 'Pistacho', 'Happy Hippo', 'Oreo White'],
        },
      ],
    },
    loyalty: {
      title: 'Tarjeta de fidelizaci\u00f3n',
      badgeTitle: "You're the berry best!",
      rewardLine: '\u00a1Compra 8 bowls y el siguiente es gratis!',
      rewardNote: 'V\u00e1lido solo para tama\u00f1os Small, Jungle e Infinity',
      freeBowlMessage: '\u00a11 bowl gratis desbloqueado!',
      frontTags: ['Fit', 'Natural'],
      contacts: [
        { icon: 'instagram', label: '@acaiberry.es' },
        { icon: 'location', label: 'C/Sardenya 360' },
      ],
    },
    story: {
      title: 'Por qu\u00e9 A\u00e7ai Berry',
      subtitle: 'Sabores frescos, combinaciones generosas y un punto de parada en Barcelona para volver una y otra vez.',
      cards: [
        {
          title: 'Sabores que enganchan',
          text: 'A\u00e7ai, fruta, granola, cremas y toppings para encontrar desde tu mezcla m\u00e1s simple hasta la m\u00e1s golosa.',
        },
        {
          title: 'Hecho a tu medida',
          text: 'Puedes elegir uno de los bowls de la casa o montar el tuyo combinando base, fruta, toppings y salsas.',
        },
        {
          title: 'Parada en Barcelona',
          text: 'Una direcci\u00f3n pensada para pasar a por algo fresco, compartirlo o hacer una parada dulce entre planes.',
        },
      ],
      visitTitle: 'Vis\u00edtanos',
      visitText:
        'Te esperamos en C/ Sardenya 360, Barcelona. Si est\u00e1s por la zona, ac\u00e9rcate y prueba uno de los bowls de la casa o crea el tuyo.',
      visitCta: 'C\u00f3mo llegar',
      visitHref:
        'http://google.com/maps/place/A%C3%87AI+BERRY/@41.4057456,2.1683702,16.03z/data=!4m10!1m2!2m1!1zYcOnYWk!3m6!1s0x12a4a322d69ed73d:0x8dfe5ac06e9d9bb5!8m2!3d41.4054942!4d2.1708714!15sCgVhw6dhaVoHIgVhw6dhaZIBDmljZV9jcmVhbV9zaG9wmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIxb2MxRXdWVEZqTVZKWVVtMTRXR0pYYnpCa2EwcHJUakJOTTA0eFJSQULgAQD6AQQIABA9!16s%2Fg%2F11z3n_h15k?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
    },
    footer: {
      rights: 'A\u00e7ai Berry \u00b7 Bowls, fruta y toppings en Barcelona.',
      languageLabel: 'Idioma',
    },
  },
  cat: {
    locale: 'ca',
    brand: 'A\u00e7ai Berry',
    nav: {
      home: 'Inici',
      bowls: 'Bols',
      custom: 'Crea el teu bol',
      loyalty: 'Fidelitzaci\u00f3',
      story: 'La marca',
      visit: "Visita'ns",
      menu: 'Men\u00fa',
    },
    hero: {
      eyebrow: "A\u00e7ai bowls, fruita i toppings",
      title: "Bols d'a\u00e7ai per parar, recarregar i continuar.",
      description:
        'Descobreix combinacions amb fruita, salses i toppings per a qualsevol moment del dia, des d\u2019una opci\u00f3 lleugera fins a un bol ben carregat.',
      primaryCta: 'Veure bols',
      secondaryCta: 'Crea el teu bol',
      stats: [
        { value: '5', label: 'Bols preferits' },
        { value: '4', label: 'Mides' },
        { value: 'BCN', label: 'Sardenya 360' },
      ],
    },
    signature: {
      title: "Bols d'a\u00e7ai",
      subtitle:
        'Des de mescles m\u00e9s lleugeres fins a combinacions intenses amb festuc, Lotus o fruites del bosc.',
      sizes: [
        { name: 'Small', size: '500 ml', price: '10,9 \u20ac' },
        { name: 'Jungle', size: '710 ml', price: '13,7 \u20ac' },
        { name: 'Infinity', size: '1000 ml', price: '17,8 \u20ac' },
      ],
      bowls: [
        {
          name: 'Fit',
          ingredients:
            "A\u00e7ai, granola 0%, anacards, crema de cacauet, prote\u00efna, pl\u00e0tan i mango.",
        },
        {
          name: 'Tropical',
          ingredients:
            "A\u00e7ai, granola, salsa de mango, kiwi, pinya, pl\u00e0tan, p\u00fading de xia i mix de llavors.",
        },
        {
          name: 'Berry',
          ingredients:
            "A\u00e7ai, granola, fruites del bosc, iogurt, maduixa, coco, pl\u00e0tan i nabius.",
        },
        {
          name: 'Dubai Love',
          ingredients:
            "A\u00e7ai, granola, salsa de festuc, maduixa, pl\u00e0tan, Chips Ahoy! i festuc.",
        },
        {
          name: 'Golden Lotus',
          ingredients:
            "A\u00e7ai, granola, xia, maduixa, pl\u00e0tan, llet condensada, salsa i galeta Lotus.",
        },
      ],
    },
    custom: {
      title: 'Crea el teu bol',
      subtitle:
        'Tria base, fruita, toppings i salsa per muntar-te un bol totalment al teu gust.',
      badge: 'Toppings il\u00b7limitats',
      badgePrefix: 'per',
      sizes: [
        {
          name: 'Mini',
          volume: '300 ml',
          combo: '2 fruites + 1 topping + 1 salsa',
          price: '6,8 \u20ac',
          extra: '+0,5 \u20ac',
        },
        {
          name: 'Small',
          volume: '500 ml',
          combo: '2 fruites + 2 toppings + 1 salsa',
          price: '10,8 \u20ac',
          extra: '+1,0 \u20ac',
        },
        {
          name: 'Jungle',
          volume: '710 ml',
          combo: '2 fruites + 3 toppings + 2 salses',
          price: '12,9 \u20ac',
          extra: '+1,5 \u20ac',
        },
        {
          name: 'Infinity',
          volume: '1000 ml',
          combo: '3 fruites + 3 toppings + 2 salses',
          price: '16,7 \u20ac',
          extra: '+2,0 \u20ac',
        },
      ],
      groups: [
        { name: 'Base', items: ['A\u00e7ai', 'Iogurt'] },
        {
          name: 'Fruites',
          items: [
            'Maduixa',
            'Mango',
            'Kiwi',
            'Pl\u00e0tan',
            'Pinya',
            { label: 'Nabius', note: '(+0,8 \u20ac)' },
          ],
        },
        {
          name: 'Toppings',
          items: [
            'Iogurt',
            'Coco',
            'Xia',
            'Mel',
            'Lotus',
            'Granola',
            'Oreo',
            'Granola de xocolata',
            'Mix de llavors',
            'Llet condensada',
            'Llet en pols',
            'Filipino blanc',
            'Chips Ahoy!',
          ],
          extrasLabel: 'Extres (+1 \u20ac)',
          extras: [
            'Ametlles',
            'Anacards',
            'Festuc',
            'Prote\u00efna',
            'Granola sense gluten',
            'Granola de prote\u00efna',
          ],
        },
        {
          name: 'Salses',
          items: [
            'Kinder',
            'Lotus',
            'Mango',
            'Nutella',
            'Nutella blanca',
            'Fruites del bosc',
            'P\u00fading de xia',
            'Crema de cacauet',
            'Dulce de leche',
            'Xocolata negra',
          ],
          extrasLabel: 'Extres (+1 \u20ac)',
          extras: ['Rafaello', 'Festuc', 'Happy Hippo', 'Oreo White'],
        },
      ],
    },
    loyalty: {
      title: 'Targeta de fidelitzaci\u00f3',
      badgeTitle: "You're the berry best!",
      rewardLine: 'Compra 8 bols i el seg\u00fcent \u00e9s gratis!',
      rewardNote: 'V\u00e0lid nom\u00e9s per a mides Small, Jungle i Infinity',
      freeBowlMessage: '1 bol gratis desbloquejat!',
      frontTags: ['Fit', 'Natural'],
      contacts: [
        { icon: 'instagram', label: '@acaiberry.es' },
        { icon: 'location', label: 'C/Sardenya 360' },
      ],
    },
    story: {
      title: "Per qu\u00e8 A\u00e7ai Berry",
      subtitle: 'Sabors frescos, combinacions generoses i un punt de parada a Barcelona per tornar-hi sovint.',
      cards: [
        {
          title: 'Sabors que enganxen',
          text: 'A\u00e7ai, fruita, granola, cremes i toppings per trobar des de la barreja m\u00e9s simple fins a la m\u00e9s llaminera.',
        },
        {
          title: 'Fet a la teva mida',
          text: 'Pots triar un dels bols de la casa o muntar el teu combinant base, fruita, toppings i salses.',
        },
        {
          title: 'Parada a Barcelona',
          text: 'Una adre\u00e7a pensada per passar a buscar alguna cosa fresca, compartir-la o fer una parada dol\u00e7a entre plans.',
        },
      ],
      visitTitle: "Visita'ns",
      visitText:
        "T'esperem a C/ Sardenya 360, Barcelona. Si ets per la zona, vine i prova un dels bols de la casa o crea'n un al teu gust.",
      visitCta: 'Com arribar',
      visitHref:
        'http://google.com/maps/place/A%C3%87AI+BERRY/@41.4057456,2.1683702,16.03z/data=!4m10!1m2!2m1!1zYcOnYWk!3m6!1s0x12a4a322d69ed73d:0x8dfe5ac06e9d9bb5!8m2!3d41.4054942!4d2.1708714!15sCgVhw6dhaVoHIgVhw6dhaZIBDmljZV9jcmVhbV9zaG9wmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIxb2MxRXdWVEZqTVZKWVVtMTRXR0pYYnpCa2EwcHJUakJOTTA0eFJSQULgAQD6AQQIABA9!16s%2Fg%2F11z3n_h15k?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
    },
    footer: {
      rights: 'A\u00e7ai Berry \u00b7 Bols, fruita i toppings a Barcelona.',
      languageLabel: 'Idioma',
    },
  },
  en: {
    locale: 'en',
    brand: 'A\u00e7ai Berry',
    nav: {
      home: 'Home',
      bowls: 'Bowls',
      custom: 'Build your bowl',
      loyalty: 'Loyalty',
      story: 'Brand',
      visit: 'Visit us',
      menu: 'Menu',
    },
    hero: {
      eyebrow: 'Acai bowls, fruit and toppings',
      title: 'Acai bowls to stop, recharge and keep going.',
      description:
        'Discover combinations with fruit, sauces and toppings for any time of day, from something light to a fully loaded bowl.',
      primaryCta: 'See bowls',
      secondaryCta: 'Build your bowl',
      stats: [
        { value: '5', label: 'Signature bowls' },
        { value: '4', label: 'Sizes' },
        { value: 'BCN', label: 'Sardenya 360' },
      ],
    },
    signature: {
      title: 'A\u00e7ai bowls',
      subtitle:
        'From lighter mixes to richer combinations with pistachio, Lotus or berries.',
      sizes: [
        { name: 'Small', size: '500 ml', price: '10,9 \u20ac' },
        { name: 'Jungle', size: '710 ml', price: '13,7 \u20ac' },
        { name: 'Infinity', size: '1000 ml', price: '17,8 \u20ac' },
      ],
      bowls: [
        {
          name: 'Fit',
          ingredients:
            'A\u00e7ai, 0% granola, cashews, peanut butter, protein, banana, and mango.',
        },
        {
          name: 'Tropical',
          ingredients:
            'A\u00e7ai, granola, mango sauce, kiwi, pineapple, banana, chia pudding, and seed mix.',
        },
        {
          name: 'Berry',
          ingredients:
            'A\u00e7ai, granola, berries, yogurt, strawberry, coconut, banana, and blueberries.',
        },
        {
          name: 'Dubai Love',
          ingredients:
            'A\u00e7ai, granola, pistachio sauce, strawberry, banana, Chips Ahoy!, and pistachio.',
        },
        {
          name: 'Golden Lotus',
          ingredients:
            'A\u00e7ai, granola, chia, strawberry, banana, condensed milk, Lotus sauce, and Lotus cookie.',
        },
      ],
    },
    custom: {
      title: 'Build your bowl',
      subtitle:
        'Choose your base, fruit, toppings and sauce to build a bowl exactly the way you like it.',
      badge: 'Unlimited toppings',
      badgePrefix: 'for',
      sizes: [
        {
          name: 'Mini',
          volume: '300 ml',
          combo: '2 fruits + 1 topping + 1 sauce',
          price: '6,8 \u20ac',
          extra: '+0,5 \u20ac',
        },
        {
          name: 'Small',
          volume: '500 ml',
          combo: '2 fruits + 2 toppings + 1 sauce',
          price: '10,8 \u20ac',
          extra: '+1,0 \u20ac',
        },
        {
          name: 'Jungle',
          volume: '710 ml',
          combo: '2 fruits + 3 toppings + 2 sauces',
          price: '12,9 \u20ac',
          extra: '+1,5 \u20ac',
        },
        {
          name: 'Infinity',
          volume: '1000 ml',
          combo: '3 fruits + 3 toppings + 2 sauces',
          price: '16,7 \u20ac',
          extra: '+2,0 \u20ac',
        },
      ],
      groups: [
        { name: 'Base', items: ['A\u00e7ai', 'Yogurt'] },
        {
          name: 'Fruits',
          items: [
            'Strawberry',
            'Mango',
            'Kiwi',
            'Banana',
            'Pineapple',
            { label: 'Blueberries', note: '(+0,8 \u20ac)' },
          ],
        },
        {
          name: 'Toppings',
          items: [
            'Yogurt',
            'Coconut',
            'Chia',
            'Honey',
            'Lotus',
            'Granola',
            'Oreo',
            'Chocolate granola',
            'Seed mix',
            'Condensed milk',
            'Powdered milk',
            'White Filipino',
            'Chips Ahoy!',
          ],
          extrasLabel: 'Extras (+1 \u20ac)',
          extras: [
            'Almonds',
            'Cashews',
            'Pistachio',
            'Protein',
            'Gluten free granola',
            'Protein granola',
          ],
        },
        {
          name: 'Sauces',
          items: [
            'Kinder',
            'Lotus',
            'Mango',
            'Nutella',
            'White Nutella',
            'Berries',
            'Chia pudding',
            'Peanut butter',
            'Dulce de leche',
            'Dark chocolate',
          ],
          extrasLabel: 'Extras (+1 \u20ac)',
          extras: ['Rafaello', 'Pistachio', 'Happy Hippo', 'Oreo White'],
        },
      ],
    },
    loyalty: {
      title: 'Loyalty card',
      badgeTitle: "You're the berry best!",
      rewardLine: 'Buy 8 bowls and the next one is free!',
      rewardNote: 'Valid for Small, Jungle and Infinity sizes only',
      freeBowlMessage: '1 free bowl unlocked!',
      frontTags: ['Fit', 'Natural'],
      contacts: [
        { icon: 'instagram', label: '@acaiberry.es' },
        { icon: 'location', label: 'C/Sardenya 360' },
      ],
    },
    story: {
      title: 'Why Acai Berry',
      subtitle: 'Fresh flavours, generous combinations and a Barcelona stop worth coming back to.',
      cards: [
        {
          title: 'Flavours that stick',
          text: 'Acai, fruit, granola, creams and toppings come together in mixes that can be simple, indulgent or somewhere in between.',
        },
        {
          title: 'Made your way',
          text: 'Pick one of the house bowls or build your own by mixing base, fruit, toppings and sauces.',
        },
        {
          title: 'Barcelona stop',
          text: 'A spot to grab something fresh, share a sweet break, or recharge between plans in the city.',
        },
      ],
      visitTitle: 'Visit us',
      visitText:
        'Find us at C/ Sardenya 360, Barcelona. Drop by for one of the house bowls or build your own with your favourite toppings and sauces.',
      visitCta: 'Get directions',
      visitHref:
        'http://google.com/maps/place/A%C3%87AI+BERRY/@41.4057456,2.1683702,16.03z/data=!4m10!1m2!2m1!1zYcOnYWk!3m6!1s0x12a4a322d69ed73d:0x8dfe5ac06e9d9bb5!8m2!3d41.4054942!4d2.1708714!15sCgVhw6dhaVoHIgVhw6dhaZIBDmljZV9jcmVhbV9zaG9wmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIxb2MxRXdWVEZqTVZKWVVtMTRXR0pYYnpCa2EwcHJUakJOTTA0eFJSQULgAQD6AQQIABA9!16s%2Fg%2F11z3n_h15k?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
    },
    footer: {
      rights: 'A\u00e7ai Berry \u00b7 Acai bowls, fruit and toppings in Barcelona.',
      languageLabel: 'Language',
    },
  },
};
