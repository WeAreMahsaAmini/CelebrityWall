import { Celebrity } from '../types'

const BAD_RATE = 0.3
const GOOD_RATE = 0.8

const randomStatus = (): Celebrity['status'] => {
  const random = Math.random()
  if (random < BAD_RATE) return 'BAD'
  if (random < GOOD_RATE) return 'GOOD'
  return 'UGLY'
}

export const data: { celebrities: Celebrity[] } = {
  celebrities: [
    {
      id: 'katyperry',
      name: 'KATY PERRY',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1392465354622791687/w_KwtKcE_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'katyperry',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Rrwt0K1rrx',
    },
    {
      id: 'justinbieber',
      name: 'Justin Bieber',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1473447174591684612/vlsbWYtq_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'justinbieber',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/kobIXw8MJn',
    },
    {
      id: 'taylorswift13',
      name: 'Taylor Swift',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1564101520043479043/eJpWqka2_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'taylorswift13',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/81RUjj9Cza',
    },
    {
      id: 'rihanna',
      name: 'Rihanna',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1133109643734130688/BwioAwkz_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'rihanna',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/gE3AMLvzbI',
    },
    {
      id: 'ladygaga',
      name: 'Lady Gaga',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1548557958564364289/6ewE00_O_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ladygaga',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/BaPZcMQV2f',
    },
    {
      id: 'jtimberlake',
      name: 'Justin Timberlake',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1232096230702014464/E7LexPCo_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'jtimberlake',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/K8gA7tQWxp',
    },
    {
      id: 'TheEllenShow',
      name: 'Ellen DeGeneres',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1478120772044574724/v-dDUYb7_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'TheEllenShow',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/66WOkBu2wQ',
    },
    {
      id: 'britneyspears',
      name: 'Britney Spears 🌹🚀',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1323418800876777474/0w4orMOC_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'britneyspears',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/YssusfOPrj',
    },
    {
      id: 'Cristiano',
      name: 'Cristiano Ronaldo',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Cristiano',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/JlMkKHxKo1',
    },
    {
      id: 'KimKardashian',
      name: 'Kim Kardashian',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1572657250526973952/40Byrl-L_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'KimKardashian',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/TRbotrB3Vz',
    },
    {
      id: 'shakira',
      name: 'Shakira',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1572643505989722112/LHnUQ3tL_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'shakira',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/iKaClxxX5w',
    },
    {
      id: 'selenagomez',
      name: 'Selena Gomez',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1490735661409832963/MdjPf5jL_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'selenagomez',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/lGR8iLnUq1',
    },
    {
      id: 'JLo',
      name: 'jlo',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1551099749113032704/DE3M0LRn_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'JLo',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/43G1jzK578',
    },
    {
      id: 'ddlovato',
      name: 'Demi Lovato',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1529870861888409602/BzR4cdNR_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ddlovato',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/zVAWFm1pp9',
    },
    {
      id: 'jimmyfallon',
      name: 'Jimmy Fallon',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1541556803527401474/tcd_zsiN_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'jimmyfallon',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/bXW1C50AfO',
    },
    {
      id: 'Oprah',
      name: 'Oprah Winfrey',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1123359369570148353/Mh-Rf4Sk_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Oprah',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/IKOnfAha8E',
    },
    {
      id: 'Pink',
      name: 'P!nk',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1387771395275436050/hohwSjOu_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Pink',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/0ttGEO1d8m',
    },
    {
      id: 'Drake',
      name: 'Drizzy',
      imageUrl:
        'http://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Drake',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/WQl8a4epug',
    },
    {
      id: 'Harry_Styles',
      name: 'Harry Styles.',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1527504766322069505/CKkE26SN_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Harry_Styles',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/usuo33543f',
    },
    {
      id: 'onedirection',
      name: 'One Direction',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1286117431304388610/XmfP1XDb_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'onedirection',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/zUsqCh2RnX',
    },
    {
      id: 'BillGates',
      name: 'Bill Gates',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'BillGates',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/UkvHzxUzmH',
    },
    {
      id: 'KingJames',
      name: 'LeBron James',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1421530540063092736/xqtcu8HX_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'KingJames',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/mktrK2FH6c',
    },
    {
      id: 'LilTunechi',
      name: 'Lil Wayne WEEZY F',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1044693697533804546/Z2MiD-wP_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'LilTunechi',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/hJ2L5cP0li',
    },
    {
      id: 'BrunoMars',
      name: 'Bruno Mars',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1488093046747000832/aPjggOc1_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'BrunoMars',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/v4Qwp7p9gK',
    },
    {
      id: 'KAKA',
      name: 'Kaka',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1226626761611456513/MMyVfrYT_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'KAKA',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'Adele',
      name: 'Adele',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1448287947686617089/N7uf8mjs_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Adele',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/31T2EYGNLy',
    },
    {
      id: 'NiallOfficial',
      name: 'Niall Horan',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1466536333288124419/g5Dtpp6S_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'NiallOfficial',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/j3EByyxdNt',
    },
    {
      id: 'MileyCyrus',
      name: 'Miley Cyrus',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1508113981130559500/BGp9Hv1F_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MileyCyrus',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/9TNQV4UgEG',
    },
    {
      id: 'aliciakeys',
      name: 'Alicia Keys',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1433098602994409479/WGbwul6a_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'aliciakeys',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/dJEgJMcnvg',
    },
    {
      id: 'KevinHart4real',
      name: 'Kevin Hart',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1563941988566802433/BKBnGWhb_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'KevinHart4real',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/BswCqgzpvU',
    },
    {
      id: 'pitbull',
      name: 'Pitbull',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1177433020225032193/1loE2ws__400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'pitbull',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/f7mu0pspns',
    },
    {
      id: 'Real_Liam_Payne',
      name: 'Liam',
      imageUrl:
        'http://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Real_Liam_Payne',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'Louis_Tomlinson',
      name: 'Louis Tomlinson',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1564963689844932608/yiiXgzmk_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Louis_Tomlinson',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/OWBgyPHOx5',
    },
    {
      id: 'NICKIMINAJ',
      name: 'Nicki Minaj',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1557858056767057920/JvNo_c73_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'NICKIMINAJ',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/sM8Yvumnzn',
    },
    {
      id: 'neymarjr',
      name: 'Neymar Jr',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1555227266006777856/k4DmXxL3_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'neymarjr',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/AgzYEogkEC',
    },
    {
      id: 'Eminem',
      name: 'Marshall Mathers',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1567245278536953859/aJxLt-q6_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Eminem',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/4XvreGAb2H',
    },
    {
      id: 'AvrilLavigne',
      name: 'Avril Lavigne',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1481686795851120642/GLgT4ZXO_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'AvrilLavigne',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ir8WqiPcDQ',
    },
    {
      id: 'ActuallyNPH',
      name: 'Neil Patrick Harris',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1045049020794761231/9EXXIIk6_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ActuallyNPH',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/vjnxtAuz86',
    },
    {
      id: 'danieltosh',
      name: 'daniel tosh',
      imageUrl:
        'http://pbs.twimg.com/profile_images/218283715/Daniel-Tosh---Shot_2-12976_400x400.gif',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'danieltosh',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'http://t.co/qu6CkTVbHi',
    },
    {
      id: 'davidguetta',
      name: 'David Guetta',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1571534213060362241/U3obcf_F_400x400.png',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'davidguetta',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/KdbWe0TdpV',
    },
    {
      id: 'ConanOBrien',
      name: "Conan O'Brien",
      imageUrl:
        'http://pbs.twimg.com/profile_images/730612231021322240/Rl0_QYhL_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ConanOBrien',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/C7Jqp9zGZV',
    },
    {
      id: 'SrBachchan',
      name: 'Amitabh Bachchan',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1262261228652675072/Pl_u58Pb_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SrBachchan',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/1RqqR1uiwa',
    },
    {
      id: 'aplusk',
      name: 'ashton kutcher',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1546514166051049473/0FM2aPx1_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'aplusk',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/NLfOP26NBK',
    },
    {
      id: 'khloekardashian',
      name: 'Khloé',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1507178462661865474/LtPNS8J1_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'khloekardashian',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/0deDqzcMzi',
    },
    {
      id: 'kourtneykardash',
      name: 'Kourtney Kardashian',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1069844856128716801/JwrwtGdH_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'kourtneykardash',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/RGoySnbjqv',
    },
    {
      id: 'zaynmalik',
      name: 'zayn',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'zaynmalik',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/y9cYcHwCN4',
    },
    {
      id: 'iamsrk',
      name: 'Shah Rukh Khan',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1318511011117199362/htNsviXp_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'iamsrk',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/NJY7giyFC0',
    },
    {
      id: 'coldplay',
      name: 'Coldplay',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1417506973877211138/YIm7dOQH_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'coldplay',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/zVkAnvGWS0',
    },
    {
      id: 'MariahCarey',
      name: 'Mariah Carey',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1570516662830366731/a0m7jUL5_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MariahCarey',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/2YiJ4e3wx2',
    },
    {
      id: 'edsheeran',
      name: 'Ed Sheeran HQ',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1573251525522202624/baU9cfoK_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'edsheeran',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/j112B2ajOn',
    },
    {
      id: 'xtina',
      name: 'Christina Aguilera',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1531342726523981824/Kws1qDWL_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'xtina',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/CTrn7zicuQ',
    },
    {
      id: 'JimCarrey',
      name: 'Jim Carrey',
      imageUrl:
        'http://pbs.twimg.com/profile_images/597780536300478465/CcXer0_P_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'JimCarrey',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'kanyewest',
      name: 'ye',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'kanyewest',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/R6cANtszQ0',
    },
    {
      id: 'chrisbrown',
      name: 'Chris Brown',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1545463963609071619/SQP1kb1G_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'chrisbrown',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/OiR5i8mYmH',
    },
    {
      id: 'aamir_khan',
      name: 'khan saab 🥰',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1504663682562891782/u6SX-McW_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'aamir_khan',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'BeingSalmanKhan',
      name: 'Salman Khan',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1562753790369218560/wtiHWrkG_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'BeingSalmanKhan',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'agnezmo',
      name: 'AGNEZ MO',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1488302598893363202/B1rcuXwj_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'agnezmo',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/6OMe2JjTcs',
    },
    {
      id: 'Beyonce',
      name: 'BEYONCÉ',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1542539418526810113/oXELZZrb_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Beyonce',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/0XuUqRhgXd',
    },
    {
      id: 'blakeshelton',
      name: 'Blake Shelton',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1560491325170106368/bx-M7K53_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'blakeshelton',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/8Q8pJPIPYV',
    },
    {
      id: 'RyanSeacrest',
      name: 'Ryan Seacrest',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1362891881730899968/DwKFmGKN_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'RyanSeacrest',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/HcZR41beQO',
    },
    {
      id: 'ivetesangalo',
      name: 'Ivete Sangalo 🎸',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1542514491484561408/PUwwwj5e_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ivetesangalo',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/EkujUvGmd6',
    },
    {
      id: 'LeoDiCaprio',
      name: 'Leonardo DiCaprio',
      imageUrl:
        'http://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'LeoDiCaprio',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'ParisHilton',
      name: 'ParisHilton',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1519127596868374528/AyJv6gmG_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ParisHilton',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/0ZWZ8QdzcD',
    },
    {
      id: 'iamwill',
      name: 'will.i.am',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1334853746870915075/Jd4bGKUx_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'iamwill',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/sO1wZpkzsw',
    },
    {
      id: 'MohamadAlarefe',
      name: 'د. محمد العريفي',
      imageUrl:
        'http://pbs.twimg.com/profile_images/963487506388922369/tIVqH2_l_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MohamadAlarefe',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Q4K5iMAnHK',
    },
    {
      id: 'KendallJenner',
      name: 'Kendall',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1417948566287360000/4nmMbMAu_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'KendallJenner',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'ashleytisdale',
      name: 'Ashley Tisdale',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1554152099033649152/7IN0XFmq_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ashleytisdale',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/r6O27JxRZF',
    },
    {
      id: 'SnoopDogg',
      name: 'Snoop Dogg',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1564375315526275072/7Xnua7BM_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SnoopDogg',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/zXDi7YE5cb',
    },
    {
      id: 'AlejandroSanz',
      name: 'Alejandro Sanz',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1469105967279259648/5yr65vr4_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'AlejandroSanz',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/W6u8Cd2ZW7',
    },
    {
      id: 'ricky_martin',
      name: 'Ricky Martin',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1547262386587025409/rzyCrRHB_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ricky_martin',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/QGP4qNP8Ra',
    },
    {
      id: '10Ronaldinho',
      name: 'Ronaldinho',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1537593562619060225/AmmxIwWi_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: '10Ronaldinho',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/GDFj4cMlPz',
    },
    {
      id: 'SimonCowell',
      name: 'Simon Cowell',
      imageUrl:
        'http://pbs.twimg.com/profile_images/888341664590331904/zTwHj7D7_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SimonCowell',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'WayneRooney',
      name: 'Wayne Rooney',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1553718938109878275/RHje7Klc_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'WayneRooney',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/3R6VifqW2o',
    },
    {
      id: 'KDTrey5',
      name: 'Kevin Durant',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1563699994393280512/u4KNGaIR_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'KDTrey5',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/gf7hhkgGly',
    },
    {
      id: 'radityadika',
      name: 'raditya dika',
      imageUrl:
        'http://pbs.twimg.com/profile_images/862555400658239489/WpUGS0YX_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'radityadika',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/F0V5gUOJYh',
    },
    {
      id: 'KylieJenner',
      name: 'Kylie Jenner',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1395858482553757696/9_2OqRnn_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'KylieJenner',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/l1g1zWT1r6',
    },
    {
      id: 'ClaudiaLeitte',
      name: 'Claudia Leitte🏝',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1539994556829163522/ZAXhY-si_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ClaudiaLeitte',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/8I8rPzMZmU',
    },
    {
      id: 'DaniloGentili',
      name: 'Danilo Gentili',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1118281699887132673/AWBCEgx0_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'DaniloGentili',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/gMwbETQLwT',
    },
    {
      id: 'shugairi',
      name: 'أحمد الشقيري',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1515797263330721793/4VhapQ1V_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'shugairi',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/f49ToftapX',
    },
    {
      id: 'marcosmion',
      name: 'Marcos Mion',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1536595169159569408/oZItc5nm_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'marcosmion',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/S9JuGbiY20',
    },
    {
      id: 'deepikapadukone',
      name: 'Deepika Padukone',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1344886403444817920/uvBOq5Wc_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'deepikapadukone',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'stephenfry',
      name: 'Stephen Fry',
      imageUrl:
        'http://pbs.twimg.com/profile_images/842053173757984768/ZYLuzKYt_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'stephenfry',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/X6ynCC2MUh',
    },
    {
      id: 'charliesheen',
      name: 'Charlie Sheen',
      imageUrl:
        'http://pbs.twimg.com/profile_images/751591861127491584/l1swjFY4_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'charliesheen',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/60LE6NsUqb',
    },
    {
      id: 'andresiniesta8',
      name: 'Andrés Iniesta',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1567785078666809344/A9FL-ppJ_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'andresiniesta8',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'iHrithik',
      name: 'Hrithik Roshan',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1562322842175565831/fw9ead0K_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'iHrithik',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'priyankachopra',
      name: 'PRIYANKA',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1403400684226052098/ZJ4cQ2Bb_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'priyankachopra',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'LucianoHuck',
      name: 'Luciano Huck',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1500173998080016387/wuOSWMir_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'LucianoHuck',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: '3gerardpique',
      name: 'Gerard Piqué',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1566787587183878153/dp6ucxpm_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: '3gerardpique',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'ZacEfron',
      name: 'Zac Efron',
      imageUrl:
        'http://pbs.twimg.com/profile_images/981768974835695616/2ZGY7o30_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ZacEfron',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/WDT7A5Kzl5',
    },
    {
      id: 'carlyraejepsen',
      name: 'Carly Rae Jepsen',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1554500053699596296/UzStxprZ_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'carlyraejepsen',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/oO0liCnPqV',
    },
    {
      id: 'rustyrockets',
      name: 'Russell Brand',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1506948150837321731/yE53PUgM_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'rustyrockets',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ptDU6qJe5h',
    },
    {
      id: 'juanes',
      name: 'JUANES',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1570076035646906368/_ZEFu-Gm_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'juanes',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/sTxLmb6IT9',
    },
    {
      id: 'PauRubio',
      name: 'Paulina Rubio',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1007335376019570688/zeKFnBk8_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'PauRubio',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/cHKHxahsxG',
    },
    {
      id: 'iamDiddy',
      name: 'Sean "Diddy" Combs',
      imageUrl:
        'http://pbs.twimg.com/profile_images/820010882919002112/a3MjFrvp_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'iamDiddy',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'Ludacris',
      name: 'Ludacris',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1468059077993447432/jacDbzAz_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Ludacris',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/shINrgr6lt',
    },
    {
      id: 'SHAQ',
      name: 'SHAQ',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1500966287907901440/PhiJ-9-4_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SHAQ',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/XgBwcqpBq8',
    },
    {
      id: 'paulocoelho',
      name: 'Paulo Coelho',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1405585501256667136/n6qrOVGo_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'paulocoelho',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/gCfGcJhU6c',
    },
    {
      id: 'tomhanks',
      name: 'Tom Hanks',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1193951507026075648/Ot3GmqGK_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'tomhanks',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/mt8FScvcYZ',
    },
    {
      id: 'Dr_alqarnee',
      name: 'د. عائض القرني',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1457703251604910080/-qLO_SfS_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Dr_alqarnee',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/YY0PcegLEp',
    },
    {
      id: 'Usher',
      name: 'Usher Raymond IV',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1570866307926458369/3ix1Gq_1_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Usher',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/1vcElGXzdh',
    },
    {
      id: 'akshaykumar',
      name: 'Akshay Kumar',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1565187838303383553/GhjYyIsG_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'akshaykumar',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ZiKQwlVLn7',
    },
    {
      id: 'LunaMaya26',
      name: 'luna maya',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1495662402574041093/HdodwcLU_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'LunaMaya26',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/H2kkcMQ6iJ',
    },
    {
      id: 'rickygervais',
      name: 'Ricky Gervais',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1379503126076604416/xyP35KuE_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'rickygervais',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/lk9B1LfexW',
    },
    {
      id: 'sherinasinna',
      name: 'שרינה',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1507371968349478913/C6XWWYNz_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'sherinasinna',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'CMYLMZ',
      name: 'Cem Yılmaz',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1531007362525437960/ugj7QX9T_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'CMYLMZ',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/7mSqiOt2oI',
    },
    {
      id: 'nickjonas',
      name: 'Nick Jonas',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1498661005273882628/mdZPG3U9_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'nickjonas',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/05ltFz6mIs',
    },
    {
      id: 'XabiAlonso',
      name: 'Xabi Alonso',
      imageUrl:
        'http://pbs.twimg.com/profile_images/604912859798245376/vqcBliGi_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'XabiAlonso',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'TheRock',
      name: 'Dwayne Johnson',
      imageUrl:
        'http://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_400x400.jpeg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'TheRock',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/T7u92u5UbT',
    },
    {
      id: 'StephenAtHome',
      name: 'Stephen Colbert',
      imageUrl:
        'http://pbs.twimg.com/profile_images/627669832549441536/hv1AMpO0_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'StephenAtHome',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'aguerosergiokun',
      name: 'Sergio Kun Aguero',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1061753629722492929/dGtVACSP_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'aguerosergiokun',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/MToWRjyRO9',
    },
    {
      id: 'VictoriaJustice',
      name: 'Victoria Justice',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1530306411669835776/VhNAweQQ_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'VictoriaJustice',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/c0nOaNWOj3',
    },
    {
      id: 'FALCAO',
      name: 'Radamel Falcao',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1554204006960009219/XQHn4NJk_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'FALCAO',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/8uS5kGPtkS',
    },
    {
      id: 'lindsaylohan',
      name: 'Lindsay Lohan',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1246102549184339971/kl7zrsqF_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'lindsaylohan',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/j2WtHXamdn',
    },
    {
      id: 'arrahman',
      name: 'A.R.Rahman',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1209988634184581120/Bu95OE_R_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'arrahman',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/beodWW6qzA',
    },
    {
      id: 'AustinMahone',
      name: 'Austin Mahone',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1554457563932098560/toNi8TZk_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'AustinMahone',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/GKNqjzHW2B',
    },
    {
      id: 'victoriabeckham',
      name: 'Victoria Beckham',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1565683728122368000/-gZhARD6_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'victoriabeckham',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ye3KOeXejJ',
    },
    {
      id: 'jamesdrodriguez',
      name: 'James Rodríguez',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1284787824869412865/no2B3_Mr_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'jamesdrodriguez',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Vce9R6Ti4r',
    },
    {
      id: 'TreySongz',
      name: 'TreySongz.eth',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1474428171806253060/MJGZIJd7_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'TreySongz',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/U3ACKG02jA',
    },
    {
      id: 'SofiaVergara',
      name: 'Sofia Vergara',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1266466408818339840/enKa2TfW_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SofiaVergara',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'jessicaalba',
      name: 'Jessica Alba',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1065455403046076416/8F4b6lMk_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'jessicaalba',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/gkqMei509D',
    },
    {
      id: 'RafaelNadal',
      name: 'Rafa Nadal',
      imageUrl:
        'http://pbs.twimg.com/profile_images/898280220037443585/mthp5TlW_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'RafaelNadal',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'rafinhabastos',
      name: 'Rafinha Bastos',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1504496542220234761/7ybXqMCE_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'rafinhabastos',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/a7QBV55Tzd',
    },
    {
      id: 'daddy_yankee',
      name: 'Daddy Yankee 🐐',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1504943298447908864/Qng0_cK6_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'daddy_yankee',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/xuVgBcZUVQ',
    },
    {
      id: 'afgansyah_reza',
      name: '-',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1381023256497414145/VK8D9bAr_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'afgansyah_reza',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'Anahi',
      name: 'Anahi',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1344059824527568899/VrW_kb2y_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Anahi',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/inQI32NFSV',
    },
    {
      id: 'LMFAO',
      name: 'LMFAO',
      imageUrl:
        'http://pbs.twimg.com/profile_images/965710744431054848/xDYp6WTr_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'LMFAO',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'http://t.co/Amz8pk3eud',
    },
    {
      id: 'realwbonner',
      name: 'William Bonner',
      imageUrl:
        'http://pbs.twimg.com/profile_images/488476438065340416/Dw9kKecg_400x400.jpeg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'realwbonner',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/26YQPK2Bbq',
    },
    {
      id: 'imVkohli',
      name: 'Virat Kohli',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'imVkohli',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/qtAjdO7L6G',
    },
    {
      id: 'JessieJ',
      name: 'Jessie J',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1402017983518621699/zY0PasZw_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'JessieJ',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/a58mReKSLX',
    },
    {
      id: 'vidialdiano',
      name: 'Vidi Aldiano',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1550294589554438145/YLTqh_MP_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'vidialdiano',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/DxGXPAxUHr',
    },
    {
      id: 'annecurtissmith',
      name: 'Anne Curtis-Smith',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1563319496097824769/buG2eJtn_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'annecurtissmith',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/oJrxgExRFB',
    },
    {
      id: 'sachin_rt',
      name: 'Sachin Tendulkar',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1558417367129923584/7Z5Gu1Yy_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'sachin_rt',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/FWGkg8yOGL',
    },
    {
      id: 'MarceloTas',
      name: 'Marcelo Tas',
      imageUrl:
        'http://pbs.twimg.com/profile_images/717052832973774850/RdeLXx3o_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MarceloTas',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/CuVWVOvvbF',
    },
    {
      id: 'mishari_alafasy',
      name: 'برنامج مقامات',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1571669725234577409/LliXptHP_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'mishari_alafasy',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/EFk270RPFy',
    },
    {
      id: 'Carles5puyol',
      name: 'Carles Puyol',
      imageUrl:
        'http://pbs.twimg.com/profile_images/880014123785998336/GYLppyjs_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Carles5puyol',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/MJNlN1r7gT',
    },
    {
      id: 'SethMacFarlane',
      name: 'Seth MacFarlane',
      imageUrl:
        'http://pbs.twimg.com/profile_images/477598819715395585/g0lGqC_J_400x400.jpeg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SethMacFarlane',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'thalia',
      name: 'Thalia',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1532555031211384839/ciE_ddGH_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'thalia',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Uonl9un8bx',
    },
    {
      id: 'MarcAnthony',
      name: 'Marc Anthony',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1508468522908897287/OLDk-Ixl_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MarcAnthony',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/EkRvsEtYGu',
    },
    {
      id: 'cesc4official',
      name: 'Cesc Fàbregas Soler',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1525142560661970944/2h-8bjad_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'cesc4official',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/KPXAbPfVx7',
    },
    {
      id: '50cent',
      name: '50cent',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1526260297094373378/9XOieau4_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: '50cent',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/vzsLXPu2aX',
    },
    {
      id: 'Pharrell',
      name: 'Pharrell Williams',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1534208291806408711/Jr6tOXER_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Pharrell',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/3z4ougphDE',
    },
    {
      id: 'joejonas',
      name: 'J O E  J O N A S',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1569480963645743104/oAwbOONB_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'joejonas',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/4QPP5WwDGL',
    },
    {
      id: 'BigSean',
      name: 'Sean Don',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1497110685930590211/fBPsED-K_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'BigSean',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/H5dWXICu0z',
    },
    {
      id: '5SOS',
      name: '5 Seconds of Summer',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1573160326509785089/ZStxukpD_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: '5SOS',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ZfQAbHUEFf',
    },
    {
      id: 'azizansari',
      name: 'Aziz Ansari',
      imageUrl:
        'http://pbs.twimg.com/profile_images/421377161/azizlittletwitter_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'azizansari',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/SXFn3jgKZ1',
    },
    {
      id: 'kobebryant',
      name: 'Kobe Bryant',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1082170661856890884/UA8DEgjO_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'kobebryant',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/usJHBHZXu8',
    },
    {
      id: 'davidbisbal',
      name: 'davidbisbal',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1542995994169802755/s3r9T0DC_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'davidbisbal',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/14b5hLNobG',
    },
    {
      id: 'juniorbachchan',
      name: 'Abhishek 𝐁𝐚𝐜𝐡𝐜𝐡𝐚𝐧',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1477294685039128576/OZnqgY1a_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'juniorbachchan',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'Tatawerneck',
      name: 'Tata werneck',
      imageUrl:
        'http://pbs.twimg.com/profile_images/378800000787995400/0344699da97c884e2ff1459137143248_400x400.jpeg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Tatawerneck',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'channingtatum',
      name: 'Channing Tatum',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1123720923272613888/MTGCMx6F_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'channingtatum',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/zO7TJLqqGk',
    },
    {
      id: 'Persie_Official',
      name: 'Robin van Persie',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1286278123076681729/SUGvA0aa_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Persie_Official',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Dxuh14cenr',
    },
    {
      id: 'sonamakapoor',
      name: 'Sonam K Ahuja',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1145948449193566208/SvvELvMl_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'sonamakapoor',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'CodySimpson',
      name: 'Cody Simpson',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1560864162065985536/JmT69Jfj_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'CodySimpson',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/C9cxJ4LeS9',
    },
    {
      id: 'LuisFonsi',
      name: 'Luis Fonsi',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1491927680236896280/1xaSP3B8_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'LuisFonsi',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/P9NidJNeR0',
    },
    {
      id: 'MarcoLuque',
      name: 'Marco Luque',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1506329111622529033/lKVstXJJ_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MarcoLuque',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/sUBT19iMtV',
    },
    {
      id: 'DavidLuiz_4',
      name: 'David Luiz',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1437566632013049861/BRkFtL-1_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'DavidLuiz_4',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/lmrjGSuHPA',
    },
    {
      id: 'GarethBale11',
      name: 'Gareth Bale',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1540814373752545280/H0b2qYdF_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'GarethBale11',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ED9QOK5CI5',
    },
    {
      id: 'JohnCena',
      name: 'John Cena',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1521124526960037889/dAo3nO9e_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'JohnCena',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/X2frQoZ7qL',
    },
    {
      id: 'EugenioDerbez',
      name: 'Eugenio Derbez',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1158581892142133249/E1h6tp42_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'EugenioDerbez',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/qBZDwOexxQ',
    },
    {
      id: 'JColeNC',
      name: 'J. Cole',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1509627549130932231/-6te0g0S_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'JColeNC',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/SNVvebitVd',
    },
    {
      id: 'elissakh',
      name: 'Elissa',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1559141764732272641/seyoI0hp_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'elissakh',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/4Pti31Fscu',
    },
    {
      id: 'MirandaCosgrove',
      name: 'Miranda Cosgrove',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1125474945188880384/vZeHNVSw_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MirandaCosgrove',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/rhHDdknrTZ',
    },
    {
      id: 'johnlegend',
      name: 'John Legend',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1556091675365126146/Q7E_Fdb2_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'johnlegend',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/zYWh7pCI4E',
    },
    {
      id: 'EvaLongoria',
      name: 'Eva Longoria Baston',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1510994523169730577/L8xub2eH_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'EvaLongoria',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/oIIXcEJydx',
    },
    {
      id: 'salman_alodah',
      name: 'سلمان العودة (معتقل)',
      imageUrl:
        'http://pbs.twimg.com/profile_images/845914637778501632/o4Y1--CS_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'salman_alodah',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/5DUCrqz2Pr',
    },
    {
      id: 'karanjohar',
      name: 'Karan Johar',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1558754284308729857/cuCsyfAl_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'karanjohar',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/kO7DNiuwxA',
    },
    {
      id: 'Guaje7Villa',
      name: 'David Villa',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1523617369674989569/KjorDrBH_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Guaje7Villa',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ORflPzOWVX',
    },
    {
      id: 'CherLloyd',
      name: 'Cher Lloyd',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1389552390651711493/oowX-jpX_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'CherLloyd',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/jGIEYCrRHo',
    },
    {
      id: 'JessicaSimpson',
      name: 'Jessica Simpson',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1570107044174118918/C42zbBwq_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'JessicaSimpson',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Kz0mYJlKog',
    },
    {
      id: 'NancyAjram',
      name: 'Nancy Ajram',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1545417106354733056/VAaRV5QL_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'NancyAjram',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/pRo1MVde1P',
    },
    {
      id: 'SpiderAnderson',
      name: 'Anderson Silva',
      imageUrl:
        'http://pbs.twimg.com/profile_images/556099144087904256/-m6vdezd_400x400.png',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SpiderAnderson',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/jD9qjLPa9L',
    },
    {
      id: 'montanertwiter',
      name: 'Ricardo Montaner',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1527705990463897605/T4GwnHqG_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'montanertwiter',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/n1d8iqGpHe',
    },
    {
      id: 'LittleMix',
      name: 'Little Mix',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1428279418347270152/T4NFbxno_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'LittleMix',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/NgwENhm2UL',
    },
    {
      id: 'carmeloanthony',
      name: 'Carmelo Anthony',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1336430445383327745/kMWB9JJ9_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'carmeloanthony',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/J7sXgAyKYh',
    },
    {
      id: 'SarahKSilverman',
      name: 'Sarah Silverman',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1328554817384448000/iuGQpg1-_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SarahKSilverman',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/li4bxrvdvV',
    },
    {
      id: 'shahidkapoor',
      name: 'Shahid Kapoor',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1520369721149104131/5zBuhli5_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'shahidkapoor',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/wsm1GKrKWX',
    },
    {
      id: 'Tyga',
      name: 'T-Raww',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1572039128090562560/BkmoPOhx_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Tyga',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ZNIjYXtdmi',
    },
    {
      id: 'ChespiritoRGB',
      name: 'Roberto G. Bolaños',
      imageUrl:
        'http://pbs.twimg.com/profile_images/548600166949732352/jc5HS6TN_400x400.jpeg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ChespiritoRGB',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'snooki',
      name: 'Nicole Polizzi',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1446306113553674264/SicZw2My_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'snooki',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/dN7ARrIIR9',
    },
    {
      id: 'cuervotinelli',
      name: 'marcelo tinelli',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1049121801303941120/BIielr-X_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'cuervotinelli',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/priVWs6lYi',
    },
    {
      id: '143redangel',
      name: 'Angel Locsin',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1123859468045963264/G6JH22kC_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: '143redangel',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/FcwJl1uhoo',
    },
    {
      id: 'IAMQUEENLATIFAH',
      name: 'Queen Latifah',
      imageUrl:
        'http://pbs.twimg.com/profile_images/874682365506756608/WcFH3Ypp_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'IAMQUEENLATIFAH',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/CVOmJH2XjS',
    },
    {
      id: 'ZooeyDeschanel',
      name: 'zooey deschanel',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1733229968/zd_as_bunny_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ZooeyDeschanel',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/mlCw0cOvTC',
    },
    {
      id: 'simonpegg',
      name: 'Pegg News',
      imageUrl:
        'http://pbs.twimg.com/profile_images/864793956814651396/3BKfTLH0_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'simonpegg',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/60OAQdPZyh',
    },
    {
      id: 'RaffiAhmadLagi',
      name: '.',
      imageUrl:
        'http://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'RaffiAhmadLagi',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'NeYoCompound',
      name: 'NE-YO',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1537655740592140288/E-BTP3AL_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'NeYoCompound',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/GpfrcZzaza',
    },
    {
      id: 'CalvinHarris',
      name: 'Calvin Harris',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1504156303471558657/-ocHtFjt_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'CalvinHarris',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/x7KWWXIlzF',
    },
    {
      id: 'richardbranson',
      name: 'Richard Branson',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1410740591483293697/tRbW1XoV_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'richardbranson',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Ij9sFRFOkg',
    },
    {
      id: 'ciara',
      name: 'Ciara',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1568323928497754112/38c3f3Le_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ciara',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/nSDTSggJIQ',
    },
    {
      id: 'SteveMartinToGo',
      name: 'Steve Martin',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1481799220730421248/ZGZhhUPO_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SteveMartinToGo',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/cHeM5DRC2l',
    },
    {
      id: 'DaniAlvesD2',
      name: 'Daniel Alves',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1552091951398264832/t5IZaoRn_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'DaniAlvesD2',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/dXQNqn6Bvv',
    },
    {
      id: 'KELLYROWLAND',
      name: 'KELENDRIA ROWLAND',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1481823387315965952/k3vDtIpl_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'KELLYROWLAND',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/u68Er8KlOP',
    },
    {
      id: 'Fearnecotton',
      name: 'fearne cotton',
      imageUrl:
        'http://pbs.twimg.com/profile_images/941280771230392320/NYn0a220_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Fearnecotton',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/JSiqRjkgB8',
    },
    {
      id: 'rioferdy5',
      name: 'Rio Ferdinand',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1427166272186368001/2jLLfJFI_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'rioferdy5',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/gpims3JrEM',
    },
    {
      id: 'FloydMayweather',
      name: 'Floyd Mayweather',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1506028822612774918/_C-CkgoR_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'FloydMayweather',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'Luke5SOS',
      name: 'Luke Hemmings',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1417626623210258432/VK6jKCiR_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Luke5SOS',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/fyrNMCrOai',
    },
    {
      id: 'shireensungkar',
      name: 's h i r e e n',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1206104593777610752/hT9dEyDD_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'shireensungkar',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'andersoncooper',
      name: 'Anderson Cooper',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1570083511561764864/MMiUrPWv_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'andersoncooper',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/2FoVuFAJcn',
    },
    {
      id: 'FabioPorchat',
      name: 'Fabio Porchat',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1478433881611288578/1MZ4h-WX_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'FabioPorchat',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/EpOfk6KD1i',
    },
    {
      id: 'FarOutAkhtar',
      name: 'Farhan Akhtar',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1370401052130906112/5cemwn4h_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'FarOutAkhtar',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/dglUzvMFTP',
    },
    {
      id: 'jennettemccurdy',
      name: 'Jennette McCurdy',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1511063974841831426/_7qyyInw_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'jennettemccurdy',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/qlTDhox5Kz',
    },
    {
      id: 'gusttavo_lima',
      name: 'Gusttavo Lima',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1545038408182951937/fUjzE8tt_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'gusttavo_lima',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/nqpeIjJWub',
    },
    {
      id: 'bellathorne',
      name: 'BITCHIMBELLATHORNE',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1139961385205534720/Sh0qPHDu_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'bellathorne',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/JhFxJXslcs',
    },
    {
      id: 'hollywills',
      name: 'Holly Willoughby',
      imageUrl:
        'http://pbs.twimg.com/profile_images/76992094/DSC01831_400x400.JPG',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'hollywills',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/iKaDATBAUR',
    },
    {
      id: 'JuanLuisGuerra',
      name: 'Juan Luis Guerra',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1392944816649015300/qr9i7Ac5_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'JuanLuisGuerra',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/GwE0467yPy',
    },
    {
      id: 'Tip',
      name: 'T.I.',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1116802276075528192/QgYHgL48_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Tip',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Hm0GeH0qlv',
    },
    {
      id: 'PerezHilton',
      name: 'Perez Hilton',
      imageUrl:
        'http://pbs.twimg.com/profile_images/668939771914223616/EYUGQdtq_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'PerezHilton',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/WelP06Kku4',
    },
    {
      id: 'DwightHoward',
      name: 'Dwight Howard',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1155592340611981312/ZlrkHblt_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'DwightHoward',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/sxJtgQkmei',
    },
    {
      id: 'CHAYANNEMUSIC',
      name: 'CHAYANNE',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1572983985856290817/n-WEGun6_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'CHAYANNEMUSIC',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/YTtPrFkLtL',
    },
    {
      id: 'Ricardo_Arjona',
      name: 'Ricardo Arjona ®',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1207402724582723598/OQz0kH61_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Ricardo_Arjona',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/xnA8GvEKBq',
    },
    {
      id: 'aliaa08',
      name: 'Alia Bhatt',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1536923035869261824/YYuIvYiI_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'aliaa08',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/7j7Svt2PMg',
    },
    {
      id: 'vicegandako',
      name: 'jose marie viceral',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1563367209782906880/6JlrxLiZ_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'vicegandako',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'Zendaya',
      name: 'Zendaya',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1568802877933588482/Pnwh7rKm_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Zendaya',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Jv7X4OyzVI',
    },
    {
      id: 'DulceMaria',
      name: 'Dulce Maria',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1490950692596559873/nErgwrHr_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'DulceMaria',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/RrhHHI4Mha',
    },
    {
      id: 'oceara',
      name: 'oceara',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1453010272403312655/9KFpO-BU_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'oceara',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'iansomerhalder',
      name: 'Ian Somerhalder',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1265911518115160064/3awhurkz_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'iansomerhalder',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/oDOcZ3oPBT',
    },
    {
      id: 'KrisJenner',
      name: 'Kris Jenner',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1148230318911963136/QO3WaOWg_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'KrisJenner',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/JwfRO7KAtv',
    },
    {
      id: 'jimmykimmel',
      name: 'Jimmy Kimmel',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1573751840549789696/YHulcLLr_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'jimmykimmel',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/pUPd8FEb9l',
    },
    {
      id: 'RealHughJackman',
      name: 'Hugh Jackman',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1302962150302982146/NTb6iGpC_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'RealHughJackman',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'luansantana',
      name: 'Luan Santana 🫀',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1541300568894980098/RUAcNlHq_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'luansantana',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/K8XuMs7NtA',
    },
    {
      id: 'IGGYAZALEA',
      name: 'IGGY AZALEA',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1572445104937537536/qLJmjCWy_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'IGGYAZALEA',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'GalileaMontijo',
      name: 'Galilea Montijo',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1373276638616621058/8iPYdX3c_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'GalileaMontijo',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'AnushkaSharma',
      name: 'Anushka Sharma',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1397933191344791560/ovmcd_a0_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'AnushkaSharma',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/BcI0eeZe2S',
    },
    {
      id: 'robkardashian',
      name: 'ROBERT KARDASHIAN',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1484079127720173568/hTzGeE16_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'robkardashian',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/IhAX4emGMR',
    },
    {
      id: 'Akon',
      name: 'AKON',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1562286086956662784/DF0SwiUs_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Akon',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/i2OrWrdaX4',
    },
    {
      id: 'jason_mraz',
      name: 'Jason Mraz',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1415799297807818755/yQnDXw4H_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'jason_mraz',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/oYEV9eVeO1',
    },
    {
      id: 'ninadobrev',
      name: 'Nina Dobrev',
      imageUrl:
        'http://pbs.twimg.com/profile_images/993610242062598144/u8JD-hqw_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ninadobrev',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/HuOOVYtJPd',
    },
    {
      id: 'OMARCHAPARRO',
      name: 'Omar Chaparro',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1428567805130166274/55zP0Kmd_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'OMARCHAPARRO',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/dRgF7ioBxi',
    },
    {
      id: 'SergioRamos',
      name: 'Sergio Ramos',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1511361408813969410/PblZYZsj_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SergioRamos',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/RlpMZXLq4P',
    },
    {
      id: 'rodrigovesgo',
      name: 'Rodrigo Scarpa',
      imageUrl:
        'http://pbs.twimg.com/profile_images/456460010722058245/dvKPbmGY_400x400.jpeg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'rodrigovesgo',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/gS1GeUNEAD',
    },
    {
      id: 'SonakshiSinha',
      name: 'Sonakshi Sinha',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1524929840624721920/_tYZZRaK_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SonakshiSinha',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'Mascherano',
      name: 'Javier Mascherano',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1406735140529782791/hIOLDTPk_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Mascherano',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'chetan_bhagat',
      name: 'Chetan Bhagat',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1451455623527211014/BcT92uhK_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'chetan_bhagat',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/4OjN2xilBd',
    },
    {
      id: 'Calum5SOS',
      name: 'Calum Hood',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1501762622051340293/G9xmOn6i_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Calum5SOS',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/8LsZBYWfuW',
    },
    {
      id: 'CH14_',
      name: 'Chicharito Hernandez',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1528611428105523201/PD6R6z84_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'CH14_',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/YL9dbEHRGf',
    },
    {
      id: 'jk_rowling',
      name: 'J.K. Rowling',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1567278791579369472/dnq4ZU5j_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'jk_rowling',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/sQiPGyMIFA',
    },
    {
      id: 'official_flo',
      name: 'FLO RIDA',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1542534458250772482/dciisZ4y_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'official_flo',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/BpwhXuspE0',
    },
    {
      id: 'chelseahandler',
      name: 'Chelsea Handler',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1390403188184866818/Mfw1YI6C_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'chelseahandler',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/rO36Sh8l13',
    },
    {
      id: 'atademirer',
      name: 'atademirer',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1165640267585740800/1L3I8oRX_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'atademirer',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'ScottDisick',
      name: 'Scott Disick',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1027672790487298048/AX5JkkiX_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ScottDisick',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'CherylOfficial',
      name: 'Cheryl',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1145340192045326336/YRBtoZoX_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'CherylOfficial',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'LuisSuarez9',
      name: 'Luis Suárez',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1568743879481954305/TBDWoxqF_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'LuisSuarez9',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/vzta0A7JpW',
    },
    {
      id: 'ParineetiChopra',
      name: 'Parineeti Chopra',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1571735535579959296/rcBs_weI_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ParineetiChopra',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'RobertDowneyJr',
      name: 'Robert Downey Jr',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1353806309397655553/0zEtkDvx_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'RobertDowneyJr',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/YxoO6uZU1l',
    },
    {
      id: 'G_Higuain',
      name: 'Gonzalo Higuaín',
      imageUrl:
        'http://pbs.twimg.com/profile_images/736451449534709760/N9GZNtk-_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'G_Higuain',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'jimmycarr',
      name: 'Jimmy Carr',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1437770038191198221/QVF68Hn2_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'jimmycarr',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/qhc4Sh4dn9',
    },
    {
      id: 'TomCruise',
      name: 'Tom Cruise',
      imageUrl:
        'http://pbs.twimg.com/profile_images/603269306026106880/42CwEF4n_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'TomCruise',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ZwNW2ZEY9q',
    },
    {
      id: 'kendricklamar',
      name: 'Kendrick Lamar',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1103764272654442496/wcNdeqop_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'kendricklamar',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/tiMoAap4de',
    },
    {
      id: 'serenawilliams',
      name: 'Serena Williams',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1499099651626127361/MnnIvHtN_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'serenawilliams',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/dQQQA3ino7',
    },
    {
      id: 'Residente',
      name: 'Residente',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1504518852775870464/2_AuUMXr_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Residente',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/1HhUwbhob1',
    },
    {
      id: 'adamlevine',
      name: 'Adam Levine',
      imageUrl:
        'http://pbs.twimg.com/profile_images/2708050576/45637f9375bdf044ba5f66376221fa36_400x400.jpeg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'adamlevine',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'http://t.co/ewJ3B4NdBX',
    },
    {
      id: 'CarlosLoret',
      name: 'Carlos Loret de Mola',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1433508364353474564/GsRhubPa_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'CarlosLoret',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/s6NyJ058oO',
    },
    {
      id: 'JeremyClarkson',
      name: 'Jeremy Clarkson',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1903539737/image_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'JeremyClarkson',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/tDpJcANPe8',
    },
    {
      id: 'ahickmann',
      name: 'Ana Hickmann',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1566058430925791236/X9Czzy3J_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ahickmann',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/pFvoni97LG',
    },
    {
      id: 'Talhabeeb',
      name: 'أ. د. طارق الحبيب',
      imageUrl:
        'http://pbs.twimg.com/profile_images/620506305665499136/WqcbwQP1_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Talhabeeb',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/FlQ2C2GcX2',
    },
    {
      id: 'VanessaHudgens',
      name: 'Vanessa Hudgens',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1016376658264252417/G-OwhAi2_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'VanessaHudgens',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'TareqAlSuwaidan',
      name: 'Dr.TareqAlSuwaidan',
      imageUrl:
        'http://pbs.twimg.com/profile_images/755114644499492864/S21YNbzw_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'TareqAlSuwaidan',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/UQouLIbKuJ',
    },
    {
      id: 'JKCorden',
      name: 'James Corden',
      imageUrl:
        'http://pbs.twimg.com/profile_images/811060088437882881/xNh5g2Fp_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'JKCorden',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'Michael5SOS',
      name: 'michael clifford',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1303069970889281536/kKGxThQL_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Michael5SOS',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/tspRcKmfCC',
    },
    {
      id: 'elliegoulding',
      name: 'Ellie Goulding',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1573451601221767171/SegAu9tr_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'elliegoulding',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/DNUuLsFG0y',
    },
    {
      id: 'camerondallas',
      name: 'Cameron Dallas',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1533871838488670208/AD_bYDS4_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'camerondallas',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'lopezdoriga',
      name: 'Joaquín López-Dóriga',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1527319906760335362/K3Ez6Lb5_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'lopezdoriga',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/xWxnQ3Fzll',
    },
    {
      id: 'thekiranbedi',
      name: 'Kiran Bedi',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1554335771460792321/4-epx560_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'thekiranbedi',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/EY689sGC4N',
    },
    {
      id: 'raisa6690',
      name: 'Raisa Andriana',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1402869529626046464/QusEnJaS_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'raisa6690',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/LN2PUCAcsd',
    },
    {
      id: 'lilyallen',
      name: 'Lily A',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1562055589584404483/C5v4nJvC_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'lilyallen',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'AnupamPKher',
      name: 'Anupam Kher',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1572617235512061954/04lu0XE3_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'AnupamPKher',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/PQEC9tNqLm',
    },
    {
      id: 'MichelleObama',
      name: 'Michelle Obama',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1550073782374744066/UMe2HL99_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MichelleObama',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/RjeJ9bWjs1',
    },
    {
      id: 'maryjblige',
      name: 'Mary J. Blige',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1485006158242922497/Nx9oB_8L_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'maryjblige',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/IKCPpmi8j2',
    },
    {
      id: 'oserginho',
      name: 'Serginho Groisman',
      imageUrl:
        'http://pbs.twimg.com/profile_images/639901904244490240/qP2MNgd9_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'oserginho',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/HEP9s8TaW4',
    },
    {
      id: 'justdemi',
      name: 'Demi Moore',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1169295280870739972/UbufVd3f_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'justdemi',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/xu8xz5lfP7',
    },
    {
      id: 'bernardokath',
      name: 'KATH 🐘',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1230499229480570881/aDoiC7og_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'bernardokath',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'SamuelLJackson',
      name: 'Samuel L. Jackson',
      imageUrl:
        'http://pbs.twimg.com/profile_images/742877069793742848/c0Ec2mTU_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SamuelLJackson',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'http://t.co/vViF4iyusx',
    },
    {
      id: 'NicoleScherzy',
      name: 'Nicole Scherzinger',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1300549689058578432/28u7QxYl_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'NicoleScherzy',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/5Q7TQkzdAZ',
    },
    {
      id: 'bep',
      name: 'Black Eyed Peas',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1537712091783651335/Ae3QiT41_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'bep',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/pV0jRJY7o4',
    },
    {
      id: 'okanbayulgen',
      name: 'okan bayulgen',
      imageUrl:
        'http://pbs.twimg.com/profile_images/471807290710839296/l5Dk84et_400x400.jpeg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'okanbayulgen',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/tll7hLAsWr',
    },
    {
      id: 'INDONESIAinLOVE',
      name: 'INDONESIAinLOVE',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1367683347783159808/WwSxPEMm_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'INDONESIAinLOVE',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Msx3aYyleT',
    },
    {
      id: 'amrkhaled',
      name: 'Amr Khaled',
      imageUrl:
        'http://pbs.twimg.com/profile_images/935311151210094593/1yuTRZ3g_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'amrkhaled',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'MeekMill',
      name: 'MeekMill',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1488755792081833986/RNwmrPA__400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MeekMill',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/QZDzse4qdU',
    },
    {
      id: 'antanddec',
      name: 'antanddec',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1361682509856190474/r7aVfKlf_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'antanddec',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/5Zgq6XMurH',
    },
    {
      id: 'casillasworld',
      name: 'CasillasWorld',
      imageUrl:
        'http://pbs.twimg.com/profile_images/819217391716548608/anei_d9l_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'casillasworld',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'RitaOra',
      name: 'Rita Ora',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1446521481098403876/bVnS33ye_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'RitaOra',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/5hrF56xlrW',
    },
    {
      id: 'lulopilato',
      name: 'Luisana Lopilato',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1544450577928683520/Tb519__U_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'lulopilato',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ICr9Bmjn3S',
    },
    {
      id: 'Fiuk',
      name: 'FIUK 🎸🚀💥',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1402277818034237450/GMZwWqjc_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Fiuk',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/rPRa5sZTpp',
    },
    {
      id: 'NickCannon',
      name: 'Nick Cannon',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1565055412948176896/_9MW2z_A_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'NickCannon',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/pCHQtXRNnu',
    },
    {
      id: 'bepe20s',
      name: '•Bambang Pamungkas•',
      imageUrl:
        'http://pbs.twimg.com/profile_images/669737273152270337/pGpXNPBE_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'bepe20s',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'SandyLeah',
      name: 'Sandy Leah',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1489333058163593217/GXkrFUPn_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SandyLeah',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/TvNPBL2YiQ',
    },
    {
      id: 'mirandalambert',
      name: 'Miranda Lambert',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1501926876029366273/iUN654hJ_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'mirandalambert',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/vQu2b4zmFS',
    },
    {
      id: 'Angelluisr',
      name: 'Angel Rivera',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1558263084082405376/YtrOLdXT_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Angelluisr',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/P89si4DzEw',
    },
    {
      id: 'Nashgrier',
      name: 'Nash Grier',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1210943015163965450/capahnvH_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Nashgrier',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/IrwRSljX3H',
    },
    {
      id: 'bclsinclair',
      name: 'bunga citra lestari',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1372610907184918532/VUyW-KHx_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'bclsinclair',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/JeIiIkq12o',
    },
    {
      id: 'DemetAkalin',
      name: 'Demet Akalin',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1341479114734231554/HqV5lPUv_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'DemetAkalin',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/x9vucJ5B1N',
    },
    {
      id: 'YengPLUGGEDin',
      name: 'Yeng Constantino',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1567780710722973696/JmhTBfmz_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'YengPLUGGEDin',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/iKvAOKvoXD',
    },
    {
      id: 'mindykaling',
      name: 'Mindy Kaling',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1110621726923120640/Cc41gOZL_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'mindykaling',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'lukebryanonline',
      name: 'Luke Bryan Test',
      imageUrl:
        'http://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'lukebryanonline',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'siwon407',
      name: 'S',
      imageUrl:
        'http://pbs.twimg.com/profile_images/890863542823288832/I53IcF1N_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'siwon407',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'MacMiller',
      name: 'Mac',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1035265948192653312/4WYg4YiA_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MacMiller',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/miCe0dlq7d',
    },
    {
      id: 'D_DeGea',
      name: 'David de Gea',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1471229198111055878/qTo-1fDL_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'D_DeGea',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/uUPm1FlRse',
    },
    {
      id: 'juanmata8',
      name: 'Juan Mata García',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1245551645687263233/754Lpb7Z_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'juanmata8',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/eMr2A4WA2b',
    },
    {
      id: 'TigerWoods',
      name: 'Tiger Woods',
      imageUrl:
        'http://pbs.twimg.com/profile_images/788078360677093376/ZzGM8Oae_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'TigerWoods',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/eBVX72yi2f',
    },
    {
      id: 'MikeTyson',
      name: 'Mike Tyson',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1483132008280694787/Xcy2noVw_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MikeTyson',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/EdE6wuq1X2',
    },
    {
      id: 'LennyKravitz',
      name: 'Lenny Kravitz',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1184393847373258752/bNdO9TsO_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'LennyKravitz',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/uyahLtrlnW',
    },
    {
      id: 'kevinjonas',
      name: 'kevin jonas',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1498662075182174209/PG_VRiNJ_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'kevinjonas',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/TySBfrQ8DD',
    },
    {
      id: 'JonahHill',
      name: 'Jonah Hill',
      imageUrl:
        'http://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'JonahHill',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'DwyaneWade',
      name: 'DWade',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1524390755095220225/tCDT1fCz_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'DwyaneWade',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/vCfKS8b8s8',
    },
    {
      id: 'nicolerichie',
      name: 'Nicole Richie',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1392966265392623621/Mn5Ry4YT_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'nicolerichie',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/1LjmfFxEJy',
    },
    {
      id: 'linkinpark',
      name: 'LINKIN PARK',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1293912688393744386/qnnU4pYy_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'linkinpark',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Opl8B4pbYN',
    },
    {
      id: 'HilaryDuff',
      name: 'Hilary Duff',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1144281188170788866/TrcYK_AB_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'HilaryDuff',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/GJUu44fqNQ',
    },
    {
      id: 'ImRaina',
      name: 'Suresh Raina🇮🇳',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1566824264363569153/8vBspUxU_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ImRaina',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'RNTata2000',
      name: 'Ratan N. Tata',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1189494401359208448/AwbXHtpn_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'RNTata2000',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'ariyoshihiroiki',
      name: '有吉弘行',
      imageUrl:
        'http://pbs.twimg.com/profile_images/666631354566635520/Qat08REd_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ariyoshihiroiki',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'IBGDRGN',
      name: 'G-DRAGON',
      imageUrl:
        'http://pbs.twimg.com/profile_images/931912095402045442/mX8k0lSG_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'IBGDRGN',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'AnnaKendrick47',
      name: 'Anna Kendrick',
      imageUrl:
        'http://pbs.twimg.com/profile_images/481264998476308481/apDsLx3j_400x400.jpeg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'AnnaKendrick47',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'AlanCarr',
      name: 'm',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1250337330965041158/aAImLdek_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'AlanCarr',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'sectorkekz',
      name: 'Angelica Panganiban',
      imageUrl:
        'http://pbs.twimg.com/profile_images/521082016876351489/TeopmNsY_400x400.jpeg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'sectorkekz',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'wossy',
      name: 'Jonathan Ross',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1507064182360915968/qYlqJ3vm_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'wossy',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'lucyhale',
      name: 'Lucy Hale',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1377642871507980290/2ZczbJqJ_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'lucyhale',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ACf3Un7jxt',
    },
    {
      id: 'bridgitmendler',
      name: 'Bridgit Mendler',
      imageUrl:
        'http://pbs.twimg.com/profile_images/900937562587619328/CmHqomI8_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'bridgitmendler',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/rSSNCUmdOP',
    },
    {
      id: 'donghae861015',
      name: 'Super Junior 이동해',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1451115503951355907/fBxYrXHq_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'donghae861015',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/juEIX5eHsD',
    },
    {
      id: 'JohnCleese',
      name: 'John Cleese',
      imageUrl:
        'http://pbs.twimg.com/profile_images/2622284361/1emzqsaz3t5glbyndf66_400x400.jpeg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'JohnCleese',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/HCXuIFxuj7',
    },
    {
      id: 'souljaboy',
      name: 'Soulja Boy (Big Draco)',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1574586649006047232/0Y9HvTvA_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'souljaboy',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/sEmaTF76T5',
    },
    {
      id: 'PrinceRoyce',
      name: 'Prince Royce',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1465019586638667779/BIv8GQH5_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'PrinceRoyce',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/jkdYW9VwMw',
    },
    {
      id: 'carrieunderwood',
      name: 'Carrie Underwood',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1512287092579221512/lH5rqw7T_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'carrieunderwood',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/xak2DtTPRV',
    },
    {
      id: 'jesseyjoy',
      name: 'Jesse & Joy Oficial',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1485696475443208195/gZ1Sifqq_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'jesseyjoy',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/efS7vQgMYo',
    },
    {
      id: 'yokoono',
      name: 'Yoko Ono ☮️🏳️',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1506648873795792896/1h7lZhoa_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'yokoono',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/7PD7SBJgzo',
    },
    {
      id: 'olla_ramlan',
      name: 'OR',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1522407870116995073/Pc4DpW-F_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'olla_ramlan',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/1sL0CjM6Mz',
    },
    {
      id: 'DjokerNole',
      name: 'Novak Djokovic',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1219965365226065920/EBF8Rd9v_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'DjokerNole',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/DMT5gal4lf',
    },
    {
      id: 'gabyespino',
      name: 'gaby espino',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1573388958796578816/yFzVS9JH_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'gabyespino',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ZRAWLXkkTo',
    },
    {
      id: 'Bellaudyaa',
      name: 'Laudya Cynthia bella',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1004769147216191488/mTpuR9q1_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Bellaudyaa',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'tyleroakley',
      name: 'tyler oakley',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1490841750872760324/U6RhxYu6_400x400.png',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'tyleroakley',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/DfGzMVDvNi',
    },
    {
      id: 'johngreen',
      name: 'John Green',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1496063546102321154/bgpp6gfq_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'johngreen',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/fOaX5gjHTx',
    },
    {
      id: 'BillSimmons',
      name: 'Bill Simmons',
      imageUrl:
        'http://pbs.twimg.com/profile_images/645990884165578753/moYctN8w_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'BillSimmons',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/AgwukDDj3b',
    },
    {
      id: 'DiegoForlan7',
      name: 'Diego Forlán',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1548931010456440835/hGjxQ_cJ_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'DiegoForlan7',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/RLgtvl9aAq',
    },
    {
      id: 'llcoolj',
      name: 'LLCOOLJ',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1515044655020363776/R_O2tRod_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'llcoolj',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/MIbBO1upzE',
    },
    {
      id: 'facufacundo',
      name: 'Facundo',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1169701278840184832/l6ZROvLb_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'facufacundo',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/kkIAfUujbk',
    },
    {
      id: 'iamsuperbianca',
      name: 'Bianca Gonzalez',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1525099996030201856/rIERO22A_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'iamsuperbianca',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/kegopSSzeM',
    },
    {
      id: 'msdhoni',
      name: 'Mahendra Singh Dhoni',
      imageUrl:
        'http://pbs.twimg.com/profile_images/790576698085416960/BkIjtFXR_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'msdhoni',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/0VBqy7KY6i',
    },
    {
      id: 'piersmorgan',
      name: 'Piers Morgan',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1530460470406176768/wqkXtUVw_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'piersmorgan',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/NJKBsK3NQY',
    },
    {
      id: 'Skrillex',
      name: 'Skrillex',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1428564693929496580/7JmIg6d8_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Skrillex',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/eKoWbdl5uf',
    },
    {
      id: 'virendersehwag',
      name: 'Virender Sehwag',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1560652236770131968/0PcHHngJ_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'virendersehwag',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/P6PzNPpMz8',
    },
    {
      id: 'jorgeemateus',
      name: 'Jorge & Mateus',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1552797185208717313/bBSYMmqg_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'jorgeemateus',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/GU8hodzDaN',
    },
    {
      id: 'gitagut',
      name: 'Aluna Sagita Gutawa',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1115513057214513152/XrzFeUzf_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'gitagut',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/QQxu8kgO6z',
    },
    {
      id: 'Lord_Sugar',
      name: 'Lord Sugar',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1573254992621887491/buNWylyM_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Lord_Sugar',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'MonsieurDream',
      name: 'cyprien',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1516714539068309506/f9j-xQnG_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MonsieurDream',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Pr9SLFD3Zi',
    },
    {
      id: 'CP3',
      name: 'Chris Paul',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1458676176105443332/QVkWbCdj_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'CP3',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'iamjamiefoxx',
      name: 'Jamie Foxx',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1173093644556853249/amaKH54F_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'iamjamiefoxx',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/6Rp1PkeKf2',
    },
    {
      id: 'IrfanBachdim10',
      name: 'Irfan Bachdim',
      imageUrl:
        'http://pbs.twimg.com/profile_images/852808464455811072/wwoCivjO_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'IrfanBachdim10',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/We6ptmmxO8',
    },
    {
      id: 'kc_concepcion',
      name: 'KC 👑',
      imageUrl:
        'http://pbs.twimg.com/profile_images/931374008963973120/7TJDnSKI_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'kc_concepcion',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'imdanielpadilla',
      name: 'Daniel Padilla',
      imageUrl:
        'http://pbs.twimg.com/profile_images/897432578449326081/wzZPNmwt_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'imdanielpadilla',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'gadelmaleh',
      name: 'GAD',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1431165110953906177/3AeUVZKT_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'gadelmaleh',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/dJ8p3reHgf',
    },
    {
      id: 'MarceloM12',
      name: 'Marcelotwelve',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1295387995411972104/lYu7SKGF_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'MarceloM12',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Udd5MDni0I',
    },
    {
      id: 'micheltelo',
      name: 'Michel Teló',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1334691296250884098/5yNnGGfL_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'micheltelo',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/TbAiMXvDf4',
    },
    {
      id: 'SalehAlmoghamsy',
      name: 'الشيخ صالح المغامسي',
      imageUrl:
        'http://pbs.twimg.com/profile_images/982935050898591744/q2Rbrh9s_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SalehAlmoghamsy',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/cOTWE9mwdn',
    },
    {
      id: 'luckymanzano',
      name: 'Luis Manzano',
      imageUrl:
        'http://pbs.twimg.com/profile_images/661462195113345024/aBcs-vf3_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'luckymanzano',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/hVYcxR1GAj',
    },
    {
      id: 'DONOMAR',
      name: 'DON OMAR aka KONG',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1512445879504023553/cz3_aT9p_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'DONOMAR',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/2egEK01dcQ',
    },
    {
      id: 'SteveCarell',
      name: 'Steve Carell',
      imageUrl:
        'http://pbs.twimg.com/profile_images/771722848704475136/4doM7H7R_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SteveCarell',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'neiltyson',
      name: 'Neil deGrasse Tyson',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1554062945096794113/-MPAg1pY_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'neiltyson',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/R7XByOiltm',
    },
    {
      id: 'wisinyyandel',
      name: 'El Dúo de la Historia',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1532093285807923203/fkimytpn_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'wisinyyandel',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/OmYNpZ8Kkq',
    },
    {
      id: 'NoelSchajris',
      name: 'Noel Schajris',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1497301261946920965/37kxDAQs_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'NoelSchajris',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Xu5BRwd5W9',
    },
    {
      id: 'RevRunWisdom',
      name: 'Rev Run',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1163695042/Mr._Simmons_3A_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'RevRunWisdom',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/C35zhXXD3f',
    },
    {
      id: 'SandraDewi88',
      name: 'Sandra Dewi',
      imageUrl:
        'http://pbs.twimg.com/profile_images/809290338942623744/yz-_vQ_8_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'SandraDewi88',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ptIlT7oalc',
    },
    {
      id: 'amrdiab',
      name: 'Amr Diab',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1546638138000408576/AHxdseIi_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'amrdiab',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/GBMqBEZKQI',
    },
    {
      id: 'ShawnMendes',
      name: 'Shawn Mendes',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1424775968728576002/-bH70SQM_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ShawnMendes',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Zj4fRjkIgS',
    },
    {
      id: 'syntekoficial',
      name: 'Aleks Syntek',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1456292307410558978/qePqOx2P_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'syntekoficial',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/LdoBxaCV2i',
    },
    {
      id: 'AdelAliBinAli',
      name: 'عادل علي بن علي',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1531153044104151040/rhCvPfnl_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'AdelAliBinAli',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/I9OeTFYErG',
    },
    {
      id: 'felipeneto',
      name: 'Felipe Neto 🦉',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1503951806384250882/EZnn3_1J_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'felipeneto',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/H6I8rmysul',
    },
    {
      id: 'polo_polo',
      name: 'Polo Polo',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1121987296952086529/nWKJ_Ll3_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'polo_polo',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/FlBwuLEMcL',
    },
    {
      id: 'GloriaTrevi',
      name: 'GloriaTrevi',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1522038753266651137/Tc135ZN3_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'GloriaTrevi',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/0WDwgpNhnP',
    },
    {
      id: 'TheVijayMallya',
      name: 'Vijay Mallya',
      imageUrl:
        'http://pbs.twimg.com/profile_images/827708603/Copy_of_VJM_4_400x400.JPG',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'TheVijayMallya',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/sJ72W8oAs9',
    },
    {
      id: 'Ashton5SOS',
      name: 'Ashton Irwin',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1552031845788913666/KDv-ZGQA_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Ashton5SOS',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/1NHsjml4FS',
    },
    {
      id: 'Wale',
      name: 'Wale',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1524911210583404544/hhPnBPPb_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Wale',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/rJzcean2XF',
    },
    {
      id: 'ChinoyNacho',
      name: 'Chino y Nacho',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1340404730158309383/rfCmUw3D_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'ChinoyNacho',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/fIkin3Lpbi',
    },
    {
      id: 'Riteishd',
      name: 'Riteish Deshmukh',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1565221135561773059/Wa6Jtry9_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'Riteishd',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/gXJDUXJqdK',
    },
    {
      id: 'RealLamarOdom',
      name: 'Lamar Odom',
      imageUrl:
        'http://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'RealLamarOdom',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'PretaGil',
      name: 'Preta Gil',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1497316646217818112/p280rF7l_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'PretaGil',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/LWDrMKe2Kd',
    },
    {
      id: 'TomCavalcante1',
      name: 'TOM CAVALCANTE',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1266500693927628800/zimhUQ8k_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'TomCavalcante1',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Z9ZZMMbum5',
    },
    {
      id: 'RandyOrton',
      name: 'Randy Orton',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1440164477647798283/7rwROEGG_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'RandyOrton',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'djkingassassin',
      name: 'DJ KING ASSASSIN',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1572021812657258498/a_KP40Y2_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'djkingassassin',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/N5XduSi0e6',
    },
    {
      id: 'gadiiing',
      name: 'Gading Marten',
      imageUrl:
        'http://pbs.twimg.com/profile_images/983423610739089413/NR_B6noj_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'gadiiing',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'DJPaulyD',
      name: 'DJ Pauly D',
      imageUrl:
        'http://pbs.twimg.com/profile_images/976860566550695936/SIHvYilD_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'DJPaulyD',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/ED7lcdzxts',
    },
    {
      id: 'LuceroMexico',
      name: 'Lucero',
      imageUrl:
        'http://pbs.twimg.com/profile_images/996448697696313346/qI3Q0E4M_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'LuceroMexico',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/8QUI6FrkoI',
    },
    {
      id: 'paulitachaves',
      name: 'PAULA',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1486416216251985921/KeBya6GH_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'paulitachaves',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/Wi950RcSM1',
    },
    {
      id: 'KevinSpacey',
      name: 'Kevin Spacey',
      imageUrl:
        'http://pbs.twimg.com/profile_images/877952436526362626/CuCSnu0U_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'KevinSpacey',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'http://t.co/1Hulh29JIj',
    },
    {
      id: 'OzzyOsbourne',
      name: 'Ozzy Osbourne',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1541912637675405312/GJOEr8cv_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'OzzyOsbourne',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/YtKesEyNdW',
    },
    {
      id: 'AdamSchefter',
      name: 'Adam Schefter',
      imageUrl:
        'http://pbs.twimg.com/profile_images/793924061843914752/ycm8ibEE_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'AdamSchefter',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/OUz4GsIjV2',
    },
    {
      id: 'GaryLineker',
      name: 'Gary Lineker 💙💛',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1445845224979263489/eh95PaVz_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'GaryLineker',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/EamUJaAWiE',
    },
    {
      id: 'VhongX44',
      name: 'Vhong Navarro',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1202631525331685376/JY75fenZ_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'VhongX44',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/khIlebxX8g',
    },
    {
      id: '_CristineReyes_',
      name: 'Rising Gamers',
      imageUrl:
        'http://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: '_CristineReyes_',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
    {
      id: 'JordinSparks',
      name: 'Jordin Sparks',
      imageUrl:
        'http://pbs.twimg.com/profile_images/1478832382648147976/OOA3GFmi_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'JordinSparks',
        },
        {
          type: 'INSTAGRAM',
          url: '',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: 'https://t.co/jlBCpx9ZTM',
    },
    {
      id: 'BillieEilish',
      name: 'Billie Eilish',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1387065127208247299/bni08CVZ_400x400.jpg',
      socialAccounts: [
        {
          type: 'TWITTER',
          url: 'billieeilish',
        },
        {
          type: 'INSTAGRAM',
          url: 'billieeilish',
        },
      ],
      category: 'ART',
      status: randomStatus(),
      statusReferenceUrl: null,
    },
  ],
}
