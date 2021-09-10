export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId?.toString() || data.id;
  }

  get Template() {
      return /*html*/`
    <div class="card bg-primary elevation-2">
    <h3>${this.title}</h3>
    <h2>${this.artist}</h2>
    <p>$${this.price} <button class='btn btn-danger' onclick="app.songsController.addSong('${this.id}')"></button></p>
    <img src="${this.albumArt}">
    <audio src=${this.preview} controls></audio>
    </div>
        `
  }

  get playlistTemplate() {
    return /*html*/`
    <div class="card bg-primary elevation-2">
    <h3>${this.title}</h3>
    <h2>${this.artist}</h2>
    <p>$${this.price}</p>
    <img src="${this.albumArt}">
    <audio src=${this.preview} controls></audio>
    </div>
    <button class ="btn btn-danger" onclick="app.songsController.removeSong('${this.id}')">Delete</button>
    `
  }
}
