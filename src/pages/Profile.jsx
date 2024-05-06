import Header from "../components/Header";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";
import Activity from "../components/Activity";
import AverageSessions from "../components/AverageSessions";
import Performance from "../components/Performance";
import TodayScore from "../components/TodayScore";

const Profile = () => {
  const { id } = useParams();
  const { userData, userPerformance, userAverageSessions, userActivity } =
    useFetch(id);

  return (
    <div className="px-20 py-10 w-full flex flex-col">
      {userData && <Header name={userData.userInfos.firstName} />}
      <div className="grid grid-cols-[3fr_1fr] gap-4 mt-auto">
        <div>
          <div>{userActivity && <Activity data={userActivity.sessions} />}</div>
          <div className="flex items-center gap-4">
            {userAverageSessions && (
              <AverageSessions data={userAverageSessions.sessions} />
            )}
            {userPerformance && (
              <Performance data={userPerformance} />
            )}
            {userData && (
              <TodayScore data={userData.sessions} />
            )}
          </div>
        </div>
        <div>count cards</div>
      </div>
    </div>
  );
};

export default Profile;
