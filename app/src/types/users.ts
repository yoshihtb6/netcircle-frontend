export interface PostUser {
  name: string;
  handle_name: string;
  role: string;
}

export interface PutUser extends PostUser {
  id: number;
  icon: string;
  profile: string;
  token: string;
}

export interface GetUsers extends PutUser {
  createdAt: Date;
  updatedAt: Date;
}