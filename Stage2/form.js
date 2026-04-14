const formData = new FormData(document.querySelector('form')).submit();
formData.forEach((value, key) => console.log(`${key}: ${value}`));
console.log(formData)
