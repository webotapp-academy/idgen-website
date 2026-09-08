import { redirect } from "next/navigation";

export default function AdminSpecificationsPage() {
  redirect("/admin/pricing?section=specs");
}
