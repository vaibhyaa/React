const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function reducerFunCustomer(
  state = initialStateCustomer,
  action
) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        // this equals to FullNme
        nationalId: action.payload.nationalId,
        // this equals to NationalId
        createdAt: action.payload.createdAt,
        // createdAt: new Date().toISOString(),
      };

    case "customer/updateName":
      return {
        ...state,
        // fullName: action.payload.fullName,
        fullName: action.payload,

        // this equals to FullNme
        // nationalId: action.payload.nationalId,
        // // this equals to NationalId
        // createdAt: new Date().toISOString(),
      };

    default:
      return state;
  }
}

export function createCustomer(FullName, NationalId) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName: FullName,
      nationalId: NationalId,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateCustomerName(FullName) {
  return {
    type: "customer/updateName",
    payload: FullName, // string only
  };
  // return {
  //   type: "customer/updateName",
  //   payload: { FullName },
  // };
}
