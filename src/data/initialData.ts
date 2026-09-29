import {
  Beneficiary,
  Donor,
  Donation,
  Project,
  InventoryItem,
  FinancialTransaction,
  Volunteer,
  AppNotification,
  DocumentItem,
  AuditLog,
  GovernorateStats,
  Announcement,
  AutomatedReminder
} from '../types';

export const INITIAL_BENEFICIARIES: Beneficiary[] = [
  // --- هەولێر (Erbil) ---
  {
    id: 'ben-erb-01',
    nationalId: '198210041234',
    fullName: 'ئاراس مەحمود حەمەئەمین',
    phone: '0750 445 1289',
    gender: 'male',
    age: 44,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'هەولێر',
    address: 'گەڕەکی باداوە، کۆڵانی ١٤، نزیک مزگەوتی قودس',
    familyMembers: 5,
    monthlyIncomeIQD: 180000,
    needCategory: 'poor',
    status: 'pending',
    notes: 'خێزانێکی دەستکورت، کرێچی، باوکی منداڵەکان کرێکاری ڕۆژانەیە و کاری کەمە.',
    registeredDate: '2026-02-10',
    aidHistory: [
      {
        id: 'aid-01',
        date: '2026-03-01',
        type: 'in-kind',
        itemName: 'سەبەتەی خۆراکی خێزانی',
        quantity: 1,
        projectTitle: 'پڕۆژەی سەبەتەی خۆراکی مانگانەی خێزانە کەمدرامەتەکان',
        distributedBy: 'تیمی مەیدانی هەولێر',
        receiptNumber: 'AID-ERB-01'
      }
    ],
    location: { lat: 36.1912, lng: 44.0245, label: 'ماڵی ئاراس مەحمود - باداوە' }
  },
  {
    id: 'ben-erb-02',
    nationalId: '198820054321',
    fullName: 'نەرمین جەلال ڕەشید',
    phone: '0750 789 6541',
    gender: 'female',
    age: 38,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'هەولێر',
    address: 'تەیراوە، شەقامی ٢٤ مەتری، تەنیشت باخچەی ساوایان',
    familyMembers: 4,
    monthlyIncomeIQD: 120000,
    needCategory: 'orphan',
    status: 'approved',
    notes: 'هاوسەرەکەی کۆچی دوایی کردووە، سەرپەرشتیاری ٣ منداڵی هەتیوە، پێویستی بە کەفالەتی مانگانەیە.',
    registeredDate: '2026-01-18',
    aidHistory: [
      {
        id: 'aid-02',
        date: '2026-02-15',
        type: 'monetary',
        amountIQD: 250000,
        projectTitle: 'پڕۆژەی کەفالەت و خەرجی خوێندنی قوتابیانی بێباوک',
        distributedBy: 'بەشی چاودێری کۆمەڵایەتی',
        receiptNumber: 'AID-ERB-02'
      }
    ],
    location: { lat: 36.1845, lng: 44.0189, label: 'ماڵی نەرمین جەلال - تەیراوە' }
  },
  {
    id: 'ben-erb-03',
    nationalId: '197510098765',
    fullName: 'شوان کەمال عەزیز',
    phone: '0750 332 9876',
    gender: 'male',
    age: 51,
    isFamilyHead: true,
    isProvider: false,
    providerName: 'کوڕە گەورەکەی (شاڵاو)',
    governorate: 'هەولێر',
    address: 'مامزاوە، گەڕەکی نەورۆز، کۆڵانی ٧',
    familyMembers: 6,
    monthlyIncomeIQD: 210000,
    needCategory: 'sick',
    status: 'urgent',
    notes: 'دووچاری سستبوونی گورچیلە بووە و پێویستی بە شۆردنی هەفتانەی خوێن و دەرمانی گرانبەهایە.',
    registeredDate: '2026-02-28',
    aidHistory: [
      {
        id: 'aid-03',
        date: '2026-03-05',
        type: 'monetary',
        amountIQD: 350000,
        projectTitle: 'سندوقی نەشتەرگەری و دەرمانی نەخۆشە هەژارەکان',
        distributedBy: 'لیژنەی پزیشکی ڕێکخراو',
        receiptNumber: 'AID-ERB-03'
      }
    ],
    location: { lat: 36.1689, lng: 44.0432, label: 'ماڵی شوان کەمال - مامزاوە' }
  },
  {
    id: 'ben-erb-04',
    nationalId: '199220012398',
    fullName: 'شیرین کەریم حوسێن',
    phone: '0750 998 7766',
    gender: 'female',
    age: 34,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'هەولێر',
    address: 'ناونیشانی پارێزراو - هەولێر',
    familyMembers: 3,
    monthlyIncomeIQD: 90000,
    needCategory: 'poor',
    status: 'confidential',
    isConfidential: true,
    notes: 'دۆسیەیەکی هەستیار و تەواو پارێزراوە. خێزانێکی لێقەوماو بەهۆی کێشەی کۆمەڵایەتی، پێویستی بە پاراستنی تەواوەتی نهێنی هەیە.',
    registeredDate: '2026-03-02',
    aidHistory: [
      {
        id: 'aid-04',
        date: '2026-03-08',
        type: 'monetary',
        amountIQD: 300000,
        projectTitle: 'سندوقی فریاگوزاری و هاوکاری مرۆیی خێرا',
        distributedBy: 'بەڕێوەبەری جێبەجێکار',
        receiptNumber: 'AID-CONF-01'
      }
    ],
    location: { lat: 36.2055, lng: 43.9988, label: 'دۆسیەی نهێنی و پارێزراو' }
  },
  {
    id: 'ben-erb-05',
    nationalId: '200310065432',
    fullName: 'ژیار کامەران ئەحمەد',
    phone: '0750 678 1122',
    gender: 'male',
    age: 23,
    isFamilyHead: false,
    isProvider: false,
    providerName: 'دایکی (نەخۆش و دەستکورت)',
    governorate: 'هەولێر',
    address: 'گەڕەکی زانکۆ، نزیک پەیمانگای تەکنیکی',
    familyMembers: 2,
    monthlyIncomeIQD: 100000,
    needCategory: 'student',
    status: 'periodic',
    notes: 'قوتابی قۆناغی چوارەمی بەشی ئەندازیارییە، زیرەکە و بەهۆی نەداری باوکیەوە مەترسی دابڕانی لە خوێندن هەبوو.',
    registeredDate: '2025-11-12',
    aidHistory: [
      {
        id: 'aid-05',
        date: '2026-01-10',
        type: 'monetary',
        amountIQD: 150000,
        projectTitle: 'پڕۆژەی کەفالەت و خەرجی خوێندنی قوتابیانی بێباوک',
        distributedBy: 'تیمی پەروەردە',
        receiptNumber: 'AID-STU-01'
      },
      {
        id: 'aid-06',
        date: '2026-02-10',
        type: 'monetary',
        amountIQD: 150000,
        projectTitle: 'پڕۆژەی کەفالەت و خەرجی خوێندنی قوتابیانی بێباوک',
        distributedBy: 'تیمی پەروەردە',
        receiptNumber: 'AID-STU-02'
      }
    ],
    location: { lat: 36.2188, lng: 44.0299, label: 'ماڵی ژیار کامەران - گەڕەکی زانکۆ' }
  },

  // --- سلێمانی (Sulaymaniyah) ---
  {
    id: 'ben-sul-01',
    nationalId: '197910077889',
    fullName: 'ڕەنجدەر جەلال فەتاح',
    phone: '0770 154 9988',
    gender: 'male',
    age: 47,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: false,
    otherProviders: [
      { name: 'پێشەوا ڕەنجدەر', relation: 'کوڕ', monthlyIncomeIQD: 120000 }
    ],
    governorate: 'سلێمانی',
    address: 'سلێمانی، کانی کوردە، کۆڵانی ١٨، بەرامبەر قوتابخانەی شێرکۆ',
    familyMembers: 7,
    monthlyIncomeIQD: 270000,
    needCategory: 'poor',
    status: 'approved',
    notes: 'خێزانێکی گەورە، کچی بچووک نەخۆشی تەنگەنەفەسی هەیە، کرێی خانوویان لەسەر کەڵەکە بووە.',
    registeredDate: '2026-01-05',
    aidHistory: [
      {
        id: 'aid-07',
        date: '2026-02-01',
        type: 'in-kind',
        itemName: 'سەبەتەی خۆراکی خێزانی + بەتانی زستانە',
        quantity: 2,
        projectTitle: 'کەمپەینی فریاگوزاری زستانە و دابینکردنی سووتەمەنی',
        distributedBy: 'تیمی مەیدانی سلێمانی',
        receiptNumber: 'AID-SUL-01'
      }
    ],
    location: { lat: 35.5689, lng: 45.4211, label: 'ماڵی ڕەنجدەر جەلال - کانی کوردە' }
  },
  {
    id: 'ben-sul-02',
    nationalId: '198420033221',
    fullName: 'بەهار ڕەحیم قادر',
    phone: '0770 887 4433',
    gender: 'female',
    age: 42,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'سلێمانی',
    address: 'مەجیدبەگ، نزیک فلکەی ئاسۆ',
    familyMembers: 4,
    monthlyIncomeIQD: 150000,
    needCategory: 'orphan',
    status: 'periodic',
    notes: 'دایکی ٣ منداڵی هەتیوە، بە کاری دەستی و دوورمان بژێوی کەم دابین دەکات.',
    registeredDate: '2025-10-20',
    aidHistory: [
      {
        id: 'aid-08',
        date: '2026-02-05',
        type: 'monetary',
        amountIQD: 200000,
        projectTitle: 'پڕۆژەی کەفالەت و خەرجی خوێندنی قوتابیانی بێباوک',
        distributedBy: 'لیژنەی خێرخوازی',
        receiptNumber: 'AID-SUL-02'
      }
    ],
    location: { lat: 35.5601, lng: 45.4412, label: 'ماڵی بەهار ڕەحیم - مەجیدبەگ' }
  },
  {
    id: 'ben-sul-03',
    nationalId: '196810055443',
    fullName: 'کاروان تەها مەحمود',
    phone: '0770 334 5566',
    gender: 'male',
    age: 58,
    isFamilyHead: true,
    isProvider: false,
    providerName: 'هاوسەرەکەی بە کاری ماڵان',
    governorate: 'سلێمانی',
    address: 'ڕاپەڕین، گەڕەکی نەورۆز، کۆڵانی ٥',
    familyMembers: 5,
    monthlyIncomeIQD: 110000,
    needCategory: 'sick',
    status: 'urgent',
    notes: 'پێویستی بە نەشتەرگەری کراوەی دڵ و گۆڕینی زمانەی دڵە بەپەلە لە نەخۆشخانەی شاری سلێمانی.',
    registeredDate: '2026-03-01',
    aidHistory: [],
    location: { lat: 35.5899, lng: 45.3855, label: 'ماڵی کاروان تەها - ڕاپەڕین' }
  },
  {
    id: 'ben-sul-04',
    nationalId: '199520099887',
    fullName: 'شلێر محەمەد سەعید',
    phone: '0770 998 1234',
    gender: 'female',
    age: 31,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'سلێمانی',
    address: 'بکرەجۆ، گەڕەکی دابان',
    familyMembers: 3,
    monthlyIncomeIQD: 130000,
    needCategory: 'disabled',
    status: 'approved',
    notes: 'خاوەن پێداویستی تایبەتە لە پێیەکانیدا و منداڵێکی ٥ ساڵانیشی کەڕولاڵە.',
    registeredDate: '2026-02-14',
    aidHistory: [
      {
        id: 'aid-09',
        date: '2026-03-02',
        type: 'in-kind',
        itemName: 'ویلچێری پزیشکی + پێداویستی تەندروستی',
        quantity: 1,
        projectTitle: 'پڕۆژەی دابینکردنی ویلچێر و کەرەستەی خاوەن پێداویستی تایبەت',
        distributedBy: 'تیمی هاوکاری تایبەت',
        receiptNumber: 'AID-SUL-03'
      }
    ],
    location: { lat: 35.6012, lng: 45.3421, label: 'ماڵی شلێر محەمەد - بکرەجۆ' }
  },

  // --- دهۆک (Duhok) ---
  {
    id: 'ben-dhk-01',
    nationalId: '197610011223',
    fullName: 'ڕێبوار خەلیل شەریف',
    phone: '0750 223 9988',
    gender: 'male',
    age: 50,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'دهۆک',
    address: 'دهۆک، گەڕەکی شۆڕش، نزیک نەخۆشخانەی ئازادی',
    familyMembers: 6,
    monthlyIncomeIQD: 200000,
    needCategory: 'poor',
    status: 'pending',
    notes: 'پشکنینی مەیدانی بۆ کراوە، بژێوی کەمە و لە وەرزی زستاندا پێویستی زۆریان بە نەوتی سپی هەیە.',
    registeredDate: '2026-02-22',
    aidHistory: [],
    location: { lat: 36.8589, lng: 42.9812, label: 'ماڵی ڕێبوار خەلیل - گەڕەکی شۆڕش' }
  },
  {
    id: 'ben-dhk-02',
    nationalId: '198720044556',
    fullName: 'ڤیان سەبری تەها',
    phone: '0750 887 6655',
    gender: 'female',
    age: 39,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'دهۆک',
    address: 'گەڕەکی نزارکێ، کۆڵانی ٨',
    familyMembers: 4,
    monthlyIncomeIQD: 140000,
    needCategory: 'orphan',
    status: 'approved',
    notes: 'دوو منداڵی قوتابین، دایکیان زەحمەت دەکێشێت بە جلوبەرگ شتن لە ماڵاندا.',
    registeredDate: '2026-01-25',
    aidHistory: [
      {
        id: 'aid-10',
        date: '2026-02-18',
        type: 'in-kind',
        itemName: 'سەبەتەی خوێندنگە + جلوبەرگی منداڵان',
        quantity: 2,
        projectTitle: 'پڕۆژەی کەفالەت و خەرجی خوێندنی قوتابیانی بێباوک',
        distributedBy: 'تیمی دهۆک',
        receiptNumber: 'AID-DHK-01'
      }
    ],
    location: { lat: 36.8711, lng: 43.0123, label: 'ماڵی ڤیان سەبری - نزارکێ' }
  },
  {
    id: 'ben-dhk-03',
    nationalId: '199020088776',
    fullName: 'هێڤی سلێمان بارزانی',
    phone: '0750 119 4433',
    gender: 'female',
    age: 36,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'دهۆک',
    address: 'ناونیشانی پارێزراو - پارێزگای دهۆک',
    familyMembers: 2,
    monthlyIncomeIQD: 80000,
    needCategory: 'poor',
    status: 'confidential',
    isConfidential: true,
    notes: 'دۆسیەی هەستیار، بە ڕێنمایی بەڕێوەبەرایەتی سەرەکی ناونیشان شاردراوەتەوە بۆ پاراستنی کەرامەتی خێزانەکە.',
    registeredDate: '2026-03-04',
    aidHistory: [
      {
        id: 'aid-11',
        date: '2026-03-07',
        type: 'monetary',
        amountIQD: 300000,
        projectTitle: 'سندوقی فریاگوزاری و هاوکاری مرۆیی خێرا',
        distributedBy: 'نوێنەری باڵا',
        receiptNumber: 'AID-CONF-02'
      }
    ],
    location: { lat: 36.8655, lng: 42.9944, label: 'دۆسیەی نهێنی و پارێزراو - دهۆک' }
  },

  // --- هەڵەبجە (Halabja) ---
  {
    id: 'ben-hlb-01',
    nationalId: '196510033445',
    fullName: 'لوقمان کەریم تۆفیق',
    phone: '0770 234 5678',
    gender: 'male',
    age: 61,
    isFamilyHead: true,
    isProvider: false,
    providerName: 'هاوکاری کۆمەڵایەتی حکومەت',
    governorate: 'هەڵەبجە',
    address: 'هەڵەبجەی شەهید، گەڕەکی کانی عاشقان، کۆڵانی ١٢',
    familyMembers: 4,
    monthlyIncomeIQD: 190000,
    needCategory: 'sick',
    status: 'periodic',
    notes: 'برینداری چەکی کیمیاییە و بەردەوام پێویستی بە بتڵی ئۆکسجین و دەرمانی هەناسەدان هەیە.',
    registeredDate: '2025-09-15',
    aidHistory: [
      {
        id: 'aid-12',
        date: '2026-01-20',
        type: 'monetary',
        amountIQD: 200000,
        projectTitle: 'سندوقی نەشتەرگەری و دەرمانی نەخۆشە هەژارەکان',
        distributedBy: 'تیمی هەڵەبجە',
        receiptNumber: 'AID-HLB-01'
      },
      {
        id: 'aid-13',
        date: '2026-02-25',
        type: 'monetary',
        amountIQD: 200000,
        projectTitle: 'سندوقی نەشتەرگەری و دەرمانی نەخۆشە هەژارەکان',
        distributedBy: 'تیمی هەڵەبجە',
        receiptNumber: 'AID-HLB-02'
      }
    ],
    location: { lat: 35.1812, lng: 45.9899, label: 'ماڵی لوقمان کەریم - کانی عاشقان' }
  },
  {
    id: 'ben-hlb-02',
    nationalId: '198120066554',
    fullName: 'چنوور عەلی ڕەزا',
    phone: '0770 765 4321',
    gender: 'female',
    age: 45,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'هەڵەبجە',
    address: 'سیروان، گەڕەکی مامۆستایان',
    familyMembers: 3,
    monthlyIncomeIQD: 160000,
    needCategory: 'orphan',
    status: 'approved',
    notes: 'خێزانی بێباوکە و پێویستیان بە چاککردنەوەی سەقفی خانووەکەیان هەیە بەهۆی دڵۆپەکردن لە زستاندا.',
    registeredDate: '2026-02-01',
    aidHistory: [
      {
        id: 'aid-14',
        date: '2026-02-20',
        type: 'in-kind',
        itemName: 'سەبەتەی خۆراکی خێزانی',
        quantity: 1,
        projectTitle: 'پڕۆژەی سەبەتەی خۆراکی مانگانەی خێزانە کەمدرامەتەکان',
        distributedBy: 'کارمەندی مەیدانی سیروان',
        receiptNumber: 'AID-HLB-03'
      }
    ],
    location: { lat: 35.1544, lng: 45.9712, label: 'ماڵی چنوور عەلی - سیروان' }
  },

  // --- کەرکووک (Kirkuk) ---
  {
    id: 'ben-krk-01',
    nationalId: '197810088990',
    fullName: 'سەردار ڕەحمان مەحمود',
    phone: '0770 456 7890',
    gender: 'male',
    age: 48,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'کەرکووک',
    address: 'کەرکووک، ڕەحیماوا، کۆڵانی مامز',
    familyMembers: 6,
    monthlyIncomeIQD: 220000,
    needCategory: 'poor',
    status: 'pending',
    notes: 'کرێکارێکی کەمدرامەتە و کرێچییە، ٤ منداڵی قوتابین.',
    registeredDate: '2026-02-19',
    aidHistory: [],
    location: { lat: 35.4812, lng: 44.3822, label: 'ماڵی سەردار ڕەحمان - ڕەحیماوا' }
  },
  {
    id: 'ben-krk-02',
    nationalId: '198920011223',
    fullName: 'پەیمان تەلعەت عومەر',
    phone: '0770 987 6543',
    gender: 'female',
    age: 37,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'کەرکووک',
    address: 'گەڕەکی ئازادی، نزیک گۆڕەپانی ئاهەنگەکان',
    familyMembers: 3,
    monthlyIncomeIQD: 130000,
    needCategory: 'orphan',
    status: 'aided',
    notes: 'هاوکاری سەرەتایی پێدراوە و دۆسیەکەی لەژێر پێداچوونەوەی دووبارەدایە بۆ بەشی دووەم.',
    registeredDate: '2026-01-10',
    aidHistory: [
      {
        id: 'aid-15',
        date: '2026-01-28',
        type: 'monetary',
        amountIQD: 200000,
        projectTitle: 'پڕۆژەی کەفالەت و خەرجی خوێندنی قوتابیانی بێباوک',
        distributedBy: 'تیمی کەرکووک',
        receiptNumber: 'AID-KRK-01'
      }
    ],
    location: { lat: 35.4655, lng: 44.3988, label: 'ماڵی پەیمان تەلعەت - گەڕەکی ئازادی' }
  },

  // --- گەرمیان (Garmian) ---
  {
    id: 'ben-grm-01',
    nationalId: '196010022334',
    fullName: 'جەزا عەلی کەریم',
    phone: '0770 123 7890',
    gender: 'male',
    age: 66,
    isFamilyHead: true,
    isProvider: false,
    providerName: 'هاوکاری کەسوکاری ئەنفال',
    governorate: 'گەرمیان',
    address: 'کەلار، گەڕەکی شەهیدان، نزیک مەڵبەند',
    familyMembers: 3,
    monthlyIncomeIQD: 180000,
    needCategory: 'disabled',
    status: 'approved',
    notes: 'پەککەوتەیە و ناتوانێت کار بکات، پێداویستی تەندروستی مانگانەی دەوێت.',
    registeredDate: '2026-01-15',
    aidHistory: [
      {
        id: 'aid-16',
        date: '2026-02-12',
        type: 'in-kind',
        itemName: 'سەبەتەی خۆراکی خێزانی',
        quantity: 1,
        projectTitle: 'پڕۆژەی سەبەتەی خۆراکی مانگانەی خێزانە کەمدرامەتەکان',
        distributedBy: 'تیمی کەلار',
        receiptNumber: 'AID-GRM-01'
      }
    ],
    location: { lat: 34.6311, lng: 45.3122, label: 'ماڵی جەزا عەلی - کەلار شەهیدان' }
  },
  {
    id: 'ben-grm-02',
    nationalId: '198520077889',
    fullName: 'گولستان ئەحمەد فەقێ',
    phone: '0770 654 3210',
    gender: 'female',
    age: 41,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'گەرمیان',
    address: 'کفری، گەڕەکی ئیسماعیل بەگ',
    familyMembers: 4,
    monthlyIncomeIQD: 100000,
    needCategory: 'poor',
    status: 'urgent',
    notes: 'خانووەکەیان مەترسی ڕووخانی لەسەرە و پێویستی بە نۆژەنکردنەوەی بەپەلە هەیە پێش وەرزی بارانبارین.',
    registeredDate: '2026-03-03',
    aidHistory: [],
    location: { lat: 34.6988, lng: 44.9622, label: 'ماڵی گولستان ئەحمەد - کفری' }
  },

  // --- زاخۆ (Zakho) ---
  {
    id: 'ben-zkh-01',
    nationalId: '198010044332',
    fullName: 'دڵشاد ڕەشید پیرۆ',
    phone: '0750 776 5544',
    gender: 'male',
    age: 46,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'زاخۆ',
    address: 'زاخۆ، گەڕەکی دێلالی، نزیک پردی دەلال',
    familyMembers: 7,
    monthlyIncomeIQD: 240000,
    needCategory: 'poor',
    status: 'pending',
    notes: 'کرێکاری مەیدانە، ٥ منداڵی هەیە و باری داراییان نالەبارە.',
    registeredDate: '2026-02-24',
    aidHistory: [],
    location: { lat: 37.1455, lng: 42.6844, label: 'ماڵی دڵشاد ڕەشید - گەڕەکی دێلالی' }
  },
  {
    id: 'ben-zkh-02',
    nationalId: '199120055667',
    fullName: 'نەسرین زوبێر سلێمان',
    phone: '0750 334 1122',
    gender: 'female',
    age: 35,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'زاخۆ',
    address: 'گەڕەکی کانی کاڤرکێ',
    familyMembers: 3,
    monthlyIncomeIQD: 110000,
    needCategory: 'orphan',
    status: 'aided',
    notes: 'دوو منداڵی بێباوکی هەیە، هاوکاری خۆراک و جلوبەرگی زستانەی پێدراوە.',
    registeredDate: '2026-01-20',
    aidHistory: [
      {
        id: 'aid-17',
        date: '2026-02-14',
        type: 'in-kind',
        itemName: 'سەبەتەی خۆراک + بەتانی',
        quantity: 1,
        projectTitle: 'کەمپەینی فریاگوزاری زستانە و دابینکردنی سووتەمەنی',
        distributedBy: 'تیمی زاخۆ',
        receiptNumber: 'AID-ZKH-01'
      }
    ],
    location: { lat: 37.1399, lng: 42.6955, label: 'ماڵی نەسرین زوبێر - کانی کاڤرکێ' }
  },

  // Extra case states
  {
    id: 'ben-extra-01',
    nationalId: '197010099112',
    fullName: 'ئەحمەد فایەق مەولود',
    phone: '0750 443 3221',
    gender: 'male',
    age: 56,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'هەولێر',
    address: 'گەڕەکی ڕاستی، کۆڵانی ٢٢',
    familyMembers: 4,
    monthlyIncomeIQD: 750000,
    needCategory: 'poor',
    status: 'rejected',
    notes: 'دوای لێکۆڵینەوەی مەیدانی دەرکەوت داهاتی خێزانەکە گونجاوە و مەرجەکانی یارمەتی نایانگرێتەوە.',
    registeredDate: '2026-01-08',
    aidHistory: []
  },
  {
    id: 'ben-extra-02',
    nationalId: '196210088223',
    fullName: 'عوسمان حەمەلاو کەریم',
    phone: '0770 889 1100',
    gender: 'male',
    age: 64,
    isFamilyHead: true,
    isProvider: true,
    isOnlyProvider: true,
    governorate: 'سلێمانی',
    address: 'گەڕەکی ئیبراهیم ئەحمەد',
    familyMembers: 2,
    monthlyIncomeIQD: 300000,
    needCategory: 'sick',
    status: 'suspended',
    notes: 'دۆسیەکەی بە شێوەی کاتی ڕاگیراوە بەهۆی گەشتکردنی کاتی بۆ دەرەوەی وڵات بە مەبەستی چارەسەر.',
    registeredDate: '2025-12-05',
    aidHistory: []
  },
  {
    id: 'ben-extra-03',
    nationalId: '195510011998',
    fullName: 'حاجی ڕەسوڵ ئەحمەد بابەکر',
    phone: '0750 999 8811',
    gender: 'male',
    age: 71,
    isFamilyHead: true,
    isProvider: false,
    governorate: 'دهۆک',
    address: 'ماسیکێ، شەقامی گشتی',
    familyMembers: 1,
    monthlyIncomeIQD: 0,
    needCategory: 'poor',
    status: 'archived',
    notes: 'دۆسیەکە ئەرشیڤکراوە دوای دابینکردنی شوێنی نیشتەجێبوون و کەفالەتی هەمیشەیی لەلایەن خێرخوازێکەوە.',
    registeredDate: '2025-08-10',
    aidHistory: []
  }
];

