import type { Brand, Category, CategoryShowcase, Product } from '@/types';

export const categories: Category[] = [
  {
    id: 'centrifuges',
    name: 'Centrifuges',
    description: 'Benchtop and floor-model centrifuges for sample separation.',
  },
  {
    id: 'hematology-analyzers',
    name: 'Hematology Analyzers',
    description: 'Automated analyzers for blood cell counts and related diagnostics.',
  },
  {
    id: 'microscopy',
    name: 'Microscopy',
    description: 'Microscopes and microscopy accessories.',
  },
  {
    id: 'lab-equipment',
    name: 'General Laboratory Equipment',
    description: 'Incubators, ovens, biosafety cabinets, autoclaves, and other lab instruments.',
  },
];

export const brands: Brand[] = [
  {
    id: 'zenithlab',
    name: 'ZenithLab',
    tagline: 'Centrifuges',
    description:
      'Zenith Lab Co., Ltd. manufactures laboratory centrifuges, including low-speed, ' +
      'high-speed, hematocrit, and PRP models. The products listed below are verified ' +
      'against Zenith Lab product listings and distributor catalogs.',
    categoryIds: ['centrifuges'],
  },
  {
    id: 'sysmex',
    name: 'Sysmex',
    tagline: 'Hematology Analyzers',
    description:
      'Sysmex manufactures automated hematology analyzers. The XN-Series models listed ' +
      'below are verified against official Sysmex America and Sysmex Europe product pages.',
    categoryIds: ['hematology-analyzers'],
  },
  {
    id: 'biobase',
    name: 'BIOBASE',
    tagline: 'Laboratory Equipment',
    description:
      'BIOBASE Group manufactures a range of laboratory equipment including biosafety ' +
      'cabinets, laminar flow cabinets, and drying ovens/incubators. The products below ' +
      'are verified against official BIOBASE product pages.',
    categoryIds: ['lab-equipment'],
  },
];

