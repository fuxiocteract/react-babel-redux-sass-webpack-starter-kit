'use strict'

import { createStore } from 'redux';
import reducers from './reducers/reducers';

let stores = createStore(reducers);