export const INITIAL_DONORS: Donor[] = [
  {
    id: 'donor-01',
    fullName: 'کۆمپانیای بازرگانی گشتی کاروان',
    type: 'corporate',
    phone: '0750 445 0000',
    email: 'info@karwan-trading.krd',
    governorate: 'هەولێر',
    totalDonationsIQD: 25000000,
    totalDonationsUSD: 18000,
    status: 'active',
    notes: 'پشتیوانێکی سەرەکی پڕۆژەی سەبەتەی خۆراکی مانگانەیە و مانگانە بڕی دیاریکراو دەبەخشێت.',
    joinedDate: '2025-01-10'
  },
  {
    id: 'donor-02',
    fullName: 'گروپی پیشەسازی ئارام',
    type: 'corporate',
    phone: '0770 123 0000',
    email: 'contact@aram-group.com',
    governorate: 'سلێمانی',
    totalDonationsIQD: 18500000,
    totalDonationsUSD: 12500,
    status: 'active',
    notes: 'کۆمپانیاکە لە وەرزی زستاندا نەوت و کەلوپەلی گەرمکەرەوە دابین دەکات بۆ گوندە دوورەدەستەکان.',
    joinedDate: '2025-02-15'
  },
  {
    id: 'donor-03',
    fullName: 'حاجی عوسمان هەولێری',
    type: 'individual',
    phone: '0750 333 4455',
    email: 'haji.osman@gmail.com',
    governorate: 'هەولێر',
    totalDonationsIQD: 12000000,
    totalDonationsUSD: 8500,
    status: 'active',
    notes: 'خێرخوازێکی دێرینە، تایبەت کەفالەتی منداڵانی بێباوک (هەتیو) دەکات.',
    joinedDate: '2025-03-01'
  },
  {
    id: 'donor-04',
    fullName: 'مامۆستا فەرهاد سلێمانی',
    type: 'individual',
    phone: '0770 555 6677',
    email: 'farhad.edu@yahoo.com',
    governorate: 'سلێمانی',
    totalDonationsIQD: 6500000,
    totalDonationsUSD: 4500,
    status: 'active',
    notes: 'پشتیوانی قوتابیانی زانکۆ و خوێندکارانی هەژار دەکات لە کڕینی کتێب و پێداویستی.',
    joinedDate: '2025-04-12'
  },
  {
    id: 'donor-05',
    fullName: 'ڕێکخراوی دیاسپۆرای کورد لە ئەڵمانیا',
    type: 'organization',
    phone: '+49 152 3456789',
    email: 'kurdish-aid@diaspora-ev.de',
    governorate: 'نێودەوڵەتی',
    totalDonationsIQD: 35000000,
    totalDonationsUSD: 24000,
    status: 'active',
    notes: 'کۆمەک و بەخشینی کوردانی تاراوگە کۆدەکاتەوە بۆ نەشتەرگەری و دەرمانی نەخۆشە بێدەرامەتەکان.',
    joinedDate: '2025-05-20'
  },
  {
    id: 'donor-06',
    fullName: 'دکتۆر ڕێبوار دهۆکی',
    type: 'individual',
    phone: '0750 888 1122',
    email: 'dr.rebwar@med-care.iq',
    governorate: 'دهۆک',
    totalDonationsIQD: 8000000,
    totalDonationsUSD: 5500,
    status: 'active',
    notes: 'پزیشکی پسپۆڕ، هاوکات لەگەڵ بەخشینی دارایی ڕۆژانی هەینی چارەسەری بێبەرامبەری هەژاران دەکات.',
    joinedDate: '2025-06-05'
  },
  {
    id: 'donor-07',
    fullName: 'کۆمپانیای گەرمیان بۆ پەیوەندییەکان',
    type: 'corporate',
    phone: '0770 777 8899',
    email: 'info@garmian-telecom.com',
    governorate: 'گەرمیان',
    totalDonationsIQD: 5500000,
    totalDonationsUSD: 3800,
    status: 'active',
    notes: 'هاوکاری کەرتی تەندروستی و دابینکردنی ئامێرە پزیشکییەکان لە سنووری کەلار و کفری.',
    joinedDate: '2025-08-14'
  },
  {
    id: 'donor-08',
    fullName: 'شێخ مەعروف هەڵەبجەیی',
    type: 'individual',
    phone: '0770 222 3344',
    email: 'maruf.halabja@gmail.com',
    governorate: 'هەڵەبجە',
    totalDonationsIQD: 4800000,
    totalDonationsUSD: 3200,
    status: 'active',
    notes: 'پشتیوانی لە خێزانە کەمدەرامەتەکان و بریندارانی چەکی کیمیایی.',
    joinedDate: '2025-09-02'
  }
];

