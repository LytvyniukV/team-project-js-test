import { createTaskMarkup } from './createTaskMarkup';
import { refs } from './refs';
import { getTask } from './localStorageAPI';


export const renderTasks = () => {
  const dataLocalStorage = getTask();
  if (!dataLocalStorage) return;
  const markup = dataLocalStorage.reduce(
    (html, element) => html + createTaskMarkup(element),
    ''
  );
  refs.cardsList.insertAdjacentHTML('beforeend', markup);
};
