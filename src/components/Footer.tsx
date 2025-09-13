import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-12">
      <p>&copy; {new Date().getFullYear()} My React App - CDS. All rights reserved.</p>
    </footer>
  );
}