export const INITIAL_DONATIONS: Donation[] = [
  {
    id: 'don-01',
    receiptNumber: 'RC-2026-001',
    donorId: 'donor-01',
    donorName: 'کۆمپانیای بازرگانی گشتی کاروان',
    category: 'cash',
    categoryLabel: 'بەخشینی نەختینەیی (دینار)',
    amount: 10000000,
    currency: 'IQD',
    method: 'حەواڵەی بانکی',
    date: '2026-02-01',
    projectId: 'proj-01',
    projectName: 'پڕۆژەی سەبەتەی خۆراکی مانگانەی خێزانە کەمدرامەتەکان',
    notes: 'بەشی یەکەمی بەخشینی وەرزی بۆ دابینکردنی سەبەتەی خۆراک.',
    status: 'completed'
  },
  {
    id: 'don-02',
    receiptNumber: 'RC-2026-002',
    donorId: 'donor-05',
    donorName: 'ڕێکخراوی دیاسپۆرای کورد لە ئەڵمانیا',
    category: 'cash',
    categoryLabel: 'بەخشینی نەختینەیی (دۆلار)',
    amount: 8000,
    currency: 'USD',
    method: 'حەواڵەی بانکی',
    date: '2026-02-10',
    projectId: 'proj-03',
    projectName: 'سندوقی نەشتەرگەری و دەرمانی نەخۆشە هەژارەکان',
    notes: 'کۆمەکی خێرخوازانی تاراوگە بۆ نەشتەرگەری دڵی منداڵان.',
    status: 'completed'
  },
  {
    id: 'don-03',
    receiptNumber: 'RC-2026-003',
    donorId: 'donor-02',
    donorName: 'گروپی پیشەسازی ئارام',
    category: 'heating_appliances',
    categoryLabel: 'کەرەستەی زستانە و سووتەمەنی',
    amount: 5000000,
    currency: 'IQD',
    itemDetails: {
      quantity: 60,
      unit: 'دانە',
      contentsDescription: 'سۆپای نەوتی زستانە + کارتۆنی دابەشکردن',
      unitPrice: 50000,
      estimatedMarketValue: 3000000
    },
    method: 'کەرەستە و کاڵا',
    date: '2026-02-14',
    projectId: 'proj-02',
    projectName: 'کەمپەینی فریاگوزاری زستانە و دابینکردنی سووتەمەنی',
    notes: '٦٠ دانە سۆپای زستانەی کوالێتی بەرز بۆ ماڵە هەژارەکان گەیشتە کۆگا.',
    status: 'completed'
  },
  {
    id: 'don-04',
    receiptNumber: 'RC-2026-004',
    donorId: 'donor-03',
    donorName: 'حاجی عوسمان هەولێری',
    category: 'cash',
    categoryLabel: 'کەفالەتی نەختینەیی هەتیوان',
    amount: 3000000,
    currency: 'IQD',
    method: 'FastPay',
    date: '2026-02-20',
    projectId: 'proj-04',
    projectName: 'پڕۆژەی کەفالەت و خەرجی خوێندنی قوتابیانی بێباوک',
    notes: 'پێدانی کەفالەتی مانگانە بۆ ١٠ منداڵی بێباوک بۆ ماوەی ٢ مانگ.',
    status: 'completed'
  },
  {
    id: 'don-05',
    receiptNumber: 'RC-2026-005',
    donorId: 'donor-01',
    donorName: 'کۆمپانیای بازرگانی گشتی کاروان',
    category: 'food_basket',
    categoryLabel: 'سەبەتەی خۆراکی خێزانی',
    amount: 6000000,
    currency: 'IQD',
    itemDetails: {
      quantity: 120,
      unit: 'سەبەتە',
      contentsDescription: 'زەیت، برنج، ئارد، شەکر، چا، پاقلەمەنی، دۆشاوی تەماتە',
      unitPrice: 50000,
      estimatedMarketValue: 6000000
    },
    method: 'کەرەستە و کاڵا',
    date: '2026-02-25',
    projectId: 'proj-01',
    projectName: 'پڕۆژەی سەبەتەی خۆراکی مانگانەی خێزانە کەمدرامەتەکان',
    notes: '١٢٠ سەبەتەی خۆراکی ئامادەکراو بۆ دابەشکردن لە هەولێر و دهۆک.',
    status: 'completed'
  },
  {
    id: 'don-06',
    receiptNumber: 'RC-2026-006',
    donorId: 'donor-06',
    donorName: 'دکتۆر ڕێبوار دهۆکی',
    category: 'medical',
    categoryLabel: 'پێداویستی پزیشکی و دەرمان',
    amount: 2500000,
    currency: 'IQD',
    itemDetails: {
      quantity: 15,
      unit: 'دانە',
      contentsDescription: 'ویلچێری پزیشکی مۆدێرن بۆ پەککەوتووان',
      unitPrice: 150000,
      estimatedMarketValue: 2250000
    },
    method: 'کەرەستە و کاڵا',
    date: '2026-03-01',
    projectId: 'proj-05',
    projectName: 'پڕۆژەی دابینکردنی ویلچێر و کەرەستەی خاوەن پێداویستی تایبەت',
    notes: '١٥ دانە ویلچێر بۆ خاوەن پێداویستییە تایبەتەکان لە دهۆک و زاخۆ.',
    status: 'completed'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-01',
    title: 'پڕۆژەی سەبەتەی خۆراکی مانگانەی خێزانە کەمدرامەتەکان',
    category: 'خۆراک',
    description: 'دابەشکردنی مانگانەی سەبەتەی خۆراکی دەوڵەمەند بە ماددە خۆراکییە سەرەکییەکان بەسەر ٥٠٠ خێزانی هەژار لە سەرتاسەری کوردستان.',
    targetBudgetUSD: 35000,
    targetBudgetIQD: 52500000,
    budgetCurrency: 'USD',
    raisedBudgetUSD: 24500,
    raisedBudgetIQD: 36750000,
    spentBudgetUSD: 18200,
    spentBudgetIQD: 27300000,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    status: 'active',
    governorates: ['هەولێر', 'سلێمانی', 'دهۆک', 'هەڵەبجە'],
    beneficiariesCount: 420,
    volunteersCount: 28,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop',
    milestones: [
      { id: 'm-01', title: 'تۆماری مەیدانی و پشکنینی خێزانە شایستەکان', completed: true },
      { id: 'm-02', title: 'کڕین و کۆگاکردنی بەشە خۆراکی مانگی ڕەمەزان', completed: true },
      { id: 'm-03', title: 'قۆناغی دابەشکردنی وەرزی دووەم', completed: false }
    ]
  },
  {
    id: 'proj-02',
    title: 'کەمپەینی فریاگوزاری زستانە و دابینکردنی سووتەمەنی',
    category: 'کەمپەینی زستانە و سووتەمەنی',
    description: 'دابینکردنی نەوتی سپی و سۆپا و بەتانی بۆ خێزانە بێدەرامەتەکانی ناوچە شاخاوییەکان و کەمپی ئاوارەکان.',
    targetBudgetUSD: 28000,
    targetBudgetIQD: 42000000,
    budgetCurrency: 'USD',
    raisedBudgetUSD: 22000,
    raisedBudgetIQD: 33000000,
    spentBudgetUSD: 19500,
    spentBudgetIQD: 29250000,
    startDate: '2025-11-15',
    endDate: '2026-03-31',
    status: 'active',
    governorates: ['هەولێر', 'دهۆک', 'زاخۆ', 'سلێمانی'],
    beneficiariesCount: 310,
    volunteersCount: 19,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop',
    milestones: [
      { id: 'm-04', title: 'دابەشکردنی بەتانی و جلوبەرگی زستانەی منداڵان', completed: true },
      { id: 'm-05', title: 'دابەشکردنی نەوتی سپی لە گوندەکانی دەوروبەری دهۆک', completed: true }
    ]
  },
  {
    id: 'proj-03',
    title: 'سندوقی نەشتەرگەری و دەرمانی نەخۆشە هەژارەکان',
    category: 'تەندروستی و پزیشکی',
    description: 'هاوکاریکردنی نەخۆشە دەستکورتەکان بۆ ئەنجامدانی نەشتەرگەری پێویست و کڕینی دەرمانی نەخۆشییە درێژخایەنەکان.',
    targetBudgetUSD: 40000,
    targetBudgetIQD: 60000000,
    budgetCurrency: 'USD',
    raisedBudgetUSD: 29000,
    raisedBudgetIQD: 43500000,
    spentBudgetUSD: 21500,
    spentBudgetIQD: 32250000,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    status: 'active',
    governorates: ['هەولێر', 'سلێمانی', 'هەڵەبجە', 'کەرکووک'],
    beneficiariesCount: 85,
    volunteersCount: 12,
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop'
  },
  {
    id: 'proj-04',
    title: 'پڕۆژەی کەفالەت و خەرجی خوێندنی قوتابیانی بێباوک',
    category: 'پەروەردە و خوێندکاران',
    description: 'دابینکردنی مووچەی مانگانە و پێداویستی خوێندنگە و کرێی زانکۆ بۆ منداڵان و قوتابیانی بێباوک (هەتیو).',
    targetBudgetUSD: 30000,
    targetBudgetIQD: 45000000,
    budgetCurrency: 'USD',
    raisedBudgetUSD: 21000,
    raisedBudgetIQD: 31500000,
    spentBudgetUSD: 14000,
    spentBudgetIQD: 21000000,
    startDate: '2025-09-01',
    endDate: '2026-06-30',
    status: 'active',
    governorates: ['هەولێر', 'سلێمانی', 'دهۆک', 'گەرمیان'],
    beneficiariesCount: 150,
    volunteersCount: 15,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop'
  },
  {
    id: 'proj-05',
    title: 'پڕۆژەی دابینکردنی ویلچێر و کەرەستەی خاوەن پێداویستی تایبەت',
    category: 'تەندروستی و پزیشکی',
    description: 'پێشکەشکردنی کورسی جوڵاو (ویلچێر) و کەرەستەی یارمەتیدەر بۆ پەککەوتووان و کەمئەندامانی کەمدرامەت.',
    targetBudgetUSD: 15000,
    targetBudgetIQD: 22500000,
    budgetCurrency: 'USD',
    raisedBudgetUSD: 11500,
    raisedBudgetIQD: 17250000,
    spentBudgetUSD: 8500,
    spentBudgetIQD: 12750000,
    startDate: '2026-02-01',
    endDate: '2026-10-31',
    status: 'active',
    governorates: ['هەولێر', 'سلێمانی', 'دهۆک', 'زاخۆ'],
    beneficiariesCount: 45,
    volunteersCount: 8,
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop'
  },
  {
    id: 'proj-06',
    title: 'پڕۆژەی نۆژەنکردنەوەی خانووی بێباوکان و لێقەوماوان',
    category: 'نیشتەجێبوون و نۆژەنکردنەوە',
    description: 'چاککردنەوەی سەقف و تەوالێت و بۆری ئاوی ئەو خانووانەی مەترسی ڕووخانیان لەسەرە بۆ ژیانێکی شەرەفمەندانە.',
    targetBudgetUSD: 25000,
    targetBudgetIQD: 37500000,
    budgetCurrency: 'USD',
    raisedBudgetUSD: 16000,
    raisedBudgetIQD: 24000000,
    spentBudgetUSD: 11000,
    spentBudgetIQD: 16500000,
    startDate: '2026-01-15',
    endDate: '2026-09-30',
    status: 'active',
    governorates: ['سلێمانی', 'هەڵەبجە', 'گەرمیان'],
    beneficiariesCount: 18,
    volunteersCount: 14,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop'
  }
];

