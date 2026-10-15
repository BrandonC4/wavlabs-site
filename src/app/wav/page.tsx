import { redirect } from "next/navigation";

// The Wav beta page is retired — wavlabs.dev now fronts l8r.
export default function WavPage() {
  redirect("/l8r");
}
