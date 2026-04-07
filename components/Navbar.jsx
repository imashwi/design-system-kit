export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 border-b">
      <h1 className="font-bold">Logo</h1>
      <div className="space-x-4">
        <span>Home</span>
        <span>About</span>
      </div>
    </nav>
  );
}
