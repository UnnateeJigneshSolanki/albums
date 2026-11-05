import { DEFAULT_CONTACT_FORM_FIELDS } from '@/lib/constants';
import EnquiryForm from '../forms/EnquiryForm';
import { FormFieldConfig } from '@/types/content';

interface ContactFormProps {
  title?: string;
  description?: string;
  fields?: FormFieldConfig[];
  submitButtonText?: string;
  verificationNote?: string;
}

export default function ContactForm({
  title = 'Send Us an Enquiry',
  description = 'Connect with Ultra Albums for quotes, album samples, or design consultation.',
  fields = DEFAULT_CONTACT_FORM_FIELDS,
  submitButtonText = 'Submit Enquiry',
}: ContactFormProps) {
  return (
    <EnquiryForm
      title={title}
      description={description}
      fields={fields}
      submitButtonText={submitButtonText}
    />
  );
}
