import { Product, ShowroomConfig, ShowroomOffer, Testimonial, GalleryItem, FAQItem } from '../types';

export const SHOWROOM_CONFIG: ShowroomConfig = {
  name: "PUNJAB FURNITURES",
  tagline: "Modern Furniture for Modern Living",
  heroHeadline: "Architectural Elegance, Master Woodcraft",
  heroSubtitle: "Curated modern living, bedroom, and dining collections crafted from seasoned hardwoods and premium upholstery for distinguished residences.",
  phone: "7500090009",
  formattedPhone: "+91 75000 90009",
  whatsappNumber: "917500090009",
  contact: {
    phone: "7500090009",
    phoneFormatted: "+91 75000 90009",
    whatsapp: "917500090009",
    whatsappFormatted: "+91 75000 90009",
  },
  address: {
    street: "Dehradun Rd",
    landmark: "Near Sapna Cinema",
    area: "Khanalampura",
    locality: "Khanalampura",
    city: "Saharanpur",
    state: "Uttar Pradesh",
    pincode: "247001",
    country: "India",
    fullFormatted: "Dehradun Rd, Near Sapna Cinema, Khanalampura, Saharanpur, Uttar Pradesh 247001, India"
  },
  openingHours: {
    days: "Wednesday – Monday",
    hours: "9:00 AM – 9:00 PM",
    closedDay: "Tuesday",
    note: "Tuesday Closed. Walk-ins welcome; personal consultations available upon enquiry."
  },
  // Exact Google Map search query for Punjab Furnitures / Near Sapna Cinema Dehradun Rd Saharanpur
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.627685657801!2d77.5458!3d29.9678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eebdf64593451%3A0x1b57022cb3356064!2sDehradun%20Rd%2C%20Khanalampura%2C%20Saharanpur%2C%20Uttar%20Pradesh%20247001!5e0!3m2!1sen!2sin!4v1710758400000!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Dehradun+Rd+Near+Sapna+Cinema+Khanalampura+Saharanpur+Uttar+Pradesh+247001"
};

export const CATEGORIES = [
  'All',
  'Sofas',
  'Beds',
  'Dining Tables',
  'Wardrobes',
  'TV Units',
  'Coffee Tables',
  'Office Furniture',
  'Custom Furniture',
  'Home Décor'
] as const;

