const db = require('../config/db');

class MusicModel {
  static getAllMusic() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM pop_music';
      db.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  static addMusic(musicData) {
    return new Promise((resolve, reject) => {
      const { name, content, link_img, link_video, author } = musicData;
      const query = 'INSERT INTO pop_music (name, content, link_img, link_video, author) VALUES (?, ?, ?, ?, ?)';
      
      db.query(query, [name, content, link_img, link_video, author], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = MusicModel;