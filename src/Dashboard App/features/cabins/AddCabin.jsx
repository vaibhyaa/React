import React, { useState } from "react";
import SingleButton from "../../ui/Button";
import CreateCabinForm from "./CreateCabinFormCopy";
import Modal from "../../ui/Modal";

const AddCabin = () => {
  const [isOpenModel, setisOpenModel] = useState(false);
  return (
    <>
      <SingleButton onClick={() => setisOpenModel((prevState) => !prevState)}>
        Add new Cabin
      </SingleButton>
      {/* {isOpenModel && <CreateCabinForm />} */}
      {isOpenModel && (
        <Modal onClose={() => setisOpenModel(false)}>
          <CreateCabinForm onCloseModel={() => setisOpenModel(false)}/>
        </Modal>
      )}
    </>
  );
};

export default AddCabin;
