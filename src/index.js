/**

 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 */
import { createFormData } from "./js/createFormData";
import { addTask } from "./js/localStorageAPI";
import { refs } from "./js/refs";


const onFormSubmit = event => {
  event.preventDefault();
  const dataForm = createFormData(refs.form);
  addTask(dataForm);
};

refs.form.addEventListener('submit', onFormSubmit);
