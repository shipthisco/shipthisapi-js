interface Employee {
  name: string;
  readonly employeeId: number;
  designation: string;
  readonly dateOfJoining: Date;
  readonly getReport: (howMany: number) => string;
  readonly amountOfWorkDone: (daysOfWork: number) => number;
}

export class ShipthisEmployee {
  protected getEmployeeId: () => number = () => {
    return 1234;
  };
}

enum Preference {
  Python = 'python',
  Javascript = 'javascript',
  Java = 'java',
}

export class Gopi extends ShipthisEmployee implements Employee {
  private preference: Preference;
  readonly dateOfJoining: Date;
  designation: string;
  readonly employeeId: number;
  name: string;

  constructor(
    dateOfJoining: Date,
    designation: string,
    employeeId: number,
    name: string,
  ) {
    super();
    this.dateOfJoining = dateOfJoining;
    this.designation = designation;
    this.employeeId = employeeId;
    this.name = name;
    this.preference = Preference.Python;
  }

  getReport(howMany: number): string {
    return howMany + ' ' + this.getPreference();
  }

  amountOfWorkDone(daysOfWork: number): number {
    return daysOfWork + 5;
  }

  private getPreference() {
    return this.preference;
  }
}

const gopi = new Gopi(new Date(), 'developer', 1, 'Gopal');

console.log(gopi.getReport(4));

export type AnkurInit = Omit<
  TeamLead,
  'getReport' | 'amountOfWorkDone' | 'employeeId' | 'designation'
> & { employeeId?: number; designation?: string };
class TeamLead extends ShipthisEmployee implements Employee {
  amountOfWorkDone(daysOfWork: number): number {
    return 0;
  }

  readonly dateOfJoining: Date;
  designation: string;
  readonly employeeId: number = this.getEmployeeId();

  getReport(howMany: number): string {
    return '';
  }

  name: string;

  constructor(init: AnkurInit) {
    super();
    if (init?.name === 'Ankur' && init?.designation !== 'Team Lead') {
      throw new Error('Ankur should be team lead');
    }
    Object.assign(this, init);
  }
}

const ankur = new TeamLead({
  employeeId: 1234,
  name: 'Ankur',
  dateOfJoining: new Date(),
  designation: 'Team Lead',
});

console.log(ankur);
