import { FormValues } from '@/types/auth/signup'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { INVALIDATION_MESSAGES, VALIDATION_RULES } from '@/constants/validation'

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: 'onChange' })

  const onSubmit = (formValues: FormValues) => {
    //   @TODO: 로그인 처리
    console.log('로그인', formValues)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>회원가입</h1>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            pattern: {
              value: VALIDATION_RULES.email.pattern,
              message: INVALIDATION_MESSAGES.email.pattern,
            },
            required: true,
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          {...register('password', {
            minLength: {
              value: VALIDATION_RULES.password.minLength,
              message: INVALIDATION_MESSAGES.password.minLength,
            },
            required: true,
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          type="password"
          id="passwordConfirm"
          {...register('passwordConfirm', {
            minLength: {
              value: VALIDATION_RULES.password.minLength,
              message: INVALIDATION_MESSAGES.password.minLength,
            },
            validate: (value) => {
              return (
                value === getValues('password') ||
                INVALIDATION_MESSAGES.passwordConfirm.match
              )
            },
            required: true,
          })}
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
      </div>
      <div>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          {...register('name', {
            minLength: {
              value: VALIDATION_RULES.name.minLength,
              message: INVALIDATION_MESSAGES.name.minLength,
            },
            required: true,
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <button type="submit" disabled={isValid === false}>
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
