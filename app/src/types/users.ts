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
  created_at: Date;
  updated_at: Date;
}

export interface EditedData {
  handle_name: string;
  role: string;
  profile: string;
}