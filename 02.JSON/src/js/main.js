const handleSubmit = (event) => {
  let isValidated = false;
  event.preventDefault();
  for (let i = 0; i < event.target.length - 1; i++) {
    const item = event.target[i]
    console.log(item)
    if (!event.target[i]) {
      console.log("Falta el: ", event.target[i].name);
    }
  }
  return isValidated;
};

const a = [];
a.forEach((item) => {});
