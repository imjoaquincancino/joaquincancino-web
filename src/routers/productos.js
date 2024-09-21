const express = require("express");
const router = express.Router();
const Product = require("../models/product.js");

const multer = require('multer');
const path = require('path');

// Configuración de multer para almacenar archivos en la carpeta 'uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/uploads/'); // Carpeta donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname)); // Nombre único para cada archivo
    }
  });
  
  // Filtro para validar los tipos de archivo
  const fileFilter = (req, file, cb) => {
    // Aceptar solo archivos de imagen
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
  
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Solo se permiten imágenes en formato jpeg, jpg, png o gif.'));
    }
  };
  
  const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter // Aplicar filtro de archivos
  });

// Página principal: Mostrar todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('productos/productos', { products });
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).send('Error al cargar los productos');
  }
});

// Página para añadir un producto
router.get("/add", (req, res) => {
  res.render("productos/addProduct");
});

router.get("/:productID", async (req, res) => {
    let product = await Product.findOne({
        productId: req.params.productID
    });

    res.render("productos/producto",
        {
            product
        }
    )
})


// Ruta para añadir un nuevo producto
router.post('/add', upload.single('productImage'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('Por favor, sube una imagen.');
    }

    const newProduct = new Product({
      productId: Date.now().toString(),
      productTitle: req.body.productTitle,
      productDescription: req.body.productDescription,
      productPrice: req.body.productPrice,
      productImages: [`/uploads/${req.file.filename}`] // Guardamos la ruta del archivo
    });

    await newProduct.save();
    res.redirect('/products');
  } catch (error) {
    console.error('Error al subir el producto:', error);
    res.status(500).send('Error al subir el producto');
  }
});

module.exports = router;