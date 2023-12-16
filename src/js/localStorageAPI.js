const KEY = 'tasks';

export const addTask = dataForm => {
  const initialFormData = JSON.parse(localStorage.getItem(KEY)) || [];
  initialFormData.push(dataForm);

  localStorage.setItem(KEY, JSON.stringify(initialFormData));
};
export const getTask = () => {
  return JSON.parse(localStorage.getItem(KEY));
};
export const deleteTask = id => {
  const arr = getTask().filter(value => value.id !== id);
  localStorage.setItem(KEY, JSON.stringify(arr));
};