export const INITIAL_INVENTORY: InventoryItem[] = [
  {
    id: 'inv-01',
    name: 'سەبەتەی خۆراکی خێزانی ستاندارد',
    category: 'خۆراک',
    quantity: 67,
    unit: 'سەبەتە',
    minAlertThreshold: 20,
    location: 'کۆگای سەرەکی هەولێر - ڕەفەی A1',
    lastUpdated: '2026-03-01',
    unitPrice: 50000,
    estimatedMarketValue: 3350000,
    contentsDescription: 'زەیت، برنج، ئارد، شەکر، چای کوردی، دۆشاوی تەماتە، نیسک و نۆک',
    notes: 'بەشێکی وەرگیراو لە کۆمپانیای کاروان'
  },
  {
    id: 'inv-02',
    name: 'سۆپای نەوتی زستانە (کوالێتی بەرز)',
    category: 'گەرمکەرەوە و سووتەمەنی',
    quantity: 7,
    unit: 'دانە',
    minAlertThreshold: 10,
    location: 'کۆگای سەرەکی هەولێر - نهۆمی زەمینی',
    lastUpdated: '2026-02-28',
    sourceReceiptNumber: 'RC-2026-003',
    sourceDonorName: 'گروپی پیشەسازی ئارام',
    unitPrice: 50000,
    estimatedMarketValue: 350000,
    contentsDescription: '٦٠ دانە وەرگیراوە، ٥٣ دانەی بەسەر خێزانەکاندا دابەشکراوە و ٧ دانەی ماوەتەوە.',
    notes: 'پێویستی بە دووبارە پڕکردنەوە هەیە بۆ قۆناغی دووەم'
  },
  {
    id: 'inv-03',
    name: 'بەتانی دووتوێی زستانە',
    category: 'پۆشاک',
    quantity: 85,
    unit: 'دانە',
    minAlertThreshold: 30,
    location: 'کۆگای سلێمانی - ڕەفەی B2',
    lastUpdated: '2026-02-20',
    unitPrice: 25000,
    estimatedMarketValue: 2125000,
    contentsDescription: 'بەتانی ئەستووری نەرم تایبەت بە وەرزی سەرما',
    notes: 'لە بەخشینی خێرخوازانی سلێمانی'
  },
  {
    id: 'inv-04',
    name: 'جانتای خوێندنگە لەگەڵ سێتی پێداویستی',
    category: 'پۆشاک',
    quantity: 110,
    unit: 'سێت',
    minAlertThreshold: 25,
    location: 'کۆگای هەولێر - بەشی پەروەردە',
    lastUpdated: '2026-01-30',
    unitPrice: 30000,
    estimatedMarketValue: 3300000,
    contentsDescription: 'جانتا، دەفتەر، پێنووس، ڕاستە و سێتی ئەندازەیی',
    notes: 'ئامادەکراوە بۆ دەستپێکی خوێندنی وەرزی دووەم'
  },
  {
    id: 'inv-05',
    name: 'ویلچێری پزیشکی مۆدێرن بۆ پەککەوتووان',
    category: 'پێداویستی پزیشکی',
    quantity: 12,
    unit: 'دانە',
    minAlertThreshold: 5,
    location: 'کۆگای دهۆک - ژووری ئامێرەکان',
    lastUpdated: '2026-03-02',
    sourceReceiptNumber: 'RC-2026-006',
    sourceDonorName: 'دکتۆر ڕێبوار دهۆکی',
    unitPrice: 150000,
    estimatedMarketValue: 1800000,
    contentsDescription: 'ویلچێری کێش سووک و قەدکراو',
    notes: 'بۆ کەسانی خاوەن پێداویستی تایبەت و پەککەوتوو'
  },
  {
    id: 'inv-06',
    name: 'بتڵی ئۆکسجینی تەندروستی پڕکراو (١٠ لیتر)',
    category: 'پێداویستی پزیشکی',
    quantity: 8,
    unit: 'دانە',
    minAlertThreshold: 4,
    location: 'کۆگای هەڵەبجە - بەشی فریاگوزاری',
    lastUpdated: '2026-02-26',
    unitPrice: 120000,
    estimatedMarketValue: 960000,
    contentsDescription: 'تایبەت بە تووشبووانی تەنگەنەفەسی و بریندارانی چەکی کیمیایی',
    notes: 'بەشێکی وەرگیراو لە سندوقی نەخۆشە هەژارەکان'
  }
];

