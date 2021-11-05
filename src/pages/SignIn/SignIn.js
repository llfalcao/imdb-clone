import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { useHistory } from 'react-router';
import { signInAsGuest } from '../../firebase';
import * as S from './styles';

const SignIn = ({ handleSignIn, onSignIn }) => {
  const history = useHistory([]);

  function signInGuest() {
    signInAsGuest();
    localStorage.setItem('didAuth', 'true');
    history.push('/imdb-clone', { isSignedIn: true });
    onSignIn();
  }

  async function signInGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider)
      .then(() => onSignIn())
      .catch((error) => console.error(error));
  }

  return (
    <S.Wrapper>
      <S.Form>
        <S.Legend>Sign in</S.Legend>
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
      </S.Form>
    </S.Wrapper>
  );
};

export default SignIn;
