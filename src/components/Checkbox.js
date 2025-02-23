const Checkbox = ({isChecked, setCheck, label, name, id}) => {
    return (
        <div className="checkbox-container">
            <label htmlFor={id}>{label}
                <input type="checkbox" name={name} id={id} checked={isChecked} onChange={(e) => setCheck(e.target.checked)} />
                <span className="checkmark" />
            </label>
        </div>
    );
};

export default Checkbox;