export const PRODUCTS: Product[] = [
  // --- SOFAS ---
  {
    id: 'sofa-arden-lounge',
    name: 'Arden Lounge Sofa',
    category: 'Sofas',
    shortDescription: 'Generous low-profile sofa with tailored deep forest green velvet upholstery and concealed walnut plinth.',
    fullDescription: 'The Arden Lounge Sofa embodies quiet architectural luxury. Featuring hand-tied pocket springs, dual-density memory foam cushioning, and an Italian velvet exterior accented with a solid walnut perimeter base. Designed for balanced posture and plush lounging.',
    materials: 'High-density foam, kiln-dried hardwood frame, plush velvet',
    finish: 'Forest Green Velvet & Natural Walnut base',
    dimensions: '94" W × 38" D × 30" H',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Hand-finished double welt piping', 'Reinforced corner block frame', 'Feather-blend back cushions']
  },
  {
    id: 'sofa-monarch-sectional',
    name: 'Monarch Sectional',
    category: 'Sofas',
    shortDescription: 'Grand L-shaped sectional sofa wrapped in warm ivory bouclé with feather-blend cushions.',
    fullDescription: 'Sculptural and inviting, the Monarch Sectional anchors modern living spaces with expansive proportions. Its curvilinear silhouette is enveloped in textured ivory bouclé that is stain-resistant yet touchably soft, supported by internal hardwood cross-bracing.',
    materials: 'Textured bouclé, solid beechwood inner framework',
    finish: 'Warm Ivory Bouclé',
    dimensions: '118" W × 72" D (Chaise) × 32" H',
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=80',
    features: ['Modular interlocking brackets', 'Deep 42-inch seated depth', 'Reversible cushion cores']
  },
  {
    id: 'sofa-aurelia-loveseat',
    name: 'Aurelia Loveseat',
    category: 'Sofas',
    shortDescription: 'Compact two-seater featuring contoured channeled backrest and brushed champagne brass legs.',
    fullDescription: 'An intimate statement piece suited for master suites or formal parlours. The Aurelia Loveseat marries subtle Art Deco fluting with Scandinavian minimalism, finished in durable moss-green upholstery.',
    materials: 'Premium woven chenille, brass-capped steel legs',
    finish: 'Deep Moss & Satin Champagne',
    dimensions: '66" W × 34" D × 32" H',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=80',
    features: ['Vertical channel tufting', 'High-resilience foam core', 'Compact architectural footprint']
  },
  {
    id: 'sofa-valencia-tuxedo',
    name: 'Valencia Tuxedo Sofa',
    category: 'Sofas',
    shortDescription: 'Symmetrical tuxedo-arm sofa with diamond button tufting and solid teak legs.',
    fullDescription: 'Crafted with timeless straight-line geometry, the Valencia delivers formal poise without sacrificing lounge comfort. Built around seasoned Indian teak framing with deep diamond button stitching on every interior panel.',
    materials: 'Grain-matched Indian Teakwood, top-tier linen weave',
    finish: 'Earthy Oatmeal Linen & Teak Oil Finish',
    dimensions: '88" W × 36" D × 31" H',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80',
    features: ['Hand-hammered button tufts', 'Kiln-seasoned teak legs', 'Removable seat covers']
  },
  {
    id: 'sofa-savoy-club-chair',
    name: 'Savoy Architectural Armchair',
    category: 'Sofas',
    shortDescription: 'Deep sculptural lounge chair with walnut armrest surrounds and buttery aniline leather.',
    fullDescription: 'A reading and conversation chair conceived with honest material expression. The walnut armrests cradle the occupant with hand-sanded curves and warm organic grain.',
    materials: 'Top-grain saddle leather, solid American Walnut',
    finish: 'Cognac Leather & Walnut Luster',
    dimensions: '34" W × 35" D × 31" H',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    features: ['Ergonomic recline pitch', 'Full-grain breathable leather', 'Mortise-and-tenon walnut joinery']
  },

  // --- BEDS ---
  {
    id: 'bed-verona-platform',
    name: 'Verona Platform Bed',
    category: 'Beds',
    shortDescription: 'Low-slung architectural king bed with extended upholstered wingback headboard and integrated floating nightstands.',
    fullDescription: 'The Verona Platform Bed turns master bedrooms into serene retreats. Its horizontal upholstered headboard extends seamlessly across the wall, pairing plush woven fabric with cantilevered walnut nightstand ledges equipped with concealed wire passages.',
    materials: 'Kiln-dried Sheesham internal core, natural walnut veneer, woven wool blend',
    finish: 'Walnut & Warm Sand Upholstery',
    dimensions: 'King Size (Headboard 112" W × 86" L × 42" H)',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    features: ['Integrated cantilevered nightstand ledges', 'Acoustic padded headboard paneling', 'Solid slat mattress support (no box spring required)']
  },
  {
    id: 'bed-kensington-canopy',
    name: 'Kensington Minimalist Canopy Bed',
    category: 'Beds',
    shortDescription: 'Four-poster modern canopy frame crafted from dark-stained solid Indian teakwood.',
    fullDescription: 'Reinterpreting royal canopy silhouettes for modern high-ceiling bedrooms. Slender solid teak stanchions taper upward to form an unbroken geometric perimeter.',
    materials: '100% Solid Indian Teakwood',
    finish: 'Ebony Walnut Hand-Rubbed Wax',
    dimensions: 'King Size (80" W × 86" L × 84" H)',
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
    features: ['Precision concealed bolt joinery', 'Sleek 2-inch square profile posts', 'Reinforced center support beam']
  },
  {
    id: 'bed-augusta-cushioned',
    name: 'Augusta Upholstered Bed',
    category: 'Beds',
    shortDescription: 'Padded pillow-back king bed with double flange stitching in forest green micro-suede.',
    fullDescription: 'Designed for hours of comfortable late-night reading. The Augusta features dual oversized pillow cushions suspended from a tailored horizontal support rail.',
    materials: 'Micro-suede fabric, seasoned hardwood subframe, brass feet',
    finish: 'Forest Green Fabric & Brushed Champagne accents',
    dimensions: 'Queen & King available (82" W × 88" L × 46" H)',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1000&q=80',
    features: ['Dual pillow headboard inserts', 'Under-bed ambient clearance', 'Heavy-duty steel slat suspension']
  },
  {
    id: 'bed-solis-teak-platform',
    name: 'Solis Fluted Headboard Bed',
    category: 'Beds',
    shortDescription: 'Solid teakwood bed with vertical tambour fluting along the arch-top headboard.',
    fullDescription: 'Showcasing the revered woodworking mastery of Saharanpur artisans. The gentle arch headboard features individually milled solid teak tambours that catch natural light gracefully.',
    materials: 'Seasoned Saharanpur Teakwood',
    finish: 'Natural Honey Teak Matte Polish',
    dimensions: 'King Size (78" W × 84" L × 52" H)',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80',
    features: ['Hand-carved fluted relief', 'Beveled footboard rail', 'Tenon joinery tested for zero creak']
  },

  // --- DINING TABLES ---
  {
    id: 'dining-cedarwood-table',
    name: 'Cedarwood Dining Table',
    category: 'Dining Tables',
    shortDescription: 'Substantial 8-seater dining table made from bookmatched solid walnut with rounded bullnose edges.',
    fullDescription: 'The pinnacle of dining luxury. Crafted from two bookmatched slabs of solid hardwood resting atop heavy sculptural pedestal bases that maximize chair legroom.',
    materials: 'Bookmatched solid Walnut, steel subplate reinforcement',
    finish: 'Organic Matte Oil & Wax Finish',
    dimensions: '96" L × 42" W × 30" H (Seats 8–10)',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80',
    features: ['Comfortable 8-to-10 chair seating', 'Center pedestal avoids corner leg obstruction', 'Food-safe moisture-resistant sealer']
  },
  {
    id: 'dining-solstice-marble',
    name: 'Solstice Round Dining Table',
    category: 'Dining Tables',
    shortDescription: 'Circular 6-seater dining table with Italian marble top and fluted conical teak base.',
    fullDescription: 'Designed for intimate family conversations and formal dinner parties. The honed marble top is chamfered along the perimeter and counterbalanced by a solid fluted wood pedestal.',
    materials: 'Honed Calacatta Gold Marble, seasoned solid Teak pedestal',
    finish: 'Warm White Marble & Rich Smoked Walnut base',
    dimensions: '60" Diameter × 30" H (Seats 6)',
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1000&q=80',
    features: ['Conical flute detail handcrafted by artisans', 'Sealed marble surface resistant to spills', 'Weighted base prevents tilting']
  },
  {
    id: 'dining-aethel-extendable',
    name: 'Aethel Extendable Dining Set',
    category: 'Dining Tables',
    shortDescription: 'Precision butterfly-leaf dining table with 8 matching leather-back dining chairs.',
    fullDescription: 'Flawlessly transforms from a casual 6-person setting to a spacious 10-person celebration table via a smooth German butterfly leaf mechanism concealed within the center frame.',
    materials: 'Solid Teak frame, brass gear glide system',
    finish: 'Warm Walnut Satin',
    dimensions: '72" to 96" L × 38" W × 30" H',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80',
    features: ['One-person butterfly expansion', 'Includes 6 to 8 matching ergonomic chairs', 'Beveled edge tabletop']
  },
  {
    id: 'dining-tuscany-monastery',
    name: 'Tuscany Trestle Dining Table',
    category: 'Dining Tables',
    shortDescription: 'Rustic-modern trestle dining table with hand-hewn stretcher and solid hardwood breadboard ends.',
    fullDescription: 'Inspired by timeless European refectory tables, updated with clean modern lines and smooth chamfered edges that celebrate authentic wood grain.',
    materials: 'Seasoned North Indian Sheesham Hardwood',
    finish: 'Aged Walnut Patina',
    dimensions: '108" L × 44" W × 30" H',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80',
    features: ['Hand-fitted keyed through-tenon trestle', '2.5-inch thick slab tabletop', 'Deep seating comfort at table ends']
  },

  // --- WARDROBES ---
  {
    id: 'wardrobe-valencia-teak',
    name: 'Valencia 4-Door Wardrobe',
    category: 'Wardrobes',
    shortDescription: 'Floor-to-ceiling modular wardrobe with louvred timber door panels and soft-closing internal organizers.',
    fullDescription: 'A masterclass in fitted bedroom storage. The Valencia balances natural air circulation through handcrafted timber louvres with illuminated hanging rails, felt-lined watch drawers, and full-extension shoe racks.',
    materials: 'Solid Teakwood shutters, marine-grade ply carcase',
    finish: 'Warm Walnut with Champagne Brass Pulls',
    dimensions: '84" W × 24" D × 96" H',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80',
    features: ['Integrated warm LED strip sensor lighting', 'Bespoke drawer dividers for jewellery & accessories', 'German soft-close hinges tested to 100,000 cycles']
  },
  {
    id: 'wardrobe-elysian-sliding',
    name: 'Elysian Glass & Wood Sliding Wardrobe',
    category: 'Wardrobes',
    shortDescription: 'Contemporary 3-panel sliding wardrobe featuring bronze tinted glass and ribbed oak accents.',
    fullDescription: 'Creates a boutique dressing room ambiance. The bronze translucent glass shields garments from dust while displaying an inviting warm backlight when doors slide open.',
    materials: 'Fluted tempered safety glass, anodized aluminum tracks, Teak carcase',
    finish: 'Smoked Teak & Bronze Glass',
    dimensions: '108" W × 26" D × 96" H',
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
    features: ['Floor-to-ceiling smooth glide suspension', 'Integrated concealed tie & belt pull-outs', 'Anti-dust brush seals']
  },
  {
    id: 'wardrobe-regency-armoire',
    name: 'Regency Artisanal Armoire',
    category: 'Wardrobes',
    shortDescription: 'Freestanding double-door armoire with subtle carved relief border and mirror interior.',
    fullDescription: 'Honouring Saharanpur\'s legendary relief woodcarving heritage without visual clutter. The Regency Armoire adds historic charm to modern suites.',
    materials: 'Kiln-dried Saharanpur Sheesham',
    finish: 'Natural Honey Sheesham Hand-Waxed',
    dimensions: '48" W × 22" D × 80" H',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80',
    features: ['Beveled mirror interior door', 'Solid brass key lock', 'Adjustable shelf levels']
  },

  // --- TV UNITS ---
  {
    id: 'tv-regent-console',
    name: 'Regent TV Console',
    category: 'TV Units',
    shortDescription: 'Floating media console with acoustic fluted slat doors, marble top insert, and smart cable routing.',
    fullDescription: 'Conceals entertainment electronics cleanly behind infrared-transparent acoustic slats. The Regent accommodates televisions up to 85 inches with dedicated ventilated soundbar alcoves.',
    materials: 'Solid Walnut tambours, Italian marble top, internal cable grommets',
    finish: 'Dark Walnut & Champagne Inlay',
    dimensions: '84" W × 18" D × 22" H',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80',
    features: ['Acoustically transparent slat doors', 'Hidden rear cable management channel', 'Ventilated component bays']
  },
  {
    id: 'tv-nordic-credenza',
    name: 'Nordic Low-Profile Media Credenza',
    category: 'TV Units',
    shortDescription: 'Scandinavian-inspired low media credenza with tapered wooden legs and sliding sliding cane panels.',
    fullDescription: 'Brings organic texture to screen-dominated living rooms. Hand-woven rattan cane panels allow remote control signals to pass freely to set-top boxes and gaming consoles.',
    materials: 'Natural Rattan Cane, solid Teakwood frame',
    finish: 'Warm Natural Teak',
    dimensions: '72" W × 16" D × 20" H',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    features: ['Natural hand-woven rattan cane doors', 'Solid brass door pulls', 'Reinforced top supports up to 120 kg']
  },
  {
    id: 'tv-solitaire-wall-unit',
    name: 'Solitaire Integrated Media Wall',
    category: 'TV Units',
    shortDescription: 'Full architectural feature wall unit with illuminated display niches and floating base console.',
    fullDescription: 'Transforms bare living room walls into an entertainment gallery. Integrates display cabinetry for curios and literature alongside a floating hearth console.',
    materials: 'Textured charcoal panels, warm walnut cabinetry, brass trims',
    finish: 'Deep Forest Charcoal & Walnut',
    dimensions: 'Custom modular (120" W × 96" H)',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
    features: ['Concealed rear LED backlighting', 'Modular display cubes', 'Custom sizing available for any wall size']
  },

  // --- COFFEE TABLES ---
  {
    id: 'coffee-kanso-minimalist',
    name: 'Kanso Minimalist Coffee Table',
    category: 'Coffee Tables',
    shortDescription: 'Low round coffee table with solid turned walnut bowl base and inset travertine stone.',
    fullDescription: 'A study in organic geometric balance. The warm travertine stone top is naturally porous and unpolished, contrasting with the smooth, curved walnut plinth.',
    materials: 'Natural unfilled Travertine, solid Walnut plinth',
    finish: 'Warm Ivory Travertine & Dark Walnut',
    dimensions: '40" Diameter × 14" H',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=1000&q=80',
    features: ['Curvilinear kid-safe rounded edges', 'Heavy solid timber counterweight', 'Stain-resistant protective stone sealer']
  },
  {
    id: 'coffee-nesting-aeris',
    name: 'Aeris Dual Nesting Tables',
    category: 'Coffee Tables',
    shortDescription: 'Pair of asymmetrical nesting tables combining smoked glass and fluted solid teakwood.',
    fullDescription: 'Versatile lounge companions that can be nestled together for a compact footprint or separated to serve guests during family gatherings.',
    materials: 'Tempered smoked glass, solid Teakwood barrel base',
    finish: 'Smoked Charcoal & Natural Teak',
    dimensions: 'Large: 36" Dia × 16" H; Small: 24" Dia × 19" H',
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80',
    features: ['Tuck-in nesting flexibility', 'Tempered shatterproof glass', 'Solid wood tambour base']
  },
  {
    id: 'coffee-slab-live-edge',
    name: 'Oasis Live-Edge Coffee Table',
    category: 'Coffee Tables',
    shortDescription: 'Single solid slab of seasoned Sheesham hardwood preserving the natural raw tree bark contours.',
    fullDescription: 'No two pieces are identical. Every table celebrates the natural grain curves, knots, and history of the tree, supported by clean matte black steel butterfly legs.',
    materials: 'Single slab seasoned Sheesham, forged steel legs',
    finish: 'Hand-rubbed natural oil luster',
    dimensions: 'Approx. 48"–54" L × 28" W × 16" H',
    image: 'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1000&q=80',
    features: ['Butterfly key wood joinery', 'Naturally unique organic contours', 'Hand-finished by Saharanpur woodworkers']
  },
  {
    id: 'coffee-marquis-cocktail',
    name: 'Marquis Square Cocktail Table',
    category: 'Coffee Tables',
    shortDescription: 'Low square architectural cocktail table with lower magazine shelf and recessed champagne trim.',
    fullDescription: 'Proportioned specifically for deep sectional sofas. The open lower deck keeps coffee table books and throws organized while leaving the top clear for beverages.',
    materials: 'High-density timber core, natural walnut veneer, brushed metal',
    finish: 'Satin Walnut & Champagne',
    dimensions: '44" × 44" × 15" H',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80',
    features: ['Dual-tier storage convenience', 'Recessed shadow-line base', 'Scratch-resistant lacquer']
  },

  // --- OFFICE FURNITURE ---
  {
    id: 'office-kensington-desk',
    name: 'Kensington Executive Desk',
    category: 'Office Furniture',
    shortDescription: 'Imposing executive desk with leather-wrapped writing blotter, walnut drawer pedestals, and concealed power bays.',
    fullDescription: 'Engineered for commanding home studies and corporate offices. Features soft-closing locking drawers, integrated wireless charging dock, and cord channels that keep workspaces pristine.',
    materials: 'Full-grain Italian saddle leather insert, seasoned American Walnut',
    finish: 'Deep Walnut & Saddle Brown Leather',
    dimensions: '78" W × 36" D × 30" H',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80',
    features: ['Concealed cable routing cavity', 'Soft-close lockable file drawers', 'Hand-stitched leather writing blotter']
  },
  {
    id: 'office-tribeca-workstation',
    name: 'Tribeca Ergonomic Writing Desk',
    category: 'Office Furniture',
    shortDescription: 'Slender modern writing desk with solid teak tapered frame and dual felt-lined stationery drawers.',
    fullDescription: 'Designed for residential study corners and modern library rooms where visual lightness is essential. Tapered cylindrical legs give the illusion of floating work surfaces.',
    materials: 'Seasoned Indian Teakwood, brushed brass hardware',
    finish: 'Natural Honey Teak',
    dimensions: '54" W × 26" D × 30" H',
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80',
    features: ['Two velvet-lined pencil drawers', 'Ergonomic rounded forearm edge', 'Compact bedroom/study footprint']
  },
  {
    id: 'office-bureau-bookcase',
    name: 'Oxford Open Architectural Bookcase',
    category: 'Office Furniture',
    shortDescription: 'Floor-standing tiered library bookcase with solid hardwood uprights and brushed brass shelf supports.',
    fullDescription: 'Ideal for displaying curated book collections, sculptures, and awards. Sturdy enough to support heavy reference volumes without shelf sagging.',
    materials: 'Kiln-dried Teak shelves, reinforced steel interior spines',
    finish: 'Smoked Walnut & Champagne Brass',
    dimensions: '48" W × 15" D × 84" H',
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1000&q=80',
    features: ['Heavy load capacity (50 kg per shelf)', 'Anti-tip wall bracket hardware included', 'Adjustable middle tier heights']
  },

  // --- CUSTOM FURNITURE ---
  {
    id: 'custom-royal-heritage-sofa',
    name: 'Bespoke Royal Heritage Lounge Suite',
    category: 'Custom Furniture',
    shortDescription: 'Hand-carved royal statement sofa customized in dimension, fabric selection, and wood polish to your exact home floorplan.',
    fullDescription: 'Crafted exclusively on bespoke commission by Saharanpur\'s senior master woodcarvers. Every motif, crown arch, and armrest scroll can be personalized in solid Teak or Sheesham, paired with your choice of royal imported jacquards, velvets, or leathers.',
    materials: 'Customizable: 100% Solid Indian Teak or Sheesham, bespoke upholstery',
    finish: 'Choice of Natural Teak, Antique Gold Leaf, Dark Walnut, or Raw Wax',
    dimensions: 'Custom made to customer room dimensions',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80',
    features: ['Made-to-order dimensions', 'On-site measurement consultation available', 'Choice of over 100+ designer fabrics']
  },
  {
    id: 'custom-fluted-wall-panelling',
    name: 'Architectural Timber Wall Panelling & Console',
    category: 'Custom Furniture',
    shortDescription: 'Full-height custom interior wood panelling, concealed doorways, and integrated floating consoles for luxury residences.',
    fullDescription: 'Turn plain plaster walls into warm architectural statements. Our carpentry team designs, fabricates, and fits custom fluted paneling, acoustic timber slats, and hidden storage rooms.',
    materials: 'Custom Teak / White Oak / Walnut solid and veneer options',
    finish: 'Site-matched stain and low-VOC polyurethane luster',
    dimensions: 'Bespoke fit to exact room elevations',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    features: ['Seamless concealed room doors', 'Integrated cove and profile lighting slots', 'Precision laser-measured installation']
  },
  {
    id: 'custom-solid-temple-mandir',
    name: 'Sanctuary Teak Wood Mandir',
    category: 'Custom Furniture',
    shortDescription: 'Bespoke home temple crafted from seasoned Teakwood with traditional brass inlays and acoustic bells.',
    fullDescription: 'Created with profound reverence and sacred craftsmanship. Features pull-out prasad trays, soft-closing agarbatti drawers, LED spotlight domes, and jali fretwork doors.',
    materials: 'Seasoned Teakwood, solid brass hardware, bells and finials',
    finish: 'Gloss Teak or Antique Honey Polish',
    dimensions: 'Bespoke (standard 48" W × 24" D × 72" H or custom)',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    features: ['Handcrafted bell jali shutters', 'Heavy-duty brass accessories', 'Dedicated pull-out diya tray']
  },
  {
    id: 'custom-walkin-dressing-suite',
    name: 'Bespoke Walk-In Wardrobe Suite',
    category: 'Custom Furniture',
    shortDescription: 'Floor-to-ceiling customized walk-in dressing island and closet modules with integrated smart lighting.',
    fullDescription: 'A complete room transformation. We build full walk-in dressing rooms with center jewelry islands, tinted glass vitrines, and dedicated humidity-balanced wardrobe bays.',
    materials: 'Marine-grade ply carcase with natural wood veneer and metal frames',
    finish: 'Walnut & Brushed Champagne accents',
    dimensions: 'Custom scaled to room layout',
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80',
    features: ['Central watch & jewel display island', 'Full-height mirror panels', 'Dedicated automated motion-sensor lights']
  },

  // --- HOME DÉCOR ---
  {
    id: 'decor-solace-floor-mirror',
    name: 'Solace Arch Standing Mirror',
    category: 'Home Décor',
    shortDescription: 'Full-length floor mirror with handcrafted solid teak pillioned frame and beveled crystal mirror.',
    fullDescription: 'Instantly doubles natural light and depth in hallways or bedrooms. The gentle arched top and solid wood surround lean securely against walls or stand independently on an easel.',
    materials: 'Kiln-dried solid Teak, high-definition beveled silver glass',
    finish: 'Natural Teak with Wax Polish',
    dimensions: '36" W × 78" H',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80',
    features: ['Shatter-resistant safety backing', 'Heavy timber stability', 'Includes wall anchoring safety bracket']
  },
  {
    id: 'decor-aurora-accent-pedestal',
    name: 'Aurora Fluted Display Pedestal',
    category: 'Home Décor',
    shortDescription: 'Sculptural fluted column in walnut wood for displaying bronze artefacts, vases, or planters.',
    fullDescription: 'Add vertical drama to living room corners and entry foyers. Turned from solid timber blocks with micro-groove vertical fluting.',
    materials: 'Seasoned solid Sheesham hardwood',
    finish: 'Deep Forest Walnut Tint',
    dimensions: '14" Dia × 38" H',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80',
    features: ['Weighted anti-tip base', 'Smooth flat display top', 'Art-gallery display standard']
  },
  {
    id: 'decor-lumen-brass-lamp',
    name: 'Lumen Brass & Walnut Table Lamp',
    category: 'Home Décor',
    shortDescription: 'Hand-turned walnut base with solid brushed brass stem and pleated linen lampshade.',
    fullDescription: 'Casts a warm, inviting 2700K glow over bedside consoles or reading nooks. Natural timber grains show through the hand-applied satin oil polish.',
    materials: 'Solid Walnut, natural brushed brass, fine linen shade',
    finish: 'Warm Walnut & Champagne Brass',
    dimensions: '16" Dia × 26" H',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80',
    features: ['Three-stage rotary dimmer switch', 'Braided vintage fabric cord', 'Warm diffuse optical diffusion']
  },
  {
    id: 'decor-crest-room-divider',
    name: 'Crest 3-Panel Jali Room Divider',
    category: 'Home Décor',
    shortDescription: 'Freestanding 3-panel folding screen with delicate geometric teak woodwork fretwork.',
    fullDescription: 'Creates graceful visual zoning between open living and dining spaces without blocking ventilation or ambient light.',
    materials: '100% Solid Indian Teakwood, brass dual-swing hinges',
    finish: 'Natural Warm Teak Oil',
    dimensions: '66" W × 72" H',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1000&q=80',
    features: ['Folds flat for storage', 'Double-sided precision fretwork', 'Dual-action 360-degree brass hinges']
  }
];

