//Dynamic Default Properties


export type MailPreferences = {
[key:string]:string |boolean;
  doNotDisturb: boolean;
  outOfOffice: boolean;
};

// don't touch below this line

export function canContact(preferences: MailPreferences): boolean {
  return !(preferences.doNotDisturb || preferences.outOfOffice);
}
