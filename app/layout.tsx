import QueryProvider from "@/shared/providers/query-provider";
import { AuthProvider } from "@/features/auth/contexts/auth.provider";
import ClientLayout from "@/shared/layouts/client-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <QueryProvider>
          <AuthProvider>
            <ClientLayout>{children}</ClientLayout>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