export const SHOWROOM_OFFERS: ShowroomOffer[] = [
  {
    id: 'offer-living-room',
    title: 'Showroom Living Room Privileges',
    tagline: 'Curated Seating & Media Console Ensembles',
    description: 'When acquiring a complete living room ensemble (sofa set + central cocktail table + TV media console), receive complimentary in-home space layout consultation and premium fabric scotch-gard treatment.',
    code: 'PF-LIVING-2025',
    validity: 'Ongoing Showroom Privilege',
    details: [
      'Applicable on all in-stock and custom lounge suites',
      'Complimentary fabric protective sealing against spills',
      'Personal showroom walkthrough with our senior interior consultants',
      'Available directly at our Saharanpur showroom'
    ],
    applicableCategory: 'Living Room Collections',
    bannerImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    enquiryText: 'Hello Punjab Furnitures, I would like to enquire about the Showroom Living Room Privileges and ensemble availability.'
  },
  {
    id: 'offer-master-bedroom',
    title: 'Master Suite Wooden Suite Package',
    tagline: 'Solid Teak Beds with Matching Wardrobe Solutions',
    description: 'Enquire for package privileges when pairing any handcrafted solid wood platform bed with our modular or louvred wardrobe systems.',
    code: 'PF-BEDROOM-SUITE',
    validity: 'Ongoing Showroom Privilege',
    details: [
      'Grain-matched timber finishes across bed, nightstands & wardrobes',
      'Complimentary on-site measurement at your residence in Saharanpur & neighbouring districts',
      'Custom mattress sizing and under-bed drawer integration support',
      'Professional white-glove showroom delivery & installation'
    ],
    applicableCategory: 'Bedroom Suites',
    bannerImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    enquiryText: 'Hello Punjab Furnitures, I am planning a bedroom setup and interested in the Master Suite Wooden Suite Package.'
  },
  {
    id: 'offer-custom-woodcraft',
    title: 'Bespoke Residence Consultation Privilege',
    tagline: 'Custom Woodworking For New Homes & Renovations',
    description: 'Planning a newly constructed home or full apartment renovation? Schedule a dedicated showroom design consultation with our master carpenters to draft custom dimensions and select timber grains.',
    code: 'PF-BESPOKE-ARCH',
    validity: 'By Prior Appointment',
    details: [
      'Comprehensive review of your architectural floor plans',
      'Sample wood finish swatches provided for site lighting checks',
      'Personalized WhatsApp progress photos during factory workshop carving',
      'Direct carpenter consultation without intermediary commissions'
    ],
    applicableCategory: 'Custom Woodwork & Full Homes',
    bannerImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    enquiryText: 'Hello Punjab Furnitures, I would like to schedule a Bespoke Residence Consultation for custom furniture.'
  }
];

