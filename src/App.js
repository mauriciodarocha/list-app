import { render } from "./app-controls/AppControls";
import { Header } from "./components/header/Header";
import { Form } from "./components/form/Form";
import { List } from "./components/list/List";

const App = () => {
  let itemList = []
  const setItemList = (newList) => {
    itemList = newList
    render(List,{itemList,className:"list",remove},listContainer)
  }
  const app = document.createElement("div");
    app.className = "App";
    
  const header = Header({content:"My list",className:"header-list"})  
  const remove = (itemObj) => {
    const newList = itemList.filter(item => item.id !== itemObj.id)
    setItemList(newList)
  }
  const add = (itemObj) => {
    const newList = [...itemList]
    newList.push(itemObj)
    setItemList(newList)
  }
  const onSubmit = (itemObj) => {
    add(itemObj)
  }

  const form = Form({onSubmit,className:'list-form'})
  const listContainer = document.createElement('div')
    listContainer.classList.add('list-container')

    app.append(header)
    app.append(listContainer)
    app.append(form)

  return app
}
export default App