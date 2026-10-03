// src/Data/Products.js

import img1 from "../Assests/Images/F0174125001_2_.jpeg";
import img2 from "../Assests/Images/F1466106001_2_37091f27-9494-4fe9-8a09-f937a9e5cd0c.jpeg";
import img3 from "../Assests/Images/F1472106801_3.jpg";
import img4 from "../Assests/Images/F1476106802_3.jpeg";
import img5 from "../Assests/Images/product.jpeg";
import img6 from "../Assests/Images/F1498106618_2_8d00d9de-7e11-42bb.jpg";
import img7 from "../Assests/Images/F1498106704_2_66e92d66-816a-47c7.jpg";
import img8 from "../Assests/Images/F1498106704_2_66e92d66-816a-47c7.jpg";

// Common technical specifications for Hydraulic Products
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

// ---------------- HYDRAULIC PUMPS & MOTORS ----------------
export const menProducts = [
  {
    id: 1,
    title: "High-Pressure Gear Pump (20 GPM)",
    price: 45000,
    images: [img1, img2, img3],
    ...commonFields,
  },
  {
    id: 2,
    title: "Variable Displacement Axial Piston Pump",
    price: 125000,
    images: [img4, img5],
    ...commonFields,
  },
  {
    id: 3,
    title: "Radial Piston Hydraulic Motor",
    price: 98000,
    images: [img6, img7],
    ...commonFields,
  },
  {
    id: 4,
    title: "Vane Pump Double Stage Unit",
    price: 65000,
    images: [img2, img3],
    ...commonFields,
  },
  {
    id: 5,
    title: "Orbital Hydraulic Drive Motor",
    price: 32000,
    images: [img5, img6],
    ...commonFields,
  },
  {
    id: 6,
    title: "Micro Hydraulic Power Pack Pump",
    price: 54000,
    images: [img7, img8],
    ...commonFields,
  },
  {
    id: 7,
    title: "Heavy-Duty Bent Axis Piston Motor",
    price: 145000,
    images: [img1, img2],
    ...commonFields,
  },
  {
    id: 8,
    title: "Bi-Directional External Gear Pump",
    price: 38000,
    images: [img3, img4],
    ...commonFields,
  },
  {
    id: 9,
    title: "Tandem Hydraulic Gear Pump Assembly",
    price: 78000,
    images: [img5, img6],
    ...commonFields,
  },
  {
    id: 10,
    title: "Low-Noise Internal Gear Pump",
    price: 52000,
    images: [img7, img8],
    ...commonFields,
  },
];

// ---------------- VALVES & CONTROLS ----------------
export const womenProducts = [
  {
    id: 21,
    title: "Solenoid Directional Control Valve (4/3 Way)",
    price: 18500,
    images: [img1, img2],
    ...commonFields,
  },
  {
    id: 22,
    title: "Proportional Pressure Relief Valve",
    price: 42000,
    images: [img3, img4],
    ...commonFields,
  },
  {
    id: 23,
    title: "Hydraulic Check Valve (Non-Return)",
    price: 8500,
    images: [img5, img6],
    ...commonFields,
  },
  {
    id: 24,
    title: "Flow Control Throttle Valve with Check",
    price: 14200,
    images: [img7, img8],
    ...commonFields,
  },
  {
    id: 25,
    title: "Pilot-Operated Sequence Valve",
    price: 26500,
    images: [img1, img2],
    ...commonFields,
  },
  {
    id: 26,
    title: "Modular Counterbalance Valve Cartridge",
    price: 21000,
    images: [img3, img4],
    ...commonFields,
  },
  {
    id: 27,
    title: "Manual Monoblock Spool Valve (2 Bank)",
    price: 34000,
    images: [img5, img6],
    ...commonFields,
  },
  {
    id: 28,
    title: "Electro-Hydraulic Servo Valve",
    price: 89000,
    images: [img7, img8],
    ...commonFields,
  },
  {
    id: 29,
    title: "Hydraulic Lock Valve Double Acting",
    price: 16500,
    images: [img1, img2],
    ...commonFields,
  },
  {
    id: 30,
    title: "Pressure Reducing Subplate Valve",
    price: 29500,
    images: [img3, img4],
    ...commonFields,
  },
];

// ---------------- CYLINDERS, FITTINGS & ACCESSORIES ----------------
export const juniorProducts = [
  {
    id: 41,
    title: "Double-Acting Welded Hydraulic Cylinder (50mm Bore)",
    price: 36000,
    images: [img1, img2],
    ...commonFields,
  },
  {
    id: 42,
    title: "Telescopic Multi-Stage Hydraulic Ram",
    price: 115000,
    images: [img3, img4],
    ...commonFields,
  },
  {
    id: 43,
    title: "High-Pressure Hydraulic Hose Pipe (4-Wire Braided)",
    price: 4500,
    images: [img5, img6],
    ...commonFields,
  },
  {
    id: 44,
    title: "Hydraulic Bladder Accumulator (10 Liters)",
    price: 68000,
    images: [img7, img8],
    ...commonFields,
  },
  {
    id: 45,
    title: "Heavy-Duty Oil Cooler Heat Exchanger",
    price: 48000,
    images: [img1, img2],
    ...commonFields,
  },
  {
    id: 46,
    title: "Hydraulic Suction Return Line Filter",
    price: 12500,
    images: [img3, img4],
    ...commonFields,
  },
  {
    id: 47,
    title: "Stainless Steel Quick Disconnect Coupling",
    price: 6200,
    images: [img5, img6],
    ...commonFields,
  },
  {
    id: 48,
    title: "Glycerin-Filled Hydraulic Pressure Gauge (0-400 Bar)",
    price: 3800,
    images: [img7, img8],
    ...commonFields,
  },
  {
    id: 49,
    title: "Hydraulic Power Unit Oil Tank (100L)",
    price: 55000,
    images: [img1, img2],
    ...commonFields,
  },
  {
    id: 50,
    title: "Hard Chrome Plated Piston Rod (30mm Shaft)",
    price: 18000,
    images: [img3, img4],
    ...commonFields,
  },
];