export const INITIAL_TRANSACTIONS: FinancialTransaction[] = [
  {
    id: 'tx-01',
    type: 'income',
    amount: 10000000,
    currency: 'IQD',
    category: 'بەخشینی دارایی',
    date: '2026-02-01',
    description: 'وەرگرتنی بەخشینی نەختینەیی لە کۆمپانیای کاروان بە پسوولەی RC-2026-001',
    recordedBy: 'ئاراس ئەحمەد',
    relatedProjectId: 'proj-01',
    receiptNumber: 'RC-2026-001',
    isCash: true
  },
  {
    id: 'tx-02',
    type: 'income',
    amount: 8000,
    currency: 'USD',
    category: 'بەخشینی دارایی',
    date: '2026-02-10',
    description: 'حەواڵەی خێرخوازانی دیاسپۆرای ئەڵمانیا بە پسوولەی RC-2026-002',
    recordedBy: 'ئاراس ئەحمەد',
    relatedProjectId: 'proj-03',
    receiptNumber: 'RC-2026-002',
    isCash: true
  },
  {
    id: 'tx-03',
    type: 'expense',
    amount: 3500000,
    currency: 'IQD',
    category: 'کڕینی سەبەتەی خۆراک',
    date: '2026-02-12',
    description: 'کڕینی برنج، ڕۆن و شەکر بۆ پڕکردنەوەی ٧٠ سەبەتەی خۆراک',
    recordedBy: 'بەرپرسی دارایی',
    relatedProjectId: 'proj-01',
    receiptNumber: 'EXP-2026-01'
  },
  {
    id: 'tx-04',
    type: 'expense',
    amount: 2500,
    currency: 'USD',
    category: 'خەرجی نەشتەرگەری',
    date: '2026-02-15',
    description: 'تێچووی نەشتەرگەری چاوی ٢ منداڵی کەمدەرامەت لە نەخۆشخانەی پار لە هەولێر',
    recordedBy: 'بەرپرسی دارایی',
    relatedProjectId: 'proj-03',
    receiptNumber: 'EXP-2026-02'
  },
  {
    id: 'tx-05',
    type: 'income',
    amount: 3000000,
    currency: 'IQD',
    category: 'بەخشینی کاڵا / کەرەستە',
    date: '2026-02-14',
    description: 'بەخشینی ٦٠ سۆپای زستانە لەلایەن گروپی پیشەسازی ئارام (تۆمارکراوی عەینی)',
    recordedBy: 'ئاراس ئەحمەد',
    relatedProjectId: 'proj-02',
    receiptNumber: 'RC-2026-003',
    isCash: false,
    itemQuantity: 60,
    itemUnit: 'دانە',
    itemUnitPrice: 50000
  },
  {
    id: 'tx-06',
    type: 'expense',
    amount: 2650000,
    currency: 'IQD',
    category: 'دابەشکردنی کەلوپەل',
    date: '2026-02-28',
    description: 'دابەشکردنی ٥٣ سۆپای زستانە بەسەر ٥٣ سوودمەند بە نرخی ٥٠,٠٠٠ دینار بۆ هەر دانەیەک',
    recordedBy: 'ئاراس ئەحمەد',
    relatedProjectId: 'proj-02',
    receiptNumber: 'TX-AID-INV-01',
    isCash: false,
    itemQuantity: 53,
    itemUnit: 'دانە',
    itemUnitPrice: 50000
  },
  {
    id: 'tx-07',
    type: 'income',
    amount: 3000000,
    currency: 'IQD',
    category: 'کەفالەتی هەتیوان',
    date: '2026-02-20',
    description: 'وەرگرتنی بەخشین لە حاجی عوسمان بە پسوولەی RC-2026-004',
    recordedBy: 'ئاراس ئەحمەد',
    relatedProjectId: 'proj-04',
    receiptNumber: 'RC-2026-004',
    isCash: true
  },
  {
    id: 'tx-08',
    type: 'expense',
    amount: 1800000,
    currency: 'IQD',
    category: 'خەرجی لۆجستی و گواستنەوە',
    date: '2026-02-24',
    description: 'کرێی بارهەڵگر بۆ گواستنەوەی کەلوپەلەکان بۆ کۆگاکانی سلێمانی و دهۆک',
    recordedBy: 'بەرپرسی دارایی',
    relatedProjectId: 'proj-01',
    receiptNumber: 'EXP-2026-03'
  }
];

