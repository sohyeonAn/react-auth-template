import { FormValues as LoginFormValues } from '@/types/auth/login'
import { FormValues as SignupFormValues } from '@/types/auth/signup'

export function validateRegex(value: string, regex: RegExp) {
  return regex.test(value)
}

export function validateStringMinLength(value: string, minLength: number) {
  return value.length >= minLength
}

export function validateLoginForm(formValues: LoginFormValues) {
  let errors: Partial<LoginFormValues> = {}

  if (
    !validateRegex(
      formValues.email,
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
    )
  ) {
    errors.email = '이메일 형식을 확인해주세요'
  }
  if (!validateStringMinLength(formValues.password, 8)) {
    errors.password = '비밀번호를 8글자 이상 입력해주세요'
  }

  return errors
}

export function validateSignupForm(formValues: SignupFormValues) {
  let errors: Partial<SignupFormValues> = {}

  if (
    !validateRegex(
      formValues.email,
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
    )
  ) {
    errors.email = '이메일 형식을 확인해주세요'
  }
  if (!validateStringMinLength(formValues.password, 8)) {
    errors.password = '비밀번호를 8글자 이상 입력해주세요'
  }

  if (!validateStringMinLength(formValues.passwordConfirm, 8)) {
    errors.passwordConfirm = '비밀번호를 8글자 이상 입력해주세요'
  } else if (formValues.password !== formValues.passwordConfirm) {
    errors.passwordConfirm = '비밀번호가 일치하지 않습니다'
  }

  if (!validateStringMinLength(formValues.name, 2)) {
    errors.name = '이름을 2글자 이상 입력해주세요'
  }

  return errors
}
