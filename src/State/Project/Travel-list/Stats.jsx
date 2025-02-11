/* eslint-disable react/prop-types */

const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <>
        <p className="stats"><em>Start adding some items to your packing list ...!</em></p>
      </>
    );
  }

  //perfect example for derived state
  const numOfItems = items.length;
  // const numOfItemsPacked=items.filter((eachItem)=>(eachItem.packed).length)
  const numOfItemsPacked = items.filter((eachItem) => eachItem.packed).length;

  return (
    <>
      <footer className="stats">
        <em>
          Youe have {numOfItems} items on your list , and you packed{" "}
          {numOfItemsPacked} items and left with {numOfItems-numOfItemsPacked} item to pack...!
        </em>
      </footer>
    </>
  );
};

export default Stats;
