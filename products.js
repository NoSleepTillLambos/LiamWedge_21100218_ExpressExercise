const products = {
  inventory: [
    {
      id: 1,
      productName: "Taylormade P770 Irons",
      inStock: 12,
      availStock: [
        {
          orientation: "RH",
          qty: 5,
          variations: [
            {
              flex: 2,
              stiff: 1,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      productName: "Callaway rogue Irons",
      inStock: 2,
      availStock: [
        {
          orientation: "RH",
          qty: 15,
          variations: [
            {
              flex: 6,
              stiff: 2,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      productName: "Taylormade P790 Irons",
      inStock: 4,
      availStock: [
        {
          orientation: "LH",
          qty: 11,
          variations: [
            {
              flex: 4,
              stiff: 9,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      productName: "Titelist ",
      inStock: 12,
      availStock: [
        {
          orientation: 8,
          qty: 5,
          variations: [
            {
              flex: 2,
              stiff: 1,
            },
          ],
        },
      ],
    },
  ],
};

// Explain here about node modules, the scope and how to access via export

module.exports = products;
