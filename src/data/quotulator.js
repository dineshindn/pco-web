export const estimateLevel = [
  {
    id: 1,
    name: "Concept - Target Setting",
    value: 1,
    bom: 1.3
  },
  {
    id: 2,
    name: "Final Design - Production Intent",
    value: 2,
    bom: 1.5
  },
  {
    id: 3,
    name: "Cost At Supplier Condition - Price Negotiation",
    value: 3,
    bom: 1.8
  }
];

export const complexity = [
  {
    id: "complex_system",
    name: "Complex System",
    example: "Motor Vehicle",
    image: "assets/car.png",
    assemblies: null,
    sub_assemblies: null,
    parts: null,
    bom: 10
  },
  {
    id: "multiple_assembly_large",
    name: "Multiple Assembly Large",
    example: "Washing Machine",
    image: "assets/washing_machine.png",
    assemblies: 5,
    sub_assemblies: 5,
    parts: 20,
    bom: 5
  },
  {
    id: "multiple_assembly_medium",
    name: "Multiple Assembly - Medium",
    example: "Steering Rack",
    image: "assets/steering_rack.png",
    assemblies: 3,
    sub_assemblies: 5,
    parts: 7,
    bom: 3
  },
  {
    id: "multiple_assembly_small",
    name: "Multiple Assembly Small",
    example: "Industrial Gearbox",
    image: "assets/gearbox.png",
    assemblies: 3,
    sub_assemblies: 2,
    parts: 4,
    bom: 2
  },
  {
    id: "single_assembly",
    name: "Single Assembly",
    example: "Wheel Hub",
    image: "assets/wheel_hub.png",
    assemblies: 2,
    sub_assemblies: 1,
    parts: 4,
    bom: 1
  },
  {
    id: "single_part",
    name: "Single Part",
    example: "Plastic Moulding",
    image: "assets/moulding.png",
    assemblies: null,
    sub_assemblies: null,
    parts: 1,
    bom: 0.1
  }
];

export const process_component = 6;
export const job_setup = 120;
export const report_to_client = 120;
export const build_bom = 120;
export const estimate_setup = 5;
export const estimate_time = 5;
export const contigency = 0.15;
export const efficiency = 0.8;
export const rate = 30;
