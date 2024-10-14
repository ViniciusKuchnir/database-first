import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { UserTypes } from "./UserTypes";

@Index("IDX_97672ac88f789774dd47f7c8be", ["email"], { unique: true })
@Entity("users", { schema: "globalgood" })
export class Users {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", length: 60 })
  name: string;

  @Column("varchar", { name: "email", unique: true, length: 60 })
  email: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("datetime", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => UserTypes, (userTypes) => userTypes.users, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_type_id", referencedColumnName: "id" }])
  userType: UserTypes;
}
