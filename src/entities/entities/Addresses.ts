import { Column, Entity } from "typeorm";

@Entity("addresses", { schema: "globalgood" })
export class Addresses {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "street", length: 45 })
  street: string;

  @Column("varchar", { name: "neighborhood", length: 20 })
  neighborhood: string;

  @Column("char", { name: "state", length: 2 })
  state: string;

  @Column("varchar", { name: "cep", length: 8 })
  cep: string;

  @Column("varchar", { name: "city", length: 20 })
  city: string;

  @Column("varchar", { name: "number", length: 10 })
  number: string;
}
