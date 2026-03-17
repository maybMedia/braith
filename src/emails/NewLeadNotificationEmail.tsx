import { Heading, Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import EmailLayout from "./components/EmailLayout";

type NewLeadNotificationEmailProps = {
  name: string;
  business?: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  logoUrl?: string;
};

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <Text style={row}>
      <strong>{label}:</strong> {value}
    </Text>
  );
}

export default function NewLeadNotificationEmail({
  name,
  business,
  email,
  phone,
  service,
  message,
  logoUrl,
}: NewLeadNotificationEmailProps) {
  return (
    <EmailLayout
      preview={`New website enquiry from ${name}`}
      logoUrl={logoUrl}
    >
      <Heading style={heading}>New website enquiry</Heading>

      <Section style={infoCard}>
        <InfoRow label="Name" value={name} />
        <InfoRow label="Business" value={business || "N/A"} />
        <InfoRow label="Email" value={email} />
        <InfoRow label="Phone" value={phone || "N/A"} />
        <InfoRow label="Service" value={service || "N/A"} />
      </Section>

      <Hr style={hr} />

      <Text style={subheading}>Project details</Text>
      <Section style={messageBox}>
        <Text style={messageText}>{message}</Text>
      </Section>
    </EmailLayout>
  );
}

const heading = {
  margin: "0 0 20px",
  color: "#0f172a",
  fontSize: "30px",
  lineHeight: "36px",
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

const infoCard = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "18px 20px",
};

const row = {
  margin: "0 0 10px",
  color: "#334155",
  fontSize: "15px",
  lineHeight: "24px",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "24px 0",
};

const subheading = {
  margin: "0 0 12px",
  color: "#0f172a",
  fontSize: "18px",
  lineHeight: "26px",
  fontWeight: 700,
};

const messageBox = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "20px",
};

const messageText = {
  margin: 0,
  color: "#334155",
  fontSize: "15px",
  lineHeight: "28px",
  whiteSpace: "pre-wrap" as const,
};
