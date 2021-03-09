import {album, albums} from "../../Pages/Album/AlbumEntity";
import { artist, artists } from "../../Pages/Artists/ArtistEntity";
import {image, images} from "../../Pages/Image/ImageEntity";
import {track, tracks} from "../../Pages/Track/TrackEntity";
import {playlist, playlists} from "../../Pages/Playlist/PlaylistEntity";
import {schema} from "normalizr";

// Create Entities
const classroom = new schema.Entity('classroom')
const classrooms = new schema.Array(classroom)

const course = new schema.Entity('course')
const courses = new schema.Array(course)

const level = new schema.Entity('level')
const levels = new schema.Array(level)

const school = new schema.Entity('school')
const schools = new schema.Array(school)

const student = new schema.Entity('student')
const students = new schema.Array(student)

// Definitions
album.define({tracks})
artist.define({ image, tracks, albums })
level.define({})
student.define({})
image.define({})
playlist.define({})
track.define({genres, artists, album})
school.define({})

export default {
  album, albums,
  artist,
  artists,
  classroom,
  classrooms,
  course, courses,
  level, levels,
  student,
  students,
  school,
  schools,
  image,
  images,
  track,
  tracks,
  playlist,
  playlists
};
