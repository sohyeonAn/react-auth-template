import { ChangeEvent, useCallback, useMemo, useState } from 'react'

import { FormValues } from '@/types/signin'
import { validateLoginForm } from '@/utils/validation'

export default function LoginForm() {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // @TODO: 로그인 처리
    console.log('로그인', formValues)
  }

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const errors = useMemo(() => validateLoginForm(formValues), [formValues])
  const canSubmit = Object.keys(errors).length === 0

  return (
    <form onSubmit={handleSubmit}>
      <h1>로그인</h1>
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
      <button type="submit" disabled={canSubmit === false}>
        로그인
      </button>
    </form>
  )
}
