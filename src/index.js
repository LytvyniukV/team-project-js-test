/**

 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 */

import { refs } from './js/refs';

import { renderTasks } from './js/renderTasks';
import { daleteItem } from './js/daleteItem';
import { onFormSubmit } from './js/onFormSubmit';

renderTasks();

refs.form.addEventListener('submit', onFormSubmit);
refs.cardsList.addEventListener('click', daleteItem);
