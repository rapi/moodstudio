# Mood Studio (mood1) - Project Overview

Mood Studio is a portfolio website for a design studio, built using Next.js 15. It features a project showcase integrated with Behance and a contact form with Telegram Bot notifications.

## Tech Stack
- **Framework:** Next.js 15 (Pages Router)
- **Language:** TypeScript
- **UI Components:** Ant Design (`antd`), React Bootstrap
- **Styling:** CSS Modules, Vanilla CSS
- **Notifications:** Telegram Bot API (`node-telegram-bot-api`)
- **Data Fetching:** GraphQL (scraping Behance data)
- **Form Handling:** `formidable` for file uploads

## Key Features
- **Behance Integration:** Scrapes project data directly from Behance using GraphQL queries defined in `graphql/`.
- **Telegram Contact Form:** Submissions from the contact form are sent to a Telegram chat via a bot, including support for file attachments.
- **Dynamic Portfolio:** Projects are categorized and displayed with hover effects and detailed views. Categorization is implemented by passing a `filter` prop to the `Projects` component in category pages (e.g., `commercial-interior.tsx`).

## Project Structure
- `pages/`: Contains application routes (Pages Router).
  - `api/`: API routes for contact form handling and Behance data scraping.
  - `project/[id].tsx`: Dynamic route for project details.
- `src/components/`: Reusable UI components (Card, Header, Footer, Menu, etc.).
- `src/Pages/`: Higher-level page layouts and components.
- `graphql/`: GraphQL query files for Behance integration.
- `public/`: Static assets (images, logos, etc.).

## Development

### Environment Variables
The following environment variables are required for full functionality:
- `TELEGRAM_BOT_TOKEN`: The API token for your Telegram bot.
- `TELEGRAM_CHAT_ID`: The chat ID where notifications should be sent.

### Building and Running
- **Install dependencies:** `npm install` or `yarn install`
- **Development mode:** `npm run dev`
- **Build for production:** `npm run build`
- **Start production server:** `npm run start`
- **Linting:** `npm run lint`

## Development Conventions
- **Routing:** Uses the Next.js Pages router. New pages should be added to the `pages/` directory.
- **Styling:** Prefer CSS Modules (`*.module.css`) for component-specific styles.
- **Types:** Use TypeScript for all new components and logic. Ensure types are exported when used across files.
- **API Routes:** API routes are located in `pages/api/`. Handle errors gracefully and use appropriate HTTP methods.
- **Telegram Bot:** The `pages/api/contact.ts` handles form submissions. It uses `formidable` to parse multipart/form-data.

## Integration Details
### Behance Scraping
The project scrapes Behance projects by making GraphQL requests to `https://www.behance.net/v3/graphql`. The `scrapeProjects` function in `pages/api/behance/projects.ts` uses the `behanceList.graphql` query.

### Contact Form
The contact form in `src/components/Community/ContactForm.tsx` (inferred) sends data to `/api/contact`. The backend uses `node-telegram-bot-api` to send messages and documents to a specified chat.
