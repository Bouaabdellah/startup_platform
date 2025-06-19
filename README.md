# Startup Pitch Platform 🚀

A modern platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience.

<div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=react&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Sanity-black?style=for-the-badge&logoColor=white&logo=sanity&color=F03E2F" alt="sanity" />

  </div>

## 🌐 Live Demo
**[View Live Application](https://startup-platform-t8ap.vercel.app/)**

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🔐 **GitHub Authentication**
Seamless user authentication using GitHub accounts through NextAuth.js library for secure and easy login.

### 📝 **Pitch Submission**
Users can submit comprehensive startup ideas including:
- Startup title and description
- Category selection
- Multimedia links (images or videos)
- Rich content formatting

### 🔍 **Browse & Discover**
- View all submitted pitches with clean card layouts
- Filter pitches by category for targeted browsing
- Efficient loading and pagination

### 📊 **Detailed Pitch View**
- Dedicated page for each pitch with full details
- Multimedia content display (images/videos)
- Complete startup description and information

### 👤 **User Profiles**
Personal dashboard where users can:
- View all their submitted pitches
- Track pitch performance
- Manage their startup portfolio

### 📈 **Analytics & Engagement**
- View counter for each pitch (no upvote system for simplicity)
- Track pitch popularity and engagement
- Performance insights

### 🔎 **Advanced Search**
Comprehensive search functionality to find pitches by:
- Startup title
- Author name
- Category
- Keywords in description

### 🎨 **Minimalistic Design**
- Clean and modern UI/UX
- Essential pages only for optimal user experience
- Responsive design for all devices
- Intuitive navigation

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Frontend library for building user interfaces |
| **Next.js 15** | Full-stack React framework with SSR/SSG |
| **Sanity** | Headless CMS for content management |
| **TailwindCSS** | Utility-first CSS framework for styling |
| **ShadCN** | Re-usable component library |
| **TypeScript** | Type-safe JavaScript for better development |
| **NextAuth.js** | Authentication library for Next.js |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account for authentication
- Sanity account for CMS

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bouaabdellah/startup_platform.git
   cd startup_platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add the following:

   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_dataset_name
   NEXT_PUBLIC_SANITY_API_VERSION=vX
   SANITY_TOKEN=your_sanity_token

   # Authentication
   AUTH_SECRET=your_auth_secret
   AUTH_GITHUB_ID=your_github_oauth_id
   AUTH_GITHUB_SECRET=your_github_oauth_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to see the application running.

## 🔧 Environment Variables

### Sanity Setup
1. Sign up at [Sanity.io](https://www.sanity.io/)
2. Create a new project
3. Get your project ID, dataset name, and API version
4. Generate a token with appropriate permissions

### GitHub OAuth Setup
1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Create a new OAuth App
3. Set Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and Client Secret

### Authentication Secret
Generate a random string for `AUTH_SECRET`:
```bash
openssl rand -base64 32
```


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Built with guidance from **JS Mastery** - thanks for the excellent tutorials and learning resources

---

**Built with ❤️ by [Bouaabdellah](https://github.com/Bouaabdellah)**

*If you found this project helpful, please consider giving it a ⭐ on GitHub!*
