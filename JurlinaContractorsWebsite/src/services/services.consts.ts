import { TService } from "./service/service.type";

export const servicesOffered: TService[] = [
  {
    serviceTitle: 'Site Clearing & Preparation',
    serviceDescription: 'Complete clearing of vegetation, rocks, and debris to prepare your site for residential or commercial construction. Fast, efficient, and compliant with local council requirements.'
  },
  {
    serviceTitle: 'Creek & River Management',
    serviceDescription: 'Specialised slash control, waterway management, and restoration services. We unblock watercourses to ensure optimal water flow and protect natural ecosystems.'
  },
  {
    serviceTitle: 'Demolition & Removal',
    serviceDescription: 'Safe removal of homes, sheds, fencing, and other structures. Includes waste disposal and thorough site clean-up.'
  },
  {
    serviceTitle: 'Professional Advice',
    serviceDescription: 'Sound advice on all aspects of land contouring, clearing, mulching, re-grassing, and excavation projects—big or small.'
  },
  {
    serviceTitle: 'Tip Truck Hire & Material Supply',
    serviceDescription: 'Competitive rates for tip truck and driver hire. We supply and deliver topsoil, gravel, scoria, sand, and more.'
  },
] as const satisfies TService[];
