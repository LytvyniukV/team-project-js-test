import { createFormData } from './createFormData';
import { addTask } from './localStorageAPI';
import { createTaskMarkup } from './createTaskMarkup';
import { refs } from './refs';
export const onFormSubmit = event => {
  event.preventDefault();
  const dataForm = createFormData(refs.form);
  addTask(dataForm);
  const markup = createTaskMarkup(dataForm);
  refs.cardsList.insertAdjacentHTML('beforeend', markup);
};
