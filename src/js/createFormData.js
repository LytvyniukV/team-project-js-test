import { nanoid } from 'nanoid';
export const createFormData = form => {
  const dataForm = { id: nanoid() };
  new FormData(form).forEach((value, key) => {
    dataForm[key] = value;
  });
  return dataForm;
};
