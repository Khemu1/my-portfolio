import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import ContactCard from "./ConnectCard";
import { motion, Variants } from "framer-motion";

const Connect = () => {
  const contacts = [
    {
      icon: <HiOutlineMail className="w-10 h-10" />,
      label: "Email",
      link: "mailto:mohamedahmedelsaadi@gmail.com",
    },
    {
      icon: <FiLinkedin className="w-10 h-10" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ali-hegazy-379030254/", // Update with actual LinkedIn URL
    },
    {
      icon: <FiGithub className="w-10 h-10" />,
      label: "GitHub",
      link: "https://github.com/khemu1",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="mb-12 py-10" id="connect">
      {/* Header */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-fit">
          <h2
            className="
            text-4xl sm:text-7xl
            font-extrabold tracking-tighter
            text-neutral-300
            whitespace-nowrap
            "
          >
            LET&apos;S CONNECT
          </h2>

          <div className="mt-4 h-0.5 w-full bg-linear-to-r from-white/80 to-transparent" />
        </div>
      </motion.div>

      {/* Contact Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {contacts.map((contact, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ContactCard
              icon={contact.icon}
              label={contact.label}
              link={contact.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Connect;
