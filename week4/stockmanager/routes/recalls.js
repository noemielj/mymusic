const express = require('express');
const router = express.Router();
const data = require('../data');

// test 1 recalls byBrand
router.get('/byBrand/:brand', (req, res) => {
  const { brand } = req.params;

  const recalledProducts = data.filter(product => {
    const recalledBatches = product.batches.filter(batch => batch.recall === true);
    return recalledBatches.length > 0 && product.brand === brand;
  });

  const recalledProductIds = recalledProducts.map(product => product.id);

  res.json({ products: recalledProductIds });
});

// test 2 recalls/byTimestamp/:timestamp

router.get('/byTimestamp/:timestamp', (req, res) => {
    const { timestamp } = req.params;
  
    // Convertir le timestamp en date
    const expirationDate = new Date(parseInt(timestamp, 10));
  
    // Filtrer les produits rappelés pour la date d'expiration donnée
    const recalledProducts = data.filter((product) => {
      const recalledBatches = product.batches.filter(
        (batch) =>
          batch.recall === true &&
          new Date(batch.expirationDate).getTime() === expirationDate.getTime()
      );
      return recalledBatches.length > 0;
    });
  
    // Extraire les ID des produits rappelés
    const recalledProductIds = recalledProducts.map((product) => product.id);
  
    // Répondre avec le tableau d'ID
    res.json({ products: recalledProductIds });
  });


module.exports = router;