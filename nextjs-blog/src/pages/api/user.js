import { userDetail } from 'constants/userDetails';

export default function handler(req, res) {
  res.status(200).json(userDetail);
}
