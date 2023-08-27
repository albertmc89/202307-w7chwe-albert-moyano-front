import NewRobotForm from "../../components/NewRobotForm/NewRobotForm";
import "./NewRobotPage.css";

const NewRobotPage = () => {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Robot creator</h2>
      </div>
      <NewRobotForm />
    </section>
  );
};

export default NewRobotPage;
