import { combineReducers } from 'redux';
import getByIdReducer from './byId';
import getReadIdsReducer from './read';
import getUpdateIdsReducer from './update';
import getDeleteIdsReducer from './delete';
import getToggleIdsReducer from './toggle';
import getCreateIdsReducer from './create';

const getReducers = reducerName => (
  combineReducers({
    byId: getByIdReducer(reducerName),
    createIds: getCreateIdsReducer(reducerName),
    readIds: getReadIdsReducer(reducerName),
    updateIds: getUpdateIdsReducer(reducerName),
    deleteIds: getDeleteIdsReducer(reducerName),
    toggleIds: getToggleIdsReducer(reducerName),
  })
);

const entities = combineReducers({
    album: getReducers('album'),
    artist: getReducers('artist'),
    genre: getReducers('genre'),
    image: getReducers('image'),
    playlist: getReducers("playlist"),
    track: getReducers('track')
});

const reducers = combineReducers({
  entities,
});

export default reducers;
