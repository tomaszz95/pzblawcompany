'use client'

import useSubmitForm from '../../hooks/useSubmitForm'
import useInput from '../../hooks/useInput'

import Input from './contactFormUI/Input'
import TextArea from './contactFormUI/TextArea'
import Modal from './contactFormUI/Modal'

import styles from './ContactForm.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactForm = () => {
    const {
        value: enteredFirstName,
        hasError: firstNameInputHasError,
        valueIsValid: firstNameIsValid,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput((value) => value.trim() !== '')

    const {
        value: enteredSurname,
        hasError: surnameInputHasError,
        valueIsValid: surnameIsValid,
        valueChangeHandler: surnameChangeHandler,
        inputBlurHandler: surnameBlurHandler,
        reset: resetSurname,
    } = useInput((value) => value.trim() !== '')

    const {
        value: enteredEmail,
        hasError: emailHasError,
        valueIsValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput((value) => emailRegex.test(value))

    const {
        value: enteredMessage,
        hasError: messageInputHasError,
        valueIsValid: messageIsValid,
        valueChangeHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetMessage,
    } = useInput((value) => value.trim() !== '' && value.trim().length > 10)

    const formIsValid = emailIsValid && firstNameIsValid && surnameIsValid && messageIsValid

    const validateForm = () => formIsValid

    const resetForm = () => {
        resetEmail()
        resetFirstName()
        resetSurname()
        resetMessage()
    }

    const { serverError, isModalVisible, isSubmitting, firstLoading, submitHandler, setIsModalVisible } = useSubmitForm(
        {
            validateForm,
            resetForm,
            errorMessage: 'Please fill out all required fields correctly.',
        },
    )

    return (
        <form className={styles.contactForm} onSubmit={submitHandler}>
            <Input
                label="Name"
                id="firstName"
                value={enteredFirstName}
                hasError={firstNameInputHasError}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                errorText="Please provide a name."
                type="string"
            />
            <Input
                label="Surname"
                id="surname"
                value={enteredSurname}
                hasError={surnameInputHasError}
                onChange={surnameChangeHandler}
                onBlur={surnameBlurHandler}
                errorText="Please provide a surname."
                type="string"
            />
            <Input
                label="Email"
                id="email"
                value={enteredEmail}
                hasError={emailHasError}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                errorText="Please provide a valid email."
                type="email"
            />
            <TextArea
                label="Your message"
                id="message"
                value={enteredMessage}
                hasError={messageInputHasError}
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
                errorText="The message must be at least 10 characters long."
            />

            <span className={styles.messageLength}>{enteredMessage.length}/1000</span>

            <button type="submit" disabled={!formIsValid && !isSubmitting} className={styles.submitBtn}>
                Send message
            </button>

            {!firstLoading && isModalVisible && (
                <Modal isVisible={isModalVisible} onAnimationEnd={() => setIsModalVisible(false)}>
                    {serverError ? serverError : `You&apos;ve successfully sent a message!`}
                </Modal>
            )}
        </form>
    )
}

export default ContactForm
