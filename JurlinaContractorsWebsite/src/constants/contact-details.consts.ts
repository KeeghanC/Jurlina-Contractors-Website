import { TContactDetails } from "../contactus/contact-details.type";

export const contactDetails : TContactDetails = {
    email: 'nick@jurlinacontractors.co.nz',
    mobileNumber: '+64 27 283 1088',
}

export const mobileOneWord = contactDetails.mobileNumber.replace(" ", "");