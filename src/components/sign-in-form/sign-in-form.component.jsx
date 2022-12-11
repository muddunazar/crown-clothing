//mod conext-second -video
import {
  useState,
  useContext,
  //  useEffect,
} from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
//mod conext-second -video
// import { UserContext } from "../../contexts/user.context";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
const defaultFormState = {
  // displayName: '',
  email: "",
  password: "",
  // confirmPassword: ''
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormState);
  const { email, password } = formFields;
  //mod conext-second -video
  // const { setCurrentUser } = useContext(UserContext)

  // console.log(formFields);
  const reserFormFeilds = () => {
    setFormFields(defaultFormState);
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  //7-2-video
  // const { user } = await signInWithGooglePopup();  previous one
  //mod context vid-4
  // setCurrentUser(user)
  //7-2-video
  // await createUserDocumentFromAuth(user);//move this line into context

  const handleSubmit = async event => {
    event.preventDefault();
    //mod conext-second -video
    // try {
    //     const response = await signInAuthUserWithEmailAndPassword(email, password);
    //     console.log(response);
    //     reserFormFeilds();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(response);
      // setCurrentUser(user)

      reserFormFeilds();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for emial");
          break;
        case "auth/user-not-found":
          alert("No user Associated with this email address");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    //important//
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      {/* <h2>Don't have an account?</h2> */}
      <h2>Already have an account?</h2>

      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
