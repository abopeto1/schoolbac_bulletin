import {album, albums} from "../../Pages/Album/AlbumEntity";
import { artist, artists } from "../../Pages/Artists/ArtistEntity";
import {image, images} from "../../Pages/Image/ImageEntity";
import {track, tracks} from "../../Pages/Track/TrackEntity";
import {genre, genres} from "../../Pages/Genre/GenreEntity"
import {playlist, playlists} from "../../Pages/Playlist/PlaylistEntity";

// Definitions
album.define({tracks})
artist.define({ image, tracks, albums })
genre.define({tracks})
image.define({})
playlist.define({})
track.define({genres, artists, album})

export default {
  album, albums,
  artist,
  artists,
  genre,
  genres,
  image,
  images,
  track,
  tracks,
  playlist,
  playlists
};
