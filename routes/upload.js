
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

let upload;
let multer;

try {
    multer = require('multer');

    // Ensure upload directory exists using absolute path resolved from this file
    // __dirname is backend/routes, so .. goes to backend
    const uploadDir = path.resolve(__dirname, '../uploads');

    if (!fs.existsSync(uploadDir)){
        try {
            fs.mkdirSync(uploadDir, { recursive: true });
            console.log(`Created upload directory at: ${uploadDir}`);
        } catch (err) {
            console.error("Failed to create upload directory:", err);
        }
    }

    // Configure storage
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, uploadDir); 
      },
      filename: function (req, file, cb) {
        // Sanitize original name to remove spaces
        const safeName = file.originalname.replace(/\s+/g, '-').toLowerCase();
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + safeName);
      }
    });

    // File filter (images only)
    const fileFilter = (req, file, cb) => {
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(new Error('Not an image! Please upload an image file (jpg, png, etc).'), false);
      }
    };

    upload = multer({ 
      storage: storage,
      fileFilter: fileFilter,
      limits: { fileSize: 1024 * 1024 * 5 } // 5MB limit
    }).single('image');

} catch (error) {
    console.warn("⚠️  WARNING: 'multer' module not found. Image uploads will be disabled.");
}

// @desc    Upload an image
// @route   POST /api/upload
router.post('/', (req, res) => {
  // Check if upload middleware is available
  if (!upload) {
      return res.status(503).json({ 
          message: 'Image upload is disabled. Server is missing "multer" dependency.',
          instruction: 'Please run "npm install" in the backend directory.'
      });
  }
  
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.error('Multer Error:', err);
      return res.status(400).json({ message: `Upload Error: ${err.message}` });
    } else if (err) {
      console.error('Upload Error:', err);
      return res.status(400).json({ message: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a file' });
    }

    // Return the path that the static server middleware serves
    const filePath = `/uploads/${req.file.filename}`;
    
    res.status(200).json({ 
      message: 'Image uploaded successfully', 
      url: filePath 
    });
  });
});

module.exports = router;