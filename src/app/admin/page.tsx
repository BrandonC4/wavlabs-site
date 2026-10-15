import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

// The old Wav Messenger backend is gone — /live is the ops dashboard now.
export default function AdminPage() {
  redirect("/live");
}
