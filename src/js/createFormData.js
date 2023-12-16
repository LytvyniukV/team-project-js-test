export const createFormData = (form) =>{
    const dataForm = {};
  new FormData(form).forEach((value, key) => {
    dataForm[key] = value;
  });
  return dataForm;
}