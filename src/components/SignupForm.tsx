import { ChangeEvent, useCallback, useMemo, useState } from 'react'

import { FormValues } from '@/types/signup'
import { validateSignupForm } from '@/utils/validation'
import { Link } from 'react-router-dom'

export default function SignupForm() {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // @TODO: 회원가입 처리
    console.log('회원가입', formValues)
  }

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  //  @TODO: 회원가입 폼 유효성 검사로 변경
  const errors = useMemo(() => validateSignupForm(formValues), [formValues])
  const canSubmit = Object.keys(errors).length === 0

  return (
    <form onSubmit={handleSubmit}>
      <h1>회원가입</h1>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={canSubmit === false}>
        회원가입
      </button>
      <div>
        <p>
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </p>
      </div>
    </form>
  )
}
