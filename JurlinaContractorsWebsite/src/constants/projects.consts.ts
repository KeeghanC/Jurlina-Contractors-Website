import { TProject } from "../projects/project.type";

export const projects : TProject[] = [
    {
        title: "Site Preperation & Leveling",
        description: "Comprehensive earthmoving and leveling contouring on your lifestyle property.",
        imageUrl: "assets/4.jpg",
        location: "Downtown Area"
    },
    {
        title: "Land Clearing & Mulching",
        description: "Efficient vegetation removal and mulching to prepare lifestyle properties, subdivisions, and commercial sites.",
        imageUrl: "assets/2.jpg",
        location: "Business District"
    },
    {
        title: "Dam Construction",
        description: "Wetland creation and silt pond clean outs.",
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
