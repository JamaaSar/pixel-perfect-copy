import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Building,
  Briefcase,
  Factory,
  Plane,
  Pickaxe,
  Landmark,
} from "lucide-react";

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

const turnaroundCharacteristics = [
  "Strong asset foundations with underdeveloped strategy or governance",
  "Cash-flow potential constrained by institutional weaknesses",
  "Legacy ownership structures or succession-related challenges",
  "Cyclical distress rather than irreversible decline",
];

const valueCreation = [
  "Enhancing governance structures, reporting discipline, and accountability",
  "Supporting management reinforcement and leadership continuity",
  "Restoring capital discipline and balance-sheet resilience",
  "Improving operational effectiveness in asset-intensive environments",
  "Clarifying long-term strategic direction in domestic and export markets",
  "Building trust and credibility with stakeholders, partners, and institutions",
];

const advisoryServices = [
  {
    title: "Turnaround & Restructuring",
    description:
      "We support enterprises facing operational distress, structural inefficiencies, or cyclical downturns by diagnosing root causes and leading recovery programs focused on durability rather than short-term relief.",
  },
  {
    title: "Governance & Institutional Design",
    description:
      "We design and strengthen governance frameworks suited to complex enterprises, including board structure, shareholder alignment, and incentive systems.",
  },
  {
    title: "Capital Structure & Financial Discipline",
    description:
      "We advise on capital allocation, balance-sheet resilience, and financial discipline in environments where misaligned capital structures undermine operations.",
  },
  {
    title: "Strategy, Repositioning & Scaling",
    description:
      "We assist enterprises in redefining strategic direction, optimizing asset utilization, and repositioning within domestic and international markets, with particular attention to execution feasibility.",
  },
];

const focusAreas = [
  { icon: Factory, label: "Heavy industry and industrial services" },
  { icon: Pickaxe, label: "Mining and resource-linked infrastructure" },
  { icon: Plane, label: "Logistics and cargo aviation ecosystems" },
  {
    icon: Landmark,
    label: "Investment banking and transaction-oriented mandates",
  },
];

