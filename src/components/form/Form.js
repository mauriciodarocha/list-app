export const Form = ({onSubmit, className}) => {
  const form = document.createElement('form')
  const label = document.createElement('label')
  const input = document.createElement('input')
  label.innerText = "new item"
  if (className) {
    form.classList.add(className)
  }
  form.addEventListener('submit', (e)=>{
      e.preventDefault()
      let text = input.value.trim()
      if(text) {
        onSubmit({text,id:uuidv4()},input)
      }
      form.reset()
  })

  form.append(label)
  form.append(input)

  return form
}

const uuidv4 = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}