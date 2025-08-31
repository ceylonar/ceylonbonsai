import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Mail, Phone, MapPin, Building, UserCircle, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'ceylonbonsaimuseum@gmail.com', href: 'mailto:ceylonbonsaimuseum@gmail.com' },
  { icon: Phone, label: 'Phone', value: '0719005632', href: 'tel:0719005632' },
  { icon: MapPin, label: 'Address', value: '2-k kuda wewa , dalukaana' },
];

const businessDetails = [
  { icon: Building, label: 'Registration Number', value: 'PV00326465' },
  { icon: UserCircle, label: 'Chairman', value: 'Duleepa Madhusanka Widyarathna' },
  { icon: Briefcase, label: 'Director', value: 'Dilan Lakshitha' },
]

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary mr-4 mt-1">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary mr-4 mt-1">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/ceylonbonsaimuseum' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/ceylonbonsaimuseum' },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-secondary py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline text-primary">Get In Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We welcome your questions, comments, and inquiries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-lg border-t-4 border-primary">
              <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start">
                    <item.icon className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="shadow-lg border-t-4 border-primary">
              <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">Business Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {businessDetails.map((item) => (
                  <div key={item.label} className="flex items-start">
                    <item.icon className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="max-w-6xl mx-auto mt-12">
            <Card className="shadow-lg border-t-4 border-primary">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl text-primary text-center">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center space-x-8">
                  {socialLinks.map((social) => (
                    <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <social.icon />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  ))}
                </CardContent>
              </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
