
export const JobClass = {
    warrior: 'warrior',
    wizard: 'wizard',
    fighter: 'fighter',
    merchant: 'merchant'
}

export type JobClass = typeof JobClass[keyof typeof JobClass]