import SideBar from "../components/SideBar";
import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import "../styles/globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={getServerSession}>
          <div className="flex">
            <SideBar />

            {/* ClientProvider - Notification */}
            <div className="flex-1 bg-[#343541] text-white">{children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