export const INITIAL_VOLUNTEERS: Volunteer[] = [
  {
    id: 'vol-01',
    fullName: 'د. هەڵمەت عەزیز مەعروف',
    phone: '0750 111 2233',
    email: 'halmat.dr@gmail.com',
    governorate: 'هەولێر',
    skills: ['پشکنینی پزیشکی', 'فریاگوزاری سەرەتایی', 'ڕاوێژکاری دەروونی'],
    bloodType: 'O+',
    availability: 'ڕۆژانی پشوو',
    hoursLogged: 48,
    assignedProjectId: 'proj-03',
    status: 'active',
    joinedDate: '2025-03-01',
    badgeNumber: 'VOL-ERB-01'
  },
  {
    id: 'vol-02',
    fullName: 'تەرزە فەرهاد مستەفا',
    phone: '0770 222 4455',
    email: 'tarza.farhad@yahoo.com',
    governorate: 'سلێمانی',
    skills: ['چاودێری کۆمەڵایەتی', 'پەروەردەی منداڵان', 'ڕێکخستنی مەیدانی'],
    bloodType: 'A+',
    availability: 'هەموو کات',
    hoursLogged: 64,
    assignedProjectId: 'proj-04',
    status: 'active',
    joinedDate: '2025-04-10',
    badgeNumber: 'VOL-SUL-02'
  },
  {
    id: 'vol-03',
    fullName: 'ڕێباز سۆران حەمە',
    phone: '0750 333 7788',
    email: 'rebaz.soran@gmail.com',
    governorate: 'دهۆک',
    skills: ['شۆفێری بارهەڵگر', 'دابەشکردنی لۆجستی', 'کۆگاداری'],
    bloodType: 'B+',
    availability: 'کاتی تەنگانە',
    hoursLogged: 52,
    assignedProjectId: 'proj-02',
    status: 'active',
    joinedDate: '2025-06-15',
    badgeNumber: 'VOL-DHK-03'
  },
  {
    id: 'vol-04',
    fullName: 'پارێزەر شادیە مەحمود ڕەشید',
    phone: '0770 444 8899',
    email: 'shadiya.lawyer@gmail.com',
    governorate: 'سلێمانی',
    skills: ['ڕاوێژی یاسایی', 'بەڵگەنامە فەرمییەکان', 'پاراستنی مافی بێباوکان'],
    bloodType: 'AB+',
    availability: 'ئێواران',
    hoursLogged: 36,
    assignedProjectId: 'proj-04',
    status: 'active',
    joinedDate: '2025-07-20',
    badgeNumber: 'VOL-SUL-04'
  },
  {
    id: 'vol-05',
    fullName: 'ئارام کەمال حوسێن',
    phone: '0750 555 9900',
    email: 'aram.it.tech@gmail.com',
    governorate: 'هەولێر',
    skills: ['تەکنەلۆژیای زانیاری', 'دیزاین و گرافیک', 'تۆماری داتابەیس'],
    bloodType: 'O-',
    availability: 'هەموو کات',
    hoursLogged: 75,
    assignedProjectId: 'proj-01',
    status: 'active',
    joinedDate: '2025-02-01',
    badgeNumber: 'VOL-ERB-05'
  }
];

