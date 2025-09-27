const User = require('../models/User');

exports.addToFavorites = async (req, res) => {
    try {
        const { movieId, title, posterPath } = req.body;

        if (!movieId || !title) {
            return res.status(400).json({
                status: 'error',
                message: 'Movie ID and title are required'
            });
        }

        const user = await User.findById(req.user._id);
        
        // Check if movie is already in favorites
        if (user.favorites.some(movie => movie.movieId === movieId)) {
            return res.status(400).json({
                status: 'error',
                message: 'Movie is already in favorites'
            });
        }

        user.favorites.push({ movieId, title, posterPath });
        await user.save();

        res.status(200).json({
            status: 'success',
            data: {
                favorites: user.favorites
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
};

exports.removeFromFavorites = async (req, res) => {
    try {
        const { movieId } = req.params;

        const user = await User.findById(req.user._id);
        user.favorites = user.favorites.filter(movie => movie.movieId !== parseInt(movieId));
        await user.save();

        res.status(200).json({
            status: 'success',
            data: {
                favorites: user.favorites
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
};

exports.addToWatchlist = async (req, res) => {
    try {
        const { movieId, title, posterPath } = req.body;

        if (!movieId || !title) {
            return res.status(400).json({
                status: 'error',
                message: 'Movie ID and title are required'
            });
        }

        const user = await User.findById(req.user._id);
        
        // Check if movie is already in watchlist
        if (user.watchlist.some(movie => movie.movieId === movieId)) {
            return res.status(400).json({
                status: 'error',
                message: 'Movie is already in watchlist'
            });
        }

        user.watchlist.push({ movieId, title, posterPath });
        await user.save();

        res.status(200).json({
            status: 'success',
            data: {
                watchlist: user.watchlist
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
};

exports.removeFromWatchlist = async (req, res) => {
    try {
        const { movieId } = req.params;

        const user = await User.findById(req.user._id);
        user.watchlist = user.watchlist.filter(movie => movie.movieId !== parseInt(movieId));
        await user.save();

        res.status(200).json({
            status: 'success',
            data: {
                watchlist: user.watchlist
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
};