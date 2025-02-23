const TextInput = ({name, id, label, value, onChange, isRequired=false}) => {
    return (
        <div className="text-input">
            <input type="text" required={isRequired} name={name} id={id} value={value} onChange={(e) => onChange(e)} className={`${value !== "" ? "not-empty" : "empty"} border-white focus:border-amber-600`} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default TextInput;