export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
    </>
  );
}
