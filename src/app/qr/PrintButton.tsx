"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn surface min-h-14 justify-center text-white"
    >
      <Printer size={20} aria-hidden="true" />
      Imprimir
    </button>
  );
}
