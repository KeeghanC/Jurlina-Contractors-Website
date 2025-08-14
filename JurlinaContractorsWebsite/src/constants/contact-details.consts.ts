import { TContactDetails } from "../contactus/contact-details.type";

export const contactDetails : TContactDetails = {
    email: 'nick@jurlinacontractors.co.nz',
    mobileNumber: '+64 27 283 1088',
} as const satisfies TContactDetails;

export const mobileOneWord = contactDetails.mobileNumber.replace(" ", "");