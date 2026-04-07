export default function Button({ label = "Click Me" }) {
  return (
    <button className="px-4 py-2 bg-black text-white rounded-lg">
      {label}
    </button>
  );
}