export const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif-01',
    title: 'تەواوبوونی دابەشکردنی سۆپای زستانە',
    message: 'سەرکەوتووانە ٥٣ دانە لە سۆپا بەخشراوەکان بەسەر ٥٣ خێزانی شایستە دابەشکران و ڕەسیدی ماوە لە کۆگا بۆ ٧ دانە نوێکرایەوە.',
    type: 'inventory',
    timestamp: 'پێش ٢ کاتژمێر',
    read: false,
    priority: 'medium'
  },
  {
    id: 'notif-02',
    title: 'بەخشینی نوێ لە ڕێکخراوی دیاسپۆرا',
    message: 'بڕی ٨,٠٠٠ دۆلاری ئەمریکی بۆ سندوقی نەشتەرگەری گەیشت و لە تۆمارە داراییەکان تۆمارکرا.',
    type: 'donation',
    timestamp: 'دوێنێ',
    read: true,
    priority: 'high'
  },
  {
    id: 'notif-03',
    title: 'سیستەمی پێشاندان (Showcase Edition) چالاکە',
    message: 'هەموو بەشەکانی سیستەم کراوەن بۆ بەکارهێنان و تاقیکردنەوە بە داتای دەوڵەمەندی نموونەیی بەبێ پێویستی بە چونەژوورەوە.',
    type: 'system',
    timestamp: 'ئێستا',
    read: false,
    priority: 'low'
  }
];

