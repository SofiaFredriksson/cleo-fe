import {APIConstants} from "../shared/constants"

const BILLS_URL = `${APIConstants.base}bills`;

export const getBills = () => fetch(BILLS_URL).then(res => res.json());

export const updateBill = (id, data) => {
  return fetch(`${BILLS_URL}/${id}`,{
      method: "PATCH",
      headers: {
  		"Content-Type" : "application/json"
      },
      body: JSON.stringify({
        isBill: data
      })
    })
    .then(resp  => resp.json())
  }


export default {
  getBills,
  updateBill
};