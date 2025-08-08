import { TService } from "./service/service.type";

export const servicesOffered: TService[] = [
  {
    serviceTitle: 'Site Clearing & Preparation',
    serviceDescription: 'Complete clearing of vegetation, rocks, and debris to prepare your site for residential or commercial construction. Fast, efficient, and compliant with local council requirements.'
  },
  {
    serviceTitle: 'Creek & River Management',
    serviceDescription: 'Specialised services in slash control, managing, and restoring waterways. We specialise in unblocking watercourses to ensure water flow and protect natural ecosystems.'
  },
  {
    serviceTitle: 'Driveway & Accessway Construction',
    serviceDescription: 'Gravel or compacted metal driveways built to last. We cut and shape accessways with proper water runoff and compaction standards.'
  },
  {
    serviceTitle: 'Demolition & Removal',
    serviceDescription: 'Safe removal of homes, sheds, fencing, or other structures. Includes waste disposal and site clean-up.'
  },
  {
    serviceTitle: 'Professional Advice',
    serviceDescription: 'Providing sound advice for all facets (small or large) of land contouring, clearing, mulching, re-grassing, and excavations.'
  },
  {
    serviceTitle: 'Tip Truck Hire & Material Supply',
    serviceDescription: 'Competitive rates for tip truck and driver hire. We can supply and deliver topsoil, gravel, scoria, sand, and more.'
  },
] as const satisfies TService[];
