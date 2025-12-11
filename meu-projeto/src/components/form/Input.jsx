import styles from './Input.module.css'
function Input({ type, text, handleOnChange, name, placeholder, value }) {
    return (
        <div className={styles.form_control}>
            <div>
                <label htmlFor={name}>{text}</label>

                {// Deixando os inputs em componentes e dinamicos
                }

                <input className='form-control' type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    onChange={handleOnChange} 
                    value={value}
                    />
            </div>
        </div>
    )
}

export default Input