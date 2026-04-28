import { motion } from 'motion/react';
import { Stethoscope, ClipboardList, Clock, ShieldCheck, Star, ArrowRight, User, Phone, Mail, MapPin, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-bottom border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
              <Stethoscope size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">VitaCare</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Reviews</a>
            <Dialog>
              <DialogTrigger render={<Button variant="default" size="sm" className="rounded-full px-6" />}>Book Appointment</DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Book an Appointment</DialogTitle>
                  <DialogDescription>
                    Fill in your details and we'll get back to you to confirm.
                  </DialogDescription>
                </DialogHeader>
                <BookingForm onSuccess={() => {}} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 py-1 px-4 rounded-full">
              Trusted Healthcare Provider
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6">
              Modern Care for Your <span className="text-primary italic">Well-being.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Dr. Julian Thorne provides specialized orthopedic care with a focus on minimally invasive techniques and rapid recovery programs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2">
                Get Started <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold">10k+</p>
                <p className="text-sm text-muted-foreground">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-muted-foreground">Recovery Rate</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&h=900" 
                alt="Modern Clinic" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-2xl shadow-xl border border-border max-w-[200px] hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider">Certified Specialist</span>
              </div>
              <p className="text-[10px] text-muted-foreground leading-tight">Board certified by the American Board of Orthopedic Surgery</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Joint Replacement",
      desc: "Advanced knee and hip replacement surgery using robotic assistance.",
      icon: <Stethoscope size={24} />,
      color: "blue"
    },
    {
      title: "Sports Medicine",
      desc: "Treatment for ligament tears, fractures, and performance injuries.",
      icon: <Star size={24} />,
      color: "green"
    },
    {
      title: "Physical Therapy",
      desc: "Personalized rehabilitation programs for post-op and chronic pain.",
      icon: <Clock size={24} />,
      color: "purple"
    },
    {
      title: "Spine Care",
      desc: "Comprehensive diagnosis and minimally invasive spine procedures.",
      icon: <ShieldCheck size={24} />,
      color: "orange"
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Specialized Medical Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Providing comprehensive care across a range of orthopedic specialties using the latest medical technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpecialistSpotlight = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-border/40 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1">Featured Specialist</Badge>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Dr. Yasmin's Pediatrics Portal</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Dedicated to providing specialized care for our youngest patients. Dr. Yasmin Malik combines clinical excellence with a nurturing environment to ensure your child's health and development are in expert hands.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-border/20">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Star size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Top Rated</h4>
                    <p className="text-xs text-muted-foreground">5-Star Pediatric Care</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-border/20">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">24/7 Support</h4>
                    <p className="text-xs text-muted-foreground">For Registered Patients</p>
                  </div>
                </div>
              </div>

              <Dialog>
                <DialogTrigger render={<Button size="lg" className="rounded-full px-8 gap-2" />}>
                  Enter Dr. Yasmin's Portal <ArrowRight size={18} />
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-background border-none p-0 overflow-hidden rounded-3xl shadow-2xl">
                  <div className="grid lg:grid-cols-2">
                    <div className="hidden lg:block bg-muted">
                      <img 
                        src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=600" 
                        alt="Dr. Yasmin Malik" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-8 space-y-6">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">Dr. Yasmin Malik</DialogTitle>
                        <DialogDescription className="text-primary font-medium italic">Senior Pediatrician & Consultant</DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Qualifications</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-3 text-sm">
                            <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">1</Badge>
                            MD, Stanford University
                          </li>
                          <li className="flex items-center gap-3 text-sm">
                            <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">2</Badge>
                            Board Certified Pediatrics
                          </li>
                          <li className="flex items-center gap-3 text-sm">
                            <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">3</Badge>
                            12+ Yrs Experience
                          </li>
                        </ul>
                      </div>

                      <div className="pt-4 space-y-3">
                        <Button className="w-full rounded-xl py-6">Message Specialist</Button>
                        <Button variant="outline" className="w-full rounded-xl py-6">Download Health Guide</Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg transform rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                  alt="Pediatric Care Room" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 aspect-square w-32 rounded-2xl overflow-hidden border-4 border-background shadow-xl -rotate-6">
                <img 
                   src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=300" 
                   alt="Dr. Yasmin Malik Mini" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MeetOurSpecialists = () => {
  const doctors = [
    {
      name: "Dr. Julian Thorne",
      role: "Clinic Director & Orthopedic Surgeon",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=800",
      bio: "Dr. Thorne has dedicated over 15 years to restoring mobility and improving the quality of life for his patients. Graduating from Johns Hopkins School of Medicine, he pioneered several techniques in arthroscopic surgery.",
      qualifications: [
        "Fellowship trained in Sports Medicine",
        "Recipient of the National Healthcare Excellence Award",
        "Author of 40+ Peer-Reviewed Medical Publications",
        "Consultant for Professional Athlete Associations"
      ]
    },
    {
      name: "Dr. Yasmin Malik",
      role: "Senior Consultant & Pediatric Specialist",
      image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800&h=800",
      bio: "Dr. Yasmin brings a compassionate approach to pediatric care, focusing on early childhood development and neonatal health. She is renowned for her gentle manner and evidence-based clinical practices.",
      qualifications: [
        "MD, Pediatrics from Stanford University",
        "Specialty in Neonatal Care & Childhood Development",
        "12+ years of clinical experience",
        "Board Certified by the American Board of Pediatrics"
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Meet Our Distinguished Specialists</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team consists of world-class medical professionals dedicated to providing exceptional care tailored to your specific needs.
          </p>
        </div>

        <div className="space-y-32">
          {doctors.map((doc, index) => (
            <div key={index} className={cn(
              "grid lg:grid-cols-2 gap-16 items-center",
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            )}>
              <div className={cn(
                "relative",
                index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
              )}>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-0"></div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl z-20">
                  <p className="text-sm font-medium uppercase tracking-wider mb-1">Specialist</p>
                  <p className="text-xl font-bold">{doc.name}</p>
                </div>
              </div>
              
              <div className={cn(
                index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
              )}>
                <Badge className="mb-4">{doc.role}</Badge>
                <h3 className="text-3xl font-bold tracking-tight mb-6">{doc.name}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {doc.bio}
                </p>
                <div className="space-y-4 mb-8">
                  {doc.qualifications.map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1" size={18} />
                      <span className="font-medium text-sm md:text-base">{text}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="lg" className="rounded-full">View Clinical Profile</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [date, setDate] = useState<Date>();

  return (
    <form className="space-y-4 pt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">First Name</label>
          <Input placeholder="John" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Last Name</label>
          <Input placeholder="Doe" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input type="email" placeholder="john@example.com" />
      </div>
      <div className="space-y-2 flex flex-col">
        <label className="text-sm font-medium mb-1">Preferred Date</label>
        <Popover>
          <PopoverTrigger
            render={
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              />
            }
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Reason for Visit</label>
        <Textarea placeholder="How can we help you?" />
      </div>
      <Button type="submit" className="w-full" onClick={(e) => { e.preventDefault(); onSuccess(); }}>
        Request Appointment
      </Button>
    </form>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                <Stethoscope size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">VitaCare</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing cutting-edge medical care with a human touch. Restoring your mobility and freedom.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Dr. Thorne</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Patient Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>123 Medical Plaza, Health District<br />San Francisco, CA 94103</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>contact@vitacare.md</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Stay Informed</h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Subscribe to our newsletter for health tips.</p>
              <div className="flex gap-2">
                <Input placeholder="Email" className="rounded-full bg-background" />
                <Button size="icon" className="rounded-full shrink-0">
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 VitaCare Medical Excellence. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [booked, setBooked] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main>
        <Hero />
        
        <Services />

        <SpecialistSpotlight />
        
        <MeetOurSpecialists />

        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-6">Ready to regain your mobility?</h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Schedule a consultation today to discuss your symptoms and discover the right treatment path for your active lifestyle.
            </p>
            <Dialog>
              <DialogTrigger render={<Button size="lg" className="rounded-full px-12 bg-white text-primary hover:bg-white/90" />}>
                Book Your Appointment Now
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Book an Appointment</DialogTitle>
                  <DialogDescription>
                    Fill in your details and we'll get back to you to confirm.
                  </DialogDescription>
                </DialogHeader>
                {booked ? (
                   <div className="py-10 text-center space-y-4">
                     <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 size={32} />
                     </div>
                     <h3 className="text-xl font-bold">Request Sent!</h3>
                     <p className="text-muted-foreground">We'll contact you within 24 hours to confirm your time slot.</p>
                     <Button variant="outline" className="w-full" onClick={() => setBooked(false)}>Close</Button>
                   </div>
                ) : (
                  <BookingForm onSuccess={() => setBooked(true)} />
                )}
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <section id="reviews" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Patient Experiences</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Hear from those who have regained their strength and returned to the activities they love.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Jenkins",
                  role: "Professional Runner",
                  text: "Dr. Thorne's approach to my ACL injury was revolutionary. I was back on the track 3 months ahead of schedule. The support team is incredible.",
                  rating: 5
                },
                {
                  name: "Robert Mill",
                  role: "Post-op Hip Replacement",
                  text: "After years of chronic pain, I finally feel human again. The robotic-assisted surgery made a massive difference in my recovery time.",
                  rating: 5
                },
                {
                  name: "Linda Zhang",
                  role: "Tennis Enthusiast",
                  text: "Most doctors just said 'rest'. Dr. Thorne found the root cause of my elbow pain and treated it with physical therapy and PRP. No surgery needed!",
                  rating: 5
                }
              ].map((review, i) => (
                <Card key={i} className="bg-secondary/20 border-none">
                  <CardHeader className="pb-2">
                    <div className="flex gap-1 mb-2 text-yellow-500">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription>{review.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="italic text-muted-foreground">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
