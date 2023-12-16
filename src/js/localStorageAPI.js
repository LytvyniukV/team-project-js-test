export const addTask = dataForm => {
  const initialFormData = JSON.parse(localStorage.getItem('tasks')) || [];
  initialFormData.push(dataForm);

  localStorage.setItem('tasks', JSON.stringify(initialFormData));
};
