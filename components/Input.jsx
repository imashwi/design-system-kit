export default function Input({ placeholder = "Enter text" }) {
  return (
    <input
      className="px-3 py-2 border rounded-lg w-full"
      placeholder={placeholder}
    />
  );
}
