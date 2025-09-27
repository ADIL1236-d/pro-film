const express = require('express');
const router = express.Router();
const movieListController = require('../controllers/movieListController');
const { protect } = require('../middleware/auth');

// Protect all routes
router.use(protect);

// Favorites routes
router.post('/favorites', movieListController.addToFavorites);
router.delete('/favorites/:movieId', movieListController.removeFromFavorites);

// Watchlist routes
router.post('/watchlist', movieListController.addToWatchlist);
router.delete('/watchlist/:movieId', movieListController.removeFromWatchlist);

module.exports = router;