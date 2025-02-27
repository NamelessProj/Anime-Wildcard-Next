const Checkbox = ({isChecked, handler, label, name, id}) => {
    return (
        <div className="checkbox-container">
            <label htmlFor={id}>{label}
                <input type="checkbox" name={name} id={id} checked={isChecked} onChange={handler} />
                <span className="checkmark" />
            </label>
        </div>
    );
};

export default Checkbox;