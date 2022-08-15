export interface Info{
  started: boolean;
  winner: string;
  scores: string[];
  currentRound: number;
  isAdventure: boolean;
  currentAdventure: number;
  king: string;
  failCounter: number;
  selectedForAdventure: string[];
  playersName: string[];
  assassinHasGuessed: boolean;
  playerSelectNum: number;
}
