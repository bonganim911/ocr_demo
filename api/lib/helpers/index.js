'use strict';
/**
 * This file has some repeated code. This is not optimized yet so do not judge :P
 */

const Helpers = () => {

    return {
        getCompanyName(str) {

            if (str) {
                return str.replace('Company Name', '').trim();
            }

            return '';
        },
        getTradeLicense(str) {

            if (str) {
                const maybe = str.replace('Tiade License No.', '').trim();
                return maybe.replace('Trade License No.', '');

            }

            return '';
        },
        getAnnualTurnOver(str) {

            if (str) {
                return str.replace('Annual Turnover', '').trim();

            }

            return '';
        },
        getNumberOfEmployees(str) {

            if (str) {
                return str.replace('No. of Employees', '').trim();

            }

            return '';
        },
        getCompanyWebSite(str) {

            if (str) {
                return str.replace('Company Website', '').trim();

            }

            return '';
        },
        getLegalStatusOfBusiness(str) {

            if (str) {
                return str.replace('Legal Status of Business', '').trim();

            }

            return '';
        },
        getResidency(str) {

            if (str) {
                return str.replace('Residency', '').trim();

            }

            return '';
        },
        getNatureOfBusiness(str) {

            if (str) {
                return str.replace('Specific Nature of Business', '').trim();

            }

            return '';
        },
        getBuildingName(str) {

            if (str) {
                return str.replace('Building Name', '').trim();

            }

            return '';
        },
        getShopOrApartmentOrOffice(str) {

            if (str) {
                return str.replace('Shop/Apartment Office No', '').trim();

            }

            return '';
        },
        getLocalityOrArea(str) {

            if (str) {
                return str.replace('Locality/Area', '').trim();

            }

            return '';
        },
        getStreetName(str) {

            if (str) {
                return str.replace('Street Name/No', '').trim();

            }

            return '';
        },
        getLandMark(str) {

            if (str) {
                return str.replace('Landmark', '').trim();

            }

            return '';
        },
        getCity(str) {

            if (str) {
                return str.replace('City', '').trim();

            }

            return '';
        },
        getEmirate(str) {

            if (str) {
                return str.replace('Emirate', '').trim();

            }

            return '';
        },
        getListedTelephone(str) {

            if (str) {
                return str.replace('Listed Telephone No', '').trim();

            }

            return '';
        },
        getFax(str) {

            if (str) {
                return str.replace('Fax', '').trim();

            }

            return '';
        },
        getMobileNumber(str) {

            if (str) {
                const maybe =  str.replace('Mobile No. (For sending alerts', '').trim();
                return maybe.replace('Mobile No. (For sending alerts)', '');

            }

            return '';
        },
        getEmail(str) {

            if (str) {
                const maybe =  str.replace('E-mail ID (Mandatory)*', '').trim();
                return maybe.replace('E-mail ID (Mandatoryl', '');

            }

            return '';
        },
        getName(str) {

            if (str) {
                return str.replace('Name', '').trim();

            }

            return '';
        },
        getTaxRegistrationNumber(str) {

            if (str) {

                return str.replace('Tax Registration Number (TRN)', '').replace('Tax Registration Number (IRNI', '').trim();

            }

            return '';
        },
        getTaxRegistrationEffectiveDate(str) {

            if (str) {

                return str.replace('Tax Registration Number (TRN) effective date', '').replace('taxistration Number (TRN) effective date', '').trim();

            }

            return '';
        },
        getTaxRegistrationAddress(str) {

            if (str) {

                return str.replace('Tax Registration Address', '').trim();

            }

            return '';
        },
        getTaxState(str) {

            if (str) {

                return str.replace('Tax Stato', '').trim() || str.replace('Tax State', '').trim();

            }

            return '';
        },

        getCountry(str) {

            if (str) {

                return str.replace('Country', '').trim();

            }

            return '';
        },
        getTaxCountry(str) {

            if (str) {

                return str.replace('Tax Country', '').trim();

            }

            return '';
        },
        getMobile(str) {

            if (str) {

                return str.replace('Mobile Number', '').trim();

            }

            return '';
        },
        getPhoneNumber(str) {

            if (str) {

                return str.replace('Phone Number', '').trim();

            }

            return '';
        },
        getEmail(str) {

            if (str) {

                return str.replace('E-mail Address', '').trim();

            }

            return '';
        },
        getMailingAddress(str) {

            if (str) {

                return str.replace('Mailing Address', '').trim();

            }

            return '';
        },
        getPlaceOfBirth(str) {

            if (str) {

                return str.replace('Place of Birth', '').trim();

            }

            return '';
        },
        prepareCustomerInformation(strArray) {

            return {
                name: this.getCompanyName(strArray[2]),
                trade_licence_number: this.getTradeLicense(strArray[3]),
                annual_turnover: this.getAnnualTurnOver(strArray[5]),
                no_of_employees: this.getNumberOfEmployees(strArray[5]),
                company_website: this.getCompanyWebSite(strArray[5]),
                nature_of_business: this.getNatureOfBusiness(strArray[9])

            };
        },
        prepareBusinessAddress(strArray) {

            return {
                building_name: this.getBuildingName(strArray[11]),
                shop_apartment_office_no: this.getShopOrApartmentOrOffice(strArray[12]),
                locality: this.getLocalityOrArea(strArray[13]),
                street_name: this.getStreetName(strArray[14]),
                land_mark: this.getLandMark(strArray[15]),
                city: this.getCity(strArray[16]),
                country: this.getCountry(strArray[17]),
                listed_telephone: this.getListedTelephone(strArray[18]),
                fax: this.getFax(strArray[19]),
                mobile_number: this.getMobileNumber(strArray[20]),
                email: this.getEmail(strArray[21])
            };
        },
        prepareRegisteredAddress(strArray) {

            return {
                building_name: this.getBuildingName(strArray[26]),
                shop_apartment_office_no: this.getShopOrApartmentOrOffice(strArray[27]),
                locality: this.getLocalityOrArea(strArray[28]),
                street_name: this.getStreetName(strArray[29]),
                land_mark: this.getLandMark(strArray[30]),
                city: this.getCity(strArray[30]),
                country: this.getCountry(strArray[31]),
                listed_telephone: this.getListedTelephone(strArray[32]),
                fax: this.getFax(''),
                mobile_number: this.getMobileNumber(''),
                email: this.getEmail(strArray[33])
            };
        },
        prepareVatRegistration(strArray) {

            return {
                registration_number: this.getTaxRegistrationNumber(strArray[35]),
                effective_date: this.getTaxRegistrationEffectiveDate(strArray[36]),
                address: this.getTaxRegistrationAddress(strArray[37]),
                state: this.getTaxState(strArray[39]),
                country: this.getTaxCountry(strArray[40])
            };
        },
        preparePartners(strArray) {

            const partners = [];
            partners.push({
                name: this.getName(strArray[41]),
                mobile: this.getMobile(strArray[42]),
                phone: this.getPhoneNumber(strArray[43]),
                email: this.getEmail(strArray[44]),
                mailing_address:this.getMailingAddress(strArray[45]),
                place_of_birth: this.getPlaceOfBirth(strArray[46])
            });
            partners.push({
                name: this.getName(strArray[47]),
                mobile: this.getMobile(strArray[48]),
                phone: this.getPhoneNumber(strArray[49]),
                email: this.getEmail(strArray[50]),
                mailing_address:this.getMailingAddress(strArray[51]),
                place_of_birth: this.getPlaceOfBirth(strArray[52])
            });
            partners.push({
                name: this.getName(strArray[53]),
                mobile: this.getMobile(strArray[54]),
                phone: this.getPhoneNumber(strArray[55]),
                email: this.getEmail(strArray[56]),
                mailing_address:this.getMailingAddress(strArray[57]),
                place_of_birth: this.getPlaceOfBirth(strArray[58])
            });
            partners.push({
                name: this.getName(strArray[59]),
                mobile: this.getMobile(strArray[60]),
                phone: this.getPhoneNumber(strArray[61]),
                email: this.getEmail(strArray[62]),
                mailing_address:this.getMailingAddress(strArray[63]),
                place_of_birth: this.getPlaceOfBirth(strArray[64])
            });
            return partners;
        },
        prepareResponse(strArray) {

            try {
                const resObj = {
                    customer_information: this.prepareCustomerInformation(strArray),
                    business_address: this.prepareBusinessAddress(strArray),
                    registred_address : this.prepareRegisteredAddress(strArray),
                    VAT_Registration : this.prepareVatRegistration(strArray),
                    partners_details: this.preparePartners(strArray)
                };

                console.log(resObj);



                return resObj;
            }
            catch (e) {
                console.log(e.stack);
                return {};
            }



        }

    };
};

module.exports = Helpers;
