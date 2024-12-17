const MusicModel = require('../models/musicModel');

class MusicController {
  static async getAllMusic(req, res) {
    try {
      const results = await MusicModel.getAllMusic();
      res.json(results);
    } catch (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Error querying database' });
    }
  }

  static async addMusic(req, res) {
    try {
      await MusicModel.addMusic(req.body);
      res.status(200).json({ message: 'Data inserted successfully' });
    } catch (error) {
      console.error('Error inserting data into database:', error);
      res.status(500).json({ error: 'Error inserting data into database' });
    }
  }
}

module.exports = MusicController;