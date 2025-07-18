import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';  // Combine all reducers
import rootSaga from './sagas';  // Root saga to run all sagas
const sagaMiddleware = createSagaMiddleware();

const store=createStore(rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension
          ? window.devToolsExtension()
          : function (f) {
              return f;
            }
      )
);
sagaMiddleware.run(rootSaga);
export default store;