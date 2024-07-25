import { FormValues as LoginFormValues } from '@/types/auth/login'
import { FormValues as SignupFormValues } from '@/types/auth/signup'

const EMAIL_REGEX =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/

const PASSWORD_MIN_LENGTH = 8
const NAME_MIN_LENGTH = 2

export function validateRegex(value: string, regex: RegExp) {
  return regex.test(value)
}

export function validateStringMinLength(value: string, minLength: number) {
  return value.length >= minLength
}

export function validateLoginForm(formValues: LoginFormValues) {
  let errors: Partial<LoginFormValues> = {}

  if (!validateRegex(formValues.email, EMAIL_REGEX)) {
    errors.email = '이메일 형식을 확인해주세요'
  }
  if (!validateStringMinLength(formValues.password, PASSWORD_MIN_LENGTH)) {
    errors.password = `비밀번호를 ${PASSWORD_MIN_LENGTH}글자 이상 입력해주세요`
  }

  return errors
}

export function validateSignupForm(formValues: SignupFormValues) {
  let errors: Partial<SignupFormValues> = {}

  if (!validateRegex(formValues.email, EMAIL_REGEX)) {
    errors.email = '이메일 형식을 확인해주세요'
  }
  if (!validateStringMinLength(formValues.password, PASSWORD_MIN_LENGTH)) {
    errors.password = `비밀번호를 ${PASSWORD_MIN_LENGTH}글자 이상 입력해주세요`
  }

  if (
    !validateStringMinLength(formValues.passwordConfirm, PASSWORD_MIN_LENGTH)
  ) {
    errors.passwordConfirm = `비밀번호를 ${PASSWORD_MIN_LENGTH}글자 이상 입력해주세요`
  } else if (formValues.password !== formValues.passwordConfirm) {
    errors.passwordConfirm = '비밀번호가 일치하지 않습니다'
  }

  if (!validateStringMinLength(formValues.name, NAME_MIN_LENGTH)) {
    errors.name = `이름을 ${NAME_MIN_LENGTH}글자 이상 입력해주세요`
  }

  return errors
}
