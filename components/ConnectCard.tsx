import { motion } from "framer-motion";

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  link: string;
}

const ContactCard = ({ icon, label, link }: ContactCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative
        rounded-2xl
        px-2
        py-4
        border border-white/5
        backdrop-blur-lg
        bg-white/5
        hover:bg-white/5
        transition-all
        duration-300
        shadow-lg
        hover:shadow-xl
        flex flex-col items-center text-center space-y-4
      "
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon */}
      <motion.div
        className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 transform "
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        {icon}
      </motion.div>

      {/* Label */}
      <h3 className=" font-bold text-white transition-colors duration-300">
        {label}
      </h3>
    </motion.a>
  );
};

export default ContactCard;
