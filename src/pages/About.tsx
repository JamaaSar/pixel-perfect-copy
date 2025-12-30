import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Award, Users, Compass, Target, Shield } from "lucide-react";

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

const values = [
  {
    number: "01",
    title: "Distinction",
    icon: Award,
    description:
      "Complexity demands excellence. We invest in complex and capital-intensive sectors where value can only be realized through exceptional quality, strong governance, and efficient organizational structure. Distinction, for us, means selecting opportunities that can withstand rigorous standards of control, accountability, and operational discipline—because in complex industries, only well-governed and well-structured enterprises endure.",
  },
  {
    number: "02",
    title: "Discipline",
    icon: Target,
    description:
      "Stewardship begins with disciplined capital. We manage capital with rigor, restraint, and accountability, recognizing disciplined capital allocation as the primary duty of stewardship. Through this discipline, potential is preserved, directed, and converted into sustainable performance.",
  },
  {
    number: "03",
    title: "Diversity",
    icon: Users,
    description:
      "Enduring institutions are built by different minds. We value diversity of people, perspectives, cultures, and ways of thinking, recognizing that complex problems cannot be solved by uniform experience or single viewpoints. By bringing together individuals with different backgrounds, disciplines, and cultural understandings, we strengthen judgment, reduce blind spots, and build more resilient organizations.",
  },
  {
    number: "04",
    title: "Direction",
    icon: Compass,
    description:
      "Potential needs a strategy. We provide clear, coherent, and long-term strategic direction to transform potential into durable outcomes. Through defined objectives, capital priorities, and governance alignment, we ensure that ownership, management, and stakeholders act with shared purpose and disciplined execution. In complex industries, strategy is the mechanism that converts possibility into permanence.",
  },
  {
    number: "05",
    title: "Dignity",
    icon: Shield,
    description:
      "Dignity is protected through performance and responsibility. We protect our dignity by delivering outstanding results, acting with full responsibility, and maintaining transparency toward all stakeholders. We believe legitimacy is not declared—it is earned through consistent performance, ethical conduct, and open accountability.",
  },
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
            variants={stagger}>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight leading-[1.1] uppercase"
              variants={fadeUp}>
              About Us
            </motion.h1>

            <motion.p
              className="mt-8 text-base text-primary-foreground/70 leading-relaxed max-w-2xl"
              variants={fadeUp}></motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why the Name Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <SectionHeader
            label="Our Heritage"
            title="Why the name Pax Mongolica?"
          />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 items-start ">
          <motion.div>
            <div className="space-y-6 text-muted-foreground leading-relaxed pt-6">
              <p>
                Historically, Pax Mongolica describes a period when the Mongol
                Empire created stability across vast and diverse regions of
                Eurasia. More than conquest, it was about order across
                complexity. By establishing common rules for trade, protection,
                and movement, it allowed goods, people, and ideas to travel
                safely across continents. The Silk Road flourished because
                fragmentation was replaced by coordination, enabling distant
                economies to function as part of a connected system.
              </p>
              <p>
                The importance of Pax Mongolica lay in its ability to reduce
                uncertainty. Standard rules, secure routes, and predictable
                systems transformed isolated regions into active participants in
                international trade. It was not only a political condition, but
                an economic framework that unlocked potential by making long-
                distance cooperation possible.
              </p>
              <p>
                Pax Mongolica today adapts this historical principle to modern
                business and investment. In the contemporary global economy, the
                main barriers are no longer distance, but weak institutions,
                fragmented governance, and uneven industrial maturity—especially
                in complex, resource-rich markets like Mongolia. While assets
                exist, the systems required to compete internationally often do
                not.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="space-y-6 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <p>
              Our modern role is therefore not domination or extraction, but
              stabilization through capital and governance. We deploy patient,
              permanent capital to absorb volatility, invest through cycles, and
              give enterprises the time they need to mature. Strong governance
              aligns companies with international standards, while disciplined
              strategy turns raw potential into durable competitiveness.
            </p>
            <p>
              This approach addresses the core challenge of emerging industrial
              economies: the gap between potential and global relevance. Pax
              Mongolica focuses on strengthening institutions, operations, and
              capital structures so that local enterprises are not protected
              from competition, but prepared for it.
            </p>
            <p>
              In this way, Pax Mongolica carries forward the essence of its
              historical name. Just as the original Pax Mongolica enabled
              participation in global trade by creating order across complexity,
              today’s Pax Mongolica enables industries to compete
              internationally by coordinating capital, governance, and strategy.
              The goal is not control, but integration—not speed, but endurance.
            </p>
            <p>
              At its core, Pax Mongolica represents coordination over conquest:
              a modern investment philosophy built to help industries mature,
              connect, and endure in global markets.
            </p>
            <div className="pt-4">
              <div className="gold-line" />
            </div>
          </motion.div>
        </div>
      </Section>

      <Tabs defaultValue="purpose-value">
        <TabsList className="justify-center">
          <TabsTrigger value="purpose-value">Our Purpose</TabsTrigger>
          <TabsTrigger value="corporate-information">
            Corporate Approach
          </TabsTrigger>
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
        </TabsList>
        <TabsContent value="purpose-value">
          <Section variant="subtle" id="perspective">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <SectionHeader
                  label="Our Perspective"
                  title="Potential into Perpetuity"
                  align="center"
                />
                <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                  Our purpose is to transform potential: capital, enterprises,
                  people, and places into enduring value through disciplined
                  ownership, responsible stewardship, and long-term commitment.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  We invest to support the maturation of Mongolia’s industrial
                  economy by transforming asset-rich but institutionally
                  underdeveloped companies into professionally governed,
                  strategically positioned, and financially resilient
                  enterprises capable of compounding value across generations.
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
              transition={{ duration: 0.6 }}>
              <SectionHeader label="Purpose & Values" title="Our Values" />
              <p className="mt-8 text-muted-foreground leading-relaxed ">
                The 5D Values express our approach to turning potential into
                perpetuity. They guide how we allocate capital, govern
                enterprises, set strategy, and uphold our responsibilities to
                investors, partners, employees, and society. In complex
                environments, these values provide the structure and discipline
                required for durable success.
              </p>
            </motion.div>

            <motion.div
              className="mt-16 space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}>
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  className="group grid md:grid-cols-12 gap-6 p-8 bg-card rounded-sm shadow-soft hover:shadow-card transition-shadow"
                  variants={fadeUp}>
                  <div className="md:col-span-1 flex items-start">
                    <span className="text-3xl font-serif font-light text-accent">
                      {value.number}
                    </span>
                  </div>
                  <div className="md:col-span-2 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-serif font-medium md:hidden">
                      {value.title}
                    </h3>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-serif font-medium hidden md:block">
                      {value.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </TabsContent>
        <TabsContent value="corporate-information">
          {/* Corporate Information */}
          <Section variant="subtle" id="corporate">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div className="space-y-6">
                <div className="flex justify-between py-2 border-b border-muted-foreground/10">
                  <span className="text-muted-foreground/90">Company Name</span>
                  <span className="text-muted-foreground">Pax Mongolica</span>
                </div>
                <div className="flex justify-between py-4 border-b border-muted-foreground/10">
                  <span className="text-muted-foreground/90">Company Type</span>
                  <span className="text-muted-foreground">
                    Private: Limited Liability Company
                  </span>
                </div>
                <div className="flex justify-between py-4 border-b border-muted-foreground/10">
                  <span className="text-muted-foreground/90">
                    Registration Number
                  </span>
                  <span className="text-muted-foreground">7031057</span>
                </div>
                <div className="flex justify-between py-4 border-b border-muted-foreground/10">
                  <span className="text-muted-foreground/90">Established</span>
                  <span className="text-muted-foreground">May 24, 2024</span>
                </div>
                <div className="flex justify-between py-4 border-b border-muted-foreground/10">
                  <span className="text-muted-foreground/90">
                    Business Description
                  </span>
                  <span className="text-muted-foreground text-right">
                    70200 – Management consulting services.
                    <br />
                    46100 – Wholesale trade on a fee or contract basis.
                  </span>
                </div>
                <div className="flex justify-between py-4 border-b border-muted-foreground/10">
                  <span className="text-muted-foreground/90">Head Office</span>
                  <span className="text-muted-foreground text-right">
                    17 th Floor, City Tower, Sukhbaatar Square 8/1, Sukhbaatar
                    District, Ulaanbaatar Mongolia.
                  </span>
                </div>
              </div>
            </motion.div>
          </Section>
        </TabsContent>
        <TabsContent value="leadership">
          <Section>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="leadership">
              <SectionHeader
                label="Leadership"
                title="Founder & Managing Director"
              />
              <div className="mt-10 p-8 bg-primary-foreground/5 rounded-sm">
                <h3 className="text-2xl font-serif font-medium ">
                  Tegshbuyant (Teg) Gantumur
                  <p className="mt-6 text-accent text-sm">
                    teg@paxmongolica.mn
                  </p>
                </h3>
                <p className="text-accent mt-2 text-sm">
                  Founder & Managing Director
                </p>

                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Teg is an executive, investor, and strategist specializing in
                  long-term industrial ownership and institutional development.
                  He has served in senior leadership roles including Interim CEO
                  &amp; Chief Investment Officer of OCHUN Investments and Group
                  CEO of Ochir Undraa Group, where he oversaw a diversified,
                  large-scale portfolios spanning heavy industry, mining,
                  chemicals, and financial services, managing teams of up to 20
                  subsidiaries.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  He is the founder of Pax Mongolica LLC, a private investment
                  office structured as an evergreen industrial holding, focused
                  on patient capital, governance excellence, and enduring value
                  creation. Teg combines hands-on executive experience with
                  formal training in Philosophy, Politics, and Economics at the
                  University of British Columbia, bringing a disciplined, long-
                  term perspective to leadership, investment, and organizational
                  design.
                </p>
              </div>
            </motion.div>
          </Section>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default About;
