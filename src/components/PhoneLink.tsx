import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

type PhoneLinkProps = {
  className?: string;
  numberClassName?: string;
  prefix?: string;
};

/** Visible, crawlable business phone. Digits stay in the HTML for Google. */
export function PhoneLink({
  className = "",
  numberClassName = "",
  prefix,
}: PhoneLinkProps) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      itemProp="telephone"
      content={PHONE_TEL}
      className={className}
      aria-label={`Call Divine Taxi Ujjain at ${PHONE_DISPLAY}`}
    >
      {prefix ? <span>{prefix}</span> : null}
      <span className={numberClassName}>{PHONE_DISPLAY}</span>
    </a>
  );
}
