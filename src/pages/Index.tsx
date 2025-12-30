import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, TrendingUp, RefreshCw } from "lucide-react";

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

const whatWeDo = [
  {
    icon: Building2,
    title: "Long-Term Capital",
    description:
      "We provide patient, permanent capital aligned with continuity, stability, and responsible ownership.",
  },
  {
    icon: TrendingUp,
    title: "Operational Stewardship",
    description:
      "We engage with governance, strategy, and execution to support institutional strengthening and long-term performance.",
  },
  {
    icon: RefreshCw,
    title: "Turnaround & Maturation",
    description:
      "We work with asset-rich but institutionally underdeveloped enterprises, guiding recovery, rebuilding, and gradual maturation.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-hero overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary-foreground/20 rotate-45" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary-foreground/20 rotate-12" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            variants={stagger}>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight leading-[1.1] uppercase"
              variants={fadeUp}>
              Potential into
              <br />
              Perpetuity
            </motion.h1>

            <motion.p
              className="mt-8 text-xl md:text-2xl text-primary-foreground/70 leading-relaxed max-w-2xl"
              variants={fadeUp}>
              Pax Mongolica is a private investment office specializing in
              complex industrial sectors, focused on perpetual growth,
              institutional development, and disciplined turnaround strategies.
            </motion.p>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-4"
              variants={fadeUp}>
              <Link to="/about">
                <Button size="lg" variant="secondary" className="group">
                  Discover Our Approach
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <SectionHeader title="Our Approach" />
            <p className="mt-8 text-muted-foreground leading-relaxed">
              Pax Mongolica operates with a long-term perspective shaped by
              patience, responsibility, and continuity. We deploy permanent
              capital and apply active stewardship to support enterprises
              through cycles, transitions, and structural change.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Rather than optimizing for speed or predefined exits, we focus on
              building the institutional foundations—governance, strategy, and
              operational discipline—that allow businesses to remain resilient,
              competitive, and relevant over time.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="aspect-[4/2.5] bg-secondary overflow-hidden relative border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl font-bold text-foreground/20 mb-4">
                    "
                  </div>
                  <p className="text-lg italic text-foreground/80 max-w-md">
                    We work where long-term ownership, governance, and
                    operational discipline determine whether enterprises endure.
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-border -z-10" />
          </motion.div>
        </div>
      </Section>

      {/* What We Do Section */}
      <Section variant="subtle">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <SectionHeader
            title="What We Do"
            description="We provide patient, permanent capital aligned with continuity,
              stability, and responsible ownership."
            align="center"
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}>
          {whatWeDo.map((item, index) => (
            <motion.div
              key={item.title}
              className="group bg-card p-8 lg:p-10 border border-border hover:shadow-card transition-shadow"
              variants={fadeUp}>
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <item.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className="flex justify-center mb-8">
              <div className="h-px w-16 bg-primary-foreground/30" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 uppercase">
              Ready to discuss opportunities?
            </h2>
            <p className="text-sm text-primary-foreground/70 mb-10 max-w-xl mx-auto">
              For investment opportunities, advisory engagements, or
              professional inquiries, we welcome the opportunity to connect.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="group uppercase tracking-wider">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
