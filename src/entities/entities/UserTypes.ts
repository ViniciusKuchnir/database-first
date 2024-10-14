import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("IDX_43a206b10365efbb4c3189a049", ["name"], { unique: true })
@Entity("user_types", { schema: "globalgood" })
export class UserTypes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 15 })
  name: string;

  @OneToMany(() => Users, (users) => users.userType)
  users: Users[];
}
