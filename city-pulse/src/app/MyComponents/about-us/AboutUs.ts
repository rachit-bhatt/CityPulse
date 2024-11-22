import { Role } from "./Role"

export class AboutUs {
    ID : string = ''
    FirstName : string = ''
    LastName : string = ''
    Designation : Role = Role.UI_DEVELOPER
    GitHubProfile : string = ''
    LinkedInProfile : string = ''
    EmailAddress : string = ''

    constructor(
        ID : string,
        FirstName : string,
        LastName : string,
        Designation : Role,
        GitHubProfile : string,
        LinkedInProfile : string,
        EmailAddress : string
    ) {
        this.ID = ID,
        this.FirstName = FirstName
        this.LastName = LastName
        this.Designation = Designation
        this.GitHubProfile = GitHubProfile
        this.LinkedInProfile = LinkedInProfile
        this.EmailAddress = EmailAddress
    }
}