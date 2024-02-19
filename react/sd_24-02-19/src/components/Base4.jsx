import Base2 from "./Base2";

export default function Base4({
  text1 = "Pirmasis default tekstas",
  text2 = "Antrasis default tekstas",
}) {
  return (
    <>
      <Base2 atributas1={text1} />
      <h2>{text2}</h2>
    </>
  );
}

// Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.
