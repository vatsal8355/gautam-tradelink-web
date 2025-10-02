import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  company: z.string().min(2, { message: "Company name is required" }),
  product: z.string().min(2, { message: "Product interest is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      product: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Create the email content
      const emailContent = `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Company: ${data.company}
        Product Interest: ${data.product}
        Message: ${data.message}
      `;
      
      // Create a mailto link with the form data
      const mailtoLink = `mailto:Gautamtradelink@hotmail.com?subject=Contact Form Submission from ${data.name}&body=${encodeURIComponent(emailContent)}`;
      
      // Open the email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Message Ready to Send",
        description: "Your email client has been opened with the message. Please send the email to complete your inquiry.",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "There was an error processing your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      // Reset the form and submitting state
      form.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Gautam Tradelink</title>
        <meta
          name="description"
          content="Get in touch with Gautam Tradelink, your trusted pharmaceutical raw materials supplier. Contact us for inquiries about our products or services."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-custom">
            <div className="max-w-3xl text-white">
              {/* Updated color and shadow for heading */}
              <h1 className="heading-xl mb-6 text-white drop-shadow-md">
                Contact Us
              </h1>
              <p className="text-lg opacity-90">
                Get in touch with our team for inquiries about our products or services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary text-primary-foreground rounded-full mt-1">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Phone</h3>
                        <p className="text-muted-foreground mb-1">Vatsalbhai Shah</p>
                        <a
                          href="tel:+919867920252"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 9867920252
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary text-primary-foreground rounded-full mt-1">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <div className="space-y-1">
                          <a
                            href="mailto:Gautamtradelink@hotmail.com"
                            className="block text-muted-foreground hover:text-primary transition-colors"
                          >
                            Gautamtradelink@hotmail.com
                          </a>
                          <a
                            href="mailto:Marketing.gautamtradelink@hotmail.com"
                            className="block text-muted-foreground hover:text-primary transition-colors"
                          >
                            Marketing.gautamtradelink@hotmail.com
                          </a>
                          <a
                            href="mailto:Billing.gautamtradelink@gmail.com"
                            className="block text-muted-foreground hover:text-primary transition-colors"
                          >
                            Billing.gautamtradelink@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary text-primary-foreground rounded-full mt-1">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Office Address</h3>
                        <p className="text-muted-foreground mb-2">
                          199/A, 1st Floor, Raghuleela Mega Mall,
                          <br />
                          Kandivali West, Mumbai-400067
                        </p>
                        <a 
                          href="https://maps.app.goo.gl/zKKzw9jjfuKTN4YS7" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 text-sm font-medium"
                        >
                          View on Google Maps →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-3">Business Hours</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Saturday</span>
                      <span>10:00 AM - 6:30 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Your email address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your company" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="product"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Interest</FormLabel>
                            <FormControl>
                              <Input placeholder="Products you're interested in" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Your message or inquiry" 
                                className="min-h-32"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-muted py-12">
          <div className="container-custom">
            <h2 className="text-2xl font-semibold mb-8 text-center">Our Location</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3938176!2d72.8365!3d19.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0f3e6f6db83%3A0x7d7e73c7d8c8e0c5!2sRaghuleela%20Mega%20Mall!5e0!3m2!1sen!2sin!4v1652893560776!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gautam Tradelink Office Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
