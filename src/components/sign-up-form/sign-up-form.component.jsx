import FormInput from "../form-input/form-input.component";
//conetxt-vid-4
import {
    useState,
    //  useContext, 
} from "react";
// import { UserContext } from "../../contexts/user.context";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import { SignUpContainer } from './sign-up-form.styles'
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const defaultFormState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormState);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();

    //conetxt-vid-4
    // const { setCurrentUser } = useContext(UserContext)

    // console.log(formFields);

    const reserFormFeilds = () => {
        setFormFields(defaultFormState)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('password do not match!!');
            return;
        };

        try {
            // saga replaced this.//const { user } = await createAuthUserWithEmailAndPassword(email, password);
            // await createUserDocumentFromAuth(user, { displayName });
            dispatch(signUpStart(email, password, displayName));
            //conetxt-vid-4
            // setCurrentUser(user)

            reserFormFeilds();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error ', error)
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        //important//
        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit} >
                {/* <FormInput
                    label='Display Name'
                    inputopt={{
                        type: 'text',
                        required: true,
                        onChange: handleChange,
                        name: "displayName",
                        value: displayName
                    }} /> */}
                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName} />

                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name="password"
                    value={password} />

                <FormInput
                    label="Confirm Password"
                    type='password'
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword} />


                <Button type='submit' >Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}
export default SignUpForm;