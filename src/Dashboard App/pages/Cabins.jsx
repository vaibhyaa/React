/* eslint-disable react/react-in-jsx-scope */
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";


// import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
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
        <AddCabin/>
        {/* <Button onClick={() => setshowForm((prevState) => !prevState)}>
          Add new Cabin
        </Button>
        {showForm && <CreateCabinForm />} */}
      </Row>
    </>
  );
}

export default Cabins;
