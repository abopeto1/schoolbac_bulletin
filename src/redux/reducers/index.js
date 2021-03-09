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
  classroom: getReducers('classroom'),
  course: getReducers('course'),
  level: getReducers('level'),
  student: getReducers('student'),
  image: getReducers('image'),
  promotion: getReducers("promotion"),
  school: getReducers("school"),
  track: getReducers('track'),
});

const reducers = combineReducers({
  entities,
});

export default reducers;
