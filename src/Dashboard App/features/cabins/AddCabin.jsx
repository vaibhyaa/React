
import SingleButton from "../../ui/Button";
import CreateCabinForm from "./CreateCabinFormCopy";
import Modal from "../../ui/Modal";
// import CabinTable from "./CabinTable";

const AddCabin = () => {
  return (
    <div>

    <Modal>
      <Modal.Open opens="cabin-form">
        <SingleButton>Add New Cabin</SingleButton>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
    </div>
  );
};

// const AddCabin = () => {
//   const [isOpenModel, setisOpenModel] = useState(false);
//   return (
//     <>
//       <SingleButton onClick={() => setisOpenModel((prevState) => !prevState)}>
//         Add new Cabin
//       </SingleButton>
//       {/* {isOpenModel && <CreateCabinForm />} */}
//       {isOpenModel && (
//         <Modal onClose={() => setisOpenModel(false)}>
//           <CreateCabinForm onCloseModel={() => setisOpenModel(false)}/>
//         </Modal>
//       )}
//     </>
//   );
// };

export default AddCabin;
