import { deleteTask } from './localStorageAPI';
export const daleteItem = event => {
  if (event.target.nodeName === 'BUTTON') {
    event.target.parentNode.remove();
    const idBtn = event.target.dataset.id;
    deleteTask(idBtn);
  }
};
