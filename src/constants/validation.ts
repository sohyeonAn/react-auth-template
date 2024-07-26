export const VALIDATION_RULES = {
  email: {
    pattern:
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
  },
  password: {
    minLength: 8,
  },
  name: {
    minLength: 2,
  },
} as const

export const INVALIDATION_MESSAGES = {
  email: {
    pattern: '이메일 형식을 확인해주세요',
  },
  password: {
    minLength: `비밀번호를 ${VALIDATION_RULES.password.minLength}글자 이상 입력해주세요`,
  },
  passwordConfirm: {
    minLength: `비밀번호를 ${VALIDATION_RULES.password.minLength}글자 이상 입력해주세요`,
    match: '비밀번호가 일치하지 않습니다',
  },
  name: {
    minLength: `이름을 ${VALIDATION_RULES.name.minLength}글자 이상 입력해주세요`,
  },
}
