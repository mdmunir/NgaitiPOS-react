module.exports = {
    schema: [
        {
            name: 'Product',
            properties: {
                name: 'string',
                category: { type: 'string', default: 'uncategoried' },
                price: { type: 'double', default: 0 },
                qty: { type: 'double', default: 0 }
            }
        }
    ]
};