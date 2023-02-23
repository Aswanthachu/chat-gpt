import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex">
          {/* Sidebar */}

          {/* ClientProvider - Notification */}
          <div className="flex-1 bg-[#343541] text-white">{children}</div>
        </div>
      </body>
    </html>
  );
}
