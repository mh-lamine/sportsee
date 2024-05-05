import Header from '../components/Header';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { id } = useParams();
  return (
    <div>
      <Header />
      <div>{id}</div>
    </div>
  );
}

export default Profile