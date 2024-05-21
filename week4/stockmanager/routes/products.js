const express = require('express');
const router = express.Router();
const data = require('../data'); 
// route test 1
router.get('/byId/:id', (req, res) => {
    console.log("routeGet")
  const productId = Number(req.params.id);
  const product = data.find(item => item.id === productId);
    console.log(product);
    console.log(productId);
  if (product) {
    res.json({ product: product });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// route test 2
router.get("/byBrand/:brand", (req, res) => {
    const { brand } = req.params;
    const products = data.filter(product => product.brand == brand);
      

    res.json({ products });
});

// route test 3
router.get('/byBatchId/:id', (req, res) => {
    const { id } = req.params;
  
    const product = data.find(product => 
        product.batches.find(batch => batch.id === Number(id)) 
    );
    res.json({ product })
    });
  
   
  


module.exports = router