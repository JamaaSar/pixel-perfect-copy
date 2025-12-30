import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, AlertTriangle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const inquiryTypes = [
  "Investment Opportunity",
  "Business Advisory",
  "Partnership Inquiry",
  "General Professional Inquiry",
];

const concernTypes = [
  "Financial misconduct",
  "Breach of fiduciary duty",
  "Governance failure",
  "Legal or regulatory violation",
  "Conflict of interest",
  "Other ethical concern",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [whistleConsent, setWhistleConsent] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleRequestSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      toast({
        title: "Consent Required",
        description:
          "Please confirm that the information provided is accurate.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    toast({
      title: "Request Submitted",
      description:
        "Thank you for your inquiry. We will review and respond where appropriate.",
    });

    (e.target as HTMLFormElement).reset();
    setConsent(false);
  };

  const handleWhistleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!whistleConsent) {
      toast({
        title: "Acknowledgment Required",
        description: "Please confirm that this report is made in good faith.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    toast({
      title: "Report Submitted",
      description:
        "Your report has been received and will be reviewed with discretion.",
    });

    (e.target as HTMLFormElement).reset();
    setWhistleConsent(false);
    setIsAnonymous(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 border border-primary-foreground/20 rotate-45" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            variants={stagger}>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight leading-[1.1] uppercase flex items-center gap-4"
              variants={fadeUp}>
              Contact
            </motion.h1>

            <motion.p
              className="mt-8 text-base text-primary-foreground/70 leading-relaxed max-w-2xl"
              variants={fadeUp}>
              Pax Mongolica welcomes inquiries related to investment
              opportunities, business advisory engagements, partnerships, and
              general professional matters.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <SectionHeader label="Our Office" title="Ulaanbaatar, Mongolia" />
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <p className="font-bold mb-1 uppercase text-sm">
                    Head Office
                  </p>
                  <p className="text-foreground text-xs leading-relaxed">
                    17th Floor, City Tower
                    <br />
                    Sukhbaatar Square 8/1
                    <br />
                    Sukhbaatar District
                    <br />
                    Ulaanbaatar, Mongolia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <p className="font-bold mb-1 uppercase text-sm">Email</p>
                  <a
                    href="mailto:relations@paxmongolica.mn"
                    className="text-foreground hover:underline text-xs">
                    relations@paxmongolica.mn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Request Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-card p-8 lg:p-10 border border-border">
              <h3 className="text-xl font-bold mb-2 uppercase">
                Submit a Request
              </h3>
              <p className="text-muted-foreground text-xs mb-8">
                All requests are reviewed with discretion. Submission does not
                constitute an offer, commitment, or obligation.
              </p>

              <form onSubmit={handleRequestSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">
                      Organization (Optional)
                    </Label>
                    <Input id="organization" placeholder="Your organization" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Nature of Inquiry *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Brief Description of Request *
                  </Label>
                  <Textarea
                    id="description"
                    required
                    placeholder="Please describe your inquiry..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) =>
                      setConsent(checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="consent"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I confirm that the information provided is accurate and
                    submitted in good faith.
                  </Label>
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>

                <p className="text-xs text-muted-foreground">
                  We aim to respond where appropriate. Due to the volume and
                  nature of inquiries, we may not be able to reply to all
                  submissions.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Whistleblowing Section */}
      <Section variant="subtle" id="whistleblowing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 border border-border flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-bold uppercase">
                Whistleblowing Channel
              </h2>
              <p className="text-muted-foreground text-xs">
                Confidential reporting
              </p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Pax Mongolica is committed to integrity, lawful conduct, and
            responsible governance. This whistleblowing channel exists to report
            concerns regarding unethical, illegal, or improper conduct related
            to Pax Mongolica or its associated activities. Reports may be
            submitted confidentially and, where legally permissible,
            anonymously.
          </p>

          <div className="bg-card p-8 rounded-sm shadow-card">
            <form onSubmit={handleWhistleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="whistleName">Full Name</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="whistleName"
                      placeholder="Your name (optional)"
                      disabled={isAnonymous}
                      className={isAnonymous ? "opacity-50" : ""}
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Checkbox
                      id="anonymous"
                      checked={isAnonymous}
                      onCheckedChange={(checked) =>
                        setIsAnonymous(checked as boolean)
                      }
                    />
                    <Label
                      htmlFor="anonymous"
                      className="text-sm text-muted-foreground cursor-pointer">
                      Submit anonymously
                    </Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="concernType">Type of Concern *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select concern type" />
                    </SelectTrigger>
                    <SelectContent>
                      {concernTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="concernDescription">
                  Description of Concern *
                </Label>
                <Textarea
                  id="concernDescription"
                  required
                  placeholder="Please describe the concern in detail..."
                  className="min-h-[150px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whistleContact">
                  Your Contact Information (Optional)
                </Label>
                <Input
                  id="whistleContact"
                  placeholder="Email or phone (for follow-up if needed)"
                  disabled={isAnonymous}
                  className={isAnonymous ? "opacity-50" : ""}
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="whistleConsent"
                  checked={whistleConsent}
                  onCheckedChange={(checked) =>
                    setWhistleConsent(checked as boolean)
                  }
                />
                <Label
                  htmlFor="whistleConsent"
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I confirm that this report is made in good faith and to the
                  best of my knowledge.
                </Label>
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Report"}
              </Button>

              <p className="text-xs text-muted-foreground">
                This channel is not intended for malicious, false, or
                retaliatory reports. All submissions are reviewed responsibly
                and handled in accordance with applicable laws and internal
                procedures.
              </p>
            </form>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Contact;
