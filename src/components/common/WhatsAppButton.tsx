interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  label?: string;
}

export default function WhatsAppButton({
  phoneNumber = '919322254315',
  message = 'Hello Ultraa Albums, I would like to inquire about your photo albums and services.',
  label = 'Chat on WhatsApp',
}: WhatsAppButtonProps) {
  const encodedMsg = encodeURIComponent(message);
  const href = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 border border-gray-400 bg-white px-4 py-2 rounded text-xs font-semibold text-gray-800 hover:bg-gray-50"
    >
      <span aria-hidden="true">💬</span>
      <span>{label}</span>
    </a>
  );
}
