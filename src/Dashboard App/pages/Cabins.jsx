/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setshowForm] = useState(false);
  // useEffect(() => {
  //   getCabins().then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        {/* <p>TEST</p> */}
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
        <Button onClick={() => setshowForm((prevState) => !prevState)}>
          Add new Cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
