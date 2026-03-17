import {
  Button,
  Heading,
  Link,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import EmailLayout from "./components/EmailLayout";

type ClientAutoReplyEmailProps = {
  name: string;
  portfolioUrl: string;
  logoUrl?: string;
};

export default function ClientAutoReplyEmail({
  name,
  portfolioUrl,
  logoUrl,
}: ClientAutoReplyEmailProps) {
  return (
    <EmailLayout
      preview="Thanks for reaching out - I've received your enquiry."
      logoUrl={logoUrl}
    >
      <Heading style={heading}>Thanks for reaching out</Heading>

      <Text style={paragraph}>Hi {name},</Text>

      <Text style={paragraph}>
        I&apos;ve received your enquiry and I&apos;ll get back to you within 24 hours.
      </Text>

      <Text style={paragraph}>
        In the meantime, you can take a look at some of my work below.
      </Text>

      <Section style={buttonRow}>
        <Button href={portfolioUrl} style={button}>
          View Portfolio
        </Button>
      </Section>

      <Text style={paragraph}>
        If your request is urgent, contact <Link href="mailto:may.braith13@gmail.com" style={link}>
          may.braith13@gmail.com
        </Link>.
      </Text>

      <Text style={signoff}>
        - Braith
        <br />
        Braith Websites
      </Text>

      <Text style={smallPrint}>
        Prefer email instead? You can reply here or contact{" "}
        <Link href="mailto:may.braith13@gmail.com" style={link}>
          may.braith13@gmail.com
        </Link>
        .
      </Text>
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

const paragraph = {
  margin: "0 0 16px",
  color: "#334155",
  fontSize: "16px",
  lineHeight: "28px",
};

const buttonRow = {
  padding: "12px 0 24px",
};

const button = {
  backgroundColor: "#2563eb",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: 600,
  textDecoration: "none",
  borderRadius: "12px",
  padding: "14px 22px",
};

const signoff = {
  margin: "24px 0 0",
  color: "#0f172a",
  fontSize: "16px",
  lineHeight: "28px",
  fontWeight: 600,
};

const smallPrint = {
  margin: "24px 0 0",
  color: "#64748b",
  fontSize: "13px",
  lineHeight: "22px",
};

const link = {
  color: "#2563eb",
  textDecoration: "underline",
};
