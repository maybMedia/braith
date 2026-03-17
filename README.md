# Braith Web Design

Marketing website for a local-business web design brand, built with Next.js, the App Router, Tailwind CSS v4, and Resend-powered contact emails.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript
- Lucide React
- Resend
- React Email

## Pages

- `/` home page with services, portfolio, process, and CTA sections
- `/services` full services page driven by shared data
- `/portfolio` project showcase page driven by shared data
- `/about` brand and personal background page
- `/contact` contact page with a server action and email delivery

## Project Structure

- `src/app` route files and server actions
- `src/components` reusable layout, form, and section components
- `src/data` shared content for services, projects, and process steps
- `src/emails` React Email templates used by the contact form flow
- `public/images` static images, logos, and portfolio assets

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful scripts:

```bash
npm run build
npm run start
npm run lint
npm run lint:fix
```

## Environment Variables

Create `.env.local` with:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

What they do:

- `RESEND_API_KEY`: API key used to send emails through Resend
- `CONTACT_TO_EMAIL`: inbox that receives new lead notifications
- `CONTACT_FROM_EMAIL`: verified sender address used for outgoing emails
- `NEXT_PUBLIC_SITE_URL`: public site URL used to build absolute links and email asset URLs

## Contact Form Flow

The contact form uses a server action at [src/app/contact/action.ts](/c:/Users/brait/Documents/Desktop/VSCode/braith/src/app/contact/action.ts).

When a user submits the form:

1. The form validates required fields.
2. A lead notification email is sent to `CONTACT_TO_EMAIL`.
3. An automatic reply email is sent back to the user.
4. React Email templates in `src/emails` render the email content and branding.

## Content Management

Most homepage and inner-page content is stored in shared data files:

- [src/data/services.ts](/c:/Users/brait/Documents/Desktop/VSCode/braith/src/data/services.ts)
- [src/data/projects.ts](/c:/Users/brait/Documents/Desktop/VSCode/braith/src/data/projects.ts)
- [src/data/steps.ts](/c:/Users/brait/Documents/Desktop/VSCode/braith/src/data/steps.ts)

Update these files to change the card content shown across the site.

## Notes

- Portfolio projects support per-project links, tags, and anonymisation flags.
- The contact form and emails assume your Resend sender domain is already verified.
- Email templates use absolute asset URLs, so `NEXT_PUBLIC_SITE_URL` should match your deployed domain.
