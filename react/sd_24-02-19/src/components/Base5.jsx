import Base4 from "./Base4";

export default function Base5({
  text1,
  text2,
  color = "red",
  obj: { objText1, objText2, objColor },
}) {
  return (
    <div style={{ color: objColor || color }}>
      <Base4 text1={objText1 || text1} text2={objText2 || text2} />
    </div>
  );
}

// Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.
