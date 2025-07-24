
// Icons
import { CheckCircle, Code, TabletSmartphone } from "lucide-react";

const services = [
  {
    id: 0,
    title: "Web Development",
    icon: <Code className="h-6 w-6 text-white" />,
    description: "Custom websites built with the latest technologies for optimal performance.",
    points: ["Responsive design", "SEO optimization", "Performance tuning"]
  },
  {
    id: 1,
    title: "App Development",
    icon: <TabletSmartphone className="h-6 w-6 text-white" />,
    description: "Cross-platform mobile applications that work seamlessly on iOS and Android.",
    points: ["User-friendly interfaces", "Offline capabilities", "Push notifications"]
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: <CheckCircle className="h-6 w-6 text-white" />,
    description: "User-centered design that enhances engagement and conversions.",
    points: ["User research", "Wireframing & prototyping", "Usability testing"]
  }
]

export default services;