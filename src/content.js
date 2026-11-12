// EDIT YOUR WEBSITE HERE. Keep quotation marks around text and commas between items.
// Photos: put files in public/images/, then set src to 'images/your-photo.jpg'.
// Paths are relative (no leading slash) so photos also work on GitHub Pages.
// Always write descriptive alt text when adding a real photograph.
export const content = {
  // ORIGINAL ARTWORK: replace these files or point src to your own SVG/PNG/WebP.
  // Artwork is decorative; ensemble photographs still belong in the photo fields.
  artwork: {
    hero: 'art/band-garden.svg',
    outreach: 'art/little-melody.svg',
    waveform: 'art/sound-wave.svg',
    homeMark: 'art/home-mark.svg',
  },
  site: {
    name: 'Amplitude Jazz', tagline: 'a little jazz goes a long way.',
    location: 'Sunnyvale, California', school: 'Wilcox High School',
    descriptor: 'just a bunch of girls playing jazz.',
    footer: 'made with love & a little improv.',
    copyright: 'Amplitude Jazz', menuOpen: 'Open menu', menuClose: 'Close menu',
    skip: 'Skip to content', navLabel: 'Main navigation', homeLabel: 'Amplitude Jazz home',
    draftLabel: 'A space for your words', photoLabel: 'Photo to come',
  },
  navigation: [
    { id: 'home', label: 'Home' }, { id: 'about', label: 'About' },
    { id: 'ensemble', label: 'Our Ensemble' }, { id: 'performances', label: 'Performances' },
    { id: 'initiatives', label: 'Initiatives' }, { id: 'support', label: 'Support Us' },
    { id: 'contact', label: 'Contact' },
  ],
  home: {
    eyebrow: 'An all-girls jazz ensemble', titleTop: 'AMPLITUDE', titleBottom: 'JAZZ',
    intro: 'We’re Amplitude Jazz, a student-founded, all-girls jazz ensemble at Wilcox High School. Music brings us together. Making more room for girls in jazz keeps us curious.',
    introPlaceholder: '[PASTE YOUR SHORT INTRODUCTION HERE]',
    aboutButton: 'A little about us', ensembleButton: 'Meet the ensemble', contactButton: 'Get in touch',
    photo: { src: '', alt: '', label: 'the whole gang!', caption: '01 / The band, together', note: '[ADD YOUR ENSEMBLE PHOTO HERE]' },
    ticker: ['music first', 'room for every voice', 'a little improv'],
    performanceTitle: 'catch us somewhere.', performanceLabel: 'On the calendar',
    performanceButton: 'All performances',
    initiativeTitle: 'and then some...', initiativeLabel: 'More than a set list',
    initiativeText: 'Our interest in jazz reaches beyond playing it. We’re exploring advocacy, music education, and ways to connect with our community.',
    initiativeButton: 'Explore our initiatives',
  },
  about: {
    eyebrow: 'The story so far', title: 'how it all started.',
    sections: [
      { title: 'Our story', text: '[PASTE FOUNDING STORY HERE]' },
      { title: 'Our mission', text: '[PASTE MISSION STATEMENT HERE]' },
      { title: 'Our vision', text: '[PASTE LONG-TERM VISION HERE]' },
      { title: 'Why girls in jazz?', text: '[PASTE ADVOCACY BACKGROUND HERE]' },
      { title: 'Our values', text: '[PASTE VALUES HERE]' },
    ],
  },
  ensemble: {
    eyebrow: 'Meet the band', title: 'the girls behind the groove.',
    intro: '[PASTE ENSEMBLE INTRODUCTION HERE]',
    groupPhoto: { src: '', alt: '', label: 'Everyone in the picture.', caption: 'The ensemble', note: '[ADD A GROUP PHOTO HERE]' },
    // Copy a member object to add someone; delete objects to remove cards.
    // Leave bio empty ('') if you prefer no short biography.
    members: Array.from({ length: 4 }, (_, i) => ({ id: `member-${i + 1}`, name: '[MEMBER NAME]', instrument: '[INSTRUMENT]', bio: '[OPTIONAL SHORT BIOGRAPHY]', photo: { src: '', alt: '', label: '[MEMBER PHOTO]' } })),
  },
  performances: {
    eyebrow: 'Live & in good company', title: 'come hear us play!', upcoming: 'Upcoming performances', past: 'Past performances',
    emptyUpcoming: 'The next set is still taking shape. Check back for upcoming performances.',
    emptyPast: 'Our performance scrapbook will live here. More to come.',
    bookingTitle: 'Have a stage in mind?', bookingText: 'Let’s talk about bringing Amplitude Jazz to your event.', bookingButton: 'Booking inquiries',
    // Add real events here. Example (replace EVERY placeholder):
    // { id: 'event-1', title: '[EVENT TITLE]', date: '[DATE]', venue: '[VENUE]', location: '[LOCATION]', description: '[DESCRIPTION]' }
    upcomingEvents: [], pastEvents: [],
  },
  initiatives: {
    eyebrow: 'Making room, together', title: 'more than just music.',
    sections: [
      { title: 'Girls in Jazz Advocacy', text: '[PASTE ADVOCACY DESCRIPTION HERE]' },
      { title: 'Music Education and Workshops', text: '[PASTE EDUCATION AND WORKSHOPS DESCRIPTION HERE]' },
      { title: 'Community Outreach', text: '[PASTE COMMUNITY OUTREACH DESCRIPTION HERE]' },
      { title: 'Future Programs', text: '[PASTE FUTURE PROGRAM IDEAS HERE]' },
    ],
  },
  support: {
    eyebrow: 'Good things happen together', title: 'lend us a hand?',
    sections: [
      { title: 'A little support goes a long way', text: '[PASTE SPONSORSHIP INTRODUCTION HERE]' },
      { title: 'Partnership opportunities', text: '[PASTE PARTNERSHIP OPPORTUNITIES HERE]' },
      { title: 'Ways to support Amplitude Jazz', text: '[PASTE WAYS TO SUPPORT HERE]' },
    ],
    button: 'Sponsorship inquiries',
  },
  contact: {
    eyebrow: 'Let’s start a conversation', title: 'drop us a note!',
    reasons: ['Performance booking inquiries', 'Collaboration and outreach inquiries', 'General questions'],
    emailLabel: 'Write to us', email: 'amplitudejazz@gmail.com',
    socialTitle: 'Find us elsewhere',
    founder: { heading: 'a note for the founder?', text: 'For questions about Amplitude Jazz, collaborations, or anything else, feel free to reach out at' },
    // Add only official https:// profile URLs. Empty URLs render as plain placeholders.
    socials: [{ label: '@amplitudejazz', url: 'https://www.instagram.com/amplitudejazz/' }],
  },
};
