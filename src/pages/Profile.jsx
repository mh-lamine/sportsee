import Header from "../components/Header";
import useData from "../services/useData";
import Activity from "../components/Activity";
import AverageSessions from "../components/AverageSessions";
import Performance from "../components/Performance";
import TodayScore from "../components/TodayScore";

const Profile = async () => {
  const { userData, userPerformance, userAverageSessions, userActivity } =
    await useData();

  return (
    <div className="px-20 py-10 w-full flex flex-col">
      <Header name={userData} />
      <div className="grid grid-cols-[3fr_1fr] gap-4 mt-auto">
        <div>
          <div>
            <Activity data={userActivity} />
          </div>
          <div className="flex items-center gap-4">
            <AverageSessions data={userAverageSessions} />
            <Performance data={userPerformance} />
            <TodayScore data={userData} />
          </div>
        </div>
        <div>count cards</div>
      </div>
    </div>
  );
};

export default Profile;
