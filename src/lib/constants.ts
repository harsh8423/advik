import {
    Truck, Train, Warehouse, MapPin, Thermometer,
    Container, ShieldCheck, Zap, Anchor, ShoppingCart,
    Cpu, Leaf, Hammer, Car, Wheat, FileCheck
} from 'lucide-react';

export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: any;
    image: string;
    features: string[];
    href?: string;
}

export interface Industry {
    id: string;
    title: string;
    description: string;
    challenges: string;
    solution: string;
    icon: any;
    image: string;
    href?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
}

export const SERVICES: Service[] = [
    {
        id: 'drayage',
        title: 'Drayage',
        shortDescription: 'Efficient port-to-warehouse drayage services ensuring timely cargo movement.',
        fullDescription: 'Our drayage services bridge the gap between ports and warehouses with precision. We ensure your containers are moved quickly from the port to the next stage of their journey, minimizing demurrage costs and delays.',
        icon: Container,
        image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1471&auto=format&fit=crop',
        features: ['Port-to-Door', 'Container Tracking', 'Customs Support', 'Quick Turnaround']
    },
    {
        id: 'otr',
        title: 'OTR (Over-The-Road)',
        shortDescription: 'Reliable over-the-road trucking delivering freight safely, efficiently, and always on schedule.',
        fullDescription: 'Our OTR solutions cover long-distance freight with a focus on speed and reliability. Whether cross-country or regional, our fleet ensures your goods arrive safely and on time.',
        icon: Truck,
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1470&auto=format&fit=crop',
        features: ['Nationwide Coverage', 'Real-Time Tracking', 'Dedicated Drivers', 'Flexible Routing']
    },
    {
        id: 'intermodal',
        title: 'Intermodal',
        shortDescription: 'Seamless truck and rail intermodal transport reducing shipping costs.',
        fullDescription: 'Combine the best of truck and rail transport to optimize your supply chain. Our intermodal solutions offer a cost-effective and eco-friendly alternative for long-haul shipments.',
        icon: Train,
        image: 'https://europaproperty.com/wp-content/uploads/2020/09/1200-550-1.jpg',
        features: ['Cost Savings', 'Eco-Friendly', 'Rail & Road Integration', 'Large Volume Capacity'],
        href: '/intermodal'
    },
    {
        id: 'ftl-ltl',
        title: 'FTL - LTL (Truckload)',
        shortDescription: 'Flexible truckload and less-than-truckload shipping tailored to business needs.',
        fullDescription: 'From full truckloads to smaller partial shipments, we provide flexible FTL and LTL options. We optimize loads to ensure you only pay for the space you need while maintaining delivery speed.',
        icon: Truck,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1470&auto=format&fit=crop',
        features: ['Full Truckload', 'Less Than Truckload', 'Consolidation', 'Direct Delivery']
    },
    {
        id: 'warehousing',
        title: 'Warehousing & Transloading',
        shortDescription: 'Secure storage solutions with inventory management and timely dispatch.',
        fullDescription: 'State-of-the-art warehousing facilities to store, manage, and distribute your inventory. Our transloading services ensure seamless transfer between different modes of transport.',
        icon: Warehouse,
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1470&auto=format&fit=crop',
        features: ['Secure Storage', 'Inventory Management', 'Cross-Docking', 'Order Fulfillment']
    },
    {
        id: 'reefer',
        title: 'Reefer',
        shortDescription: 'Temperature-controlled reefer transport preserving perishable goods.',
        fullDescription: 'Keep your perishable goods fresh with our temperature-controlled reefer units. Ideal for food, pharmaceuticals, and other sensitive cargo requiring strict climate adherence.',
        icon: Thermometer,
        image: 'https://ba.kuehne-nagel.com/documents/20124/72151/services-sea-freight-reefer-new-hero-.jpg/f3a3dbb2-4d93-baba-b7e9-84529f097663?t=1614599554363',
        features: ['Temperature Monitoring', 'Food Grade Compliance', 'Frozen & Chilled', 'Express Service']
    },
    {
        id: 'flatbed',
        title: 'Flatbed',
        shortDescription: 'Specialized flatbed transport for oversized and heavy equipment.',
        fullDescription: 'For cargo that doesn’t fit in a standard container, our flatbed services provide the solution. We handle machinery, construction materials, and oversized loads with expert securement.',
        icon: Anchor,
        image: 'https://images.unsplash.com/photo-1563823251950-b02a249c6931?q=80&w=1470&auto=format&fit=crop',
        features: ['Oversized Cargo', 'Heavy Haul', 'Construction Materials', 'Safety Securement']
    },
    {
        id: 'power-only',
        title: 'Power-Only',
        shortDescription: 'Flexible power-only trucking solutions for your trailers.',
        fullDescription: 'Need a driver and a truck for your trailer? Our power-only services provide the tractor unit and professional driver to move your equipment wherever it needs to go.',
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1470&auto=format&fit=crop',
        features: ['Trailer Transport', 'Flexible Capacity', 'Professional Drivers', 'One-Way or Round-Trip']
    },
];

