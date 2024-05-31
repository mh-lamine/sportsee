import Header from "../components/Header";
import { useState, useEffect } from "react";
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
import formatData from "../service/formatData";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await formatData(id);
        setUserData(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="px-16 py-10 w-full flex flex-col">
      {loading && <div>Chargement...</div>}
      {error && <div>Une erreur est survenue : {error}</div>}

      {userData && (
        <>
          <Header name={userData.userData.name} />
          <div className="grid grid-cols-[3fr_1fr] gap-4 mt-auto">
            <div className="space-y-10">
              <div>
                <Activity data={userData.userActivity} />
              </div>
              <div className="flex items-center justify-between gap-4">
                <AverageSessions data={userData.userAverageSessions} />

                <Performance data={userData.userPerformance} />
                <TodayScore score={userData.userData.score} pieData={userData.userData.pieData} />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <CountCard
                title="Calories"
                count={userData.userData.calorieCount}
                icon={caloriesIcon}
              />
              <CountCard
                title="Proteines"
                count={userData.userData.proteinCount}
                icon={proteinIcon}
              />
              <CountCard
                title="Glucides"
                count={userData.userData.carbohydrateCount}
                icon={carbsIcon}
              />
              <CountCard
                title="Lipides"
                count={userData.userData.lipidCount}
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
