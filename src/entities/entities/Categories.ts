import { Column, Entity, Index, OneToMany } from "typeorm";
import { Products } from "./Products";

@Index("IDX_8b0be371d28245da6e4f4b6187", ["name"], { unique: true })
@Entity("categories", { schema: "globalgood" })
export class Categories {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", unique: true, length: 30 })
  name: string;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("datetime", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Products, (products) => products.category)
  products: Products[];
}
