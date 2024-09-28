import CustomTable from "./custom/CustomTable";
import TaskColumns from "./TaskColumns";

const ListTaskCard = ({ tasks }) => {
  return (
    <>
      <CustomTable data={tasks} columns={TaskColumns} />
    </>
  );
};

export default ListTaskCard;
