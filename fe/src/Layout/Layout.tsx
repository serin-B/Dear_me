import Header from "./Header";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
