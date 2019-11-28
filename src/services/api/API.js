import {APIConstants} from "../shared/constants"

const BILLS_URL = `${APIConstants.base}bills`;

export const getBills = () => fetch(BILLS_URL).then(res => res.json());

export default {
  getBills
};