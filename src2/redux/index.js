import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import middlewares from './middlewares';
import { computeSchema } from './utils';

// Add your entities here. Under define key you need to define
// all the nested relationships. Pass a string if the name of the field
// is the same as the entity name or an object with the key being the field name
// and the value being the entity name
export const schema = {
  album: {
    define: ['artist', 'image', 'genres' ],
    options: {
      idAttribute: 'uuid',
    },
  },
  artist: {
    define: ['image'],
    options: {
      idAttribute: 'uuid',
    },
  },
  genre: {
    define: [],
    options: {
      idAttribute: 'uuid',
    },
  },
  image: {
    define: [],
  },
  track: {
    define: ['artist', 'album', 'genres'],
    options: {
      idAttribute: 'uuid',
    },
  },
  playlist: {
    define: ['tracks']
  }
};

export const entitiesSchema = computeSchema(schema);

const getStore = (initialState, options = {}) => {
  if (options.debug) {
    const reduxLogger = createLogger({
      collapsed: true,
    });
    middlewares.push(reduxLogger);
  }
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
};


export default getStore;
