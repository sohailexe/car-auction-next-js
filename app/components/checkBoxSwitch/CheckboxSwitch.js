import "./CheckBoxSwitch-Style.css";
export const CheckboxSwitch = ({ name, isChecked, onChange }) => {
  return (
    <div className="checkbox-wrapper-8 inline-block">
      <input
        className="tgl tgl-skewed"
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />

      <label
        className="tgl-btn"
        data-tg-off="Nei"
        data-tg-on="Ja"
        htmlFor={name}
      ></label>
    </div>
  );
};
