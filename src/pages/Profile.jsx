import Header from "../components/Header";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";

const Profile = () => {
  const { id } = useParams();
  const { userData, userPerformance, userAverageSessions, userActivity } =
    useFetch(id);

  return (
    <div>
      {userData && <Header name={userData.userInfos.firstName} />}
      <div>{id}</div>
    </div>
  );
};

export default Profile;