export const OFFERS = SHOWROOM_OFFERS;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Arjun Verma',
    location: 'Court Road, Saharanpur',
    furnitureAcquired: 'Arden Lounge Sofa & Cedarwood Dining Set',
    quote: 'The craftsmanship on our 8-seater dining table is remarkable. The grain of the wood and the joinery feel solid and built to endure for generations. The Punjab Furnitures team arranged safe delivery right into our dining room without a scratch.'
  },
  {
    id: 't-2',
    clientName: 'Dr. Meera Sharma',
    location: 'Hakikat Nagar, Saharanpur',
    furnitureAcquired: 'Verona Platform Bed & Custom Louvred Wardrobe',
    quote: 'Finding furniture that balances clean modern lines with the authentic strength of seasoned teakwood is rare. Visiting their showroom near Sapna Cinema was a pleasure — transparent advice, no pushy sales tactics, and exact attention to our bedroom dimensions.'
  },
  {
    id: 't-3',
    clientName: 'Rajesh K. Singhal',
    location: 'Dehradun Road Residence',
    furnitureAcquired: 'Bespoke Royal Heritage Lounge Suite',
    quote: 'We commissioned a customized living room suite with specific velvet shade and timber polish. Every detail promised during our showroom visit was delivered with exemplary carpentry standards.'
  },
  {
    id: 't-4',
    clientName: 'Sunita Aggarwal',
    location: 'Delhi Road, Saharanpur',
    furnitureAcquired: 'Solstice Round Dining Table & Media Console',
    quote: 'The marble and fluted wood table has become the centerpiece of our home. It feels architectural and serene. Wonderful customer support directly on WhatsApp whenever we asked for maintenance tips.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modern Minimalist Lounge Suite',
    category: 'Living Room',
    roomSetting: 'Private Villa Living Area',
    caption: 'Curated 3-seater and occasional lounge armchairs in warm cream textured bouclé with seasoned teakwood frames.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-2',
    title: 'Warm Walnut Dining Hall Setup',
    category: 'Dining',
    roomSetting: 'Executive Residence Dining Space',
    caption: 'Solid teakwood 8-seater dining table with sculptured tapered pedestal legs and upholstered dining chairs.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-3',
    title: 'Master Bedroom Architectural Retreat',
    category: 'Bedroom',
    roomSetting: 'Suite with Verona Bed & Timber Panelling',
    caption: 'Low platform floating teak bed with integrated cantilevered bedside nightstands and fluted timber wall panelling.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-4',
    title: 'Deep Green Velvet & Brass Accents',
    category: 'Living',
    roomSetting: 'Formal Parlour Setting',
    caption: 'Custom jewel-tone velvet sofa suite with hand-carved solid wood undercarriages and brushed brass leg caps.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-5',
    title: 'Fitted Master Wardrobes with Fluted Louvres',
    category: 'Bedroom',
    roomSetting: 'Walk-In Dressing Alcove',
    caption: 'Floor-to-ceiling four-door wardrobe with solid wood acoustic louvre slats and integrated automated sensor LEDs.',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-6',
    title: 'Executive Study with Kensington Desk',
    category: 'Office',
    roomSetting: 'Private Library & Study',
    caption: 'Commanding executive writing desk with full-grain leather writing inlay, hidden wire management, and file drawers.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-7',
    title: 'Acoustic Slat TV Console & Floating Hearth',
    category: 'Living',
    roomSetting: 'Modern Penthouse Entertainment Wall',
    caption: 'Low-profile media entertainment console featuring fluted teak tambour sliding doors and cable conduit conduits.',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-8',
    title: 'Artisan Woodcarving & Temple Detail',
    category: 'Craftsmanship',
    roomSetting: 'Craftsmanship Workshop Showcase',
    caption: 'Handcrafted solid teakwood sacred home mandir with brass bell inlays and traditional Saharanpur jali fretwork.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: "Where is the Punjab Furnitures showroom located?",
    answer: "Our showroom is located on Dehradun Road, Near Sapna Cinema, Khanalampura, Saharanpur, Uttar Pradesh 247001. We have convenient customer parking and are easily accessible from all central parts of Saharanpur and nearby districts.",
    category: "Showroom Visits"
  },
  {
    id: 'faq-2',
    question: "What are your showroom visiting hours?",
    answer: "We are open Wednesday through Monday from 9:00 AM to 9:00 PM. Please note that our showroom is closed on Tuesdays (the standard weekly holiday in Saharanpur commercial markets). You are welcome to walk in at any time during open hours, or message us ahead on WhatsApp to reserve dedicated consultation time.",
    category: "Showroom Visits"
  },
  {
    id: 'faq-3',
    question: "Can furniture dimensions, polish, and fabric colours be customized?",
    answer: "Yes. Every sofa suite, dining table, bed, and wardrobe can be customized in terms of length, depth, timber polish (natural honey teak, walnut, dark teak, ebony), and fabric textures (bouclé, velvet, Belgian linen, leatherette, or genuine leather). Share your architectural floor plans with our workshop team.",
    category: "Custom Orders & Bespoke"
  },
  {
    id: 'faq-4',
    question: "What woods and materials do you primarily use?",
    answer: "We prioritize 100% seasoned solid hardwoods such as North Indian Sheesham (Dalbergia sissoo), kiln-dried Sagwan (Teakwood), and premium architectural timbers. For wardrobes and bathroom cabinetry, we use high-density boiling-water-resistant (BWR) marine ply carcases to prevent warping across varying Indian seasons.",
    category: "Wood Care & Maintenance"
  },
  {
    id: 'faq-5',
    question: "How does the 'Enquire for Price' process work?",
    answer: "Because we offer multiple solid timber options, finish treatments, fabric choices, and bespoke custom sizing, each piece can be tailored to your specification. Tapping 'Enquire on WhatsApp' or 'Call Showroom' connects you directly with our showroom desk who will provide clear, transparent pricing and immediate availability.",
    category: "Custom Orders & Bespoke"
  },
  {
    id: 'faq-6',
    question: "Do you provide delivery and assembly in Saharanpur and nearby regions?",
    answer: "Yes. We manage dedicated white-glove delivery, padded freight transport, and on-site assembly for our clients in Saharanpur, Dehradun, Roorkee, Muzaffarnagar, Yamunanagar, Haridwar, Chandigarh, and broader Western Uttar Pradesh & NCR areas.",
    category: "Delivery & Assembly"
  },
  {
    id: 'faq-7',
    question: "How should I care for and maintain solid wood and velvet furniture?",
    answer: "For solid wood, dust regularly with a soft dry microfiber cloth and avoid harsh chemical cleaners; periodic natural beeswax application keeps the wood grain nourished. For velvet and bouclé upholstery, gentle vacuuming with a soft brush attachment and immediate blotting of spills ensures decades of beauty.",
    category: "Wood Care & Maintenance"
  }
];

export const FAQS = FAQ_ITEMS;
