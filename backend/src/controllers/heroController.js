const Hero = require('../models/Hero');

// @desc    Get hero content
// @route   GET /api/hero
// @access  Public
const getHero = async (req, res) => {
  try {
    let hero = await Hero.findOne();
    
    // If no hero document exists, create a default one
    if (!hero) {
      hero = await Hero.create({});
    }
    
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Update hero content
// @route   PUT /api/hero
// @access  Private (Admin)
const updateHero = async (req, res) => {
  try {
    let hero = await Hero.findOne();
    
    if (!hero) {
      // Create if it doesn't exist just in case
      hero = await Hero.create(req.body);
      return res.json(hero);
    }
    
    hero.backgroundText = req.body.backgroundText || hero.backgroundText;
    hero.title = req.body.title || hero.title;
    hero.subtitle = req.body.subtitle || hero.subtitle;
    hero.image = req.body.image || hero.image;
    hero.stat1Value = req.body.stat1Value || hero.stat1Value;
    hero.stat1Label = req.body.stat1Label || hero.stat1Label;
    hero.stat2Value = req.body.stat2Value || hero.stat2Value;
    hero.stat2Label = req.body.stat2Label || hero.stat2Label;
    
    const updatedHero = await hero.save();
    res.json(updatedHero);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  getHero,
  updateHero
};