export const INITIAL_DOCUMENTS: DocumentItem[] = [
  {
    id: 'doc-01',
    title: 'مۆڵەتی فەرمی کارکردنی وەزارەتی ناوخۆ - فەرمانگەی ڕێکخراوەکان',
    category: 'گرێبەست',
    fileType: 'PDF',
    fileSize: '2.4 MB',
    uploadDate: '2025-01-10',
    relatedEntity: 'مۆڵەتی حکومی'
  },
  {
    id: 'doc-02',
    title: 'ڕاپۆرتی وەرزی فەرمی وردبینی دارایی و ژمێریاری یاسایی ٢٠٢٥',
    category: 'پسوولەی دارایی',
    fileType: 'PDF',
    fileSize: '4.8 MB',
    uploadDate: '2026-01-20',
    relatedEntity: 'دیوانی چاودێری دارایی'
  },
  {
    id: 'doc-03',
    title: 'پرۆتۆکۆلی هاوبەشی لەگەڵ سەندیکای پزیشکانی کوردستان بۆ نەشتەرگەری هەژاران',
    category: 'گرێبەست',
    fileType: 'PDF',
    fileSize: '1.7 MB',
    uploadDate: '2026-02-05',
    relatedEntity: 'سەندیکای پزیشکان'
  },
  {
    id: 'doc-04',
    title: 'لیستی فەرمی دابەشکردنی بەتانی و سووتەمەنی زستانەی دهۆک',
    category: 'وێنەی مەیدانی',
    fileType: 'XLSX',
    fileSize: '850 KB',
    uploadDate: '2026-02-28',
    relatedEntity: 'تیمی مەیدانی دهۆک'
  }
];

export const INITIAL_AUDIT_LOGS: AuditLog[] = [
  {
    id: 'log-01',
    timestamp: '2026-03-01 10:15:20',
    userName: 'ئاراس ئەحمەد',
    userRole: 'admin',
    action: 'تۆمارکردنی بەخشین',
    details: 'بەخشینی کاڵای ٦٠ دانە سۆپای زستانە تۆمارکرا بە بەهای ٣,٠٠٠,٠٠٠ دینار (پسوولەی RC-2026-003)',
    type: 'create'
  },
  {
    id: 'log-02',
    timestamp: '2026-03-02 11:30:45',
    userName: 'ئاراس ئەحمەد',
    userRole: 'admin',
    action: 'دابەشکردنی بەکۆمەڵی هاوکاری',
    details: '٥٣ دانە لە سۆپای زستانە بەسەر ٥٣ سوودمەند دابەشکرا و ژمارەی کۆگا کەمکرایەوە بۆ ٧ دانە',
    type: 'update'
  },
  {
    id: 'log-03',
    timestamp: '2026-03-04 14:22:10',
    userName: 'ئاراس ئەحمەد',
    userRole: 'admin',
    action: 'زیادکردنی سوودمەندی نهێنی',
    details: 'دۆسیەی سوودمەندی نهێنی و پارێزراو بە سەرکەوتوویی تۆمارکرا بە ناونیشانی شاردراوە',
    type: 'create'
  },
  {
    id: 'log-04',
    timestamp: '2026-03-06 09:00:00',
    userName: 'سیستەمی چاودێری',
    userRole: 'system',
    action: 'دەستپێکی وەشانی پێشاندان (Showcase Mode)',
    details: 'سیستەمی تاقیکاری بە سەرکەوتوویی بارکرا بە داتای پارێزراوی نموونەیی بۆ نمایش و پشکنین',
    type: 'auth'
  }
];

export const GOVERNORATE_STATS: GovernorateStats[] = [
  {
    name: 'هەولێر',
    beneficiariesCount: 420,
    totalAidDistributedIQD: 38500000,
    activeProjectsCount: 5,
    volunteersCount: 24,
    coordinates: { x: 55, y: 40 }
  },
  {
    name: 'سلێمانی',
    beneficiariesCount: 380,
    totalAidDistributedIQD: 34200000,
    activeProjectsCount: 4,
    volunteersCount: 22,
    coordinates: { x: 72, y: 62 }
  },
  {
    name: 'دهۆک',
    beneficiariesCount: 260,
    totalAidDistributedIQD: 22800000,
    activeProjectsCount: 4,
    volunteersCount: 16,
    coordinates: { x: 30, y: 22 }
  },
  {
    name: 'هەڵەبجە',
    beneficiariesCount: 140,
    totalAidDistributedIQD: 12500000,
    activeProjectsCount: 3,
    volunteersCount: 10,
    coordinates: { x: 84, y: 76 }
  },
  {
    name: 'کەرکووک',
    beneficiariesCount: 110,
    totalAidDistributedIQD: 9400000,
    activeProjectsCount: 2,
    volunteersCount: 8,
    coordinates: { x: 52, y: 65 }
  },
  {
    name: 'گەرمیان',
    beneficiariesCount: 95,
    totalAidDistributedIQD: 8100000,
    activeProjectsCount: 2,
    volunteersCount: 7,
    coordinates: { x: 78, y: 88 }
  },
  {
    name: 'زاخۆ',
    beneficiariesCount: 85,
    totalAidDistributedIQD: 7200000,
    activeProjectsCount: 2,
    volunteersCount: 6,
    coordinates: { x: 22, y: 15 }
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-01',
    title: 'کۆبوونەوەی هەفتانەی هەماهەنگی پڕۆژە مەیدانییەکان',
    content: 'ڕۆژی پێنجشەممە کاتژمێر ٤:٠٠ی ئێوارە لە هۆڵی کۆبوونەوە کۆبوونەوەی سەرپەرشتیارانی تیمەکان بۆ پێداچوونەوە بە دابەشکردنی بەشە خۆراکی نوێ بەڕێوەدەچێت.',
    author: 'بەڕێوەبەری گشتی',
    date: '2026-03-05',
    tag: 'کۆبوونەوە'
  },
  {
    id: 'ann-02',
    title: 'دەستپێکی قۆناغی سێیەمی فریاگوزاری زستانە لە ناوچە شاخاوییەکان',
    content: 'سوپاس بۆ خێرخوازان، قۆناغی سێیەمی دابەشکردنی نەوت و سۆپا لە گوندەکانی دەوروبەری سیدەکان و پێنجوێن دەستپێدەکات.',
    author: 'تیمی فریاگوزاری مەیدانی',
    date: '2026-03-02',
    tag: 'مەیدانی'
  }
];

export const INITIAL_REMINDERS: AutomatedReminder[] = [
  {
    id: 'rem-01',
    title: 'پێداچوونەوە بە دۆسیە لەژێر لێکۆڵینەوەکانی هەولێر',
    details: 'سەردانی مەیدانی بۆ ٥ خێزانی نوێ لە گەڕەکی باداوە',
    dueDate: '2026-03-10',
    type: 'followup',
    completed: false
  },
  {
    id: 'rem-02',
    title: 'ئامادەکردنی ڕاپۆرتی دارایی مانگانە بۆ دەستەی بەڕێوەبەری',
    details: 'کۆکردنەوەی ژمارەی پسوولەکانی بەخشین و خەرجی',
    dueDate: '2026-03-15',
    type: 'finance',
    completed: false
  },
  {
    id: 'rem-03',
    title: 'پشکنینی بەشە ماوەکانی کۆگای کەلوپەلی زستانە',
    details: 'ژماردنی ڕەسیدی ماوەی سۆپا و بەتانی لە کۆگای سەرەکی',
    dueDate: '2026-03-12',
    type: 'inventory',
    completed: true
  }
];
