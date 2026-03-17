import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type EmailLayoutProps = {
  preview: string;
  logoUrl?: string;
  children: React.ReactNode;
};

export default function EmailLayout({
  preview,
  children,
}: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={brandBar}>
            <Text style={brandName}>Braith Websites</Text>
            <Text style={brandTagline}>
              Modern websites for local businesses
            </Text>
          </Section>

          <Section style={card}>{children}</Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              Braith.Site
              <br />
              Fast, modern websites built to help local businesses look more
              professional and win more enquiries.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  margin: 0,
  padding: "32px 16px",
  backgroundColor: "#f8fafc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  maxWidth: "640px",
  margin: "0 auto",
};

const brandBar = {
  background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
  borderRadius: "20px 20px 0 0",
  padding: "28px 32px 20px",
};

const brandName = {
  margin: 0,
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

const brandTagline = {
  margin: "8px 0 0",
  color: "#cbd5e1",
  fontSize: "14px",
  lineHeight: "20px",
};

const card = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderTop: "none",
  borderRadius: "0 0 20px 20px",
  padding: "32px",
  boxShadow: "0 8px 30px rgba(15, 23, 42, 0.06)",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "24px 0",
};

const footer = {
  padding: "0 8px 8px",
};

const footerText = {
  margin: 0,
  color: "#64748b",
  fontSize: "13px",
  lineHeight: "20px",
};
