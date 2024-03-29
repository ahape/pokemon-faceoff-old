import { TypeName } from "./typename";

export interface IPokemon {
    // statModifier: number
    attack: number;
    defense: number;
    ev: number;
    hp: number;
    id: number;
    dv: number;
    level: number;
    name: string;
    special: number;
    speed: number;
    type: TypeName[];
}
