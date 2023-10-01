export enum genders { male = "Male", female = "Female", others = "Others" };
export enum locations { mumbai = 'Mumbai', bengaluru = 'Bengaluru', hyderabad = 'Hyderabad' }

export interface User {
    readonly name: string;
    email: string;
    mobile: string;
    password: string;
    readonly gender: genders,
    location: locations,
    favProds?: string[]
}