
export const ButtleTicketGrade = {
    N: 'N',
    R: 'R',
    SR: 'SR',
    SSR: 'SSR'
} as const

export type ButtleTicketGrade = typeof ButtleTicketGrade[keyof typeof ButtleTicketGrade]