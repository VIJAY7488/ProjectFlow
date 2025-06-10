import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50/50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg"></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ProjectFlow
              </span>
            </div>
            <p className="text-base text-muted-foreground mb-6 max-w-md">
              The all-in-one workspace for modern teams to collaborate, communicate, and create together.
            </p>
            <div className="flex gap-6">
              {/* Social Links with hover effects */}
              <Link to='/' className="text-muted-foreground hover:text-purple-600 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                {/* ...existing Twitter SVG... */}
              </Link>
              {/* ...other social links... */}
            </div>
          </div>

          {/* Footer Links Columns */}
          {['Product', 'Resources', 'Company'].map((title) => (
            <div key={title} className="space-y-4">
              <h3 className="text-base font-semibold tracking-wide uppercase">{title}</h3>
              <ul className="mt-4 space-y-3">
                {/* Customize links based on section */}
                {getLinksForSection(title).map((link) => (
                  <li key={link.text}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-purple-600 transition-colors duration-200 text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ProjectFlow. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Helper function to get links for each section
const getLinksForSection = (section: string) => {
  const links = {
    Product: [
      { text: 'Features', href: '/' },
      { text: 'Pricing', href: '/' },
      { text: 'Integrations', href: '/' },
      { text: 'Changelog', href: '/' },
    ],
    Resources: [
      { text: 'Documentation', href: '/' },
      { text: 'Guides', href: '/' },
      { text: 'Support', href: '/' },
      { text: 'API', href: '/' },
    ],
    Company: [
      { text: 'About', href: '/' },
      { text: 'Blog', href: '/' },
      { text: 'Careers', href: '/' },
      { text: 'Contact', href: '/' },
    ],
  };
  return links[section as keyof typeof links] || [];
};

export default Footer;