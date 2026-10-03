const commonFields = {
  specifications: {
    maxPressure: "350 Bar (5000 PSI)",
    flowRate: "45 L/min",
    fluidType: "ISO VG 46 / Mineral Oil",
    operatingTemp: "-20°C to +80°C",
  },
  description:
    "Heavy-duty industrial hydraulic component engineered for high durability, zero pressure leakage, and optimal fluid displacement.",
  applications: [
    "Industrial Machinery & Presses",
    "Earthmoving & Construction Equipment",
    "Hydraulic Power Units (HPU)",
  ],
};

const allProducts = [
  // ---------------- PUMPS & MOTORS (4 Products) ----------------
  {
    id: 1,
    title: "High-Pressure Gear Pump (20 GPM)",
    price: 45000,
    category: "pumps",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    ],
    ...commonFields,
  },
  {
    id: 2,
    title: "Variable Displacement Axial Piston Pump",
    price: 125000,
    category: "pumps",
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    ],
    ...commonFields,
  },
  {
    id: 3,
    title: "Radial Piston Hydraulic Motor",
    price: 98000,
    category: "pumps",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    ],
    ...commonFields,
  },
  {
    id: 4,
    title: "Vane Pump Double Stage Unit",
    price: 65000,
    category: "pumps",
    images: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop",
    ],
    ...commonFields,
  },

  // ---------------- VALVES & CONTROLS (4 Products) ----------------
  {
    id: 5,
    title: "Solenoid Directional Control Valve (4/3 Way)",
    price: 18500,
    category: "valves",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    ],
    ...commonFields,
  },
  {
    id: 6,
    title: "Proportional Pressure Relief Valve",
    price: 42000,
    category: "valves",
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    ],
    ...commonFields,
  },
  {
    id: 7,
    title: "Hydraulic Check Valve (Non-Return)",
    price: 8500,
    category: "valves",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    ],
    ...commonFields,
  },
  {
    id: 8,
    title: "Flow Control Throttle Valve with Check",
    price: 14200,
    category: "valves",
    images: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop",
    ],
    ...commonFields,
  },

  // ---------------- CYLINDERS & ACCESSORIES (4 Products) ----------------
  {
    id: 9,
    title: "Double-Acting Welded Hydraulic Cylinder",
    price: 36000,
    category: "fittings",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    ],
    ...commonFields,
  },
  {
    id: 10,
    title: "Telescopic Multi-Stage Hydraulic Ram",
    price: 115000,
    category: "fittings",
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    ],
    ...commonFields,
  },
  {
    id: 11,
    title: "High-Pressure Hydraulic Hose Pipe",
    price: 4500,
    category: "fittings",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    ],
    ...commonFields,
  },
  {
    id: 12,
    title: "Hydraulic Bladder Accumulator (10L)",
    price: 68000,
    category: "fittings",
    images: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop",
    ],
    ...commonFields,
  },
];

export default allProducts;