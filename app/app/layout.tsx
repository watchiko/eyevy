import Header from "@/components/Header/Header";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-white flex flex-col">
        <div className="flex-1">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}
