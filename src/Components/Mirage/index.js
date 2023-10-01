import { createServer } from "miragejs";

function mirage() {
  if (window.server) {
    server.shutdown();
  }

  window.server = createServer({
    routes() {
      this.get('/api/movies', () => {
        return {
          movies: [
            {
              id: 1,
              Title: 'Blazing Saddles',
              Year: 1974,
              Format: 'VHS',
              Stars:
                'Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn',
              aboutFilm: '',
            },
            {
              id: 2,
              Title: '2001: A Space Odyssey',
              Year: 1968,
              Format: 'DVD',
              Stars:
                'Keir Dullea, Gary Lockwood, William Sylvester, Douglas Rain',
              aboutFilm: '',
            },
            {
              id: 3,
              Title: 'Knocked Up',
              Year: 2007,
              Format: 'Blu-Ray',
              Stars: 'Seth Rogen, Katherine Heigl, Paul Rudd, Leslie Mann',
              aboutFilm: '',
            },
            {
              id: 4,
              Title: 'Harvey',
              Year: 1950,
              Format: 'DVD',
              Stars: 'James Stewart, Josephine Hull, Peggy Dow, Charles Drake',
              aboutFilm: '',
            },
            {
              id: 5,
              Title: 'Casablanca',
              Year: 1942,
              Format: 'DVD',
              Stars:
                'Humphrey Bogart, Ingrid Bergman, Claude Rains, Peter Lorre',
              aboutFilm: '',
            },
            {
              id: 6,
              Title: 'Charade',
              Year: 1953,
              Format: 'DVD',
              Stars:
                'Audrey Hepburn, Cary Grant, Walter Matthau, James Coburn, George Kennedy',
              aboutFilm: '',
            },
            {
              id: 7,
              Title: 'Cool Hand Luke',
              Year: 1967,
              Format: 'VHS',
              Stars: 'Paul Newman, George Kennedy, Strother Martin',
              aboutFilm: '',
            },
            {
              id: 8,
              Title: 'Butch Cassidy and the Sundance Kid',
              Year: 1969,
              Format: 'VHS',
              Stars: 'Paul Newman, Robert Redford, Katherine Ross',
              aboutFilm: '',
            },
            {
              id: 9,
              Title: 'The Sting',
              Year: 1973,
              Format: 'DVD',
              Stars:
                'Robert Redford, Paul Newman, Robert Shaw, Charles Durning',
              aboutFilm: '',
            },
            {
              id: 10,
              Title: 'The Muppet Movie',
              Year: 1979,
              Format: 'DVD',
              Stars:
                'Jim Henson, Frank Oz, Dave Geolz, Mel Brooks, James Coburn, Charles Durning, Austin Pendleton',
              aboutFilm: '',
            },
            {
              id: 11,
              Title: 'Get Shorty',
              Year: 1995,
              Format: 'DVD',
              Stars:
                'John Travolta, Danny DeVito, Renne Russo, Gene Hackman, Dennis Farina',
              aboutFilm: '',
            },
            {
              id: 12,
              Title: 'My Cousin Vinny',
              Year: 1992,
              Format: 'DVD',
              Stars:
                'Joe Pesci, Marrisa Tomei, Fred Gwynne, Austin Pendleton, Lane Smith, Ralph Macchio',
              aboutFilm: '',
            },
            {
              id: 13,
              Title: 'Gladiator',
              Year: 2000,
              Format: 'Blu-Ray',
              Stars: 'Russell Crowe, Joaquin Phoenix, Connie Nielson',
              aboutFilm: '',
            },
            {
              id: 14,
              Title: 'Star Wars',
              Year: 1977,
              Format: 'Blu-Ray',
              Stars:
                'Harrison Ford, Mark Hamill, Carrie Fisher, Alec Guinness, James Earl Jones',
              aboutFilm: '',
            },
            {
              id: 15,
              Title: 'Raiders of the Lost Ark',
              Year: 1981,
              Format: 'DVD',
              Stars: 'Harrison Ford, Karen Allen',
              aboutFilm: '',
            },
            {
              id: 16,
              Title: 'Serenity',
              Year: 2005,
              Format: 'Blu-Ray',
              Stars:
                'Nathan Fillion, Alan Tudyk, Adam Baldwin, Ron Glass, Jewel Staite, Gina Torres, Morena Baccarin',
              aboutFilm: '',
            },
            {
              id: 17,
              Title: 'Hooisers',
              Year: 1986,
              Format: 'VHS',
              Stars: 'Gene Hackman, Barbara Hershey, Dennis Hopper',
              aboutFilm: '',
            },
            {
              id: 18,
              Title: 'WarGames',
              Year: 1983,
              Format: 'VHS',
              Stars:
                'Matthew Broderick, Ally Sheedy, Dabney Coleman, John Wood, Barry Corbin',
              aboutFilm: '',
            },
            {
              id: 19,
              Title: 'Spaceballs',
              Year: 1987,
              Format: 'DVD',
              Stars:
                'Bill Pullman, John Candy, Mel Brooks, Rick Moranis, Daphne Zuniga, Joan Rivers',
              aboutFilm: '',
            },
            {
              id: 20,
              Title: 'Young Frankenstein',
              Year: 1974,
              Format: 'VHS',
              Stars:
                'Gene Wilder, Kenneth Mars, Terri Garr, Gene Hackman, Peter Boyle',
              aboutFilm: '',
            },
            {
              id: 21,
              Title: 'Real Genius',
              Year: 1985,
              Format: 'VHS',
              Stars:
                'Val Kilmer, Gabe Jarret, Michelle Meyrink, William Atherton',
              aboutFilm: '',
            },
            {
              id: 22,
              Title: 'Top Gun',
              Year: 1986,
              Format: 'DVD',
              Stars:
                'Tom Cruise, Kelly McGillis, Val Kilmer, Anthony Edwards, Tom Skerritt',
              aboutFilm: '',
            },
            {
              id: 23,
              Title: 'MASH',
              Year: 1970,
              Format: 'DVD',
              Stars:
                'Donald Sutherland, Elliot Gould, Tom Skerritt, Sally Kellerman, Robert Duvall',
              aboutFilm: '',
            },
            {
              id: 24,
              Title: 'The Russians Are Coming, The Russians Are Coming',
              Year: 1966,
              Format: 'VHS',
              Stars: 'Carl Reiner, Eva Marie Saint, Alan Arkin, Brian Keith',
              aboutFilm: '',
            },
            {
              id: 25,
              Title: 'Jaws',
              Year: 1975,
              Format: 'DVD',
              Stars:
                'Roy Scheider, Robert Shaw, Richard Dreyfuss, Lorraine Gary',
              aboutFilm: '',
            },
          ],
        };
      });
    },
  });
}

export default mirage;
