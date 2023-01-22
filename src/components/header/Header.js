export const Header = ({content, className}) => {
  const header = document.createElement('header')
  if (className) {
    header.classList.add(className)
  }
  header.append(content)
  return header
}