export const products: Product[] = [
  {
    id: 'zenithlab-tdl-4a',
    name: 'TDL-4A Low-Speed Centrifuge',
    brandId: 'zenithlab',
    model: 'TDL-4A',
    categoryId: 'centrifuges',
    image:
      'https://images.pexels.com/photos/6629397/pexels-photo-6629397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'Low-speed benchtop centrifuge with a 24-tube capacity for routine clinical separation.',
    description:
      'The Zenith Lab TDL-4A is a low-speed laboratory centrifuge suited for hospitals, ' +
      'blood stations, and routine clinical labs. Specifications below are drawn from ' +
      'Zenith Lab product listings. The image shown is illustrative and is not a photo ' +
      'of the actual TDL-4A unit.',
    specifications: [
      { label: 'Max speed', value: '4,000 rpm' },
      { label: 'Max RCF', value: '2,720 × g' },
      { label: 'Capacity', value: '24 tubes' },
      { label: 'Motor', value: 'Brushless' },
    ],
    status: 'ready',
  },
  {
    id: 'zenithlab-lc-05a',
    name: 'LC-05A Laboratory Centrifuge',
    brandId: 'zenithlab',
    model: 'LC-05A',
    categoryId: 'centrifuges',
    image:
      'https://images.pexels.com/photos/6627667/pexels-photo-6627667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'Small benchtop laboratory centrifuge for everyday sample preparation.',
    description:
      'The Zenith Lab LC-05A is a compact benchtop centrifuge listed on the official ' +
      'Zenith Lab website (zenithlabo.com). Detailed specifications are limited in ' +
      'public listings; the image shown is illustrative and is not a photo of the ' +
      'actual LC-05A unit.',
    specifications: [
      { label: 'Type', value: 'Benchtop laboratory centrifuge' },
      { label: 'Brand', value: 'Zenith Lab' },
      { label: 'Listed on', value: 'zenithlabo.com' },
    ],
    status: 'ready',
  },
  {
    id: 'zenithlab-lc-04p',
    name: 'LC-04P PRP Centrifuge',
    brandId: 'zenithlab',
    model: 'LC-04P',
    categoryId: 'centrifuges',
    image:
      'https://images.pexels.com/photos/6627661/pexels-photo-6627661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      '8-place PRP/PRF centrifuge with fixed-angle rotor and digital controls.',
    description:
      'The Zenith Lab LC-04P is a PRP centrifuge with an 8-place fixed-angle rotor, ' +
      'designed for PRP and PRF sample preparation. Specifications below are drawn from ' +
      'a distributor listing (harmanis.com.gr). The image shown is illustrative and is ' +
      'not a photo of the actual LC-04P unit.',
    specifications: [
      { label: 'Rotor', value: '8-place fixed-angle' },
      { label: 'Max speed', value: '4,000 rpm' },
      { label: 'Application', value: 'PRP / PRF preparation' },
      { label: 'Controls', value: 'Digital' },
    ],
    status: 'ready',
  },
  {
    id: 'sysmex-xn-550',
    name: 'XN-550 Automated Hematology Analyzer',
    brandId: 'sysmex',
    model: 'XN-550',
    categoryId: 'hematology-analyzers',
    image:
      'https://images.pexels.com/photos/17940257/pexels-photo-17940257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'Automated hematology analyzer with integrated rack sampler and reflex testing.',
    description:
      'The Sysmex XN-550 is an automated hematology analyzer featuring an intelligent ' +
      'integrated rack sampler, automatic rerun and reflex functionality, and a low WBC ' +
      'mode for accurate counts. Specifications below are from the official Sysmex ' +
      'America product page. The image shown is illustrative and is not a photo of the ' +
      'actual XN-550 unit.',
    specifications: [
      { label: 'Throughput', value: 'Up to 60 samples/h (WB mode)' },
      { label: 'Sampling', value: 'Integrated rack sampler' },
      { label: 'Features', value: 'Auto rerun & reflex, low WBC mode' },
      { label: 'Source', value: 'sysmex.com (official)' },
    ],
    status: 'ready',
  },
  {
    id: 'sysmex-xn-350',
    name: 'XN-350 Automated Hematology Analyzer',
    brandId: 'sysmex',
    model: 'XN-350',
    categoryId: 'hematology-analyzers',
    image:
      'https://images.pexels.com/photos/34642915/pexels-photo-34642915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'Open-tube hematology analyzer with integrated IPU and LCD touchscreen.',
    description:
      'The Sysmex XN-350 offers single-sample analysis in open mode with a fully ' +
      'integrated information-processing unit and LCD colour touchscreen. It uses ' +
      'fluorescence flow cytometry and Sysmex\'s cyanide-free SLS haemoglobin method. ' +
      'Specifications below are from official Sysmex America and Sysmex Europe pages. ' +
      'The image shown is illustrative and is not a photo of the actual XN-350 unit.',
    specifications: [
      { label: 'Throughput', value: 'Up to 60 samples/h (WB mode)' },
      { label: 'Sampling', value: 'Open tube, single sample' },
      { label: 'Display', value: 'LCD colour touchscreen (integrated IPU)' },
      { label: 'Dimensions', value: '450 × 510 × 460 mm, ~35 kg' },
      { label: 'Source', value: 'sysmex.com, sysmex-europe.com (official)' },
    ],
    status: 'ready',
  },
  {
    id: 'sysmex-xn-450',
    name: 'XN-450 Automated Hematology Analyzer',
    brandId: 'sysmex',
    model: 'XN-450',
    categoryId: 'hematology-analyzers',
    image:
      'https://images.pexels.com/photos/8442373/pexels-photo-8442373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'Closed-mode hematology analyzer with LCD touchscreen and intuitive XN technology.',
    description:
      'The Sysmex XN-450 is a closed-mode sampler hematology analyzer featuring an LCD ' +
      'colour touchscreen and Sysmex XN-Series technology. It is listed alongside the ' +
      'XN-350 and XN-550 on the official Sysmex America XN-L Series pages. The image ' +
      'shown is illustrative and is not a photo of the actual XN-450 unit.',
    specifications: [
      { label: 'Sampling', value: 'Closed mode sampler' },
      { label: 'Display', value: 'LCD colour touchscreen' },
      { label: 'Technology', value: 'XN-Series (fluorescence flow cytometry)' },
      { label: 'Source', value: 'sysmex.com (official)' },
    ],
    status: 'ready',
  },
  {
    id: 'biobase-bbs-h800',
    name: 'BBS-H800 Horizontal Laminar Flow Cabinet',
    brandId: 'biobase',
    model: 'BBS-H800',
    categoryId: 'lab-equipment',
    image:
      'https://images.pexels.com/photos/11730916/pexels-photo-11730916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'Horizontal laminar flow cabinet with LCD display and 304 stainless steel work area.',
    description:
      'The BIOBASE BBS-H800 is a horizontal laminar flow cabinet with an LCD display and ' +
      'a 304 stainless steel working area. Specifications below are from the official ' +
      'BIOBASE product page (biobase.com). The image shown is illustrative and is not a ' +
      'photo of the actual BBS-H800 unit.',
    specifications: [
      { label: 'Airflow velocity', value: '0.30–0.45 m/s' },
      { label: 'Display', value: 'LCD' },
      { label: 'Work area', value: '304 stainless steel' },
      { label: 'Source', value: 'biobase.com (official)' },
    ],
    status: 'ready',
  },
  {
    id: 'biobase-bov-d35',
    name: 'BOV-D35 Drying Oven / Incubator (Dual Purpose)',
    brandId: 'biobase',
    model: 'BOV-D35',
    categoryId: 'lab-equipment',
    image:
      'https://images.pexels.com/photos/18471462/pexels-photo-18471462.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      '35L dual-purpose drying oven and incubator with microprocessor temperature control.',
    description:
      'The BIOBASE BOV-D35 is a dual-purpose drying oven and incubator with a 35L ' +
      'capacity, microprocessor temperature control, and over-temperature protection. ' +
      'Specifications below are from the official BIOBASE product pages. The image shown ' +
      'is illustrative and is not a photo of the actual BOV-D35 unit.',
    specifications: [
      { label: 'Capacity', value: '35 L' },
      { label: 'Incubator range', value: 'RT +5 ~ 80 °C' },
      { label: 'Oven range', value: '80 ~ 220 °C' },
      { label: 'Control', value: 'Microprocessor, LED display' },
      { label: 'Source', value: 'biobase.com, biobase.cc (official)' },
    ],
    status: 'ready',
  },
  {
    id: 'biobase-eb2-3f',
    name: 'EB2-3F Class II B2 Biological Safety Cabinet',
    brandId: 'biobase',
    model: 'EB2-3F',
    categoryId: 'lab-equipment',
    image:
      'https://images.pexels.com/photos/36847822/pexels-photo-36847822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    summary:
      'Class II Type B2 biological safety cabinet with HEPA-filtered airflow.',
    description:
      'The BIOBASE EB2-3F is a Class II Type B2 biological safety cabinet. Specifications ' +
      'below are from the official BIOBASE product page (biobase.com). The image shown is ' +
      'illustrative and is not a photo of the actual EB2-3F unit.',
    specifications: [
      { label: 'Class', value: 'Class II Type B2' },
      { label: 'External size (W×D×H)', value: '1100 × 800 × 2250 mm' },
      { label: 'Internal size (W×D×H)', value: '940 × 600 × 660 mm' },
      { label: 'Max opening', value: '460 mm' },
      { label: 'Source', value: 'biobase.com (official)' },
    ],
    status: 'ready',
  },
];

