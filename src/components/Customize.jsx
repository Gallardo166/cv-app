export default function Customize({ handleChangeStyles }) {
  return (
    <div className="customize">
      <label htmlFor="font-family">Font: </label>
      <select
        name="font-family"
        id="font-family"
        onChange={(e) => {
          handleChangeStyles("fontFamily", e.target.value);
        }}
      >
        <option value="arial">Arial</option>
        <option value="times new roman" selected>Times New Roman</option>
        <option value="helvetica">Helvetica</option>
        <option value="lmroman">LM Roman</option>
      </select>
    </div>
  );
}
