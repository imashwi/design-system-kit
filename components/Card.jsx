export default function Card({ title, description }) {
  return (
    <div className="p-4 border rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm opacity-70">{description}</p>
    </div>
  );
}
