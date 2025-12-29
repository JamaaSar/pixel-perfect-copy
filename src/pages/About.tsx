import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Award, Users, Compass, Target, Shield } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const values = [
  {
    number: "01",
    title: "Distinction",
    icon: Award,
    description: "Complexity demands excellence. We invest in complex and capital-intensive sectors where value can only be realized through exceptional quality, strong governance, and efficient organizational structure."
  },
  {
    number: "02",
    title: "Discipline",
    icon: Target,
    description: "Stewardship begins with disciplined capital. We manage capital with rigor, restraint, and accountability, recognizing disciplined capital allocation as the primary duty of stewardship."
  },
  {
    number: "03",
    title: "Diversity",
    icon: Users,
    description: "Enduring institutions are built by different minds. We value diversity of people, perspectives, cultures, and ways of thinking, recognizing that complex problems cannot be solved by uniform experience."
  },
  {
    number: "04",
    title: "Direction",
    icon: Compass,
    description: "Potential needs a strategy. We provide clear, coherent, and long-term strategic direction to transform potential into durable outcomes through defined objectives and governance alignment."
  },
  {
    number: "05",
    title: "Dignity",
    icon: Shield,
    description: "Dignity is protected through performance and responsibility. We believe legitimacy is not declared—it is earned through consistent performance, ethical conduct, and open accountability."
  }
];

const About = () => {
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
            variants={stagger}
          >
            <motion.div className="flex items-center gap-4 mb-8" variants={fadeUp}>
              <div className="h-px w-16 bg-primary-foreground/50" />
              <span className="text-primary-foreground/70 text-xs font-medium tracking-widest uppercase">
                About Us
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight leading-[1.1] uppercase"
              variants={fadeUp}
            >
              Where potential becomes permanence
            </motion.h1>
            
            <motion.p 
              className="mt-8 text-base text-primary-foreground/70 leading-relaxed max-w-2xl"
              variants={fadeUp}
            >
              Our work is most relevant in asset-heavy, complex, and cyclical industries—particularly 
              in emerging and resource-rich markets such as Mongolia—where long-term outcomes depend 
              less on financial engineering and more on institutional depth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why the Name Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Our Heritage"
              title="Why the name Pax Mongolica?"
            />
          </motion.div>
          
          <motion.div
            className="space-y-6 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Historically, Pax Mongolica describes a period when the Mongol Empire created stability 
              across vast and diverse regions of Eurasia. More than conquest, it was about order across 
              complexity. By establishing common rules for trade, protection, and movement, it allowed 
              goods, people, and ideas to travel safely across continents.
            </p>
            <p>
              The importance of Pax Mongolica lay in its ability to reduce uncertainty. Standard rules, 
              secure routes, and predictable systems transformed isolated regions into active participants 
              in international trade.
            </p>
            <p>
              Today, we adapt this historical principle to modern business and investment. Our modern role 
              is not domination or extraction, but stabilization through capital and governance. We deploy 
              patient, permanent capital to absorb volatility, invest through cycles, and give enterprises 
              the time they need to mature.
            </p>
            <div className="pt-4">
              <div className="gold-line" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Perspective Section */}
      <Section variant="subtle" id="perspective">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Our Perspective"
              title="Enduring value is created gradually"
              align="center"
            />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Enterprises that last are those governed with discipline, guided by clear strategy, 
              and allowed the time required to mature. Pax Mongolica exists to help close the gap 
              between potential and permanence.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              At its core, Pax Mongolica represents coordination over conquest: a modern investment 
              philosophy built to help industries mature, connect, and endure in global markets.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section id="values">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="Purpose & Values"
            title="The 5D Values"
            description="Our values express our approach to turning potential into perpetuity. They guide how we allocate capital, govern enterprises, set strategy, and uphold our responsibilities."
          />
        </motion.div>

        <motion.div 
          className="mt-16 space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              className="group grid md:grid-cols-12 gap-6 p-8 bg-card rounded-sm shadow-soft hover:shadow-card transition-shadow"
              variants={fadeUp}
            >
              <div className="md:col-span-1 flex items-start">
                <span className="text-3xl font-serif font-light text-accent">{value.number}</span>
              </div>
              <div className="md:col-span-2 flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-medium md:hidden">{value.title}</h3>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-serif font-medium hidden md:block">{value.title}</h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Corporate Information */}
      <Section variant="dark" id="corporate">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Corporate Information"
              title="Pax Mongolica LLC"
            />
            <div className="mt-10 space-y-6">
              <div className="flex justify-between py-4 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/60">Company Type</span>
                <span className="text-primary-foreground">Private: Limited Liability Company</span>
              </div>
              <div className="flex justify-between py-4 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/60">Registration Number</span>
                <span className="text-primary-foreground">7031057</span>
              </div>
              <div className="flex justify-between py-4 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/60">Established</span>
                <span className="text-primary-foreground">May 24, 2024</span>
              </div>
              <div className="flex justify-between py-4 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/60">Business Description</span>
                <span className="text-primary-foreground text-right max-w-xs">Management consulting services & Wholesale trade</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="leadership"
          >
            <SectionHeader
              label="Leadership"
              title="Founder & Managing Director"
            />
            <div className="mt-10 p-8 bg-primary-foreground/5 rounded-sm">
              <h3 className="text-2xl font-serif font-medium text-primary-foreground">
                Tegshbuyant (Teg) Gantumur
              </h3>
              <p className="text-accent mt-2 text-sm">Founder & Managing Director</p>
              <p className="mt-6 text-primary-foreground/70 leading-relaxed">
                Teg is an executive, investor, and strategist specializing in long-term industrial 
                ownership and institutional development. He has served in senior leadership roles 
                including Interim CEO & Chief Investment Officer of OCHUN Investments and Group CEO 
                of Ochir Undraa Group.
              </p>
              <p className="mt-4 text-primary-foreground/70 leading-relaxed">
                He combines hands-on executive experience with formal training in Philosophy, Politics, 
                and Economics at the University of British Columbia, bringing a disciplined, long-term 
                perspective to leadership, investment, and organizational design.
              </p>
              <p className="mt-6 text-accent text-sm">teg@paxmongolica.mn</p>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
