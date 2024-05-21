
const request = require('supertest');
const app = require('./app'); 
const brand = require('./data')


// test 1 

  it ("GET /recalls/byBrand/:brand", async () => {
   
    const res = await request(app).get("/recalls/byBrand/Alvalle");

    expect(res.status).toBe(200);
    expect(res.body.products).toEqual([4800]);

  });

  // test 2
  it('/byTimestamp/:timestamp', async () => {
    const timestamp = new Date('2042-03-25').getTime(); 

    // Utilisation de supertest pour effectuer la requête HTTP
    const response = await request(app).get(`/recalls/byTimestamp/2042-03-25`);

    // Vérification du statut de la réponse
    expect(response.status).toBe(200);

    // Vérification de la structure de la réponse
    expect(response.body).toHaveProperty('products');
    expect(Array.isArray(response.body.products)).toBe(true);

    // Vérification des valeurs dans le tableau
    const recalledProducts = brand.filter(
      (product) =>
        product.batches.some(
          (batch) => batch.recall === true && new Date(batch.expirationDate).getTime() === timestamp
        )
    );
    const recalledProductIds = recalledProducts.map((product) => product.id);

    expect(response.body.products).toEqual(recalledProductIds);
  });
