import { FormValues } from '@/types/auth/login'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { INVALIDATION_MESSAGES, VALIDATION_RULES } from '@/constants/validation'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().regex(VALIDATION_RULES.email.pattern, {
    message: INVALIDATION_MESSAGES.email.pattern,
  }),
  password: z
    .string()
    .min(VALIDATION_RULES.password.minLength, {
      message: INVALIDATION_MESSAGES.password.minLength,
    }),
})

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = (formValues: FormValues) => {
    //   @TODO: 로그인 처리
    console.log('로그인', formValues)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>로그인</h1>
      <div>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" {...register('email')} />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" {...register('password')} />
      </div>
      <button type="submit" disabled={isValid === false}>
        로그인
      </button>
      <div>
        <p>
          아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </p>
      </div>
    </form>
  )
}
