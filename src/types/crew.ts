// export type crew = {
//   bowlerId: number; // camelCase with consistent naming
//   bowlerFirstName: string;
//   bowlerMiddleInit: string | null; // make this nullable since some may not have a middle name
//   bowlerLastName: string;
//   bowlerAddress: string;
//   bowlerCity: string;
//   bowlerState: string;
//   bowlerZip: string;
//   bowlerPhoneNumber: string;
//   teamId: number;
//   teamName: string;
// };

export type crew = {
  bowlerId: number;
  bowlerFirstName: string;
  bowlerMiddleInit: string | null;
  bowlerLastName: string;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  teamId: number;
  team: {
    // Add this part
    teamId: number;
    teamName: string;
  } | null; // Ensure this part is nullable in case there is no team
};
