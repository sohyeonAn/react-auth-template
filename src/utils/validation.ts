import { FormValues as LoginFormValues } from '@/types/auth/login'
import { FormValues as SignupFormValues } from '@/types/auth/signup'

export function validateEmail(email: string) {
  const emailValidRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/

  return emailValidRegex.test(email)
}

export function validatePassword(password: string) {
  return password.length >= 8
}

export function validateName(name: string) {
  return name.length >= 2
}

export function validateLoginForm(formValues: LoginFormValues) {
  let errors: Partial<LoginFormValues> = {}

  if (!validateEmail(formValues.email)) {
    errors.email = '이메일 형식을 확인해주세요'
  }
  if (!validatePassword(formValues.password)) {
    errors.password = '비밀번호를 8글자 이상 입력해주세요'
  }

  return errors
}

export function validateSignupForm(formValues: SignupFormValues) {
  let errors: Partial<SignupFormValues> = {}

  if (!validateEmail(formValues.email)) {
    errors.email = '이메일 형식을 확인해주세요'
  }
  if (!validatePassword(formValues.password)) {
    errors.password = '비밀번호를 8글자 이상 입력해주세요'
  }

  if (!validatePassword(formValues.passwordConfirm)) {
    errors.passwordConfirm = '비밀번호를 8글자 이상 입력해주세요'
  } else if (formValues.password !== formValues.passwordConfirm) {
    errors.passwordConfirm = '비밀번호가 일치하지 않습니다'
  }

  if (!validateName(formValues.name)) {
    errors.name = '이름을 2글자 이상 입력해주세요'
  }

  return errors
}
