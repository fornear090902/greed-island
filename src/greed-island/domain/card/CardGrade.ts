
export const SpecifiedCardGrade = {
    N: 'N',
    R: 'R',
    SR: 'SR',
    SSR: 'SSR',
    RD: 'RD'
} as const

export type SpecifiedCardGrade = typeof SpecifiedCardGrade[keyof typeof SpecifiedCardGrade]

export const SpellCardGrade = {
    N: 'N',
    R: 'R',
    SR: 'SR',
    SSR: 'SSR'
} as const

export type SpellCardGrade = typeof SpellCardGrade[keyof typeof SpellCardGrade]