const Strategies = () => {
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
              Operational Strategies
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section>
        <div className="max-w-4xl  mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pax Mongolica operates as a private investment office guided by
              the principles of an evergreen industrial holding. Our work is
              shaped by patience, continuity, and a long-term view of ownership.
              We seek to steward businesses over extended horizons, with
              attention to industrial durability, institutional development, and
              sustained competitiveness rather than short- term financial
              outcomes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We do not structure our activities around predetermined exit
              timelines or fixed capital return cycles. Capital is reinvested
              with care, allowing value to develop gradually through improved
              governance, operational discipline, and strategic alignment.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our approach is most relevant in asset-heavy, complex, and
              cyclical industries. In such environments, challenges often arise
              not from a lack of resources, but from insufficient institutional
              depth. We aim to contribute where thoughtful ownership, measured
              capital allocation, and consistent stewardship can help
              enterprises regain stability and direction.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              As an evergreen industrial holding, we seek a balance between
              centralized oversight and decentralized operations. Portfolio
              companies remain operationally independent, while benefiting from
              shared standards in governance, accountability, and long-term
              planning.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our objective is not transactional efficiency, but gradual
              industrial maturation. We work toward strengthening enterprises so
              that they may operate responsibly, adapt over time, and remain
              viable across cycles and generations. In this way, Pax Mongolica
              applies a long-term ownership model to complex and emerging market
              contexts, with the intention of supporting enterprises built to
              endure.
            </p>
          </motion.div>
        </div>
      </Section>

      <Tabs defaultValue="investment">
        <TabsList className="justify-center">
          <TabsTrigger value="investment">Investment Solutions</TabsTrigger>
          <TabsTrigger value="advisory">Business Advisory</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        </TabsList>
        <TabsContent value="investment">
          {/* Investment Solutions */}
          <Section variant="subtle" id="investment">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <SectionHeader title="Investment Solutions" />
              <p className="mt-8 text-muted-foreground leading-relaxed ">
                Our equity strategies focus on Mongolia and similarly complex
                markets, investing in underperforming companies across heavy
                industries and traditional sectors where deep local knowledge,
                active ownership, and strategic reconstruction can unlock long-
                term value.
              </p>
              <h3 className="mt-8 text-base font-bold mb-4 uppercase">
                Capital aligned with continuity and long-term stewardship
              </h3>
              <p className="text-muted-foreground leading-relaxed ">
                Pax Mongolica provides investment solutions designed to ensure
                the long-term continuity, resilience, and institutional strength
                of the enterprises we support. Our approach is guided by a
                simple principle: value is sustained not by speed or financial
                optimization, but by durability, governance, and responsible
                ownership. We focus on Mongolia and similarly complex markets,
                investing selectively in industrial and traditional sectors
                where businesses possess meaningful assets and strategic
                relevance, yet require institutional strengthening to realize
                their full long-term potential. Our objective is not short-term
                outperformance, but ensuring the perpetual existence of
                enterprises—so that they may endure across cycles, leadership
                transitions, and changing market conditions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 mt-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border border-border flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold uppercase">
                    Industrial Turnaround & Special Situations
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  We engage in situations where businesses face structural or
                  cyclical challenges, but remain fundamentally viable over the
                  long term. Investment decisions are guided by prudence,
                  patience, and a commitment to responsible stewardship.
                </p>
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Typical Characteristics
                  </p>
                  {turnaroundCharacteristics.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">{item}</p>
                    </div>
                  ))}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    In such cases, our role is to stabilize, rebuild, and guide
                    enterprises toward long-term sustainability rather than
                    rapid financial extraction.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border border-border flex items-center justify-center">
                    <Building className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold uppercase">
                    Value Creation Through Maturation
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  At Pax Mongolica, value creation is understood as an
                  institutional process, not a financial exercise. We focus on
                  strengthening the foundations that allow enterprises to
                  endure.
                </p>
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Our Work Commonly Involves
                  </p>
                  {valueCreation.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">{item}</p>
                    </div>
                  ))}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    These efforts are undertaken with the intent of enabling
                    enterprises to operate independently, responsibly, and
                    competitively over the long run.
                  </p>
                </div>
              </motion.div>
            </div>
          </Section>
        </TabsContent>
        <TabsContent value="advisory">
          {/* Business Advisory */}
          <Section id="advisory">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <SectionHeader
                label="Business Advisory"
                title="Institutional advisory for complex enterprises"
                description="Pax Mongolica provides independent business advisory services to enterprises operating in complex, asset-heavy, and institutionally constrained environments."
              />
            </motion.div>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Advisory engagements do not require equity participation or
              capital investment. We advise owners, boards, management teams,
              and institutions seeking structural improvement, recovery, or
              strategic repositioning—regardless of whether Pax Mongolica is an
              investor.
            </p>

            <motion.div
              className="grid md:grid-cols-2 gap-6 mt-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}>
              {advisoryServices.map((service) => (
                <motion.div
                  key={service.title}
                  className="p-8 bg-card rounded-sm shadow-soft hover:shadow-card transition-shadow border border-border"
                  variants={fadeUp}>
                  <h3 className="text-base font-bold mb-4 uppercase">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 p-8 bg-secondary rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <h4 className="text-base font-bold mb-4 uppercase">
                Our Advisory Philosophy
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unlike conventional consulting firms, Pax Mongolica does not
                deliver abstract frameworks or generic recommendations. Our
                advisory work is execution-oriented, context-specific, and
                grounded in operational realities. We work directly with
                decision-makers to:
              </p>
            </motion.div>
          </Section>
        </TabsContent>
        <TabsContent value="portfolio">
          {/* Portfolio */}
          <Section variant="dark" id="portfolio">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl">
              <SectionHeader
                label="Portfolio"
                title="Disciplined stewardship for long-term value"
              />
              <p className="mt-8 text-primary-foreground/70 leading-relaxed">
                We are owners of our portfolio, disciplined to deliver long-term
                value with stewardship. We selectively share portfolio and
                transaction experience with qualified counterparties.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}>
              {focusAreas.map((area) => (
                <motion.div
                  key={area.label}
                  className="p-6 bg-primary-foreground/5 rounded-sm border border-primary-foreground/10"
                  variants={fadeUp}>
                  <area.icon className="h-6 w-6 text-primary-foreground/80 mb-4" />
                  <p className="text-primary-foreground/70 text-xs leading-relaxed uppercase">
                    {area.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <p className="text-primary-foreground/70 mb-6">
                If you are requesting additional information, please visit our
                Contact page.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="group">
                  Submit a Request
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </Section>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Strategies;
