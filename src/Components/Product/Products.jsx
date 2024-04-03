const products = [
    {
      id: 1,
      category: "Uncategorized",
      title: "ARMSX",
      price: 1999.00,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/07/ARMSX_FOP-300x300.jpg",
      qnty: 0,
    },
    {
      id: 2,
      category: "General Care",
      title: "Emperia 1900 Carpet Detergent 5 Litres",
      price: 1999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Carpet-Detergent-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 3,
      category: "General Care",
      title: "Emperia 1900 Carpet Shampoo 5 Litres",
      price: 1999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Carpet-Shampoo-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 4,
      category: "Kitchen Care",
      title: "Emperia 1900 K-Pro Descaler 5 Litres",
      price: 1999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Descaler_K-Pro-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 5,
      category: "Kitchen Care",
      title: "Emperia 1900 K-Pro Dish Wash Liquid (5L)",
      price: 999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Dishwash-Liquid_K-Pro-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 6,
      category: "Kitchen Care",
      title: "Emperia 1900 K-Pro Heavy - Duty Degreaser 5 Litres",
      price: 999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Heavy-Duty-Decreaser_K-Pro-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 7,
      category: "Kitchen Care",
      title: "Emperia 1900 K-Pro Machine Dish Wash 5 Litres",
      price: 2999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Machine-Dish-Wash_K-Pro-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 8,
      category: "Kitchen Care",
      title: "Emperia 1900 K-Pro Machine Rinse 5 Litres",
      price: 3999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Machine-Rinse_K-Pro-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 9,
      category: "Kitchen Care",
      title: "Emperia 1900 K-Pro Multi-Purpose Cleaner (5L)",
      price: 999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Multi-Purpose-Cleaner_K-Pro-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 10,
      category: "Kitchen Care",
      title: "Emperia 1900 K-Pro Oven & Grill Cleaner 5 Litres",
      price: 1999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Oven-Grill-Cleaner_K-Pro-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 11,
      category: "General Care",
      title: "Emperia 1900 SS Shine 5 Litres",
      price: 2999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/SS-Shine-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 12,
      category: "Bathroom Care",
      title: "Emperia 1900 Vol 1 Bathroom Cleaner 5 Litres",
      price: 1499.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Bathroom-Cleaner_Vol-1-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 13,
      category: "Floor & Surface Care",
      title: "Emperia 1900 Vol 2 Hard Surface Cleaner 5 Litres",
      price: 1499.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Hard-Surface-Cleaner_Vol-2-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 14,
      category: "General Care",
      title: "Emperia 1900 Vol 3 Glass Cleaner 5 Litres",
      price: 1999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Glass-Cleaner_Vol-3-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 15,
      category: "General Care",
      title: "Emperia 1900 Vol 4 Wood Maintainer 5 Litres",
      price: 2999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Wood-Maintainer_Vol-4-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 16,
      category: "General Care",
      title: "Emperia 1900 Vol 5 Air Freshener 5 Litres",
      price: 1499.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Air-Freshner_Yellow-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 17,
      category: "General Care",
      title: "Emperia 1900 Vol 5 Air Freshener Blossom 5 Litres",
      price: 1499.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Air-Freshner_Pink-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 18,
      category: "Bathroom Care",
      title: "Emperia 1900 Vol 6 Toilet Cleaner 5 Litres",
      price: 999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Toilet-Cleaner_Vol-6-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 19,
      category: "Floor & Surface Care",
      title: "Emperia 1900 Vol 7 Floor Cleaner 5 Litres",
      price: 999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Floor-Cleaner_Vol-7-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 20,
      category: "Bathroom Care",
      title: " Emperia 1900 Vol 9 Shine & Descaler 5 Litres",
      price: 1499.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Descaler-Shine_Vol-9-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 21,
      category: "Personal Care",
      title: "Grabbit First Hand Sanitizer 5 Litres",
      price: 999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Hand-Sanitizer_Grabbit-First-01-300x300.jpg",
      qnty: 0,
    },
    {
      id: 22,
      category: "Personal Care",
      title: "Grabbit First Hand wash 5 Litres",
      price: 999.0,
      image:
        "https://emperia1900.com/wp-content/uploads/2023/04/Hand-Wash_Grabbit-First-01-300x300.jpg",
      qnty: 0,
    },
  ];