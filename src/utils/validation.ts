import { FormValues } from '@/types/signin'

export function validateEmail(email: string) {
  const emailValidRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/

  return emailValidRegex.test(email)
}

export function validatePassword(password: string) {
  return password.length >= 8
}

export function validateLoginForm(formValues: FormValues) {
  let errors: Partial<FormValues> = {}

  if (!validateEmail(formValues.email)) {
    errors.email = '이메일 형식을 확인해주세요'
  }
  if (!validatePassword(formValues.password)) {
    errors.password = '비밀번호를 8글자 이상 입력해주세요'
  }

  return errors
}
