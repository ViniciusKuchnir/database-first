import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Categories } from "./Categories";

@Index("IDX_4c9fb58de893725258746385e1", ["name"], { unique: true })
@Entity("products", { schema: "globalgood" })
export class Products {
  @Column("varchar", { primary: true, name: "sku", length: 36 })
  sku: string;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("datetime", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @Column("varchar", { name: "name", unique: true, length: 30 })
  name: string;

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @Column("int", { name: "quantity" })
  quantity: number;

  @Column("decimal", { name: "unity_price", precision: 10, scale: 2 })
  unityPrice: string;

  @Column("tinyint", { name: "isActive", default: () => "'1'" })
  isActive: number;

  @ManyToOne(() => Categories, (categories) => categories.products, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category: Categories;
}
