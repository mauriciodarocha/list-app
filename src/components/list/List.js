export const List = ({itemList,className,remove}) => {
  let ul = document.createElement('ul')
  if (className) ul.classList.add(className)
  if (itemList&&itemList instanceof Array&&itemList.length>0) {
    for(let item of itemList) {
      const listItem = ListItem({item,remove})
      if(listItem) {
        ul.append(listItem)
      }
    }
  } else {
    ul = ""
  }
  return ul
}

const ListItem = ({item,remove}) => {
  const itemEl = document.createElement('li')
  const span = document.createElement('span')
  const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
  if (item['checked']) {
    checkbox.setAttribute('checked', 'checked')
  }
  const btn = document.createElement('button')
    btn.innerHTML = "X"
    span.append(item.text)
    itemEl.append(checkbox)
    itemEl.append(span)
    itemEl.append(btn)
    btn.addEventListener('click', () => {
      remove(item)
    })
    checkbox.addEventListener('change', (e) => {
      if(!item['checked']) {
        item['checked'] = true
      } else {
        item['checked'] = false
      }
    })
  return itemEl
}
