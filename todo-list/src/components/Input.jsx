export default function Input({ value, handleChangeValue }) {
  return (
    <input type="text" value={value} onChange={(e) => handleChangeValue(e)} />
  );
}
