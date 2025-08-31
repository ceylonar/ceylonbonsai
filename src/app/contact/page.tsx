import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Mail, Phone, MapPin, Building, UserCircle, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        </div>
      </main>
      <Footer />
    </div>
  );
}
