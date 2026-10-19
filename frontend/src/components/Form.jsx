import { useState } from 'react';
import './Form.css';

const Form = ({ title = "Submit", buttonText = "Submit", onSubmitAction, fields = [] }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitAction(formData);
    };

    return (
        <div className='container'>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <div key={field.name} className="form-group">
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                            type={field.type || "text"}
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder || ""}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            required={field.required}
                        />
                    </div>
                ))}
                <button type="submit">{buttonText}</button>
                <p>do you have an account? </p>
            </form>
        </div>
    );
};

export default Form;