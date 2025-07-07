import { IUserDto } from "./user.dto";

export interface IAuthContextDto {
  user: IUserDto | null;
  login: (user: IUserDto) => void;
  logout: () => void;
  isInitialized: boolean;
}
