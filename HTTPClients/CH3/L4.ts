function getMailtoLinkForEmail(email: string): string {
    const isValidEmail = email.includes("@") && email.length
    return isValidEmail?`mailto:${email}`:'';
}

// don't touch below this line

export { getMailtoLinkForEmail };
