import {
  getAuth,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithPopup,
} from '@firebase/auth';
import { useHistory } from 'react-router';
import * as S from './styles';

const SignIn = ({ onSignIn }) => {
  const history = useHistory([]);

  function signInAsGuest() {
    const auth = getAuth();
    signInAnonymously(auth).then(() => {
      localStorage.setItem('didAuth', 'true');
      history.push('/imdb-clone', { isSignedIn: true });
      onSignIn();
    });
  }

  async function signInGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider)
      .then(() => {
        history.push('/imdb-clone', { isSignedIn: true });
        onSignIn();
      })
      .catch((error) => console.error(error));
  }

  return (
    <S.Wrapper>
      <S.Form>
        <S.Legend>Sign in</S.Legend>
        <S.SignInBtn
          type="button"
          variant="text"
          value="Sign in using Google"
          onClick={signInGoogle}
        />
        <S.SignInBtn
          type="button"
          variant="text"
          value="Sign in as Guest"
          onClick={signInAsGuest}
        />
      </S.Form>
    </S.Wrapper>
  );
};

export default SignIn;
