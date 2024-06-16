export default function Input({changeValue, value}) {
  return (
  <input 
    value={value}
    onChange={e => changeValue(e)}
    type="text" />
  )
}
