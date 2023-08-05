import { ErrorMessage } from "../ErrorMessage";
import { useState, useRef, ChangeEventHandler } from "react";
import { UserInformation, PhoneInputState } from "../types";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = () => {
  const [PhoneInputState, setPhoneInputState] = useState<PhoneInputState>(['', '', '', ''])
  const [userInformation, setUserInformation] = useState<UserInformation>({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
  })
  const refs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ]
  const ref0 = refs[0]
  const ref1 = refs[1]
  const ref2 = refs[2]
  const ref3 = refs[3]

  const createOnChangeHandler = 
    (index: 0 | 1 | 2 | 3 ): ChangeEventHandler<HTMLInputElement> => (e) => {
    const lengths: number[] = [2, 2, 2, 1]
    const currentMaxLength = lengths[index]
    const nextRef = refs[index + 1]
    const prevRef = refs[index - 1]
    const value = e.target.value
    const shouldGoToNextRef = currentMaxLength === value.length && nextRef?.current
    const shouldGoToPrevRef = value.length === 0 && prevRef?.current

    const newPhoneState = PhoneInputState
      .map((phoneInput, phoneInputIndex) => index === phoneInputIndex
      ? e.target.value
      : phoneInput) as PhoneInputState
    if (shouldGoToNextRef) {
      console.log('moving forward');
      nextRef.current?.focus()
    }
    if (shouldGoToPrevRef) {
      console.log('moving back');
      prevRef.current?.focus()
    }
    setPhoneInputState(newPhoneState)
  }

  return (
    <form>
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <div className="input-wrap">
        <label>{"First Name"}:</label>
        <input placeholder="Bilbo" />
      </div>
      <ErrorMessage message={firstNameErrorMessage} show={true} />

      {/* last name input */}
      <div className="input-wrap">
        <label>{"Last Name"}:</label>
        <input placeholder="Baggins" />
      </div>
      <ErrorMessage message={lastNameErrorMessage} show={true} />

      {/* Email Input */}
      <div className="input-wrap">
        <label>{"Email"}:</label>
        <input placeholder="bilbo-baggins@adventurehobbits.net" />
      </div>
      <ErrorMessage message={emailErrorMessage} show={true} />

      {/* City Input */}
      <div className="input-wrap">
        <label>{"City"}:</label>
        <input placeholder="Hobbiton" />
      </div>
      <ErrorMessage message={cityErrorMessage} show={true} />

      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <input 
          type="text" 
          id="phone-input-1" 
          placeholder="55" 
          value={PhoneInputState[0]} 
          onChange={createOnChangeHandler(0)} 
          ref={ref0} 
          />
          -
          <input 
          type="text" 
          id="phone-input-2" 
          placeholder="55" 
          value={PhoneInputState[1]} 
          onChange={createOnChangeHandler(1)} 
          ref={ref1}
          />
          -
          <input 
          type="text" 
          id="phone-input-3" 
          placeholder="55" 
          value={PhoneInputState[2]} 
          onChange={createOnChangeHandler(2)} 
          ref={ref2}
          />
          -
          <input 
          type="text" 
          id="phone-input-4" 
          placeholder="5" 
          value={PhoneInputState[3]} 
          onChange={createOnChangeHandler(3)} 
          ref={ref3}
          />
        </div>
      </div>

      <ErrorMessage message={phoneNumberErrorMessage} show={true} />

      <input type="submit" value="Submit" />
    </form>
  );
};
