const FormatCheckbox = ({format, onChange}) => {
    return (
        <div className="checkbox-container">
            <label htmlFor={format.value}>{format.label}
                <input type="checkbox" name={format.value} id={format.value} checked={format.checked} onChange={() => onChange(format.value)} />
                <span className="checkmark" />
            </label>
        </div>
    );
};

export default FormatCheckbox;