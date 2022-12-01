import { createStore } from 'redux';
// зв'язуємо логіку Redux DevTools з інструментами розробника в браузері
import { devToolsEnhancer } from '@redux-devtools/extension';

import { rootReducer } from './reducer';

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
