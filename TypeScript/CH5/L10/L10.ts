//PropertyKey
export const TWO_FACTOR = Symbol("twoFactor");
export const BIOMETRIC_LOCK = Symbol("biometricLock");

export type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
  [TWO_FACTOR]: boolean;
  [BIOMETRIC_LOCK]: boolean;
};

// don't touch above this line

export function isSecure(preferences: MailPreferences) {
 if(preferences[TWO_FACTOR] || preferences[BIOMETRIC_LOCK]){
    return true;
 }
    return false;
}
