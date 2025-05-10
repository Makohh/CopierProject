const printerData = [
  {
    id: '1',
    name: 'Prusa i3 MK3S+',
    brand: 'Prusa Research',
    description: 'The Prusa i3 MK3S+ is the latest version of the award-winning open-source 3D printers by Josef Prusa. It features exceptional print quality, reliability, and a wide range of supported materials.',
    image: 'prusa-i3.jpg',
    capabilities: [
      'Print volume: 250 × 210 × 210 mm',
      'Layer height: 0.05 - 0.35 mm',
      'Material compatibility: PLA, PETG, ASA, ABS, PC, CPE, PVA/BVOH, PVB, HIPS, PP, Flex, nGen, Nylon, Carbon-filled, and more',
      'Automatic mesh bed leveling',
      'Filament sensor'
    ]
  },
  {
    id: '2',
    name: 'Creality Ender 3 V2',
    brand: 'Creality',
    description: 'The Ender 3 V2 is an upgraded version of the popular Ender 3 printer. It offers a user-friendly design, silent motherboard, and improved stability for consistent high-quality prints.',
    image: 'ender-3-v2.jpg',
    capabilities: [
      'Print volume: 220 × 220 × 250 mm',
      'Layer height: 0.1 - 0.4 mm',
      'Material compatibility: PLA, TPU, PETG, ABS',
      'Silent stepper drivers',
      'Tempered glass build plate'
    ]
  },
  {
    id: '3',
    name: 'Elegoo Mars 2 Pro',
    brand: 'Elegoo',
    description: 'The Elegoo Mars 2 Pro is a resin 3D printer that features a monochrome LCD for faster printing and longer screen life. It offers high precision and detail perfect for miniatures and jewelry.',
    image: 'elegoo-mars-2.jpg',
    capabilities: [
      'Print volume: 129 × 80 × 160 mm',
      'Layer height: 0.01 - 0.2 mm',
      'XY resolution: 0.05 mm',
      'UV wavelength: 405nm',
      'Built-in air filtration system'
    ]
  }
];

export default printerData;
