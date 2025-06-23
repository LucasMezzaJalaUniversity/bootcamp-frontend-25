export const Button = ({children, onClick}) => {
  return (
    <button id="changeFavorite" onClick={onClick}>{children}</button>
  )
}