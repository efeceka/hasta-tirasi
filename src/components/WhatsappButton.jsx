export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/905050620630"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[9999] right-5 bottom-5 md:right-8 md:bottom-8 w-14 h-14 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="WhatsApp ile iletişim"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-8 h-8 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.2 17.3c-.3-.2-.6-.3-.9 0l-.6.6c-.2.2-.5.2-.7 0-1-.5-1.8-1.3-2.3-2.3-.1-.2-.1-.5.1-.7l.5-.5c.3-.3.3-.6.2-.9l-.5-1.3c-.2-.6-.8-.9-1.4-.8-1.1.2-2 1.1-2.1 2.2-.2 1.7.6 3.6 2.3 5.3 1.6 1.6 3.5 2.5 5.1 2.3 1.2-.1 2.1-1 2.3-2.1.1-.6-.2-1.2-.8-1.4l-1.2-.5z" />
        <path d="M27.6 16c0 6.4-5.2 11.6-11.6 11.6-2 0-3.9-.5-5.6-1.5L5 27l.9-5.2c-1-1.7-1.5-3.6-1.5-5.6C4.4 9.8 9.6 4.6 16 4.6S27.6 9.8 27.6 16zm-2.3 0c0-5.1-4.2-9.3-9.3-9.3S6.7 10.9 6.7 16c0 1.8.5 3.4 1.4 4.8l.2.4-.5 2.9 3-.5.4.2c1.4.8 3 1.3 4.7 1.3 5.1-.1 9.4-4.2 9.4-9.3z" />
      </svg>
    </a>
  );
}