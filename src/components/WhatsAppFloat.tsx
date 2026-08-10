import { whatsappLink } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(
        "Namaste Divine Taxi, I want to book a cab. Please share details.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:right-6 sm:bottom-6 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M19.11 17.44c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.46h-.53c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.3s.99 2.67 1.13 2.85c.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z" />
        <path d="M16.02 3C9.39 3 4 8.37 4 14.98c0 2.1.55 4.15 1.6 5.96L4 29l8.24-1.55c1.74.95 3.7 1.45 5.7 1.45h.01c6.63 0 12.02-5.37 12.02-11.98C29.97 8.37 24.65 3 16.02 3zm0 21.9h-.01c-1.79 0-3.54-.48-5.07-1.39l-.36-.21-4.89.92.93-4.76-.24-.38a9.86 9.86 0 0 1-1.51-5.22c0-5.46 4.46-9.9 9.95-9.9 2.66 0 5.16 1.03 7.04 2.91a9.83 9.83 0 0 1 2.91 7c0 5.46-4.46 9.9-9.95 9.9z" />
      </svg>
    </a>
  );
}
