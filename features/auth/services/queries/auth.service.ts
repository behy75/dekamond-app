import axios from "axios";
import { IUserDto } from "@/shared/models/dto/user.dto";

export const fetchRandomUser = async (): Promise<IUserDto> => {
  const res = await axios.get("https://randomuser.me/api/?results=1&nat=us");
  const data = res.data.results[0];
  return {
    name: `${data.name.first} ${data.name.last}`,
    email: data.email,
  };
};
