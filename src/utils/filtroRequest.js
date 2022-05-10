import acima from "./acima-10-reais.json";
import abaixo from "./abaixo-10-reais.json";

//Filtro da request acima
const itensAcima = acima.items;
export const totalAcima = acima.totalizers[0];

export const filtroAcima = itensAcima.map((value) => ({
    key: value.id,
    name: value.name.toUpperCase(),
    price: value.price.toString().replace(/([0-9]{2})$/g, ",$1"),
    img: value.imageUrl,
}));

//Filtro da request abaixo
const itensAbaixo = abaixo.items;
export const totalAbaixo = abaixo.totalizers[0];

export const abaixoAbaixo = itensAbaixo.map((value) => ({
    key: value.id,
    name: value.name,
    price: value.price,
    img: value.imageUrl
}));
