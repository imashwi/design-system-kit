export default function Modal({ title, children }) {
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="font-bold">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
