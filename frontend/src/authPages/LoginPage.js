import AuthBox from '../shared/components/AuthBox'
import LoginPageHeader from './auth_Page_components/LoginPageHeader'
import LoginPageInputs from './auth_Page_components/LoginPageInputs'
const LoginPage = () => {
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs />
    </AuthBox>
  )
}

export default LoginPage
