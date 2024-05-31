// emailUtils.js

/**
 * Regular expression for validating email addresses.
 * Source: https://github.com/WebKit/webkit/blob/4226b9741095267eccf15899533703c050477190/Source/WebCore/html/EmailInputType.cpp
 * Copyright (C) 2009 Michelangelo De Simone <micdesim@gmail.com>
 * Copyright (C) 2010 Google Inc. All rights reserved.
 */
const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;

/**
 * Checks if the given email address is valid.
 * @param {string} email The email address to validate.
 * @returns {boolean} True if the email address is valid, otherwise false.
 */
/**
 * Checks if the given email address is valid.
 * @param {string} email The email address to validate.
 * @returns {boolean} True if the email address is valid, otherwise false.
 */
const isValidEmail = (email) => {
    console.log(email);
    return emailRegex.test(email);
};
/**
 * Extracts and returns the local part of the given email address.
 * @param {string} email The email address.
 * @returns {string} The local part of the email address.
 */
const getLocalPart = (email) => email.split('@')[0];

/**
 * Extracts and returns the domain part of the given email address.
 * @param {string} email The email address.
 * @returns {string} The domain part of the email address.
 */
const getDomainPart = (email) => email.split('@')[1];

module.exports = { isValidEmail, getDomainPart, getLocalPart };