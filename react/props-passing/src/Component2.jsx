export default function Component2({ cash, prizoLaimetoja }) {
  return (
    <div className="bg-orange">
      <h3>Component2</h3>
      <p>Prizo laimėtoja: {prizoLaimetoja}</p>
      <p>Cash: {cash}</p>
    </div>
  );
}
