import { useState } from 'react'

import axios from 'axios'

type ComponentType<T> = {
    validateForm: () => boolean
    resetForm: () => void
    errorMessage: string
    onSubmit?: (formData: T) => Promise<void>
}

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL

const useSubmitForm = <T,>({ validateForm, resetForm, errorMessage }: ComponentType<T>) => {
    const [serverError, setServerError] = useState<string>('')
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [firstLoading, setFirstLoading] = useState<boolean>(true)

    const submitHandler = async (event: React.FormEvent, formData?: T) => {
        event.preventDefault()

        setIsSubmitting(true)
        setFirstLoading(false)
        setServerError('')

        if (!validateForm()) {
            setServerError(errorMessage)
            setIsSubmitting(false)
            return
        }
        try {
            const response = await axios.post(FORMSPREE_URL!, formData)

            if (response.status !== 200) {
                throw new Error('Something went wrong. Please try again later.')
            }

            setIsModalVisible(true)
            setIsSubmitting(false)
            resetForm()
        } catch (err: any) {
            const errorMessage = err.response?.data?.error || err.message || 'An unexpected error occurred'

            setServerError(errorMessage)
            setIsSubmitting(false)
            setIsModalVisible(true)
        }
    }

    return {
        serverError,
        isModalVisible,
        isSubmitting,
        firstLoading,
        submitHandler,
        setIsModalVisible,
    }
}

export default useSubmitForm