export const categoryShowcases: CategoryShowcase[] = [
  {
    id: 'showcase-zenithlab-centrifuges',
    brandId: 'zenithlab',
    categoryId: 'centrifuges',
    image:
      'https://images.pexels.com/photos/6629397/pexels-photo-6629397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    altText:
      'Illustrative image of a laboratory centrifuge — not a specific ZenithLab product.',
    description:
      'Laboratory centrifuges for clinical, research, and industrial sample separation. ' +
      'Specific ZenithLab models and specifications will be listed once verified.',
    status: 'pending',
  },
  {
    id: 'showcase-sysmex-hematology',
    brandId: 'sysmex',
    categoryId: 'hematology-analyzers',
    image:
      'https://images.pexels.com/photos/8442373/pexels-photo-8442373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    altText:
      'Illustrative image of laboratory analysis equipment — not a specific Sysmex product.',
    description:
      'Hematology analyzers for automated blood cell counting and related diagnostics. ' +
      'Verified Sysmex models will be published here once confirmed.',
    status: 'pending',
  },
  {
    id: 'showcase-biobase-lab-equipment',
    brandId: 'biobase',
    categoryId: 'lab-equipment',
    image:
      'https://images.pexels.com/photos/8442500/pexels-photo-8442500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    altText:
      'Illustrative image of general laboratory equipment — not a specific BIOBASE product.',
    description:
      'General laboratory equipment such as incubators, ovens, biosafety cabinets, and ' +
      'autoclaves. BIOBASE product listings will appear here after verification.',
    status: 'pending',
  },
];

export function showcaseForBrandCategory(
  brandId: string,
  categoryId: string,
): CategoryShowcase | undefined {
  return categoryShowcases.find(
    (s) => s.brandId === brandId && s.categoryId === categoryId,
  );
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getBrandById(id: string): Brand | undefined {
  return brands.find((b) => b.id === id);
}

export function productsForBrand(brandId: string): Product[] {
  return products.filter((p) => p.brandId === brandId);
}

export function productsForCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function productsForBrandCategory(
  brandId: string,
  categoryId: string,
): Product[] {
  return products.filter(
    (p) => p.brandId === brandId && p.categoryId === categoryId,
  );
}
