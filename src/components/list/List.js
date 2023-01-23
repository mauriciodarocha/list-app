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
  const label = document.createElement('label')
  const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
  const spanText = document.createElement('span')
    spanText.classList.add('span-text')
  const spanBtn = document.createElement('span')
    spanBtn.classList.add('span-btn')
    spanBtn.setAttribute('title', 'Click to mark as done')
  if (item['checked']) {
    itemEl.classList.add('checked')
    checkbox.setAttribute('checked', true)
  }
  const btn = document.createElement('button')
    btn.setAttribute('title', 'Click to remove')
    btn.innerHTML = "X"
    spanText.append(item.text)
    spanBtn.append(checkbox)
    label.append(spanBtn)
    label.append(spanText)
    label.append(btn)
    itemEl.append(label)
    btn.addEventListener('click', () => {
      remove(item)
    })
    checkbox.addEventListener('change', (e) => {
      if(!item['checked']) {
        item['checked'] = true
        itemEl.classList.add('checked')
      } else {
        item['checked'] = false
        itemEl.classList.remove('checked')
      }
    })
  return itemEl
}
