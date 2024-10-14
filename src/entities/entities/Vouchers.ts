import { Column, Entity, Index } from "typeorm";

@Index("IDX_efc30b2b9169e05e0e1e19d6dd", ["code"], { unique: true })
@Entity("vouchers", { schema: "globalgood" })
export class Vouchers {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "code", unique: true, length: 8 })
  code: string;

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @Column("decimal", { name: "value", precision: 10, scale: 2 })
  value: string;

  @Column("datetime", { name: "expiry_date", nullable: true })
  expiryDate: Date | null;

  @Column("int", { name: "max_use", nullable: true })
  maxUse: number | null;

  @Column("tinyint", { name: "active", default: () => "'0'" })
  active: number;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("datetime", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;
}
