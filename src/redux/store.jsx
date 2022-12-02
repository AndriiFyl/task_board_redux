import { createStore } from 'redux';
// зв'язуємо логіку Redux DevTools з інструментами розробника в браузері
import { devToolsEnhancer } from '@redux-devtools/extension';
//  іьпортуємо кореневий редюсер (тільки 1 на весь застосунок), який саме і опрацьовує
// всі відправленні actions і вироховує новій state
import { rootReducer } from './reducer';
// в змінну enhancer передаємо хук devToolsEnhancer(), який зв'яже інструменти з браузером
const enhancer = devToolsEnhancer();
// в стор передаємо кореневий редюсер, що виконуватиме всі обчислення та
// enhancer - для підключення інструментів розробника з браузером

export const store = createStore(rootReducer, enhancer);
