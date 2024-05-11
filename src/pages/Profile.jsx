import Header from "../components/Header";
import useFetch from "../services/useFetch";
// import useData from "../services/useFormatData"
import Activity from "../components/Activity";
import AverageSessions from "../components/AverageSessions";
import Performance from "../components/Performance";
import TodayScore from "../components/TodayScore";
import { useParams } from "react-router-dom";
import CountCard from "../components/CountCard";
import caloriesIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";

const Profile = () => {
  const { id } = useParams();
  const {
    loading,
    error,
    userData,
    userPerformance,
    userAverageSessions,
    userActivity,
  } = useFetch(id);

  return (
    <div className="px-20 py-10 w-full flex flex-col">
      {loading && <div>Chargement...</div>}
      {error && <div>Une erreur est survenue : {error}</div>}
      {userData && (
        <>
          <Header name={userData.userInfos.firstName} />
          <div className="grid grid-cols-[3fr_1fr] gap-4 mt-auto">
            <div>
              <div>
                <Activity data={userActivity.sessions} />
              </div>
              <div className="flex items-center gap-4">
                <AverageSessions data={userAverageSessions.sessions} />

                <Performance data={userPerformance.data} />
                <TodayScore data={userData} />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <CountCard
                title="Calories"
                count={userData.keyData.calorieCount}
                icon={caloriesIcon}
              />
              <CountCard
                title="Proteines"
                count={userData.keyData.proteinCount}
                icon={proteinIcon}
              />
              <CountCard
                title="Glucides"
                count={userData.keyData.carbohydrateCount}
                icon={carbsIcon}
              />
              <CountCard
                title="Lipides"
                count={userData.keyData.lipidCount}
                icon={fatIcon}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
