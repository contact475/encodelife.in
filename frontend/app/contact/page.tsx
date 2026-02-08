import ContactPageContent from "@/components/contact-page-content";
import { EncodeLifeHeader } from "@/components/encode-life-header";

export const metadata = {
  title: "Contact Us - Encode Life | Get in Touch",
  description: "Have questions about PLA bioplastics or interested in partnership opportunities? Get in touch with Encode Life - India's first industrial-scale PLA biopolymer plant.",
};

export default function ContactPage() {
  return (
    <>
      <EncodeLifeHeader />
      <ContactPageContent />
    </>
  );
}
