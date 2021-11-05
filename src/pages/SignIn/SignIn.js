import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { useHistory } from 'react-router';
import { signInAsGuest } from '../../firebase';
import * as S from './styles';

const SignIn = (props) => {
  console.log(props);
  const history = useHistory([]);

  function signInGuest() {
    signInAsGuest();
    localStorage.setItem('didAuth', 'true');
    history.replace('/imdb-clone');
  }

  async function signInGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  return (
    <S.Wrapper>
      <S.Form>
        <S.Legend>Sign in</S.Legend>
        <S.Fieldset>
          <input id="email" type="email" placeholder="Email" />
          <input id="password" type="password" placeholder="Password" />
          <S.SignInBtn type="button" variant="text" value="Sign in" />
        </S.Fieldset>

        <S.AltSignIn>
          <hr />
          <S.SignInBtn
            type="button"
            variant="text"
            value="Sign in with Google"
            onClick={signInGoogle}
          />
          <S.SignInBtn
            type="button"
            variant="text"
            value="Sign in as Guest"
            onClick={signInGuest}
          />
        </S.AltSignIn>
      </S.Form>
    </S.Wrapper>
  );
};

export default SignIn;
