import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 h-full"
    >
      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
