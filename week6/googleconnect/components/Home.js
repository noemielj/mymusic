import styles from '../styles/Home.module.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

function Home() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    const { credential } = credentialResponse;
    const decodedToken = jwtDecode(credential); // Décode le token JWT

    // Récupère le nom et l'email à partir du token décodé
    const { name, email } = decodedToken;

    // Met à jour l'état avec les informations de l'utilisateur
    setUser({ name, email });
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <h1>Welcome</h1>
        {/* Affiche le nom et l'email de l'utilisateur s'il est connecté */}
        {user && (
          <>
            <p>Welcome {user.name}</p>
            <p>Email: {user.email}</p>
          </>
        )}
        {!user && (
          <>
            <h2>Log in to your Google account to continue</h2>
            <div className={styles.divider}></div>
            {/* Bouton de connexion Google */}
            <GoogleOAuthProvider clientId="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">
              <GoogleLogin onSuccess={handleLoginSuccess} />
            </GoogleOAuthProvider>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
