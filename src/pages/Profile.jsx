import Header from "../components/Header";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";
import Activity from "../components/Activity";

const Profile =  () => {
  const { id } = useParams();
  const { userData, userPerformance, userAverageSessions, userActivity } =
   useFetch(id);

  return (
    <div className="p-20 w-full flex flex-col justify-around">
      {userData && <Header name={userData.userInfos.firstName} />}
      <div className="grid grid-cols-[3fr_1fr] gap-4">
        <div>
            <div>
              {userActivity&& <Activity data={userActivity.sessions} />}
            </div>
          <div>charts</div>
        </div>
        <div>count cards</div>
      </div>
    </div>
  );
};

export default Profile;
