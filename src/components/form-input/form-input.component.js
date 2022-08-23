import { FormInputLabel, Group, Input } from './form-input.styles'
// const FormInput = ({ label, changeHandler,value}) => {
const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>

            <Input {...otherProps} />
            {label && (
                < FormInputLabel shrink={otherProps.value.length} >{label}</FormInputLabel>)}
            {/* <input type='text' required onChange={handleChange} name="displayName" value={displayName} /> */}
        </Group >
    )
}
export default FormInput;
// import './form-input.styles.scss'
// // const FormInput = ({ label, changeHandler,value}) => {
// const FormInput = ({ label, inputopt }) => {
//     // console.log({ ...inputopt })
//     return (
//         <div className="group">

//             <input className="form-input" {...inputopt} />
//             {label && (
//                 < label className={`${inputopt.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)}
//             {/* <input type='text' required onChange={handleChange} name="displayName" value={displayName} /> */}
//         </div >
//     )
// }
// export default FormInput;