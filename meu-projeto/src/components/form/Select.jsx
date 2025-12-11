import styles from './Select.module.css'
function Select({ text, handleOnChange, name, value, options }) {
    return (
        <div className={styles.form_control}>
            <div>
                <label htmlFor={name}>{text}</label>

                {// Deixando os inputs em componentes e dinamicos
                }

               <select className='form-select' name="name" id="name">
               <option  selected>Selecione uma opção</option>
            </select>
                
            </div>
        </div>
    )
}

export default Select