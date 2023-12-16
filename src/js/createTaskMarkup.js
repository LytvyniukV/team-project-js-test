export const createTaskMarkup = dataForm => {
  return `<li class="task-list-item">
      <button class="task-list-item-btn" data-id='${dataForm.id}'>Удалить</button>
      <h3>${dataForm.taskName}</h3>
     <p>${dataForm.taskText}</p>
  </li>`;
};
