export interface PostUser {
  name: string;
  handle_name: string;
  role: string;
  password: string;
}

export interface PutUser extends PostUser {
  id: number;
  icon: string;
  profile: string;
}

export interface GetUsers extends PutUser {
  createdAt: Date;
  updatedAt: Date;
}