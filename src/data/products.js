// Each product maps to a ProductCard in the Products section.
// icon: HTML entity code rendered via dangerouslySetInnerHTML
// specs: array of spec chip labels

export const products = [
  {
    id: 'hxk',
    iconCode: 128427,
    tag: 'HXK Series',
    name: 'Self-Service Kiosks',
    desc: 'Ruggedized interactive kiosks for retail, banking, ticketing, and wayfinding. IP65 rated enclosures with integrated payment modules.',
    specs: ['10"–55" Display', 'Touch Screen', 'IP65', 'NFC/RFID'],
  },
  {
    id: 'hxi',
    iconCode: 128421,
    tag: 'HXI Series',
    name: 'Industrial PCs',
    desc: 'Fanless embedded computers for harsh industrial environments. Wide temperature range, DIN-rail mount, multiple I/O ports.',
    specs: ['-40°C to 85°C', 'Fanless', 'DIN Rail', 'MIL-STD'],
  },
  {
    id: 'hxm',
    iconCode: 128192,
    tag: 'HXM Series',
    name: 'Mini PCs',
    desc: 'Ultra-compact computing nodes for edge deployments, digital signage, and thin-client applications. Low power, high performance.',
    specs: ['Intel/AMD', '4K Output', 'Wi-Fi 6E', 'NVMe SSD'],
  },
  // {
  //   id: 'hxa',
  //   iconCode: 128444,
  //   tag: 'HXA Series',
  //   name: 'AIO Computers',
  //   desc: 'All-in-one PCs with integrated displays for commercial, medical, and POS applications. Sleek design with zero cable clutter.',
  //   specs: ['15"–27"', 'Touchscreen', 'PCAP', 'VESA Mount'],
  // },
  // {
  //   id: 'hxs',
  //   iconCode: 128274,
  //   tag: 'HXS Series',
  //   name: 'Rack Servers',
  //   desc: 'Enterprise-grade 1U/2U/4U rack servers for data centers, edge computing, and cloud infrastructure. Custom configured to spec.',
  //   specs: ['Dual Xeon', 'ECC RAM', 'IPMI', 'Hot-swap HDD'],
  // },
  // {
  //   id: 'hxn',
  //   iconCode: 127760,
  //   tag: 'HXN Series',
  //   name: 'Networking Products',
  //   desc: 'Network appliances, routers, firewalls, and switches built for SMB to enterprise. Multi-WAN, SD-WAN ready, and fully manageable.',
  //   specs: ['10GbE', 'SD-WAN', 'VPN', 'DPDK'],
  // },
  {
    id: 'hxl',
    iconCode: 128161,
    tag: 'HXL Series',
    name: 'Active LED Displays',
    desc: 'High-brightness indoor/outdoor LED video walls and matrix displays. Fine pitch available for control rooms and command centers.',
    specs: ['P1.2–P10', '10,000 nits', 'IP68', '16-bit Grey'],
  },
  {
    id: 'hxd',
    iconCode: 128247,
    tag: 'HXD Series',
    name: 'Display Screens',
    desc: 'Commercial-grade LCD/OLED display solutions from 10" to 98". Designed for 24/7 operation with content management system integration.',
    specs: ['24/7 Rated', '4K/8K', 'Anti-Glare', 'CMS Ready'],
  },
]
