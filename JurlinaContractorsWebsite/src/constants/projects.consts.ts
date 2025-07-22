import { TProject } from "../projects/project.type";

export const projects: TProject[] = [
    {
        title: "Site Preparation & Leveling",
        description: "Comprehensive earthmoving and leveling services for commercial construction readiness.",
        imageUrl: "assets/4.jpg",
        location: "Downtown Area"
    },
    {
        title: "Land Clearing & Mulching",
        description: "Efficient vegetation removal and mulching to prepare land for development or landscaping.",
        imageUrl: "assets/2.jpg",
        location: "Business District"
    },
    {
        title: "Brush Cutting & Ground Prep",
        description: "Clearing dense undergrowth and preparing ground for infrastructure or environmental projects.",
        imageUrl: "assets/3.jpg",
        location: "Tech Park"
    },
    {
        title: "Residential Earthworks",
        description: "Groundworks and land shaping services for new builds and residential subdivisions.",
        imageUrl: "assets/5.jpg",
        location: "Suburban Area"
    },
] as const satisfies TProject[];
