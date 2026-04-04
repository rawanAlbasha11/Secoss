import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { setUser } from './../store/slices/userSlice'
// import { loginUser } from '../../api/auth'
import Logo from './../../assets/logo1.png'

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

 /*  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const data = await loginUser(email, password)

      dispatch(setUser(data)) // بيانات المستخدم و التوكن

      if (rememberMe) {
        localStorage.setItem('token', data.token)
      }

      // بعد تسجيل الدخول يمكن إعادة التوجيه
      // navigate('/dashboard') أو حسب مشروعك

    } catch (err) {
      setError(err.response?.data?.message || 'حدث خطأ أثناء تسجيل الدخول')
    } finally {
      setLoading(false)
    }
  }
 */
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg space-y-6">
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" className="h-16 w-auto sm:h-20" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-accent text-center">تسجيل الدخول</h1>
        <p className="text-slate-600 text-center text-sm sm:text-base">أدخل بيانات حسابك للدخول إلى بوابة الأعضاء.</p>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form className="space-y-5" >  {/* onSubmit={handleLogin} */}
          <label className="block">
            <span className="text-sm font-medium text-slate-700">البريد الإلكتروني</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              placeholder="email@example.com"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">كلمة المرور</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              placeholder="********"
              required
            />
          </label>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              تذكرني
            </label>
            <a href="/forgot-password" className="text-accentSoft hover:underline text-sm sm:text-base">
              نسيت كلمة السر؟
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-accent px-5 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50"
          >
            {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Login