export const INDUSTRIES: Industry[] = [
    {
        id: 'automotive',
        title: 'Automotive',
        description: 'Precision logistics for the fast-paced automotive supply chain.',
        challenges: 'Just-in-time delivery, high-value components, and global sourcing requirements.',
        solution: 'We deliver synchronized supply chain solutions ensuring components arrive exactly when needed.',
        icon: Car,
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1472&auto=format&fit=crop'
    },
    {
        id: 'retail',
        title: 'Retail',
        description: 'Agile logistics for the dynamic retail market.',
        challenges: 'Seasonal spikes, omnichannel distribution, and fast-changing consumer demands.',
        solution: 'Flexible warehousing and distribution networks that scale with your seasonal needs.',
        icon: ShoppingCart,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1470&auto=format&fit=crop',
        href: '/retail'
    },
    {
        id: 'food-beverage',
        title: 'Food & Beverage',
        description: 'Safety and speed for consumable products.',
        challenges: 'Shelf-life constraints, temperature control, and strict regulatory compliance.',
        solution: 'Certified food-grade transport and reefer solutions to maintain product integrity.',
        icon: Thermometer,
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1470&auto=format&fit=crop'
    },
    {
        id: 'manufacturing',
        title: 'Manufacturing',
        description: 'Robust transport for raw materials and finished goods.',
        challenges: 'Heavy loads, production timelines, and supply chain continuity.',
        solution: 'Reliable FTL and heavy-haul services to keep your production lines running.',
        icon: Anchor,
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop'
    },
    {
        id: 'produce',
        title: 'Produce',
        description: 'Farm-to-market logistics for fresh produce.',
        challenges: 'Extreme perishability and seasonality.',
        solution: 'Expedited reefer services ensuring freshness from farm to shelf.',
        icon: Wheat,
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1470&auto=format&fit=crop'
    },
    {
        id: 'building-materials',
        title: 'Building Materials',
        description: 'Heavy-duty transport for construction.',
        challenges: 'Weight, dimensions, and job site delivery constraints.',
        solution: 'Flatbed and specialized transport for lumber, steel, and concrete.',
        icon: Hammer,
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1368&auto=format&fit=crop'
    },
    {
        id: 'renewable-energy',
        title: 'Renewable Energy',
        description: 'Logistics for the green energy revolution.',
        challenges: 'Oversized components (wind blades, panels) and remote locations.',
        solution: 'Project cargo expertise for transporting wind and solar infrastructure.',
        icon: Leaf,
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1374&auto=format&fit=crop'
    },
    {
        id: 'electronics',
        title: 'Electronics',
        description: 'Secure transport for high-value tech.',
        challenges: 'High value, fragility, and security risks.',
        solution: 'High-security transport protocols with shock monitoring and GPS tracking.',
        icon: Cpu,
        image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1502&auto=format&fit=crop'
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Charlotte Lewis',
        role: 'Client',
        company: 'Global Trade Co.',
        content: 'Advik Freight has been our logistics partner for over two years, and their professionalism is unmatched. From timely shipments to transparent communication, they’ve made our international trade operations smooth and stress-free.',
        rating: 5
    },
    {
        id: '2',
        name: 'James Parker',
        role: 'Operations Manager',
        company: 'Tech Supply Inc.',
        content: 'We rely on Advik Freight for both air and sea freight, and they’ve never let us down. Their team tracks every consignment closely and ensures on-time delivery, no matter the destination.',
        rating: 5
    },
    {
        id: '3',
        name: 'Emma Thompson',
        role: 'Import Director',
        company: 'Fresh Foods Ltd.',
        content: 'Customs procedures used to be a nightmare for us until we started working with Advik Freight. Their knowledge of documentation and regulations saves us so much time and money.',
        rating: 5
    },
    {
        id: '4',
        name: 'Sarah Collins',
        role: 'Logistics Head',
        company: 'Retail Giants',
        content: 'The support team at Advik Freight is always available and proactive. They keep us informed at every stage and handle any issue immediately. Truly a logistics partner you can depend on.',
        rating: 5
    },
    {
        id: '5',
        name: 'Cindy Huang',
        role: 'Supply Chain Manager',
        company: 'Asian Exports',
        content: 'For international logistics, Advik Freight stands out as one of the best. Their attention to detail, professionalism, and dedication to client satisfaction have made our import operations completely hassle-free.',
        rating: 5
    },
    {
        id: '6',
        name: 'Michael Anderson',
        role: 'CEO',
        company: 'Industrial Parts',
        content: 'Working with Advik Freight has been a game changer for our export operations. Their team is efficient, proactive, and always ensures every shipment arrives safely and on time.',
        rating: 5
    }
];
