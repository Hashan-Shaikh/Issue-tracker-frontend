export enum Status {
    Active='active',
    Paused='paused',
    Vacation='vacation',
}
export interface Issue {
    id: number,
    title: string,
    status: Status,
    description:string,
    userId: number,
}

const issues : Issue[] = [
    {
        id: 1,
        title: 'Bug1',
        status: Status.Active,
        description: "This is issue description",
        userId: 1,
    },
    {
        id: 2,
        title: 'Bug2',
        status: Status.Paused,
        description: "This is issue description",
        userId: 1,
    },
    {
        id: 3,
        title: 'Bug3',
        status: Status.Vacation,
        description: "This is issue description",
        userId: 1,
    },
    {
        id: 4,
        title: 'Bug4',
        status: Status.Active,
        description: "This is issue description",
        userId: 2,
    },
    {
        id: 5,
        title: 'Bug5',
        status: Status.Paused,
        description: "This is issue description",
        userId: 2,
    },
]

export {issues}